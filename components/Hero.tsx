import { profile, experience, yearsExperience } from "@/lib/content";

const topStack = ["Python", "FastAPI", "React", "PostgreSQL", "AWS"];

export function Hero() {
  const current = experience.find((e) => e.status === "online") ?? experience[0];

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden px-5 pt-28 pb-16 md:px-8"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        {/* ---- copy ---- */}
        <div>
          <p
            className="rise mono-label mb-6 flex items-center gap-3"
            style={{ animationDelay: "0.05s" }}
          >
            <span>Intro // 00</span>
            <span className="h-px w-10 bg-line" />
            <span className="flex items-center gap-2 text-signal">
              <span className="status-dot" /> available for work
            </span>
          </p>

          <h1 className="font-display text-[clamp(2.75rem,8vw,6rem)] leading-[0.94] font-semibold tracking-tight">
            <span className="rise block" style={{ animationDelay: "0.12s" }}>
              Sodiq
            </span>
            <span
              className="rise block text-glow-ochre text-ochre"
              style={{ animationDelay: "0.22s" }}
            >
              Olatunde
            </span>
          </h1>

          <p
            className="rise mt-5 text-lg font-medium text-ink md:text-xl"
            style={{ animationDelay: "0.32s" }}
          >
            Software Engineer
            <span className="text-faint"> · </span>
            <span className="text-muted">
              {yearsExperience} years · Lagos, remote worldwide
            </span>
          </p>

          <p
            className="rise mt-4 max-w-xl text-base text-muted md:text-lg"
            style={{ animationDelay: "0.4s" }}
          >
            {profile.tagline}
          </p>

          <div
            className="rise mt-8 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "0.5s" }}
          >
            <a
              href="#experience"
              className="group inline-flex items-center gap-2.5 rounded-full bg-ochre px-6 py-3 font-medium text-onaccent transition-transform hover:-translate-y-0.5"
            >
              View experience
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href={profile.cvHref}
              className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-ink transition-colors hover:border-ochre/60 hover:text-ochre"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* ---- at-a-glance card ---- */}
        <div
          className="rise mx-auto w-full max-w-sm lg:mx-0 lg:ml-auto"
          style={{ animationDelay: "0.44s" }}
        >
          <div className="node-frame panel rounded-lg p-6">
            <div className="mb-5 flex items-center justify-between">
              <span className="mono-label">currently</span>
              <span className="flex items-center gap-2 font-mono text-[0.6rem] text-signal">
                <span className="status-dot" /> online
              </span>
            </div>

            <p className="font-display text-xl font-semibold">{current.role}</p>
            <p className="mt-0.5 text-ochre">@ {current.company}</p>
            <p className="mt-1 font-mono text-xs text-faint">
              {current.location}
            </p>

            <div className="my-5 hairline" />

            <p className="mono-label mb-3">core stack</p>
            <div className="flex flex-wrap gap-2">
              {topStack.map((s) => (
                <span
                  key={s}
                  className="rounded border border-line px-2.5 py-1 font-mono text-[0.68rem] text-muted"
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="my-5 hairline" />

            <div className="grid grid-cols-2 gap-2 font-mono text-xs">
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded border border-line px-3 py-2 text-muted transition-colors hover:border-ochre/50 hover:text-ochre"
              >
                LinkedIn <span>↗</span>
              </a>
              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded border border-line px-3 py-2 text-muted transition-colors hover:border-ochre/50 hover:text-ochre"
              >
                GitHub <span>↗</span>
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center justify-between rounded border border-line px-3 py-2 text-muted transition-colors hover:border-ochre/50 hover:text-ochre"
              >
                Email <span>→</span>
              </a>
              <a
                href={profile.cvHref}
                className="flex items-center justify-between rounded border border-line px-3 py-2 text-muted transition-colors hover:border-ochre/50 hover:text-ochre"
              >
                CV <span>↓</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* down cue */}
      <a
        href="#about"
        className="rise absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[0.65rem] tracking-[0.3em] text-faint transition-colors hover:text-ochre"
        style={{ animationDelay: "0.9s" }}
      >
        ↓ SCROLL
      </a>
    </section>
  );
}
