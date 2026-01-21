import * as convexServer from "convex/server";

type LeadPayload = {
  name: string;
  email: string;
  company?: string;
  role?: string;
  message: string;
  source: string;
};

type LeadInsert = {
  name: string;
  email: string;
  company?: string;
  role?: string;
  message: string;
  source: string;
  createdAt: number;
};

type LeadDb = {
  insert: (table: "leads", value: LeadInsert) => Promise<unknown>;
};

type HttpAction = (
  handler: (ctx: { db: LeadDb }, request: Request) => Promise<Response>,
) => (ctx: { db: LeadDb }, request: Request) => Promise<Response>;

const { httpAction } = convexServer as {
  httpAction?: HttpAction;
};

if (!httpAction) {
  throw new Error(
    "Convex httpAction is unavailable. Upgrade convex to a version that supports HTTP actions.",
  );
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validatePayload = (payload: LeadPayload) => {
  if (!payload.name?.trim()) {
    return "Name is required.";
  }
  if (!payload.email?.trim()) {
    return "Email is required.";
  }
  if (!emailPattern.test(payload.email.trim())) {
    return "Email is invalid.";
  }
  if (!payload.message?.trim()) {
    return "Message is required.";
  }
  return null;
};

export const leadIntake = httpAction(async (ctx, request) => {
  if (request.method !== "POST") {
    return new Response("Method not allowed.", { status: 405 });
  }

  let payload: LeadPayload;
  try {
    payload = (await request.json()) as LeadPayload;
  } catch (error) {
    console.error("Invalid lead payload.", error);
    return new Response("Invalid JSON.", { status: 400 });
  }

  const validationError = validatePayload(payload);
  if (validationError) {
    return new Response(validationError, { status: 400 });
  }

  await ctx.db.insert("leads", {
    name: payload.name.trim(),
    email: payload.email.trim(),
    company: payload.company?.trim() || undefined,
    role: payload.role?.trim() || undefined,
    message: payload.message.trim(),
    source: payload.source?.trim() || "contact-page",
    createdAt: Date.now(),
  });

  return Response.json({ ok: true });
});
