export const SKILL_TAXONOMY = {
  languages: {
    label: 'Programming Languages',
    skills: [
      'javascript', 'typescript', 'python', 'java', 'c++', 'c#', 'go', 'rust',
      'ruby', 'php', 'swift', 'kotlin', 'scala', 'r', 'perl', 'elixir', 'clojure', 'haskell',
    ],
  },
  frontendFrameworks: {
    label: 'Frontend Frameworks',
    skills: ['react', 'angular', 'vue', 'svelte', 'next.js', 'nextjs', 'nuxt', 'gatsby', 'remix', 'solid.js', 'htmx'],
  },
  backendFrameworks: {
    label: 'Backend Frameworks',
    skills: [
      'node.js', 'nodejs', 'express', 'django', 'flask', 'spring', 'rails',
      'laravel', '.net', 'fastapi', 'nestjs', 'gin', 'fiber', 'actix',
    ],
  },
  cloud: {
    label: 'Cloud & Infrastructure',
    skills: [
      'aws', 'azure', 'gcp', 'google cloud', 'docker', 'kubernetes',
      'terraform', 'ansible', 'pulumi', 'cloudflare', 'vercel', 'heroku',
    ],
  },
  cicd: {
    label: 'CI/CD & DevOps',
    skills: ['jenkins', 'ci/cd', 'github actions', 'gitlab ci', 'circleci', 'argo cd', 'devops', 'sre'],
  },
  databases: {
    label: 'Databases',
    skills: [
      'sql', 'postgresql', 'mysql', 'mongodb', 'redis', 'elasticsearch',
      'dynamodb', 'cassandra', 'neo4j', 'sqlite', 'cockroachdb', 'supabase', 'firebase',
    ],
  },
  apis: {
    label: 'APIs & Protocols',
    skills: ['graphql', 'rest', 'api', 'grpc', 'websocket', 'oauth', 'openapi', 'swagger'],
  },
  data: {
    label: 'Data & Analytics',
    skills: [
      'data analysis', 'data engineering', 'etl', 'spark', 'hadoop', 'tableau',
      'power bi', 'airflow', 'dbt', 'snowflake', 'databricks', 'kafka',
    ],
  },
  ml: {
    label: 'Machine Learning & AI',
    skills: [
      'machine learning', 'deep learning', 'nlp', 'tensorflow', 'pytorch',
      'scikit-learn', 'llm', 'computer vision', 'transformers', 'langchain',
    ],
  },
  frontend: {
    label: 'Frontend & Design',
    skills: ['html', 'css', 'sass', 'tailwind', 'bootstrap', 'figma', 'storybook', 'webpack', 'vite', 'esbuild'],
  },
  mobile: {
    label: 'Mobile Development',
    skills: ['react native', 'flutter', 'ios', 'android', 'swift ui', 'jetpack compose', 'expo'],
  },
  testing: {
    label: 'Testing & Quality',
    skills: ['jest', 'cypress', 'playwright', 'selenium', 'vitest', 'testing library', 'tdd', 'bdd'],
  },
  observability: {
    label: 'Observability & Monitoring',
    skills: ['observability', 'prometheus', 'grafana', 'datadog', 'new relic', 'splunk', 'elk stack', 'opentelemetry'],
  },
  security: {
    label: 'Security',
    skills: ['security', 'owasp', 'pen testing', 'soc2', 'encryption', 'zero trust', 'iam'],
  },
  tools: {
    label: 'Tools & Practices',
    skills: [
      'git', 'linux', 'agile', 'scrum', 'jira', 'confluence', 'notion',
      'microservices', 'monorepo', 'design patterns',
    ],
  },
  softSkills: {
    label: 'Soft Skills',
    skills: [
      'communication', 'leadership', 'mentoring', 'problem solving', 'team management',
      'collaboration', 'project management', 'stakeholder management',
    ],
  },
};

export const COMMON_SKILLS = Object.values(SKILL_TAXONOMY).flatMap((cat) => cat.skills);

const _categoryIndex = new Map<string, string>();
for (const [key, cat] of Object.entries(SKILL_TAXONOMY)) {
  for (const skill of cat.skills) {
    _categoryIndex.set(skill, key);
  }
}

export function getSkillCategory(skill: string): string {
  return _categoryIndex.get(skill.toLowerCase()) ?? 'uncategorized';
}

export const VISA_RULES = [
  { pattern: /\bwithout\s+sponsorship\b/i, risk: 'High' as const, signal: 'Requires work without sponsorship' },
  { pattern: /\bno\s+sponsorship\b/i, risk: 'High' as const, signal: 'No sponsorship offered' },
  { pattern: /\bus\s+citizen(s)?\s+only\b/i, risk: 'High' as const, signal: 'US citizens only' },
  { pattern: /\bcitizenship\s+required\b/i, risk: 'High' as const, signal: 'Citizenship required' },
  { pattern: /\bsecurity\s+clearance\s+required\b/i, risk: 'High' as const, signal: 'Security clearance required' },
  { pattern: /\bmust\s+be\s+(legally\s+)?authorized\s+to\s+work\b/i, risk: 'Medium' as const, signal: 'Must be authorized to work' },
  { pattern: /\bwork\s+authorization\s+required\b/i, risk: 'Medium' as const, signal: 'Work authorization required' },
  { pattern: /\beligible\s+to\s+work\s+in\s+the\s+u\.?s\.?\b/i, risk: 'Medium' as const, signal: 'Must be eligible to work in US' },
  { pattern: /\bvisa\s+sponsorship\s+available\b/i, risk: 'Low' as const, signal: 'Visa sponsorship available' },
  { pattern: /\bh[- ]?1b\s+transfer\b/i, risk: 'Low' as const, signal: 'H1B transfer supported' },
  { pattern: /\bsponsors?\s+(work\s+)?visa\b/i, risk: 'Low' as const, signal: 'Company sponsors visas' },
  { pattern: /\bwill\s+sponsor\b/i, risk: 'Low' as const, signal: 'Will sponsor' },
];

export const SENIORITY_LEVELS = {
  high: [
    /\bprincipal\b/i, /\bstaff\b/i, /\bsenior\b/i, /\bsr\.?\b/i,
    /\blead\b/i, /\barchitect\b/i, /\bdirector\b/i, /\bmanager\b/i, /\bvp\b/i,
    /\b10\+?\s*years?\b/i, /\b8\+?\s*years?\b/i, /\b7\+?\s*years?\b/i,
  ],
  mid: [
    /\bmid[- ]?level\b/i, /\b5\+?\s*years?\b/i, /\b4\+?\s*years?\b/i, /\b3\+?\s*years?\b/i,
  ],
  low: [
    /\bjunior\b/i, /\bjr\.?\b/i, /\bentry[- ]?level\b/i, /\bintern\b/i, /\bassociate\b/i,
    /\b0-?[12]\s*years?\b/i, /\b1\+?\s*years?\b/i,
  ],
};

export const LOCATION_PATTERNS = {
  remote: [
    /\b(fully|100%|mostly|partly)\s+remote\b/i,
    /\bremote[\s-]+(position|role|opportunity|work|job|friendly|first|only|eligible)\b/i,
    /\b(position|role|location|work\s+arrangement)[:\s]+(is\s+)?remote\b/i,
    /\b\d+\s+days?\s+remote\b/i,
    /\bwork\s+(remotely|from\s+home)\b/i,
    /\bwfh\b/i,
    /\bdistributed\s+(team|company|workforce|organization)\b/i,
  ],
  hybrid: [/\bhybrid\b/i],
  onsite: [/\bon[- ]?site\b/i, /\bin[- ]?office\b/i, /\bin[- ]?person\b/i],
  usOnly: [/\bu\.?s\.?\s+only\b/i, /\bunited\s+states\s+only\b/i, /\bbased\s+in\s+(the\s+)?u\.?s\.?\b/i],
};

export const DIMENSION_WEIGHTS = {
  skillFit: 0.3,
  visaRisk: 0.2,
  jobQuality: 0.15,
  growthPotential: 0.15,
  compensation: 0.1,
  roleClarity: 0.1,
};

export const SKILL_WEIGHTS = { required: 0.75, preferred: 0.25 };

export const CONFIDENCE_THRESHOLDS = { high: 70, medium: 40 };
