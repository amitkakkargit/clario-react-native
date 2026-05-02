import { SENIORITY_LEVELS } from './constants';

export function detectSeniority(jobDescription: string): 'senior' | 'mid' | 'junior' | 'unknown' {
  const lower = jobDescription.toLowerCase();

  for (const pattern of SENIORITY_LEVELS.high) {
    if (pattern.test(lower)) return 'senior';
  }

  for (const pattern of SENIORITY_LEVELS.mid) {
    if (pattern.test(lower)) return 'mid';
  }

  for (const pattern of SENIORITY_LEVELS.low) {
    if (pattern.test(lower)) return 'junior';
  }

  return 'unknown';
}
