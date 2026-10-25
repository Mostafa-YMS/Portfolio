import type { CSSProperties } from "react";

/** Stagger delay for scroll-revealed elements. */
export function revealDelay(index: number, step = 70): CSSProperties {
  return { "--reveal-delay": `${index * step}ms` } as CSSProperties;
}
