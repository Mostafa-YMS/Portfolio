import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

type CardVariant = "default" | "raised" | "subtle" | "outline";
type CardPadding = "compact" | "default" | "spacious";

type CardProps = ComponentPropsWithoutRef<"article"> & {
  variant?: CardVariant;
  padding?: CardPadding;
};

const baseClasses =
  "relative overflow-hidden rounded-2xl transition-[box-shadow,transform,border-color] duration-medium ease-out focus-within:glow-ring motion-reduce:transition-none";

const paddingClasses: Record<CardPadding, string> = {
  compact: "p-5 sm:p-6",
  default: "p-6 sm:p-8",
  spacious: "p-7 sm:p-10 lg:p-12",
};

const variantClasses: Record<CardVariant, string> = {
  default: "border hairline bg-surface shadow-none",
  raised: "border hairline bg-surface-raised shadow-soft",
  subtle: "border hairline bg-surface-inset",
  outline: "border hairline-strong bg-transparent",
};

export function Card({ className, variant = "default", padding = "default", ...props }: CardProps) {
  return (
    <article
      className={cn(baseClasses, paddingClasses[padding], variantClasses[variant], className)}
      {...props}
    />
  );
}

type CardHeaderProps = ComponentPropsWithoutRef<"header">;

export function CardHeader({ className, ...props }: CardHeaderProps) {
  return <header className={cn("flex flex-col gap-3", className)} {...props} />;
}

type CardTitleProps = ComponentPropsWithoutRef<"h3">;

export function CardTitle({ className, ...props }: CardTitleProps) {
  return <h3 className={cn("text-heading text-balance", className)} {...props} />;
}

type CardDescriptionProps = ComponentPropsWithoutRef<"p">;

export function CardDescription({ className, ...props }: CardDescriptionProps) {
  return <p className={cn("text-lede text-muted max-w-2xl text-pretty", className)} {...props} />;
}

type CardContentProps = ComponentPropsWithoutRef<"div">;

export function CardContent({ className, ...props }: CardContentProps) {
  return <div className={cn("mt-6 flex flex-col gap-4", className)} {...props} />;
}

type CardFooterProps = ComponentPropsWithoutRef<"footer">;

export function CardFooter({ className, ...props }: CardFooterProps) {
  return <footer className={cn("mt-8 flex flex-wrap items-center gap-3", className)} {...props} />;
}
