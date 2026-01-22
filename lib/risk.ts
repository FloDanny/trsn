export type RiskLevel = "low" | "medium" | "high";

export function normalizeRiskScore(score: number): number {
  if (!Number.isFinite(score)) {
    throw new Error("Risk score must be a finite number.");
  }

  if (score < 0 || score > 100) {
    throw new Error("Risk score must be between 0 and 100.");
  }

  return Math.round(score);
}

export function formatRiskLabel(score: number): RiskLevel {
  const normalized = normalizeRiskScore(score);

  if (normalized <= 33) {
    return "low";
  }

  if (normalized <= 66) {
    return "medium";
  }

  return "high";
}
