import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/lib/cn";

type SectionHeadingProps = ComponentPropsWithoutRef<"header"> & {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
};

export function SectionHeading({
  className,
  eyebrow,
  title,
  description,
  align = "left",
  ...props
}: SectionHeadingProps) {
  return (
    <header
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
      {...props}
    >
      {eyebrow ? <p className="text-micro text-muted font-mono uppercase">{eyebrow}</p> : null}
      <h2 className="text-heading text-balance">{title}</h2>
      {description ? (
        <p className="text-lede text-muted max-w-2xl text-pretty">{description}</p>
      ) : null}
    </header>
  );
}

type PageHeadingProps = ComponentPropsWithoutRef<"header"> & {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
};

export function PageHeading({
  className,
  eyebrow,
  title,
  description,
  ...props
}: PageHeadingProps) {
  return (
    <header className={cn("flex flex-col gap-6", className)} {...props}>
      {eyebrow ? <p className="text-micro text-muted font-mono uppercase">{eyebrow}</p> : null}
      <h1 className="text-display max-w-5xl text-balance">{title}</h1>
      {description ? (
        <p className="text-lede text-muted max-w-2xl text-pretty">{description}</p>
      ) : null}
    </header>
  );
}
