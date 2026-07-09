import Image from "next/image";
import { skills, education, story, journey, adireNote } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function About() {
  const nodeCount = skills.reduce((n, g) => n + g.items.length, 0);

  return (
    <section id="about" className="relative px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          index="01"
          tag="About // background"
          title="About me"
        />

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-14">
          {/* portrait — background-removed cutout, facing the text */}
          <Reveal>
            <figure className="relative mx-auto w-full max-w-xs sm:max-w-sm lg:mx-0">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(56% 52% at 56% 32%, color-mix(in oklab, var(--color-ochre) 16%, transparent), transparent 70%)",
                }}
              />
              <Image
                src="/sodiq-cutout-v2.png"
                alt="Sodiq Olatunde, software engineer"
                width={1000}
                height={1250}
                sizes="(max-width: 1024px) 80vw, 34vw"
                className="relative z-10 w-full drop-shadow-[0_24px_45px_rgba(0,0,0,0.35)]"
                style={{
                  maskImage:
                    "linear-gradient(to bottom, #000 85%, transparent)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, #000 85%, transparent)",
                }}
              />
              <figcaption className="relative z-10 mt-2 flex items-center justify-center gap-2 font-mono text-[0.6rem] text-faint lg:justify-start">
                <span className="status-dot" /> sodiq.olatunde · lagos, ng
              </figcaption>
            </figure>
          </Reveal>

          {/* the story */}
          <Reveal delay={0.1}>
            <p className="font-display font-semibold leading-[1.05] tracking-tight text-[clamp(2.1rem,4.6vw,3.25rem)]">
              <span className="text-muted">An </span>
              <span className="text-ochre text-glow-ochre">Engineer</span>
              <br className="hidden sm:block" />
              <span className="text-muted"> and </span>
              <span className="text-ochre text-glow-ochre">Founder</span>
              <span className="text-muted">.</span>
            </p>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              {story}
            </p>
            <p className="mt-5 font-mono text-xs text-faint">
              {education.map((e) => e.credential).join("  ·  ")}
            </p>
          </Reveal>
        </div>

        {/* the journey — story, shown */}
        <Reveal className="mt-16 md:mt-20">
          <p className="mono-label mb-6 flex items-center gap-3">
            <span className="text-ochre">the path</span>
            <span className="h-px flex-1 bg-line" />
            <span>sports science → self-taught → remote → founder</span>
          </p>
          <ol className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
            {journey.map((m) => (
              <li key={m.year} className="bg-base p-5">
                <div className="font-mono text-xs text-ochre">{m.year}</div>
                <div className="mt-2 font-display text-base font-semibold leading-tight">
                  {m.title}
                </div>
                <div className="mt-1 font-mono text-[0.62rem] text-faint">
                  {m.org}
                </div>
                <p className="mt-3 text-sm leading-snug text-muted">{m.note}</p>
              </li>
            ))}
          </ol>
        </Reveal>

        {/* skills topology — full width */}
        <Reveal className="mt-16">
          <div className="node-frame panel rounded-lg p-6 md:p-8">
            <div className="mb-6 flex items-center justify-between">
              <span className="mono-label">stack.topology</span>
              <span className="font-mono text-[0.6rem] text-faint">
                {nodeCount} nodes
              </span>
            </div>

            <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
              {skills.map((group) => (
                <div key={group.key}>
                  <p className="mb-3 flex items-center gap-2 font-mono text-xs text-ochre">
                    <span className="inline-block h-1.5 w-1.5 rotate-45 bg-ochre" />
                    {group.label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-md border border-line bg-base-2/60 px-3 py-1.5 text-sm text-muted transition-colors hover:border-ochre/50 hover:text-ink"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* adire — the concept, made legible */}
        <Reveal className="mt-10">
          <div className="flex items-center gap-4 rounded-lg border border-line/60 p-4">
            <span
              aria-hidden
              className="h-14 w-14 shrink-0 rounded-md border border-line"
              style={{
                backgroundColor: "#0c1024",
                backgroundImage:
                  "radial-gradient(circle at center, rgba(146,152,196,0.5) 1.4px, transparent 1.6px), radial-gradient(60% 60% at 50% 30%, rgba(232,161,60,0.5), transparent 70%)",
                backgroundSize: "10px 10px, 100% 100%",
              }}
            />
            <p className="font-mono text-xs leading-relaxed text-faint">
              {adireNote}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
