import * as convexServer from "convex/server";
import { v } from "convex/values";

type LeadInsert = {
  name: string;
  email: string;
  company?: string;
  role?: string;
  message: string;
  source: string;
  createdAt: number;
};

type LeadArgs = Omit<LeadInsert, "createdAt">;

type LeadDb = {
  insert: (table: "leads", value: LeadInsert) => Promise<unknown>;
};

type Mutation = (config: {
  args: Record<string, unknown>;
  handler: (ctx: { db: LeadDb }, args: LeadArgs) => Promise<{ ok: true }>;
}) => unknown;

const { mutation } = convexServer as {
  mutation?: Mutation;
};

if (!mutation) {
  throw new Error(
    "Convex mutation is unavailable. Upgrade convex to a version that supports mutations.",
  );
}

export const submit = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    company: v.optional(v.string()),
    role: v.optional(v.string()),
    message: v.string(),
    source: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("leads", {
      ...args,
      createdAt: Date.now(),
    });

    return { ok: true };
  },
});
