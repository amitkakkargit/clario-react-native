import { AdvancedScore, LocationAnalysis, SkillMatch } from "../../types";

export function calculateScore(
  skillMatch: SkillMatch,
  visaRisk: string,
  _seniority: string,
  location: LocationAnalysis,
): number {
  let score = 50;

  if (skillMatch.percentage > 0) {
    score += Math.round((skillMatch.percentage - 50) * 0.6);
  }

  const visaScores: Record<string, number> = {
    Low: 5,
    Unknown: 0,
    Medium: -10,
    High: -20,
  };
  score += visaScores[visaRisk] ?? 0;

  if (location.types.includes("remote")) score += 5;
  if (location.warnings.length > 0) score -= 5;

  return Math.max(0, Math.min(100, score));
}

export function calculateAdvancedScore(): AdvancedScore {
  return {
    weightedComposite: 60,
    confidence: {
      level: "medium",
    },
    dimensions: {
      skillFit: {
        label: "Skill Fit",
        score: 60,
        detail: "Skills matched",
      },
      visaRisk: {
        label: "Visa Feasibility",
        score: 70,
        detail: "No visa issues detected",
      },
      jobQuality: {
        label: "Job Quality",
        score: 65,
        detail: "Good job description",
      },
      growthPotential: {
        label: "Growth Potential",
        score: 60,
        detail: "Moderate growth signals",
      },
      compensation: {
        label: "Compensation Transparency",
        score: 50,
        detail: "Limited compensation info",
      },
      roleClarity: {
        label: "Role Clarity",
        score: 65,
        detail: "Roles clearly defined",
      },
    },
  };
}
