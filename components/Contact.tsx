import { profile } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const channels = [
  { label: "email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "linkedin", value: "olatunde-sodiq", href: profile.links.linkedin },
  { label: "github", value: "github.com/olacodes", href: profile.links.github },
  { label: "studio", value: "osmani.com.ng", href: profile.links.company },
];

export function Contact() {
  return (
    <section id="contact" className="relative px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          index="04"
          tag="Contact // get in touch"
          title="Get in touch"
          kicker={profile.availability}
        />

        <Reveal>
          <div className="node-frame panel overflow-hidden rounded-lg">
            <div className="grid gap-8 p-6 md:grid-cols-[1.1fr_0.9fr] md:p-9">
              <div>
                <p className="font-display text-2xl leading-snug font-medium md:text-3xl">
                  Got a system to scale, a product to ship, or a team to grow?
                  <span className="text-ochre"> Let&apos;s talk.</span>
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={`mailto:${profile.email}`}
                    className="inline-flex items-center gap-2 rounded-full bg-ochre px-6 py-3 font-medium text-onaccent transition-transform hover:-translate-y-0.5"
                  >
                    Email me →
                  </a>
                  <a
                    href={profile.cvHref}
                    className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-ink transition-colors hover:border-ochre/60 hover:text-ochre"
                  >
                    Download CV
                  </a>
                </div>
              </div>

              {/* channel readout */}
              <div className="space-y-px rounded-md border border-line bg-base-2/50">
                {channels.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="group flex items-center justify-between px-4 py-3.5 transition-colors hover:bg-surface/60"
                  >
                    <span className="mono-label">{c.label}</span>
                    <span className="font-mono text-sm text-muted transition-colors group-hover:text-ochre">
                      {c.value}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <footer className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 font-mono text-xs text-faint md:flex-row">
          <span>
            © {new Date().getFullYear()} {profile.name} — Lagos, Nigeria
          </span>
          <span>Built with Next.js · Available worldwide</span>
        </footer>
      </div>
    </section>
  );
}
