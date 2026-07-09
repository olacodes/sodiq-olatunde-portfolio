"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { experience, type Experience as Exp } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { Metric } from "./Metric";
import { Chip } from "./Chip";

export function Experience() {
  return (
    <section id="experience" className="relative px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          index="02"
          tag="Experience // the work"
          title="Where I've worked"
          kicker="Seven years across remote teams in Finland, Germany, and Nigeria. Expand any role for the details."
        />

        <div className="relative">
          {/* the spine */}
          <div
            aria-hidden
            className="absolute top-2 bottom-2 left-[7px] w-px bg-line md:left-[9px]"
          />
          <ol className="space-y-6">
            {experience.map((exp, i) => (
              <ServiceNode key={exp.id} exp={exp} delay={i * 0.05} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function ServiceNode({ exp, delay }: { exp: Exp; delay: number }) {
  const [open, setOpen] = useState(false);
  const live = exp.status === "online";

  return (
    <li className="relative pl-9 md:pl-14">
      {/* spine node */}
      <span
        aria-hidden
        className={`absolute top-6 left-0 grid h-[15px] w-[15px] place-items-center rounded-full border ${
          live ? "border-signal" : "border-line"
        } bg-base md:left-[3px]`}
      >
        <span
          className={`h-[6px] w-[6px] rounded-full ${
            live ? "bg-signal" : "bg-faint"
          }`}
        />
      </span>

      <Reveal delay={delay}>
        <div className="node-frame panel rounded-lg p-5 md:p-7">
          {/* header row */}
          <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[0.68rem]">
            <span
              className={`flex items-center gap-1.5 ${
                live ? "text-signal" : "text-faint"
              }`}
            >
              {live ? <span className="status-dot" /> : <span>◦</span>}
              {live ? "current" : "past"}
            </span>
            {exp.employment && (
              <span className="rounded-full border border-ochre/50 px-2 py-0.5 text-ochre">
                {exp.employment}
              </span>
            )}
            <span className="ml-auto text-faint">{exp.period}</span>
          </div>

          {/* title */}
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="font-display text-2xl font-semibold md:text-3xl">
              {exp.company}
            </h3>
            <p className="text-ochre">{exp.role}</p>
          </div>
          <p className="mt-1 font-mono text-xs text-faint">{exp.location}</p>

          <p className="mt-4 max-w-2xl text-muted">{exp.summary}</p>

          {/* metrics (only when quantified) */}
          {exp.metrics.length > 0 && (
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {exp.metrics.map((m) => (
                <Metric key={m.label} value={m.value} label={m.label} />
              ))}
            </div>
          )}

          {/* stack */}
          <div className="mt-6 flex flex-wrap gap-2">
            {exp.stack.map((s) => (
              <Chip key={s}>{s}</Chip>
            ))}
          </div>

          {/* details toggle + case study link */}
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              className="group flex items-center gap-2 font-mono text-xs tracking-wide text-ochre transition-colors hover:text-ink"
            >
              <span
                className={`inline-block transition-transform ${
                  open ? "rotate-90" : ""
                }`}
              >
                ▸
              </span>
              {open ? "Hide details" : "View details"}
            </button>
            {exp.caseStudy && (
              <Link
                href={exp.caseStudy}
                className="group flex items-center gap-1.5 font-mono text-xs tracking-wide text-signal transition-transform hover:translate-x-0.5"
              >
                Read the case study →
              </Link>
            )}
          </div>

          {/* Stays mounted so the bullets are in the server HTML (SEO);
              collapsed state hides them via height with inert blocking
              interaction. */}
          <motion.div
            initial={false}
            animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
            aria-hidden={!open}
            inert={!open}
          >
            <ul className="mt-5 space-y-3 border-t border-line pt-5">
              {exp.detail.map((d, i) => (
                <li key={i} className="flex gap-3 text-sm text-muted">
                  <span className="mt-1 font-mono text-[0.6rem] text-ochre">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="leading-relaxed">{d}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Reveal>
    </li>
  );
}
