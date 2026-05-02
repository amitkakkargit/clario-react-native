import { VisaAnalysis } from "../../types";
import { VISA_RULES } from "./constants";

export function analyzeVisa(jobDescription: string): VisaAnalysis {
  const matches: { risk: "Low" | "Medium" | "High"; signal: string }[] = [];

  for (const rule of VISA_RULES) {
    if (rule.pattern.test(jobDescription)) {
      matches.push({ risk: rule.risk, signal: rule.signal });
    }
  }

  if (matches.length === 0) {
    return {
      risk: "Unknown",
      signals: [],
      note: "No visa-related language detected",
    };
  }

  const riskOrder = { High: 3, Medium: 2, Low: 1 };
  const highestRisk = matches.reduce((max, m) =>
    riskOrder[m.risk] > riskOrder[max.risk] ? m : max,
  );

  return {
    risk: highestRisk.risk,
    signals: matches.map((m) => m.signal),
    note: null,
  };
}
