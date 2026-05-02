import { LocationAnalysis } from "../../types";
import { LOCATION_PATTERNS } from "./constants";

export function detectLocation(jobDescription: string): LocationAnalysis {
  const types: string[] = [];
  const warnings: string[] = [];

  for (const pattern of LOCATION_PATTERNS.remote) {
    if (pattern.test(jobDescription)) {
      types.push("remote");
      break;
    }
  }

  for (const pattern of LOCATION_PATTERNS.hybrid) {
    if (pattern.test(jobDescription)) {
      types.push("hybrid");
      break;
    }
  }

  for (const pattern of LOCATION_PATTERNS.onsite) {
    if (pattern.test(jobDescription)) {
      types.push("onsite");
      break;
    }
  }

  if (types.length === 0) {
    types.push("not specified");
  }

  for (const pattern of LOCATION_PATTERNS.usOnly) {
    if (pattern.test(jobDescription)) {
      warnings.push("Position restricted to US only");
      break;
    }
  }

  return { types, warnings };
}
