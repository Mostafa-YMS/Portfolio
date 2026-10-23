import type { Metadata } from "next";
import Link from "next/link";

import { ContactSection } from "@/components/contact/contact-section";
import { ExperienceSection } from "@/components/experience/experience-section";
import { EngineeringHighlightsSection } from "@/components/highlights/engineering-highlights";
import { PageSection } from "@/components/layout/page-container";
import { FeaturedProjects } from "@/components/projects/featured-projects";
import { SkillsSection } from "@/components/skills/skills-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { externalLinks, profile, resumeMetadata } from "@/content";

function isValidHref(href: string | undefined): href is string {
  if (!href) return false;
  if (href.startsWith("[PLACEHOLDER")) return false;
  if (href.trim().length === 0) return false;
  return true;
}

const specialties = [
  "React & Next.js",
  "TypeScript",
  "Design Systems",
  "AI-Powered Interfaces",
  "i18n & RTL Layouts",
  "Complex Forms & Interactions",
];

export const metadata: Metadata = {
  title: "Frontend Engineer — React, Next.js & TypeScript",
  description:
    "Frontend engineer specializing in React, Next.js, TypeScript, AI-powered web applications, design systems, and production-grade interfaces.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Frontend Engineer — React, Next.js & TypeScript",
    description:
      "Frontend engineer specializing in React, Next.js, TypeScript, AI-powered web applications, design systems, and production-grade interfaces.",
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frontend Engineer — React, Next.js & TypeScript",
    description:
      "Frontend engineer specializing in React, Next.js, TypeScript, AI-powered web applications, design systems, and production-grade interfaces.",
  },
};

export default function HomePage() {
  const displayName = profile.preferredName || profile.displayName;
  const github = externalLinks.find((link) => link.platform === "github");
  const hasResume =
    isValidHref(resumeMetadata.filePath) && !resumeMetadata.filePath.includes("[PLACEHOLDER");

  const showAvailability =
    profile.availability &&
    !profile.availability.includes("[") &&
    profile.availability !== "unavailable";

  return (
    <PageSection id="home" spacing="hero" className="relative">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-80 bg-[radial-gradient(60%_60%_at_50%_0%,color-mix(in_srgb,var(--glow)_18%,transparent)_0%,transparent_70%)]" />
      <Container className="flex flex-col gap-12">
        <header className="flex max-w-4xl flex-col gap-6">
          {showAvailability ? (
            <p className="text-micro text-muted font-mono uppercase">
              {profile.availability === "open"
                ? "Open to opportunities"
                : profile.availability === "full-time"
                  ? "Full-time"
                  : profile.availability === "contract"
                    ? "Contract"
                    : profile.availability === "freelance"
                      ? "Freelance"
                      : "Available"}
            </p>
          ) : null}

          <h1 className="text-display text-balance">
            {displayName} — Frontend Engineer building production-grade web applications.
          </h1>

          <p className="text-lede text-muted max-w-2xl text-pretty">
            {profile.specialization}. I focus on robust React and Next.js interfaces, clear design
            systems, reliable API integration, and pragmatic AI-powered features—built for
            performance, accessibility, and maintainability.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Button asChild variant="primary">
              <Link href="/#projects">View Projects</Link>
            </Button>
            {hasResume ? (
              <Button asChild variant="secondary">
                <a href={resumeMetadata.filePath} download={resumeMetadata.filename || undefined}>
                  View Resume
                </a>
              </Button>
            ) : (
              <Button asChild variant="secondary">
                <Link href="/#contact">Get in touch</Link>
              </Button>
            )}
            {github && isValidHref(github.href) ? (
              <Button asChild variant="ghost">
                <a href={github.href} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </Button>
            ) : null}
          </div>
        </header>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <Card variant="raised" className="relative overflow-hidden">
            <div className="via-accent/40 pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent to-transparent" />
            <CardHeader>
              <p className="text-micro text-muted font-mono uppercase">What I build</p>
              <CardTitle>Production products &amp; AI experiences</CardTitle>
              <CardDescription>
                Interfaces for complex workflows: authentication, internationalization with RTL,
                streaming chat, presentation editors, and reusable component systems.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-muted grid gap-2 text-sm sm:grid-cols-2">
                {profile.focusAreas.slice(0, 6).map((item) => (
                  <li key={item} className="hairline rounded-lg border px-3 py-2">
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card variant="default">
            <CardHeader>
              <p className="text-micro text-muted font-mono uppercase">Core specialties</p>
              <CardTitle>Technical focus</CardTitle>
              <CardDescription>
                Areas I reach for to ship reliable, scalable frontends.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="flex flex-wrap gap-2">
                {specialties.map((item) => (
                  <li
                    key={item}
                    className="hairline rounded-pill text-muted border px-3 py-1 text-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <section id="projects" className="scroll-mt-24">
          <FeaturedProjects />
        </section>

        <section id="experience" className="scroll-mt-24">
          <ExperienceSection />
        </section>

        <section id="skills" className="scroll-mt-24">
          <SkillsSection />
        </section>

        <EngineeringHighlightsSection />

        <section id="contact" className="scroll-mt-24">
          <ContactSection />
        </section>
      </Container>
    </PageSection>
  );
}
