import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  leads: defineTable({
    name: v.string(),
    email: v.string(),
    company: v.optional(v.string()),
    role: v.optional(v.string()),
    message: v.string(),
    source: v.string(),
    createdAt: v.number(),
  })
    .index("by_email", ["email"])
    .index("by_createdAt", ["createdAt"]),
  engagementSubmissions: defineTable({
    submittedAt: v.number(),
    sourcePage: v.string(),
    name: v.string(),
    email: v.string(),
    company: v.optional(v.string()),
    message: v.string(),
    status: v.string(),
    internalNotes: v.optional(v.string()),
    lastReviewedAt: v.optional(v.number()),
  })
    .index("by_submittedAt", ["submittedAt"])
    .index("by_status", ["status"]),
  authorityEvents: defineTable({
    eventType: v.string(),
    page: v.string(),
    occurredAt: v.number(),
    sessionId: v.optional(v.string()),
  }).index("by_occurredAt", ["occurredAt"]),
});
