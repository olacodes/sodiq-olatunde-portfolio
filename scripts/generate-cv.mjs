// Generates a clean, print-friendly CV PDF with subtle Adire Telemetry accents.
// Run: node scripts/generate-cv.mjs  →  public/sodiq-olatunde-cv.pdf
import PDFDocument from "pdfkit";
import fs from "node:fs";
import path from "node:path";

// ---- brand (print-tuned) ----
const INK = "#14182e";
const OCHRE = "#b8791c";
const MUTE = "#5b6079";
const LINE = "#d7d9e4";

// Career start: Feb 2018 — keep in sync with lib/content.ts
const NOW = new Date();
const YEARS = `${NOW.getFullYear() - 2018 - (NOW.getMonth() < 1 ? 1 : 0)}+`;

const M = 52; // margin
const doc = new PDFDocument({ size: "LETTER", margin: M, bufferPages: true });
const CW = doc.page.width - M * 2; // content width
const outDir = path.join(process.cwd(), "public");
fs.mkdirSync(outDir, { recursive: true });
const out = fs.createWriteStream(path.join(outDir, "sodiq-olatunde-cv.pdf"));
doc.pipe(out);

const gap = (n) => (doc.y += n);

function heading(label) {
  if (doc.y > doc.page.height - 120) doc.addPage();
  gap(10);
  doc
    .font("Helvetica-Bold")
    .fontSize(10.5)
    .fillColor(OCHRE)
    .text(label.toUpperCase(), M, doc.y, { characterSpacing: 1.6 });
  gap(4);
  const y = doc.y;
  doc
    .moveTo(M, y)
    .lineTo(M + CW, y)
    .lineWidth(0.75)
    .strokeColor(LINE)
    .stroke();
  gap(8);
}

function bullet(text) {
  const y = doc.y;
  doc.font("Helvetica-Bold").fontSize(9.5).fillColor(OCHRE).text("›", M + 2, y);
  doc
    .font("Helvetica")
    .fontSize(9.7)
    .fillColor(INK)
    .text(text, M + 16, y, { width: CW - 16, lineGap: 1.5 });
  gap(4);
}

// =========================================================
// HEADER
// =========================================================
doc.font("Helvetica-Bold").fontSize(27).fillColor(INK).text("Sodiq Olatunde", M, M);
doc
  .font("Helvetica")
  .fontSize(12.5)
  .fillColor(OCHRE)
  .text("Software Engineer — Data, Payments & AI Systems", { characterSpacing: 0.2 });
gap(6);
doc
  .font("Helvetica")
  .fontSize(9.3)
  .fillColor(MUTE)
  .text(
    "Lagos, Nigeria  ·  +234 816 604 1171  ·  olatundesodiq@gmail.com",
    { lineGap: 2 },
  );
doc
  .fillColor(MUTE)
  .text("linkedin.com/in/olatunde-sodiq  ·  github.com/olacodes  ·  osmani.com.ng");

gap(6);
const hy = doc.y;
doc.moveTo(M, hy).lineTo(M + CW, hy).lineWidth(1.4).strokeColor(OCHRE).stroke();
gap(4);

// =========================================================
// SUMMARY
// =========================================================
heading("Summary");
doc
  .font("Helvetica")
  .fontSize(9.9)
  .fillColor(INK)
  .text(
    `Backend-leaning full-stack engineer with ${YEARS} years building systems companies run on — sustainability data pipelines and multi-country payment platforms — with growing hands-on work in applied GenAI and agent tooling. Comfortable in the hard middle: mapping messy data, refactoring for scale, and shipping software teams depend on. Team lead and mentor.`,
    { width: CW, lineGap: 2 },
  );

// =========================================================
// SKILLS
// =========================================================
heading("Skills");
const skills = [
  ["Backend", "Python (FastAPI, Django, Flask), Microservices, Hexagonal Architecture"],
  ["AI / Applied ML", "GenAI, AI Agents, LLM Integration"],
  ["Frontend", "React, Next.js, Vue.js, TypeScript, JavaScript"],
  ["Data", "PostgreSQL, MySQL, MongoDB, Redis, Data Pipelines"],
  ["DevOps & Cloud", "Docker, Kubernetes, Git, GitHub Actions, CI/CD, AWS, GCP"],
  ["Quality", "Unit & Integration Testing"],
];
for (const [label, items] of skills) {
  const y = doc.y;
  doc.font("Helvetica-Bold").fontSize(9.5).fillColor(INK).text(label, M, y, { width: 118 });
  doc.font("Helvetica").fontSize(9.5).fillColor(MUTE).text(items, M + 124, y, {
    width: CW - 124,
    lineGap: 1.5,
  });
  gap(4);
}

// =========================================================
// EXPERIENCE
// =========================================================
const experience = [
  {
    company: "One Click LCA",
    role: "Software Engineer",
    loc: "Helsinki, Finland (Remote)",
    period: "Jul 2022 — Present",
    bullets: [
      "Architected and developed the Data Import Service (DIS), scaling it to process thousands of global sustainability datasets with automated mapping and classification — reducing manual effort by 30%+ and boosting adoption.",
      "Pioneered scalable data-automation pipelines for international EPD providers, modularizing workflows that expanded market coverage and revenue streams.",
      "Co-designed and delivered the Forge Integration Plugin, a full-stack internal app integrating Autodesk APS APIs to import Revit models and improve enterprise interoperability.",
    ],
  },
  {
    company: "Heycar",
    role: "Software Engineer (Contract)",
    loc: "Berlin, Germany (Remote)",
    period: "Sep 2022 — Dec 2024",
    bullets: [
      "Orchestrated integration of Heycar's payment and order service across the UK, France, and Germany into a unified platform — cutting operational costs tied to country-specific services by 50%.",
      "Refactored the payment service into a modular Hexagonal architecture, enabling seamless integration with multiple gateways including Stripe, letting customers choose their preferred method while improving scalability and maintainability.",
    ],
  },
  {
    company: "Decagon",
    role: "Lead Software Engineer",
    loc: "Lagos, Nigeria",
    period: "Aug 2019 — Sep 2022",
    bullets: [
      "Designed and built microservice APIs with Django & DRF in an Agile environment, supporting web and mobile applications.",
      "Led a five-person team, including a QA engineer, to build DecaAid — an internal teaching-and-learning tool.",
      "Trained and mentored 15+ software engineers; authored training manuals and ran hands-on workshops for new hires.",
    ],
  },
  {
    company: "Orb Solutions",
    role: "Frontend Engineer",
    loc: "Lagos, Nigeria",
    period: "Feb 2018 — Aug 2019",
    bullets: [
      "Built an interactive UI allowing users to turn SplashFM radio on and off within the web application.",
      "Created an API-driven results page for the SplashFM marathon, delivering real-time results to participants, fans, and sponsors.",
    ],
  },
];

heading("Professional Experience");
for (const e of experience) {
  if (doc.y > doc.page.height - 110) doc.addPage();
  const y = doc.y;
  doc.font("Helvetica-Bold").fontSize(11).fillColor(INK).text(e.company, M, y, { width: CW - 130 });
  doc
    .font("Helvetica")
    .fontSize(9)
    .fillColor(MUTE)
    .text(e.period, M, y + 1.5, { width: CW, align: "right" });
  doc.font("Helvetica-Oblique").fontSize(9.7).fillColor(OCHRE).text(`${e.role}  ·  ${e.loc}`, M);
  gap(5);
  for (const b of e.bullets) bullet(b);
  gap(4);
}

// =========================================================
// PROJECTS
// =========================================================
heading("Selected Projects");
const projects = [
  ["Osmani — Software Studio (Founder)", "osmani.com.ng — take products from architecture to launch for clients and my own ideas."],
  ["Chattosales — Product (Founder)", "chattosales.com — first shipped product turning conversations into sales; end-to-end build."],
];
for (const [name, blurb] of projects) {
  doc.font("Helvetica-Bold").fontSize(9.8).fillColor(INK).text(name, M, doc.y, { width: CW });
  doc.font("Helvetica").fontSize(9.5).fillColor(MUTE).text(blurb, { width: CW, lineGap: 1.5 });
  gap(5);
}

// =========================================================
// EDUCATION
// =========================================================
heading("Education");
const education = [
  ["Decagon Institute of Learning — Lagos, Nigeria", "Diploma, Software Engineering & Leadership Training", "2020"],
  ["University of Ilorin — Ilorin, Nigeria", "B.Sc (Ed), Human Kinetics Education", "2015"],
];
for (const [school, cred, year] of education) {
  const y = doc.y;
  doc.font("Helvetica-Bold").fontSize(9.8).fillColor(INK).text(school, M, y, { width: CW - 60 });
  doc.font("Helvetica").fontSize(9).fillColor(MUTE).text(year, M, y + 1.5, { width: CW, align: "right" });
  doc.font("Helvetica").fontSize(9.5).fillColor(MUTE).text(cred, M);
  gap(6);
}

doc.end();
out.on("finish", () => console.log("✓ public/sodiq-olatunde-cv.pdf generated"));
