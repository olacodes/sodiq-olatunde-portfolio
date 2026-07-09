import type { Metadata } from "next";
import {
  CaseStudyShell,
  CaseSection,
  Decisions,
} from "@/components/CaseStudyShell";

export const metadata: Metadata = {
  title: "Data Import Service — Case Study",
  description:
    "How I designed the Data Import Service at One Click LCA: an automated pipeline that ingests, maps, and classifies thousands of global sustainability datasets, cutting manual effort by 30%+.",
  alternates: { canonical: "/work/data-import-service" },
};

const pipeline = [
  { step: "01", name: "Ingest", desc: "Pull datasets from each EPD provider" },
  { step: "02", name: "Normalize", desc: "Reconcile formats into one schema" },
  { step: "03", name: "Map", desc: "Match fields to the platform model" },
  { step: "04", name: "Classify", desc: "Auto-categorize each record" },
  { step: "05", name: "Review", desc: "Human-in-the-loop for edge cases" },
  { step: "06", name: "Publish", desc: "Release into the LCA platform" },
];

const decisions = [
  {
    title: "Provider-specific adapters, one shared core",
    body: "Each EPD provider ships data differently. Rather than a monolith with endless special cases, I modularized ingestion into per-provider adapters feeding a shared normalization core — so onboarding a new provider became configuration, not a rewrite. That modularity is what let coverage (and revenue) expand.",
  },
  {
    title: "Automate the 80%, keep humans on the 20%",
    body: "Fully automated classification would trade accuracy for speed; fully manual was the bottleneck we started with. The pipeline auto-maps and auto-classifies the confident majority and routes only ambiguous records to human review — the balance that removed 30%+ of the manual effort without sacrificing data quality.",
  },
  {
    title: "Idempotent, re-runnable stages",
    body: "Datasets get corrected and re-published upstream, so each stage was designed to be safely re-run on the same input — making imports repeatable and recoverable instead of one-shot and fragile.",
  },
];

export default function DataImportServiceCaseStudy() {
  return (
    <CaseStudyShell
      context="One Click LCA · 2022—present"
      title="The Data Import Service"
      lead="An automated pipeline that turns messy, inconsistent sustainability data from hundreds of international providers into clean, classified records the platform can actually use."
      stack={["Python", "FastAPI", "PostgreSQL", "Docker", "Data Pipelines"]}
      metrics={[
        { value: "30%+", label: "manual effort removed" },
        { value: "1000s", label: "datasets processed" },
        { value: "↑", label: "market coverage & adoption" },
      ]}
    >
      <CaseSection index="01" title="The problem">
        <p>
          One Click LCA is the world&apos;s leading platform for life-cycle
          assessment — the calculations behind sustainable construction. Those
          calculations are only as good as the underlying data: EPDs
          (Environmental Product Declarations) published by hundreds of
          providers across the globe.
        </p>
        <p>
          The catch: every provider structures that data differently.
          Onboarding a new dataset meant slow, manual mapping and
          classification — a bottleneck that capped how fast the platform could
          grow its coverage, and a drag on adoption.
        </p>
      </CaseSection>

      <CaseSection index="02" title="What I built">
        <p>
          I architected and developed the{" "}
          <span className="text-ink">Data Import Service (DIS)</span> — a staged
          pipeline that automates ingestion, mapping, and classification of
          global datasets end to end, with humans looping in only where the
          data is genuinely ambiguous.
        </p>

        <div className="mt-8 flex flex-wrap items-stretch gap-2.5">
          {pipeline.map((s, i) => (
            <div key={s.step} className="flex items-stretch gap-2.5">
              <div className="node-frame panel w-[8.5rem] rounded-md p-3.5">
                <div className="font-mono text-[0.6rem] text-ochre">
                  {s.step}
                </div>
                <div className="mt-1 font-display text-base font-semibold">
                  {s.name}
                </div>
                <div className="mt-1 text-xs leading-snug text-muted">
                  {s.desc}
                </div>
              </div>
              {i < pipeline.length - 1 && (
                <div className="flex items-center font-mono text-ochre/70">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
        <p className="mt-4 font-mono text-xs text-faint">
          providers → DIS → One Click LCA platform
        </p>
      </CaseSection>

      <CaseSection index="03" title="Key decisions">
        <Decisions items={decisions} />
      </CaseSection>

      <CaseSection index="04" title="Outcome">
        <p>
          The pipeline cut manual effort by{" "}
          <span className="text-ink">30%+</span> and scaled to process thousands
          of datasets, expanding the platform&apos;s market coverage and opening
          new revenue streams from international EPD providers. Automation plus a
          modular design turned data onboarding from a bottleneck into a
          repeatable, growing capability.
        </p>
      </CaseSection>
    </CaseStudyShell>
  );
}
