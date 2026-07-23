import procuremate from "./images/procurementmate.gif";
import greenFern from "./images/green-fern.png";
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
};

export const projects: Project[] = [
  {
    slug: "code-search",
    year: "'26",
    name: "Code Search",
    note: "natural language to remember your code. has github oauth! (collaborated w quang vu)",
    tags: ["TypeScript", "React", "Next.js", "Neon", "OpenAI Embedding"],
    thumb: codesearch,
  },
  {
    slug: "procure-mate",
    year: "'26",
    name: "ProcureMate",
    note: "b2b saas inspired procurement assistant",
    tags: ["TypeScript", "React", "Vite", "Python", "FastAPI", "Docker"],
    thumb: procuremate,
  },
  {
    slug: "conflict-early-watch-warning",
    year: "'26",
    name: "Conflict Early Warning",
    note: "informative map that labels high risk war zones and pulls latest articles",
    tags: ["React", "JavaScript", "FastAPI"],
    thumb: earlyWarning,
  },
  {
    slug: "stepwise",
    year: "'26",
    name: "Stepwise",
    note: "turns plain language goals into an interactive step-by-step graph",
    tags: ["React", "TypeScript", "React Flow", "Express"],
    thumb: stepwise,
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
  { k: "X", v: "@vinnypham", href: "#" },
];

export const email = "vinnypham11@gmail.com";

export const mosaicTiles = [
  earlyWarning,
  stepwise,
  procuremate,
  codesearch,
  greenFern,
];
