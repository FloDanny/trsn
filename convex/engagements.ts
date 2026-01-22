import * as convexServer from "convex/server";
import { v } from "convex/values";

type EngagementInsert = {
  submittedAt: number;
  sourcePage: string;
  name: string;
  email: string;
  company?: string;
  message: string;
  status: string;
  internalNotes?: string;
  lastReviewedAt?: number;
};

const { mutation, query } = convexServer as {
  mutation: typeof convexServer.mutation;
  query: typeof convexServer.query;
};

const allowedStatuses = new Set(["new", "reviewed", "qualified", "archived"]);

export const createSubmission = mutation({
  args: {
    sourcePage: v.string(),
    name: v.string(),
    email: v.string(),
    company: v.optional(v.string()),
    message: v.string(),
  },
  handler: async (ctx, args) => {
    const payload = args as {
      sourcePage: string;
      name: string;
      email: string;
      company?: string;
      message: string;
    };

    await ctx.db.insert("engagementSubmissions", {
      submittedAt: Date.now(),
      sourcePage: payload.sourcePage,
      name: payload.name,
      email: payload.email,
      company: payload.company,
      message: payload.message,
      status: "new",
    });

    return { ok: true };
  },
});

export const updateStatus = mutation({
  args: {
    id: v.string(),
    status: v.string(),
  },
  handler: async (ctx, args) => {
    const payload = args as { id: string; status: string };

    if (!allowedStatuses.has(payload.status)) {
      throw new Error("Status is invalid.");
    }

    await ctx.db.patch(payload.id, {
      status: payload.status,
      lastReviewedAt: Date.now(),
    });

    return { ok: true };
  },
});

export const addNote = mutation({
  args: {
    id: v.string(),
    internalNotes: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const payload = args as { id: string; internalNotes?: string };

    await ctx.db.patch(payload.id, {
      internalNotes: payload.internalNotes,
      lastReviewedAt: Date.now(),
    });

    return { ok: true };
  },
});

export const listSubmissions = query({
  args: {},
  handler: async (ctx) => {
    const submissions = await ctx.db.query("engagementSubmissions").collect();
    submissions.sort((a, b) => b.submittedAt - a.submittedAt);
    return { submissions };
  },
});
