import Link from "next/link";
import type { ReactNode } from "react";
import { Logo } from "./Logo";
import { Reveal } from "./Reveal";
import { Chip } from "./Chip";

type Metric = { value: string; label: string };

/** Shared chrome for case-study pages: top bar, header, metrics band, CTA. */
export function CaseStudyShell({
  context,
  title,
  lead,
  stack,
  metrics,
  children,
}: {
  context: string;
  title: string;
  lead: string;
  stack: string[];
  metrics: Metric[];
  children: ReactNode;
}) {
  return (
    <main className="mx-auto max-w-4xl px-5 pt-24 pb-28 md:px-8">
      {/* top bar */}
      <div className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-5 py-4 md:px-8">
          <Link href="/" className="group flex items-center gap-2.5">
            <Logo
              size={28}
              className="text-ink transition-colors group-hover:text-ochre"
            />
            <span className="font-display text-sm font-semibold tracking-tight">
              Sodiq <span className="font-normal text-muted">Olatunde</span>
            </span>
          </Link>
          <Link
            href="/#projects"
            className="font-mono text-xs text-muted transition-colors hover:text-ochre"
          >
            ← all work
          </Link>
        </div>
      </div>

      <Reveal>
        <p className="mono-label mb-5 flex flex-wrap items-center gap-3">
          <span className="text-ochre">Case study</span>
          <span className="h-px w-8 bg-line" />
          <span>{context}</span>
        </p>
        <h1 className="font-display text-[clamp(2.2rem,6vw,3.75rem)] leading-[0.98] font-semibold tracking-tight">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-muted md:text-xl">{lead}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {stack.map((s) => (
            <Chip key={s}>{s}</Chip>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-12 grid grid-cols-3 gap-4 border-y border-line py-8">
          {metrics.map((m) => (
            <div key={m.label}>
              <div className="font-display text-3xl font-semibold text-ochre md:text-4xl">
                {m.value}
              </div>
              <div className="mt-1 font-mono text-[0.62rem] tracking-wide text-faint uppercase">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      {children}

      <Reveal>
        <div className="mt-16 flex flex-col items-start gap-4 border-t border-line pt-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-xl font-medium">
            Want the deeper technical walk-through?
          </p>
          <div className="flex gap-3">
            <a
              href="mailto:olatundesodiq@gmail.com"
              className="rounded-full bg-ochre px-5 py-2.5 font-medium text-onaccent transition-transform hover:-translate-y-0.5"
            >
              Get in touch
            </a>
            <Link
              href="/#projects"
              className="rounded-full border border-line px-5 py-2.5 text-ink transition-colors hover:border-ochre/60 hover:text-ochre"
            >
              More work
            </Link>
          </div>
        </div>
      </Reveal>
    </main>
  );
}

/** A numbered content section within a case study. */
export function CaseSection({
  index,
  title,
  children,
}: {
  index: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <Reveal className="mt-16">
      <section>
        <h2 className="mb-5 flex items-center gap-3 font-display text-2xl font-semibold tracking-tight md:text-3xl">
          <span className="font-mono text-sm text-ochre">{index}</span>
          {title}
        </h2>
        <div className="space-y-4 text-muted leading-relaxed [&_p]:max-w-2xl">
          {children}
        </div>
      </section>
    </Reveal>
  );
}

/** Reusable "key decisions" list, shared across case studies. */
export function Decisions({
  items,
}: {
  items: { title: string; body: string }[];
}) {
  return (
    <div className="space-y-6">
      {items.map((d) => (
        <div key={d.title} className="border-l-2 border-l-ochre/50 pl-5">
          <h3 className="font-display text-lg font-medium text-ink">
            {d.title}
          </h3>
          <p className="mt-2">{d.body}</p>
        </div>
      ))}
    </div>
  );
}
