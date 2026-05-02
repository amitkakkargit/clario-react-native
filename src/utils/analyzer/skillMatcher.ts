import { SkillMatch } from "../../types";

function normalizeSkills(skills: string[]): string[] {
  return skills.map((s) => s.trim().toLowerCase()).filter(Boolean);
}

function isMatch(jdSkill: string, userSkill: string): boolean {
  return jdSkill.includes(userSkill) || userSkill.includes(jdSkill);
}

export function matchSkills(
  jdSkills: string[],
  userSkills: string[],
): SkillMatch {
  const normalizedUser = normalizeSkills(userSkills);
  const normalizedJD = jdSkills.map((s) => s.toLowerCase());

  const matched = normalizedJD.filter((skill) =>
    normalizedUser.some((us) => isMatch(skill, us)),
  );
  const missing = normalizedJD.filter(
    (skill) => !normalizedUser.some((us) => isMatch(skill, us)),
  );

  const percentage =
    normalizedJD.length > 0
      ? Math.round((matched.length / normalizedJD.length) * 100)
      : 0;

  return { matched, missing, percentage };
}
