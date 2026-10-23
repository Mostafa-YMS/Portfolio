import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { PageSection } from "@/components/layout/page-container";
import {
  CaseStudyHeader,
  CaseStudyLinks,
  CaseStudyMeta,
  CaseStudySection,
  RelatedProjects,
} from "@/components/projects/case-study";
import { Container } from "@/components/ui/container";
import { projects } from "@/content";
import { getAllProjectSlugs } from "@/lib/projects";

function isPlaceholderText(value: string | undefined): boolean {
  if (!value) return true;
  return value.startsWith("[PLACEHOLDER");
}

export function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  if (slugs.length === 0) {
    return [{ slug: "__placeholder__" }];
  }
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project || isPlaceholderText(project.slug)) {
    return {
      title: "Project not found",
      robots: { index: false, follow: false },
    };
  }

  if (project.confidential || project.verified === false) {
    return {
      title: project.title,
      robots: { index: false, follow: false },
    };
  }

  const title = project.title;
  const description = !isPlaceholderText(project.shortDescription)
    ? project.shortDescription
    : "Frontend engineering case study.";

  if (isPlaceholderText(description)) {
    return {
      title: project.title,
      robots: { index: false, follow: false },
    };
  }

  return {
    title,
    description,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title,
      description,
      type: "article",
      url: `/projects/${project.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function ProjectCaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (slug === "__placeholder__") {
    notFound();
  }
  const project = projects.find((p) => p.slug === slug);

  if (!project || isPlaceholderText(project.slug)) {
    notFound();
  }

  const hasLongDescription = !isPlaceholderText(project.longDescription);
  const hasChallenge = !isPlaceholderText(project.challenge);
  const hasApproach = !isPlaceholderText(project.approach);
  const hasHighlights = project.highlights && project.highlights.length > 0;
  const hasLearnings = !isPlaceholderText(project.learnings);
  const hasMedia = project.media && project.media.length > 0;

  const personalHighlights = hasHighlights
    ? project.highlights!.filter((h) => !isPlaceholderText(h.text))
    : [];

  return (
    <>
      <PageSection spacing="hero">
        <Container className="flex flex-col gap-10">
          <CaseStudyHeader project={project} />

          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div className="flex flex-col gap-10">
              {hasLongDescription ? (
                <CaseStudySection title="Overview">
                  <p>{project.longDescription}</p>
                </CaseStudySection>
              ) : (
                <CaseStudySection title="Context &amp; purpose">
                  <p>
                    {!isPlaceholderText(project.shortDescription)
                      ? project.shortDescription
                      : "Project context coming soon."}
                  </p>
                </CaseStudySection>
              )}

              {hasChallenge || hasApproach ? (
                <CaseStudySection title="Engineering approach">
                  {hasChallenge ? (
                    <div className="flex flex-col gap-2">
                      <p className="text-ink text-sm font-medium">Challenge</p>
                      <p>{project.challenge}</p>
                    </div>
                  ) : null}
                  {hasApproach ? (
                    <div className="flex flex-col gap-2">
                      <p className="text-ink text-sm font-medium">Approach</p>
                      <p>{project.approach}</p>
                    </div>
                  ) : null}
                </CaseStudySection>
              ) : null}

              {personalHighlights.length > 0 ? (
                <CaseStudySection title="Personal contributions">
                  <p>
                    The items below reflect my personal contributions where distinguishable from
                    broader team work.
                  </p>
                  <ul className="grid gap-2">
                    {personalHighlights.map((highlight, index) => (
                      <li key={index} className="hairline rounded-lg border px-4 py-3 text-sm">
                        {highlight.text}
                      </li>
                    ))}
                  </ul>
                </CaseStudySection>
              ) : null}

              {hasLearnings ? (
                <CaseStudySection title="Trade-offs &amp; learnings">
                  <p>{project.learnings}</p>
                </CaseStudySection>
              ) : null}

              {hasMedia ? (
                <CaseStudySection title="Screenshots">
                  <p className="text-caption">
                    Only approved, public-safe visuals are shown. No confidential data is exposed.
                  </p>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {project.media!.map((media, index) => (
                      <figure key={index} className="hairline overflow-hidden rounded-2xl border">
                        <Image
                          src={media.src}
                          alt={media.alt}
                          width={media.width || 1200}
                          height={media.height || 800}
                          className="h-full w-full object-cover"
                          sizes="(max-width: 640px) 100vw, 50vw"
                        />
                      </figure>
                    ))}
                  </div>
                </CaseStudySection>
              ) : null}
            </div>

            <aside className="flex flex-col gap-6">
              <CaseStudyMeta project={project} />
              <CaseStudyLinks project={project} />
              <div className="hairline bg-surface rounded-2xl border p-6">
                <p className="text-micro text-muted font-mono uppercase">Notes</p>
                <p className="text-muted mt-2 text-sm">
                  Outcomes and metrics are only shown when verifiably provided. If none are listed,
                  no quantitative claims are made.
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </PageSection>

      <RelatedProjects current={project} />
    </>
  );
}
