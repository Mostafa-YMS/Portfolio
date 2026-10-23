import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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

export function ProjectCard({ project }: { project: Project }) {
  const isDraft = isPlaceholderText(project.title) || project.verified === false;
  const hasMedia = project.media && project.media.length > 0 && project.media[0];
  const media = hasMedia ? project.media![0] : undefined;

  const caseStudyLink = project.links.find((link) => link.type === "case-study");
  const demoLink = project.links.find((link) => link.type === "demo");
  const repoLink = project.links.find((link) => link.type === "repo");

  const showCaseStudy = caseStudyLink && isValidHref(caseStudyLink.href);
  const showDemo = !project.confidential && demoLink && isValidHref(demoLink.href);
  const showRepo =
    !project.confidential && project.hasPublicRepo && repoLink && isValidHref(repoLink.href);

  const contribution = project.role && !isPlaceholderText(project.role) ? project.role : undefined;

  return (
    <Card
      variant="raised"
      className={cn(
        "duration-medium hover:shadow-soft relative flex h-full flex-col overflow-hidden transition-transform ease-out hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0",
        isDraft && "opacity-90",
      )}
    >
      {media ? (
        <div className="hairline relative aspect-[16/9] w-full overflow-hidden border-b">
          <Image
            src={media.src}
            alt={media.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
      ) : (
        <div
          className={cn("hairline relative aspect-[16/9] w-full overflow-hidden border-b", `project-art project-art-${project.category}`)}
          aria-label={`Abstract visual for ${project.title}`}
        >
          <div className="project-art-top">
            <span className="project-art-mark" aria-hidden="true">
              {project.category === "editor" ? "▧" : project.category === "ai" ? "✳" : project.category === "web-app" ? "⌘" : project.category === "internal" ? "↗" : project.category === "design-system" ? "◈" : "✦"}
            </span>
            <span className="project-art-kicker">Selected work / 0{project.id.endsWith("editor") ? "1" : project.id.endsWith("platform") ? "2" : project.id.endsWith("frontend") ? "03" : "04"}</span>
          </div>
          <div className="relative z-10 mt-5">
            <p className="project-art-kicker mb-2">{getCategoryLabel(project.category)} / Case study</p>
            <p className="project-art-title">{project.title}</p>
            <div className="project-art-bars" aria-hidden="true"><span /><span /><span /></div>
            <div className="project-art-grid" aria-hidden="true"><span /><span /><span /></div>
          </div>
        </div>
      )}

      <CardHeader className="flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <span className="hairline rounded-pill text-micro text-muted border px-2.5 py-1 font-mono uppercase">
            {getCategoryLabel(project.category)}
          </span>
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
        <CardTitle className="mt-4">{project.title}</CardTitle>
        <CardDescription>
          {!isPlaceholderText(project.shortDescription)
            ? project.shortDescription
            : "Project description coming soon."}
        </CardDescription>
        {contribution ? (
          <p className="text-caption text-muted">
            <span className="text-ink">Contribution:</span> {contribution}
          </p>
        ) : null}
      </CardHeader>

      <CardContent className="mt-0">
        {project.stack.length > 0 ? (
          <ul className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="hairline rounded-pill text-muted border px-2.5 py-1 text-xs"
              >
                {tech}
              </li>
            ))}
          </ul>
        ) : null}
      </CardContent>

      <CardFooter className="mt-auto">
        {showCaseStudy && caseStudyLink ? (
          <Button asChild variant="primary" size="sm">
            <a href={caseStudyLink.href}>{caseStudyLink.label || "View case study"}</a>
          </Button>
        ) : null}
        {showDemo && demoLink ? (
          <Button asChild variant="secondary" size="sm">
            <a href={demoLink.href} target="_blank" rel="noopener noreferrer">
              {demoLink.label || "Live demo"}
            </a>
          </Button>
        ) : null}
        {showRepo && repoLink ? (
          <Button asChild variant="ghost" size="sm">
            <a href={repoLink.href} target="_blank" rel="noopener noreferrer">
              {repoLink.label || "Source code"}
            </a>
          </Button>
        ) : null}
        {!showCaseStudy && !showDemo && !showRepo ? (
          <p className="text-caption text-subtle">Links coming soon</p>
        ) : null}
      </CardFooter>
    </Card>
  );
}

export function FeaturedProjects() {
  const hasRealProjects = projects.some(
    (project) => !isPlaceholderText(project.title) && project.verified !== false,
  );

  if (!hasRealProjects) {
    return (
      <div className="flex flex-col gap-4">
        <header className="flex flex-col gap-3">
          <p className="text-micro text-muted font-mono uppercase">Projects</p>
          <h2 className="text-heading text-balance">Featured work</h2>
          <p className="text-lede text-muted max-w-2xl text-pretty">
            Projects will appear here once added to the content model with verified details.
          </p>
        </header>
        <Card variant="default">
          <CardHeader>
            <CardTitle>Coming soon</CardTitle>
            <CardDescription>
              Add verified projects to{" "}
              <code className="font-mono text-xs">src/content/projects.ts</code> to populate this
              section.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

  const featured = projects.filter(
    (project) => project.featured && !isPlaceholderText(project.title),
  );

  return (
    <div className="flex flex-col gap-8">
      <header className="flex flex-col gap-3">
        <p className="text-micro text-muted font-mono uppercase">Projects</p>
        <h2 className="text-heading text-balance">Featured work</h2>
        <p className="text-lede text-muted max-w-2xl text-pretty">
          Selected engineering work focused on production interfaces, complex workflows, and
          pragmatic AI integrations.
        </p>
      </header>
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {featured.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
