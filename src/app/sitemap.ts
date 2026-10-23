import type { MetadataRoute } from "next";

import { projects } from "@/content";
import { getAllProjectSlugs } from "@/lib/projects";
import { siteUrl } from "@/lib/site";

function isPlaceholderText(value: string | undefined): boolean {
  if (!value) return true;
  return value.startsWith("[PLACEHOLDER");
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteUrl.origin;
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/design-system`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ];

  const projectRoutes = getAllProjectSlugs()
    .map((slug) => {
      const project = projects.find((p) => p.slug === slug);
      if (!project) return null;
      if (project.confidential) return null;
      if (project.verified === false) return null;
      if (isPlaceholderText(project.title)) return null;

      return {
        url: `${baseUrl}/projects/${slug}`,
        lastModified,
        changeFrequency: "monthly" as const,
        priority: 0.8,
      };
    })
    .filter((route): route is NonNullable<typeof route> => route !== null);

  return [...staticRoutes, ...projectRoutes];
}
