"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { stages, profile } from "@/lib/content";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

export function Nav() {
  const [active, setActive] = useState<string>("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );
    for (const s of stages) {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a
          href="#hero"
          className="group flex items-center gap-2.5"
          aria-label="Sodiq Olatunde — home"
        >
          <Logo
            size={30}
            className="text-ink transition-colors group-hover:text-ochre"
          />
          <span className="font-display text-[0.95rem] font-semibold tracking-tight text-ink">
            Sodiq <span className="font-normal text-muted">Olatunde</span>
          </span>
        </a>

        {/* desktop nav */}
        <nav
          aria-label="Sections"
          className="hidden items-center gap-1 rounded-full border border-line bg-base-2/70 px-2 py-1.5 backdrop-blur-md md:flex"
        >
          {stages.map((s) => {
            const on = active === s.id;
            return (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`group relative flex items-center gap-2 rounded-full px-3 py-1.5 text-xs transition-colors ${
                  on ? "text-onaccent" : "text-muted hover:text-ink"
                }`}
              >
                {on && (
                  <span className="absolute inset-0 -z-10 rounded-full bg-ochre" />
                )}
                <span className="font-mono text-[0.6rem] opacity-70">
                  {s.tag}
                </span>
                <span className="font-medium">{s.label}</span>
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          <a
            href={profile.cvHref}
            className="hidden rounded-full border border-ochre/60 px-4 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.15em] text-ochre transition-colors hover:bg-ochre hover:text-onaccent sm:block"
          >
            Download CV
          </a>

          {/* mobile menu button */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="grid h-9 w-9 place-items-center rounded-full border border-line text-ink transition-colors hover:border-ochre/60 hover:text-ochre md:hidden"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
              {menuOpen ? (
                <path d="M18 6 6 18M6 6l12 12" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            aria-label="Sections"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mx-4 overflow-hidden rounded-xl border border-line bg-base-2/95 p-2 backdrop-blur-md md:hidden"
          >
            {stages.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm transition-colors ${
                  active === s.id
                    ? "bg-surface/70 text-ochre"
                    : "text-muted hover:bg-surface/50 hover:text-ink"
                }`}
              >
                <span className="font-mono text-[0.6rem] text-faint">
                  {s.tag}
                </span>
                <span className="font-medium">{s.label}</span>
              </a>
            ))}
            <a
              href={profile.cvHref}
              onClick={() => setMenuOpen(false)}
              className="mt-1 flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-ochre hover:bg-surface/50"
            >
              <span className="font-mono text-[0.6rem] text-faint">↓</span>
              Download CV
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
