import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { Chip } from "./Chip";

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          index="03"
          tag="Projects // built & shipped"
          title="Selected work"
          kicker="Products I founded and platforms I engineered — from studio to shipped."
        />

        {/* founder spotlight — real product previews */}
        <div className="grid gap-6 md:grid-cols-2">
          {featured.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1}>
              <a
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="group node-frame panel flex h-full flex-col overflow-hidden rounded-lg transition-transform hover:-translate-y-1"
              >
                {p.preview && (
                  <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-line bg-base-2">
                    <Image
                      src={p.preview}
                      alt={`${p.name} — product screenshot`}
                      fill
                      sizes="(max-width: 768px) 100vw, 45vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-center justify-between">
                    <span className="mono-label text-ochre">{p.kind}</span>
                    <span className="font-mono text-xs text-faint transition-transform group-hover:translate-x-1">
                      visit ↗
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-3xl font-semibold md:text-4xl">
                    {p.name}
                  </h3>
                  <p className="mt-3 max-w-md text-muted">{p.blurb}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <Chip key={s}>{s}</Chip>
                    ))}
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        {/* platform work */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {rest.map((p, i) => {
            const body = (
              <>
                <div className="flex items-center justify-between">
                  <span className="mono-label">{p.kind}</span>
                  {p.caseStudy && (
                    <span className="font-mono text-[0.6rem] tracking-[0.15em] text-signal uppercase">
                      case study
                    </span>
                  )}
                </div>
                <h3 className="mt-3 font-display text-xl font-medium">
                  {p.name}
                </h3>
                <p className="mt-2 text-sm text-muted">{p.blurb}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <Chip key={s} size="sm">
                      {s}
                    </Chip>
                  ))}
                </div>
                {p.caseStudy && (
                  <span className="mt-5 inline-flex items-center gap-2 font-mono text-xs text-ochre transition-transform group-hover:translate-x-1">
                    Read the case study →
                  </span>
                )}
              </>
            );

            return (
              <Reveal key={p.name} delay={i * 0.1}>
                {p.caseStudy ? (
                  <Link
                    href={p.caseStudy}
                    className="group block h-full rounded-lg border-l-2 border-l-ochre bg-surface/40 p-6 transition-colors hover:bg-surface/70"
                  >
                    {body}
                  </Link>
                ) : (
                  <div className="h-full rounded-lg border-l-2 border-l-ochre/50 bg-surface/20 p-6">
                    {body}
                  </div>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
