import { COMMON_SKILLS } from './constants';

function findSkillsInText(text: string): string[] {
  const lower = text.toLowerCase();
  return COMMON_SKILLS.filter((skill) => {
    const escaped = skill.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(?:^|[^a-zA-Z0-9])${escaped}(?![a-zA-Z0-9])`, 'i');
    return regex.test(lower);
  });
}

export function extractSkillsFromJD(jobDescription: string): string[] {
  return findSkillsInText(jobDescription);
}
