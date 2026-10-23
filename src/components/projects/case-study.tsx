import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { projects } from "@/content";
import { cn } from "@/lib/cn";
import type { Project } from "@/content/types";

function isValidHref(href: string | undefined): href is string {
  if (!href) return false;
  if (href.startsWith("[PLACEHOLDER")) return false;
  if (href.trim().length === 0) return false;
  return true;
}

function isPlaceholderText(value: string | undefined): boolean {
  if (!value) return true;
  return value.startsWith("[PLACEHOLDER");
}

function getCategoryLabel(category: Project["category"]): string {
  switch (category) {
    case "web-app":
      return "Web App";
    case "ai":
      return "AI";
    case "editor":
      return "Editor";
    case "design-system":
      return "Design System";
    case "internal":
      return "Internal";
    case "other":
      return "Project";
    default:
      return "Project";
  }
}

export function CaseStudyHeader({ project }: { project: Project }) {
  const isDraft = isPlaceholderText(project.title) || project.verified === false;

  return (
    <header className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center gap-2">
        <span className="hairline rounded-pill text-micro text-muted border px-2.5 py-1 font-mono uppercase">
          {getCategoryLabel(project.category)}
        </span>
        {project.year ? (
          <span className="hairline rounded-pill text-micro text-muted border px-2.5 py-1 font-mono uppercase">
            {project.year}
          </span>
        ) : null}
        {project.confidential ? (
          <span className="hairline-strong rounded-pill text-micro text-muted border px-2.5 py-1 font-mono uppercase">
            Proprietary / Private
          </span>
        ) : null}
        {isDraft ? (
          <span className="hairline rounded-pill text-micro text-muted border px-2.5 py-1 font-mono uppercase">
            Draft
          </span>
        ) : null}
      </div>

      <div className="flex flex-col gap-4">
        <h1 className="text-display text-balance">{project.title}</h1>
        <p className="text-lede text-muted max-w-3xl text-pretty">
          {!isPlaceholderText(project.shortDescription)
            ? project.shortDescription
            : "Project summary coming soon."}
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <Button asChild variant="secondary" size="sm">
          <Link href="/#projects">← Back to projects</Link>
        </Button>
        <Button asChild variant="ghost" size="sm">
          <Link href="/#contact">Get in touch</Link>
        </Button>
      </div>
    </header>
  );
}

export function CaseStudyMeta({ project }: { project: Project }) {
  const hasRole = project.role && !isPlaceholderText(project.role);
  const hasTeam = project.team && !isPlaceholderText(project.team);
  const hasStack = project.stack.length > 0;

  if (!hasRole && !hasTeam && !hasStack) {
    return null;
  }

  return (
    <Card variant="default">
      <CardHeader>
        <p className="text-micro text-muted font-mono uppercase">Overview</p>
        <CardTitle>Project details</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4 sm:grid-cols-2">
        {hasRole ? (
          <div>
            <p className="text-sm font-medium">Role</p>
            <p className="text-muted mt-1 text-sm">{project.role}</p>
            <p className="text-caption text-subtle mt-1">
              Distinguish personal contributions below where relevant.
            </p>
          </div>
        ) : null}
        {hasTeam ? (
          <div>
            <p className="text-sm font-medium">Team</p>
            <p className="text-muted mt-1 text-sm">{project.team}</p>
          </div>
        ) : null}
        {hasStack ? (
          <div className="sm:col-span-2">
            <p className="text-sm font-medium">Technologies</p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <li
                  key={tech}
                  className="hairline rounded-pill text-muted border px-2.5 py-1 text-xs"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}

export function CaseStudySection({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("flex flex-col gap-4", className)}>
      <header className="flex flex-col gap-2">
        <h2 className="text-heading text-balance">{title}</h2>
      </header>
      <div className="text-body text-muted flex flex-col gap-4">{children}</div>
    </section>
  );
}

export function CaseStudyLinks({ project }: { project: Project }) {
  const demoLink = project.links.find((link) => link.type === "demo" || link.type === "live");
  const repoLink = project.links.find((link) => link.type === "repo");

  const showDemo =
    !project.confidential && project.hasLiveDemo && demoLink && isValidHref(demoLink.href);
  const showRepo =
    !project.confidential && project.hasPublicRepo && repoLink && isValidHref(repoLink.href);

  if (!showDemo && !showRepo) {
    return null;
  }

  return (
    <Card variant="default">
      <CardHeader>
        <p className="text-micro text-muted font-mono uppercase">Links</p>
        <CardTitle>Explore</CardTitle>
        <CardDescription>
          Public links only. Private/proprietary resources are not exposed.
        </CardDescription>
      </CardHeader>
      <CardFooter>
        {showDemo && demoLink ? (
          <Button asChild variant="primary" size="sm">
            <a href={demoLink.href} target="_blank" rel="noopener noreferrer">
              {demoLink.label || "Live demo"}
            </a>
          </Button>
        ) : null}
        {showRepo && repoLink ? (
          <Button asChild variant="secondary" size="sm">
            <a href={repoLink.href} target="_blank" rel="noopener noreferrer">
              {repoLink.label || "Source code"}
            </a>
          </Button>
        ) : null}
      </CardFooter>
    </Card>
  );
}

export function RelatedProjects({ current }: { current: Project }) {
  const related = projects
    .filter((project) => project.id !== current.id && !isPlaceholderText(project.slug))
    .slice(0, 3);

  if (related.length === 0) {
    return null;
  }

  return (
    <Section spacing="default">
      <Container>
        <div className="flex flex-col gap-6">
          <header className="flex flex-col gap-2">
            <p className="text-micro text-muted font-mono uppercase">Related</p>
            <h2 className="text-heading text-balance">More projects</h2>
          </header>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((project) => (
              <Card key={project.id} variant="default">
                <CardHeader>
                  <p className="text-micro text-muted font-mono uppercase">
                    {getCategoryLabel(project.category)}
                  </p>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>
                    {!isPlaceholderText(project.shortDescription)
                      ? project.shortDescription
                      : "Project summary coming soon."}
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button asChild variant="ghost" size="sm">
                    <Link href={`/projects/${project.slug}`}>View case study</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
