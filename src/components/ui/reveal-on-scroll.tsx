"use client";

import { useEffect } from "react";

/**
 * Progressive scroll-reveal controller.
 *
 * Elements are visible by default. Only elements below the viewport are marked
 * as pending after hydration, then animated in with IntersectionObserver. This
 * keeps the page usable without JavaScript and respects reduced-motion.
 */
export function RevealOnScroll() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (nodes.length === 0) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !("IntersectionObserver" in window)) return;

    const pending = nodes.filter((node) => {
      if (node.dataset.revealVisible === "true") return false;
      const rect = node.getBoundingClientRect();
      return rect.top >= window.innerHeight * 0.92;
    });

    if (pending.length === 0) return;

    for (const node of pending) {
      node.dataset.revealPending = "true";
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const node = entry.target as HTMLElement;
          node.dataset.revealVisible = "true";
          delete node.dataset.revealPending;
          observer.unobserve(node);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    for (const node of pending) {
      observer.observe(node);
    }

    return () => observer.disconnect();
  }, []);

  return null;
}
