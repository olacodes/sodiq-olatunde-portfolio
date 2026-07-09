// ============================================================
// CONTENT MODEL — single source of truth for the site.
// Edit here to update copy, metrics, links.
// ============================================================

// Career start: Feb 2018 (Orb Solutions). Computed so it never goes stale.
const CAREER_START_YEAR = 2018;
const CAREER_START_MONTH = 1; // 0-indexed: February
const now = new Date();
export const yearsExperience = `${
  now.getFullYear() -
  CAREER_START_YEAR -
  (now.getMonth() < CAREER_START_MONTH ? 1 : 0)
}+`;

export const profile = {
  name: "Sodiq Olatunde",
  role: "Software Engineer",
  tagline: "I architect the data and payment systems companies run on.",
  location: "Lagos, Nigeria",
  availability: "Open to senior & staff roles — remote worldwide",
  intro: `For ${yearsExperience} years I've architected the systems behind real products — sustainability data pipelines and cross-border payment platforms — while shipping my own ideas through Osmani and Chattosales. Lately I've been building with GenAI and agent tooling. I like the hard middle: mapping chaos, refactoring for scale, and building things people actually depend on.`,
  email: "olatundesodiq@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/olatunde-sodiq/",
    github: "https://github.com/olacodes",
    company: "https://osmani.com.ng/",
    firstProduct: "https://www.chattosales.com/",
  },
  cvHref: "/sodiq-olatunde-cv.pdf",
} as const;

// ------------------------------------------------------------
// EXPERIENCE — rendered as "service nodes" in the pipeline
// ------------------------------------------------------------
export type Metric = { value: string; label: string };
export type Experience = {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  employment?: string; // e.g. "Contract" — shown as a tag when present
  status: "online" | "shipped";
  stack: string[];
  summary: string;
  metrics: Metric[];
  detail: string[];
};

export const experience: Experience[] = [
  {
    id: "one-click-lca",
    company: "One Click LCA",
    role: "Software Engineer",
    location: "Helsinki, Finland · Remote",
    period: "Jul 2022 — Present",
    status: "online",
    stack: ["Python", "FastAPI", "PostgreSQL", "Docker", "Autodesk APS"],
    summary:
      "Building the data backbone for the world's leading life-cycle-assessment platform for construction sustainability.",
    metrics: [
      { value: "30%+", label: "manual effort removed" },
      { value: "1000s", label: "global datasets processed" },
    ],
    detail: [
      "Architected and developed the Data Import Service (DIS), scaling it to process thousands of global sustainability datasets with automated mapping and classification — cutting manual effort by 30%+ and boosting adoption.",
      "Pioneered scalable data-automation pipelines for international EPD providers, modularizing workflows that expanded market coverage and opened new revenue streams.",
      "Co-designed and delivered the Forge Integration Plugin — a full-stack internal app integrating Autodesk APS APIs to import Revit models, improving enterprise interoperability.",
    ],
  },
  {
    id: "heycar",
    company: "Heycar",
    role: "Software Engineer",
    location: "Berlin, Germany · Remote",
    period: "Sep 2022 — Dec 2024",
    employment: "Contract",
    status: "shipped",
    stack: ["Python", "Hexagonal Arch", "Stripe", "PostgreSQL", "Kubernetes"],
    summary:
      "Unified payments and orders across three European markets for the used-car marketplace, on contract alongside my role at One Click LCA.",
    metrics: [
      { value: "50%", label: "ops cost reduced" },
      { value: "3", label: "countries unified" },
    ],
    detail: [
      "Orchestrated the integration of Heycar's payment and order service across the UK, France, and Germany into one unified platform — cutting operational costs tied to country-specific services by 50%.",
      "Refactored the payment service into a modular Hexagonal architecture, enabling seamless integration with multiple gateways including Stripe, letting customers pick their preferred method while improving scalability and maintainability.",
    ],
  },
  {
    id: "decagon",
    company: "Decagon",
    role: "Lead Software Engineer",
    location: "Lagos, Nigeria",
    period: "Aug 2019 — Sep 2022",
    status: "shipped",
    stack: ["Django", "DRF", "Microservices", "Agile"],
    summary:
      "Led engineering for internal learning tools while training the next wave of Nigerian software talent.",
    metrics: [
      { value: "5", label: "engineers led" },
      { value: "15+", label: "engineers mentored" },
    ],
    detail: [
      "Designed and built microservice APIs with Django & DRF in an Agile environment, powering web and mobile applications.",
      "Led a five-person team, including a QA engineer, to build DecaAid — an internal teaching-and-learning tool.",
      "Trained and mentored 15+ software engineers, writing comprehensive training manuals and running hands-on workshops for new hires.",
    ],
  },
  {
    id: "orb-solutions",
    company: "Orb Solutions",
    role: "Frontend Engineer",
    location: "Lagos, Nigeria",
    period: "Feb 2018 — Aug 2019",
    status: "shipped",
    stack: ["JavaScript", "REST APIs", "Realtime UI"],
    summary:
      "Built interactive, result-driven interfaces for SplashFM's web presence and live events.",
    metrics: [],
    detail: [
      "Implemented an interactive UI letting users turn SplashFM radio on and off within the web app.",
      "Created an API-driven results page for the SplashFM marathon — delivering real-time results and information to participants, fans, and sponsors.",
    ],
  },
];

// ------------------------------------------------------------
// PROJECTS & PRODUCTS
// ------------------------------------------------------------
export type Project = {
  name: string;
  kind: string;
  blurb: string;
  stack: string[];
  href?: string;
  caseStudy?: string; // internal case-study route
  preview?: string; // screenshot in /public
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "Osmani",
    kind: "Company · Founder",
    blurb:
      "A Nigerian technology company I founded — software, SaaS, and commerce, built in Ibadan for the world.",
    stack: ["Product", "Full-stack", "Cloud"],
    href: profile.links.company,
    preview: "/preview-osmani.jpg",
    featured: true,
  },
  {
    name: "Chattosales",
    kind: "Product · Founder",
    blurb:
      "A product I founded that turns WhatsApp, Instagram & TikTok chats into trackable orders and revenue — trusted by 500+ merchants.",
    stack: ["Next.js", "Python", "PostgreSQL"],
    href: profile.links.firstProduct,
    preview: "/preview-chattosales.jpg",
    featured: true,
  },
  {
    name: "Data Import Service",
    kind: "Platform · One Click LCA",
    blurb:
      "Automated mapping & classification engine ingesting thousands of global sustainability datasets.",
    stack: ["FastAPI", "PostgreSQL", "Pipelines"],
    caseStudy: "/work/data-import-service",
  },
  {
    name: "Heycar Payments",
    kind: "Payments · Heycar",
    blurb:
      "Unified payment & order systems across the UK, France and Germany, refactored into a Hexagonal architecture with pluggable gateways.",
    stack: ["Python", "Hexagonal Arch", "Stripe"],
    caseStudy: "/work/heycar-payments",
  },
];

// ------------------------------------------------------------
// SKILLS — grouped by domain
// ------------------------------------------------------------
export type SkillGroup = { key: string; label: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    key: "backend",
    label: "Backend",
    items: ["Python", "FastAPI", "Django", "Flask", "Microservices", "Hexagonal Arch"],
  },
  {
    key: "ai",
    label: "Applied AI",
    items: ["GenAI", "AI Agents", "LLM Integration"],
  },
  {
    key: "frontend",
    label: "Frontend",
    items: ["React", "Next.js", "Vue.js", "TypeScript"],
  },
  {
    key: "data",
    label: "Data",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Data Pipelines"],
  },
  {
    key: "devops",
    label: "DevOps",
    items: ["Docker", "Kubernetes", "Git", "GitHub Actions", "CI/CD"],
  },
  {
    key: "cloud",
    label: "Cloud & Quality",
    items: ["AWS", "GCP", "Unit Testing", "Integration Testing"],
  },
];

export const education = [
  {
    school: "Decagon Institute of Learning",
    place: "Lagos, Nigeria",
    credential: "Diploma — Software Engineering & Leadership",
    year: "2020",
  },
  {
    school: "University of Ilorin",
    place: "Ilorin, Nigeria",
    credential: "B.Sc (Ed) — Human Kinetics Education",
    year: "2015",
  },
];

// ------------------------------------------------------------
// STORY — the career-switch narrative (the real differentiator)
// ------------------------------------------------------------
export const story =
  "I didn't take the usual route. My degree is in Human Kinetics — sports science, not computer science. I taught myself to code, broke into engineering in Lagos, and worked my way up to leading a team and mentoring 15+ engineers before going remote for scale-ups in Berlin and Helsinki. Today I build payment and data systems for Europe, and my own products from Nigeria.";

export type Milestone = {
  year: string;
  title: string;
  org: string;
  note: string;
};

export const journey: Milestone[] = [
  {
    year: "2015",
    title: "B.Sc, Human Kinetics",
    org: "University of Ilorin",
    note: "A degree in sports science — no code in sight yet.",
  },
  {
    year: "2018",
    title: "Broke into engineering",
    org: "Orb Solutions · Lagos",
    note: "Self-taught my way into a first frontend role.",
  },
  {
    year: "2019",
    title: "Lead Software Engineer",
    org: "Decagon · Lagos",
    note: "Led a team of 5 and mentored 15+ new engineers.",
  },
  {
    year: "2022",
    title: "Remote for Europe",
    org: "Heycar · Berlin  &  One Click LCA · Helsinki",
    note: "Payment platforms and sustainability data at scale.",
  },
  {
    year: "2024",
    title: "Founder",
    org: "Osmani  &  Chattosales · Nigeria",
    note: "Shipping my own products, built at home for the world.",
  },
];

// adire = Yoruba indigo resist-dye cloth — the visual language of this site
export const adireNote =
  "The indigo, ochre and repeating geometry here are drawn from adire — the Yoruba resist-dyed cloth of south-west Nigeria. A quiet nod to where I build from.";

// pipeline stage labels (the spine of the site)
export const stages = [
  { id: "hero", label: "Intro", tag: "00" },
  { id: "about", label: "About", tag: "01" },
  { id: "experience", label: "Experience", tag: "02" },
  { id: "projects", label: "Projects", tag: "03" },
  { id: "contact", label: "Contact", tag: "04" },
] as const;
