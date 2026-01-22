import { formatRiskLabel, normalizeRiskScore } from "../../lib/risk";

describe("risk scoring utilities (jest)", () => {
  it("normalizes a valid score to a whole number (positive case)", () => {
    // Positive case: valid input should round and return a usable score.
    expect(normalizeRiskScore(88.8)).toBe(89);
  });

  it("rejects NaN values (negative case)", () => {
    // Negative case: invalid input should be rejected with a clear error.
    expect(() => normalizeRiskScore(Number.NaN)).toThrow(
      "Risk score must be a finite number."
    );
  });

  it("rejects out-of-range values (negative case)", () => {
    // Negative case: values outside 0-100 should fail fast.
    expect(() => normalizeRiskScore(120)).toThrow(
      "Risk score must be between 0 and 100."
    );
  });

  it("maps scores to a stable risk label", () => {
    // Teaching example: enforce consistent label boundaries.
    expect(formatRiskLabel(10)).toBe("low");
    expect(formatRiskLabel(40)).toBe("medium");
    expect(formatRiskLabel(90)).toBe("high");
  });
});
