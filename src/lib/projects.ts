import { notFound } from "next/navigation";

import { projects } from "@/content";
import type { Project } from "@/content/types";

function isPlaceholderText(value: string | undefined): boolean {
  if (!value) return true;
  return value.startsWith("[PLACEHOLDER");
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects
    .filter((project) => !isPlaceholderText(project.slug) && project.slug.trim().length > 0)
    .map((project) => project.slug);
}

export function getRelatedProjects(current: Project, limit = 3): Project[] {
  return projects
    .filter((project) => project.id !== current.id && !isPlaceholderText(project.slug))
    .slice(0, limit);
}

export function ensureProjectExists(slug: string): Project {
  const project = getProjectBySlug(slug);
  if (!project || isPlaceholderText(project.slug)) {
    notFound();
  }
  return project;
}
