import "server-only";

import { createHmac } from "crypto";

const maxAgeSeconds = 60 * 5;

const toBase64Url = (input: string) =>
  Buffer.from(input).toString("base64").replace(/=+$/g, "").replace(/\+/g, "-").replace(/\//g, "_");

export const createAdminToken = (userId: string) => {
  const secret = process.env.CONVEX_ADMIN_SHARED_SECRET;
  if (!secret) {
    throw new Error("CONVEX_ADMIN_SHARED_SECRET is not configured.");
  }

  const timestamp = Math.floor(Date.now() / 1000);
  const payload = `${userId}:${timestamp}`;
  const payloadEncoded = toBase64Url(payload);
  const signature = createHmac("sha256", secret)
    .update(payloadEncoded)
    .digest("base64")
    .replace(/=+$/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");

  return {
    token: `${payloadEncoded}.${signature}`,
    expiresIn: maxAgeSeconds,
  };
};
