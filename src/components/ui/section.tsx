import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

type SectionSpacing = "compact" | "default" | "generous" | "hero";

type SectionProps = ComponentPropsWithoutRef<"section"> & {
  spacing?: SectionSpacing;
};

const spacingClasses: Record<SectionSpacing, string> = {
  compact: "py-10 sm:py-14 lg:py-16",
  default: "py-14 sm:py-20 lg:py-24",
  generous: "py-20 sm:py-28 lg:py-36",
  hero: "pt-16 pb-20 sm:pt-24 sm:pb-28 lg:pt-32 lg:pb-36",
};

export function Section({ className, spacing = "default", ...props }: SectionProps) {
  return <section className={cn(spacingClasses[spacing], className)} {...props} />;
}
