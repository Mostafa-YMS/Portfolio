import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type PageContainerProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "main" | "article";
};

export function PageContainer({ children, className, as: Component = "div" }: PageContainerProps) {
  return (
    <Component
      className={cn(
        "max-w-content xs:px-5 mx-auto w-full px-4 sm:px-6 lg:px-8 xl:px-10",
        className,
      )}
    >
      {children}
    </Component>
  );
}

type PageSectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  spacing?: "compact" | "default" | "generous" | "hero";
};

const spacingMap = {
  compact: "py-10 sm:py-14 lg:py-16",
  default: "py-14 sm:py-20 lg:py-24",
  generous: "py-20 sm:py-28 lg:py-36",
  hero: "pt-16 pb-20 sm:pt-24 sm:pb-28 lg:pt-32 lg:pb-36",
};

export function PageSection({ children, className, id, spacing = "default" }: PageSectionProps) {
  return (
    <section id={id} className={cn(spacingMap[spacing], className)}>
      <PageContainer>{children}</PageContainer>
    </section>
  );
}
