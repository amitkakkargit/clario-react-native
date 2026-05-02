import { CompensationAnalysis } from "../../types";

export function analyzeCompensation(): CompensationAnalysis {
  return {
    transparencyScore: 50,
    transparencyNote: "Limited compensation information provided",
    salary: {
      found: false,
      min: 0,
      max: 0,
      type: "",
    },
    equity: {
      found: false,
      signals: [],
    },
    bonus: {
      found: false,
      signals: [],
    },
    benefits: [],
  };
}
