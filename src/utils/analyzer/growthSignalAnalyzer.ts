import { GrowthSignalsAnalysis } from "../../types";

export function analyzeGrowthSignals(): GrowthSignalsAnalysis {
  return {
    growthScore: 60,
    companyStage: undefined,
    employmentType: [],
    learning: {
      signals: [],
    },
    careerGrowth: {
      signals: [],
    },
  };
}
