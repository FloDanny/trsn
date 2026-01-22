"use client";

import { getConvexActionUrl } from "@/lib/convexUrls";

const authorityUrl = getConvexActionUrl(
  process.env.NEXT_PUBLIC_CONVEX_URL,
  "authorityEvent",
);
const sessionKey = "trsn_authority_session";

const createSessionId = () => {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
};

const getSessionId = () => {
  if (typeof window === "undefined") {
    return undefined;
  }

  let sessionId = sessionStorage.getItem(sessionKey);
  if (!sessionId) {
    sessionId = createSessionId();
    sessionStorage.setItem(sessionKey, sessionId);
  }

  return sessionId;
};

export const recordAuthorityEvent = async (
  eventType: "page_view" | "cta_click",
  page: string,
) => {
  if (!authorityUrl || !page) {
    return;
  }

  const sessionId = getSessionId();

  try {
    await fetch(authorityUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        eventType,
        page,
        sessionId,
      }),
    });
  } catch (error) {
    console.warn("Authority event failed.", error);
  }
};
