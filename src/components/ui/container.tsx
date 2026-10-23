import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

type ContainerSize = "narrow" | "default" | "wide" | "full";

type ContainerProps = ComponentPropsWithoutRef<"div"> & {
  size?: ContainerSize;
};

const sizeClasses: Record<ContainerSize, string> = {
  narrow: "max-w-narrow",
  default: "max-w-content",
  wide: "max-w-wide",
  full: "max-w-none",
};

export function Container({ className, size = "default", ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        "xs:px-5 mx-auto w-full px-4 sm:px-6 lg:px-8 xl:px-10",
        sizeClasses[size],
        className,
      )}
      {...props}
    />
  );
}
