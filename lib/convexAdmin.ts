import "server-only";

import { getConvexActionUrl } from "./convexUrls";

export type EngagementSubmission = {
  _id: string;
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

const getAdminEndpoint = () => {
  return getConvexActionUrl(
    process.env.CONVEX_URL ?? process.env.NEXT_PUBLIC_CONVEX_URL,
    "adminEngagements",
  );
};

const getAdminToken = () => {
  return process.env.CONVEX_ADMIN_TOKEN;
};

export const listEngagementSubmissions = async () => {
  const endpoint = getAdminEndpoint();
  const adminToken = getAdminToken();

  if (!endpoint || !adminToken) {
    throw new Error("Convex admin endpoint is not configured.");
  }

  const response = await fetch(endpoint, {
    method: "GET",
    headers: {
      "X-Admin-Token": adminToken,
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Admin fetch failed: ${response.status}`);
  }

  const payload = (await response.json()) as {
    submissions: EngagementSubmission[];
  };

  return payload.submissions ?? [];
};

export const updateEngagementSubmission = async (input: {
  id: string;
  status?: string;
  internalNotes?: string;
}) => {
  const endpoint = getAdminEndpoint();
  const adminToken = getAdminToken();

  if (!endpoint || !adminToken) {
    throw new Error("Convex admin endpoint is not configured.");
  }

  const response = await fetch(endpoint, {
    method: "PATCH",
    headers: {
      "X-Admin-Token": adminToken,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(input),
  });

  if (!response.ok) {
    throw new Error(`Admin update failed: ${response.status}`);
  }

  return response.json() as Promise<{ ok: true }>;
};
