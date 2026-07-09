"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

/**
 * App-wide motion settings. `reducedMotion="user"` makes Motion honor the
 * OS "reduce motion" setting for all JS-driven animations automatically.
 */
export function Providers({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
