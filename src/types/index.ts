export type VisaRisk = 'Low' | 'Medium' | 'High' | 'Unknown';

export interface VisaAnalysis {
  risk: VisaRisk;
  signals: string[];
  note: string | null;
}

export interface LocationAnalysis {
  types: string[];
  warnings: string[];
}

export interface SkillMatch {
  matched: string[];
  missing: string[];
  percentage: number;
}

export interface SkillCategoryBreakdown {
  label: string;
  required?: string[];
  preferred?: string[];
  matched?: string[];
  missing?: string[];
  total?: number;
  percentage?: number;
}

export interface AdvancedSkills extends SkillMatch {
  requiredMatched: string[];
  requiredMissing: string[];
  preferredMatched: string[];
  preferredMissing: string[];
  requiredPercentage: number;
  preferredPercentage: number;
  weightedPercentage: number;
  byCategory: Record<string, SkillCategoryBreakdown>;
  weakestCategories: string[];
  strongestCategories: string[];
}

export interface CompensationAnalysis {
  transparencyScore: number;
  transparencyNote: string;
  salary: {
    found: boolean;
    min: number;
    max: number;
    type: string;
  };
  equity: {
    found: boolean;
    signals: string[];
  };
  bonus: {
    found: boolean;
    signals: string[];
  };
  benefits: string[];
}

export interface RoleClarityAnalysis {
  specificityScore: number;
  specificityLabel: string;
  track: 'ic' | 'management' | 'hybrid' | 'unclear';
  teamSize?: string;
  reportingTo?: string;
  responsibilityCount: number;
  trackSignals: {
    ic: string[];
    management: string[];
  };
}

export interface GrowthSignalsAnalysis {
  growthScore: number;
  companyStage?: string;
  employmentType: string[];
  learning: {
    signals: string[];
  };
  careerGrowth: {
    signals: string[];
  };
}

export interface RedFlagAnalysis {
  overallQuality: string;
  qualityScore: number;
  flags: {
    message: string;
    severity: 'high' | 'medium' | 'low';
    details?: string;
  }[];
}

export interface AdvancedScore {
  weightedComposite: number;
  confidence: {
    level: 'high' | 'medium' | 'low';
  };
  dimensions: Record<
    string,
    {
      label: string;
      score: number;
      detail?: string;
    }
  >;
}

export interface Recommendation {
  action: string;
  reason: string;
  detailedAction?: string;
  dealbreakers?: string[];
  highlights?: string[];
  gapStrategy?: string[];
  interviewQuestions?: string[];
}

export interface JobAnalysisResult {
  score: number;
  visa: VisaAnalysis;
  skills: SkillMatch;
  seniority: 'senior' | 'mid' | 'junior' | 'unknown';
  location: LocationAnalysis;
  warnings: string[];
  recommendation: Recommendation;
  jdSkillsCount: number;
  advancedSkills: AdvancedSkills;
  redFlags: RedFlagAnalysis;
  compensation: CompensationAnalysis;
  roleClarity: RoleClarityAnalysis;
  growthSignals: GrowthSignalsAnalysis;
  advancedScore: AdvancedScore;
  advancedRecommendation: Recommendation;
}
