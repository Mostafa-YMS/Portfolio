import {
  cloneElement,
  isValidElement,
  type ComponentPropsWithoutRef,
  type ReactElement,
} from "react";

import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost" | "subtle";
type ButtonSize = "sm" | "md" | "lg";

type ButtonBaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

type ButtonAsButton = ButtonBaseProps & ComponentPropsWithoutRef<"button"> & { asChild?: false };
type ButtonAsAnchor = ButtonBaseProps & ComponentPropsWithoutRef<"a"> & { asChild: true };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const baseClasses =
  "btn-shine inline-flex items-center justify-center gap-2 rounded-pill font-medium transition-[color,background-color,border-color,box-shadow,opacity,transform] duration-medium ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-canvas disabled:pointer-events-none disabled:opacity-60 active:scale-[0.98] motion-reduce:active:scale-100";

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-10 px-5 text-sm",
  lg: "h-11 px-6 text-sm",
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-accent-ink shadow-soft hover:bg-accent/90 hover:shadow-[0_18px_38px_-22px_var(--accent)] active:bg-accent/85 focus-visible:ring-offset-canvas",
  secondary:
    "border hairline bg-surface text-ink hover:border-line-strong hover:bg-surface-raised active:bg-surface inset-ring-1 inset-ring-line hover:inset-ring-line-strong",
  subtle:
    "text-muted hover:text-ink hover:bg-surface-raised active:bg-surface inset-ring-1 inset-ring-transparent hover:inset-ring-line",
  ghost: "text-muted hover:text-ink hover:bg-surface-inset active:bg-surface",
};

export function Button({
  className,
  variant = "secondary",
  size = "md",
  asChild = false,
  ...props
}: ButtonProps) {
  const classes = cn(baseClasses, sizeClasses[size], variantClasses[variant], className);

  if (asChild) {
    const { children, ...childProps } = props as ComponentPropsWithoutRef<"a">;

    if (!isValidElement(children)) {
      throw new Error("Button: `asChild` requires a single React element child.");
    }

    const child = children as ReactElement<{ className?: string }>;

    return cloneElement(child, {
      ...childProps,
      className: cn(classes, child.props.className),
    });
  }

  return <button className={classes} {...(props as ComponentPropsWithoutRef<"button">)} />;
}
