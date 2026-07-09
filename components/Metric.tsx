"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";

/**
 * Telemetry readout. If the value contains a leading number, it counts up
 * once when scrolled into view; otherwise it renders as a static readout.
 */
export function Metric({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();

  // Parse once per `value` — stable identity so the effect doesn't restart.
  const parsed = useMemo(() => {
    const m = value.match(/^(\D*)([\d,]+)(.*)$/);
    if (!m) return null;
    return {
      prefix: m[1],
      target: Number(m[2].replace(/,/g, "")),
      suffix: m[3],
    };
  }, [value]);

  const [display, setDisplay] = useState(() =>
    parsed ? `${parsed.prefix}0${parsed.suffix}` : value,
  );

  useEffect(() => {
    if (!parsed || !inView || reduce) return;

    const controls = animate(0, parsed.target, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) =>
        setDisplay(
          `${parsed.prefix}${Math.round(v).toLocaleString()}${parsed.suffix}`,
        ),
    });
    return () => controls.stop();
  }, [inView, reduce, parsed]);

  // With reduced motion there's no count-up: derive the final value directly.
  const shown =
    reduce && parsed
      ? `${parsed.prefix}${parsed.target.toLocaleString()}${parsed.suffix}`
      : display;

  return (
    <div ref={ref} className="border-l border-line pl-3">
      <div className="font-display text-2xl font-semibold text-ochre md:text-[1.75rem]">
        {shown}
      </div>
      <div className="mt-0.5 font-mono text-[0.62rem] leading-tight tracking-wide text-faint uppercase">
        {label}
      </div>
    </div>
  );
}
