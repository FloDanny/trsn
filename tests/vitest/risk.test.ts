import { describe, expect, it } from "vitest";

import { formatRiskLabel, normalizeRiskScore } from "../../lib/risk";

describe("risk scoring utilities", () => {
  it("normalizes a valid score to a whole number (positive case)", () => {
    // Positive case: valid input should round and return a usable score.
    expect(normalizeRiskScore(42.4)).toBe(42);
  });

  it("rejects out-of-range scores (negative case)", () => {
    // Negative case: invalid input should be rejected with a clear error.
    expect(() => normalizeRiskScore(140)).toThrow(
      "Risk score must be between 0 and 100."
    );
  });

  it("rejects non-finite scores (negative case)", () => {
    // Negative case: NaN and Infinity should never be accepted.
    expect(() => normalizeRiskScore(Number.NaN)).toThrow(
      "Risk score must be a finite number."
    );
  });

  it("maps scores to a stable risk label", () => {
    // Teaching example: this is how we interpret normalized scores.
    expect(formatRiskLabel(15)).toBe("low");
    expect(formatRiskLabel(55)).toBe("medium");
    expect(formatRiskLabel(92)).toBe("high");
  });
});
