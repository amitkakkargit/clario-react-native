import { RoleClarityAnalysis } from "../../types";

export function analyzeRoleClarity(): RoleClarityAnalysis {
  return {
    specificityScore: 65,
    specificityLabel: "Clear",
    track: "unclear",
    teamSize: undefined,
    reportingTo: undefined,
    responsibilityCount: 0,
    trackSignals: {
      ic: [],
      management: [],
    },
  };
}
