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

type EngagementPayload = {
  sourcePage: string;
  name: string;
  email: string;
  company?: string;
  message: string;
};

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

type AuthorityPayload = {
  eventType: string;
  page: string;
  sessionId?: string;
};

type AuthorityInsert = AuthorityPayload & {
  occurredAt: number;
};

type EngagementUpdate = {
  status?: string;
  internalNotes?: string;
  lastReviewedAt?: number;
};

type Db = {
  insert: (
    table: "leads" | "engagementSubmissions" | "authorityEvents",
    value: LeadInsert | EngagementInsert | AuthorityInsert,
  ) => Promise<unknown>;
  query: (
    table: "engagementSubmissions",
  ) => { collect: () => Promise<Array<EngagementInsert & { _id: string }>> };
  patch: (id: string, value: EngagementUpdate) => Promise<unknown>;
};

type HttpAction = (
  handler: (ctx: { db: Db }, request: Request) => Promise<Response>,
) => (ctx: { db: Db }, request: Request) => Promise<Response>;

const { httpAction } = convexServer as {
  httpAction?: HttpAction;
};

if (!httpAction) {
  throw new Error(
    "Convex httpAction is unavailable. Upgrade convex to a version that supports HTTP actions.",
  );
}

const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
const allowedStatuses = new Set(["new", "reviewed", "qualified", "archived"]);
const allowedSourcePages = new Set(["homepage", "contact", "proof"]);
const allowedEventTypes = new Set(["page_view", "cta_click"]);

const adminSharedSecret = process.env.CONVEX_ADMIN_SHARED_SECRET;

const validateLeadPayload = (payload: LeadPayload) => {
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

const validateEngagementPayload = (payload: EngagementPayload) => {
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
  if (!payload.sourcePage?.trim()) {
    return "Source page is required.";
  }
  if (!allowedSourcePages.has(payload.sourcePage.trim())) {
    return "Source page is invalid.";
  }
  return null;
};

const base64UrlToBytes = (input: string) => {
  const padded = input.replace(/-/g, "+").replace(/_/g, "/");
  const padLength = (4 - (padded.length % 4)) % 4;
  const normalized = padded + "=".repeat(padLength);
  const binary = atob(normalized);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
};

const verifyAdminToken = async (token: string) => {
  if (!adminSharedSecret) {
    return false;
  }

  const [payloadEncoded, signature] = token.split(".");
  if (!payloadEncoded || !signature) {
    return false;
  }

  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(adminSharedSecret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["verify"],
  );

  const isValid = await crypto.subtle.verify(
    "HMAC",
    key,
    base64UrlToBytes(signature),
    new TextEncoder().encode(payloadEncoded),
  );

  if (!isValid) {
    return false;
  }

  const payload = new TextDecoder().decode(base64UrlToBytes(payloadEncoded));
  const [userId, issuedAt] = payload.split(":");
  if (!userId || !issuedAt) {
    return false;
  }

  const issuedAtSeconds = Number(issuedAt);
  if (!Number.isFinite(issuedAtSeconds)) {
    return false;
  }

  const nowSeconds = Math.floor(Date.now() / 1000);
  const maxAgeSeconds = 60 * 5;
  if (nowSeconds - issuedAtSeconds > maxAgeSeconds) {
    return false;
  }

  return true;
};

const assertAdmin = async (request: Request) => {
  if (!adminSharedSecret) {
    return new Response("Admin auth not configured.", { status: 500 });
  }

  const token = request.headers.get("x-admin-auth");
  if (!token) {
    return new Response("Unauthorized.", { status: 401 });
  }

  const isValid = await verifyAdminToken(token);
  if (!isValid) {
    return new Response("Unauthorized.", { status: 401 });
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

  const validationError = validateLeadPayload(payload);
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

export const engagementIntake = httpAction(async (ctx, request) => {
  if (request.method !== "POST") {
    return new Response("Method not allowed.", { status: 405 });
  }

  let payload: EngagementPayload;
  try {
    payload = (await request.json()) as EngagementPayload;
  } catch (error) {
    console.error("Invalid engagement payload.", error);
    return new Response("Invalid JSON.", { status: 400 });
  }

  const validationError = validateEngagementPayload(payload);
  if (validationError) {
    return new Response(validationError, { status: 400 });
  }

  await ctx.db.insert("engagementSubmissions", {
    submittedAt: Date.now(),
    sourcePage: payload.sourcePage.trim(),
    name: payload.name.trim(),
    email: payload.email.trim(),
    company: payload.company?.trim() || undefined,
    message: payload.message.trim(),
    status: "new",
  });

  return Response.json({ ok: true });
});

export const authorityEvent = httpAction(async (ctx, request) => {
  if (request.method !== "POST") {
    return new Response("Method not allowed.", { status: 405 });
  }

  let payload: AuthorityPayload;
  try {
    payload = (await request.json()) as AuthorityPayload;
  } catch (error) {
    console.error("Invalid authority payload.", error);
    return new Response("Invalid JSON.", { status: 400 });
  }

  const eventType = payload.eventType?.trim();
  if (!eventType || !allowedEventTypes.has(eventType)) {
    return new Response("Invalid event type.", { status: 400 });
  }

  if (!payload.page?.trim()) {
    return new Response("Page is required.", { status: 400 });
  }

  await ctx.db.insert("authorityEvents", {
    eventType,
    page: payload.page.trim(),
    sessionId: payload.sessionId?.trim() || undefined,
    occurredAt: Date.now(),
  });

  return Response.json({ ok: true });
});

export const adminEngagements = httpAction(async (ctx, request) => {
  const authError = await assertAdmin(request);
  if (authError) {
    return authError;
  }

  if (request.method === "GET") {
    const submissions = await ctx.db.query("engagementSubmissions").collect();
    submissions.sort((a, b) => b.submittedAt - a.submittedAt);
    return Response.json({ submissions });
  }

  if (request.method === "PATCH") {
    let payload: { id?: string; status?: string; internalNotes?: string };
    try {
      payload = (await request.json()) as {
        id?: string;
        status?: string;
        internalNotes?: string;
      };
    } catch (error) {
      console.error("Invalid admin update payload.", error);
      return new Response("Invalid JSON.", { status: 400 });
    }

    if (!payload.id?.trim()) {
      return new Response("Submission id is required.", { status: 400 });
    }

    const nextStatus = payload.status?.trim();
    if (nextStatus && !allowedStatuses.has(nextStatus)) {
      return new Response("Status is invalid.", { status: 400 });
    }

    const update: EngagementUpdate = {
      lastReviewedAt: Date.now(),
    };

    if (nextStatus) {
      update.status = nextStatus;
    }

    if (Object.prototype.hasOwnProperty.call(payload, "internalNotes")) {
      update.internalNotes = payload.internalNotes?.trim() || undefined;
    }

    await ctx.db.patch(payload.id, update);

    return Response.json({ ok: true });
  }

  return new Response("Method not allowed.", { status: 405 });
});
