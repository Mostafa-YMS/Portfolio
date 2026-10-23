import Link from "next/link";

import { PageSection } from "@/components/layout/page-container";

export default function NotFound() {
  return (
    <PageSection spacing="hero">
      <div className="flex flex-col gap-6">
        <p className="text-micro text-muted font-mono uppercase">404</p>
        <h1 className="text-heading text-balance">Page not found</h1>
        <p className="text-lede text-muted max-w-xl text-pretty">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/#home"
          className="text-ink decoration-accent inline-flex w-fit items-center gap-2 text-sm font-medium underline decoration-2 underline-offset-4"
        >
          Back to home
        </Link>
      </div>
    </PageSection>
  );
}
