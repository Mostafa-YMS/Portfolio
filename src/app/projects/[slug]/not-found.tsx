import Link from "next/link";

import { PageSection } from "@/components/layout/page-container";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <PageSection spacing="hero">
      <Container className="flex flex-col gap-6">
        <p className="text-micro text-muted font-mono uppercase">404</p>
        <h1 className="text-heading text-balance">Project not found</h1>
        <p className="text-lede text-muted max-w-xl text-pretty">
          This case study doesn&apos;t exist or isn&apos;t published yet.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <Button asChild variant="primary">
            <Link href="/#projects">Back to projects</Link>
          </Button>
          <Button asChild variant="ghost">
            <Link href="/#contact">Get in touch</Link>
          </Button>
        </div>
      </Container>
    </PageSection>
  );
}
