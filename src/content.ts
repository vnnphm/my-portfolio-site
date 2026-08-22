import procuremate from "./images/procurementmate.gif";
import codesearch from "./images/codesearch.png";
import stepwise from "./images/stepwise.png";
import earlyWarning from "./images/early-warning.png";

export type Project = {
  slug: string;
  year: string;
  name: string;
  note: string;
  tags: string[];
  thumb: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    slug: "cache-proof",
    year: "'26 at Snowflake X Beta Uni Hackathon",
    name: "CacheProof",
    note: "CacheProof is an AST-aware semantic cache for read-only repository tools used by cloud coding agents. It hard-scopes every cache lookup by tenant, repository, commit, permission hash, tool, and tool schema; enriches responses with AST provenance; and records the complete cost of retrieval, embedding, judging, indexing, and infrastructure.",
    tags: ["Python", "Supabase", "MCP Tools", "OpenAI Embedding"],
    thumb: "cacheproof",
    repo: "https://github.com/vnnphm/cacheproof",
  },
  {
    slug: "code-search",
    year: "'26",
    name: "Code Search",
    note: "natural language to remember your code. has github oauth! (collaborated w quang vu)",
    tags: ["TypeScript", "React", "Next.js", "Neon", "OpenAI Embedding"],
    thumb: codesearch,
    repo: "https://github.com/qvu50015/Search",
  },
  {
    slug: "procure-mate",
    year: "'26",
    name: "ProcureMate",
    note: "b2b saas inspired procurement assistant",
    tags: ["TypeScript", "React", "Vite", "Python", "FastAPI", "Docker"],
    thumb: procuremate,
    repo: "https://github.com/vnnphm/ProcureMate",
  },
  {
    slug: "conflict-early-watch-warning",
    year: "'26",
    name: "Conflict Early Warning",
    note: "informative map that labels high risk war zones and pulls latest articles",
    tags: ["React", "JavaScript", "FastAPI"],
    thumb: earlyWarning,
    repo: "https://github.com/vnnphm/Conflict-Watch-Early-Warning",
  },
  {
    slug: "stepwise",
    year: "'26",
    name: "Stepwise",
    note: "turns plain language goals into an interactive step-by-step graph",
    tags: ["React", "TypeScript", "React Flow", "Express"],
    thumb: stepwise,
    repo: "https://github.com/vnnphm/Stepwise",
  },
];

export type StackGroup = {
  label: string;
  items: string[];
};

export const stack: StackGroup[] = [
  { label: "Languages", items: ["TypeScript", "JavaScript", "Python", "C++", "Java"] },
  { label: "Frontend", items: ["Tailwind CSS", "CSS", "HTML", "React"] },
  { label: "Backend", items: ["Node.js", "Postgres", "Supabase", "Neon", "Docker", "FastAPI"] },
  { label: "Frameworks", items: ["Vite", "TanStack Start", "Next.js"] },
  { label: "Tools", items: ["Figma", "Git", "Vercel", "Docker", "Claude Code", "Codex"] },
];

export type SocialLink = {
  k: string;
  v: string;
  href: string;
};

export const socials: SocialLink[] = [
  { k: "GitHub", v: "@vnnphm", href: "https://github.com/vnnphm" },
  { k: "LinkedIn", v: "Vinny Pham", href: "https://www.linkedin.com/in/vinny-pham-43b43928b" },
];

export const email = "vinnypham11@gmail.com";

// Served straight from public/, so the URL stays stable across builds.
export const resume = "/vinny_pham_resume_jul2026.pdf";

export const mosaicTiles = [
  earlyWarning,
  stepwise,
  procuremate,
  codesearch,
];
