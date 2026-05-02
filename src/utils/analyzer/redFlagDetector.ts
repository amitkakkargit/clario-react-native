import { RedFlagAnalysis } from '../types';
import { CULTURE_RED_FLAGS } from './constants';

export function detectRedFlags(): RedFlagAnalysis {
  return {
    overallQuality: 'Good',
    qualityScore: 75,
    flags: [],
  };
}
