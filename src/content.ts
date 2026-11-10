import procuremate from "./images/procurementmate.gif";
import codesearch from "./images/codesearch.png";
import stepwise from "./images/stepwise.png";
import earlyWarning from "./images/early-warning.png";
import refundhunter from "./images/refundhunter.jpg";
import cacheproof from "./images/cacheproof.png";
import flypick from "./images/flypick.png";

export type Project = {
  slug: string;
  year: string;
  name: string;
  note: string;
  tags: string[];
  thumb: string;
  repo?: string;
  award?: string;
  devpost?: string;
};

export const projects: Project[] = [
  {
    slug: "cache-proof",
    year: "'26",
    name: "CacheProof",
    note: "CacheProof is an AST-aware semantic cache for read-only repository tools used by cloud coding agents. It hard-scopes every cache lookup by tenant, repository, commit, permission hash, tool, and tool schema; enriches responses with AST provenance; and records the complete cost of retrieval, embedding, judging, indexing, and infrastructure. Built at Beta University x Snowflake Hackathon",
    tags: ["Python", "Supabase", "MCP Tools", "OpenAI Embedding"],
    thumb: cacheproof,
    repo: "https://github.com/vnnphm/cacheproof",
  },
  {
    slug: "flypick",
    year: "'26",
    name: "FlyPick",
    note: "can't decide where to eat? let a fly choose. FlyPick scrapes restaurant menus with Firecrawl, turns them into sensory signals for a simulated neural network based on real fruit fly brain wiring, and you watch a 3D fly steer toward its pick. Built at Shower Hacks (collaborated w allen le)",
    tags: ["TypeScript", "React", "Three.js", "Vite", "Firecrawl"],
    thumb: flypick,
    repo: "https://github.com/vnnphm/flypick",
    devpost: "https://devpost.com/software/flypick",
  },
  {
    slug: "refund-hunter",
    year: "'26",
    name: "RefundHunter",
    note: "tracks the prices of things you've already bought and tells you when you're owed money back, right inside an ASI:One chat. five Fetch.ai uAgents parse receipts and Gmail orders, check live prices, look up price-adjustment policies, and draft the refund request. Built at Cal Hacks 13.0",
    tags: ["Python", "Fetch.ai uAgents", "Agentverse", "ASI:One", "Bright Data", "Gmail API", "FastAPI"],
    thumb: refundhunter,
    repo: "https://github.com/vnnphm/RefundHunter",
    devpost: "https://devpost.com/software/refundhunter-hs1u63",
    award: "[Fetch.ai] Best Use of ASI:One · Cal Hacks 13.0",
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
