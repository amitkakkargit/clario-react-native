import { analyzeVisa } from './visaAnalyzer';
import { extractSkillsFromJD } from './skillExtractor';
import { matchSkills } from './skillMatcher';
import { detectSeniority } from './seniorityDetector';
import { detectLocation } from './locationDetector';
import { calculateScore, calculateAdvancedScore } from './scorer';
import { JobAnalysisResult } from '../types';

export function analyzeJob(jobDescription: string, userSkillsRaw: string): JobAnalysisResult {
  const userSkills = userSkillsRaw
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);

  const hasUserSkills = userSkills.length > 0;

  const visa = analyzeVisa(jobDescription);
  const jdSkills = extractSkillsFromJD(jobDescription);
  const skills = hasUserSkills
    ? matchSkills(jdSkills, userSkills)
    : { matched: [], missing: jdSkills, percentage: 0 };

  const seniority = detectSeniority(jobDescription);
  const location = detectLocation(jobDescription);
  const score = calculateScore(skills, visa.risk, seniority, location);
  const advancedScore = calculateAdvancedScore();

  const warnings: string[] = [];
  if (visa.risk === 'High') warnings.push('High visa sponsorship risk detected');
  if (visa.risk === 'Medium') warnings.push('Visa authorization language may be a concern');
  if (skills.percentage < 40 && hasUserSkills)
    warnings.push('Low skill overlap with job requirements');
  if (skills.missing.length > 5) warnings.push(`${skills.missing.length} required skills not in your profile`);
  if (seniority === 'senior') warnings.push('Role requires senior-level experience');
  if (location.warnings.length > 0) warnings.push(...location.warnings);

  const recommendation = {
    action: score >= 70 ? 'Apply' : score >= 50 ? 'Maybe' : 'Skip',
    reason:
      score >= 70
        ? 'This role looks like a good fit'
        : score >= 50
          ? 'Consider this role but review concerns'
          : 'This role may not be ideal for you',
    detailedAction: '',
  };

  const advancedSkills = {
    matched: skills.matched,
    missing: skills.missing,
    percentage: skills.percentage,
    requiredMatched: skills.matched,
    requiredMissing: skills.missing,
    preferredMatched: [],
    preferredMissing: [],
    requiredPercentage: skills.percentage,
    preferredPercentage: 0,
    weightedPercentage: skills.percentage,
    byCategory: {},
    weakestCategories: [],
    strongestCategories: [],
  };

  return {
    score,
    visa,
    skills,
    seniority,
    location,
    warnings,
    recommendation,
    jdSkillsCount: jdSkills.length,
    advancedSkills,
    redFlags: {
      overallQuality: 'Good',
      qualityScore: 65,
      flags: [],
    },
    compensation: {
      transparencyScore: 50,
      transparencyNote: 'Limited compensation information',
      salary: { found: false, min: 0, max: 0, type: '' },
      equity: { found: false, signals: [] },
      bonus: { found: false, signals: [] },
      benefits: [],
    },
    roleClarity: {
      specificityScore: 65,
      specificityLabel: 'Clear',
      track: 'unclear',
      responsibilityCount: 0,
      trackSignals: { ic: [], management: [] },
    },
    growthSignals: {
      growthScore: 60,
      companyStage: undefined,
      employmentType: [],
      learning: { signals: [] },
      careerGrowth: { signals: [] },
    },
    advancedScore,
    advancedRecommendation: recommendation,
  };
}
