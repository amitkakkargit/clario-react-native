import { RedFlagAnalysis } from "../../types";

export function detectRedFlags(): RedFlagAnalysis {
  return {
    overallQuality: "Good",
    qualityScore: 75,
    flags: [],
  };
}
