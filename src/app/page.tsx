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

function ProductShowcase() {
  return (
    <div aria-label="Decorative interface illustration showing a presentation editor" className="hero-showcase relative mx-auto w-full max-w-[38rem]">
      <div className="showcase-orb showcase-orb-one" />
      <div className="showcase-orb showcase-orb-two" />
      <div className="showcase-window relative z-10 overflow-hidden rounded-2xl border shadow-2xl">
        <div className="flex items-center justify-between border-b px-4 py-3">
          <div className="flex items-center gap-2" aria-hidden="true">
            <span className="window-dot" /><span className="window-dot" /><span className="window-dot" />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">Canvas / 01</span>
          <span className="rounded-full border px-2 py-1 text-[10px] text-muted">Preview</span>
        </div>
        <div className="showcase-workspace grid grid-cols-[3.25rem_1fr] sm:grid-cols-[4rem_1fr]">
          <aside className="flex flex-col items-center gap-4 border-r py-5" aria-hidden="true">
            <span className="tool-glyph tool-glyph-active">↖</span>
            <span className="tool-glyph">▧</span>
            <span className="tool-glyph">T</span>
            <span className="tool-glyph">◇</span>
            <span className="tool-glyph">⌘</span>
          </aside>
          <div className="min-w-0 p-3 sm:p-5">
            <div className="mb-3 flex items-center justify-between">
              <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted sm:text-[10px]">Untitled presentation</span>
              <span className="text-[10px] text-muted">16:9</span>
            </div>
            <div className="showcase-slide relative overflow-hidden rounded-lg">
              <div className="slide-blob slide-blob-one" />
              <div className="slide-blob slide-blob-two" />
              <div className="relative z-10 flex h-full flex-col justify-between p-4 sm:p-7">
                <span className="w-fit rounded-full border border-white/20 bg-black/10 px-2 py-1 font-mono text-[8px] uppercase tracking-[0.16em] text-white/80">Ideas into impact</span>
                <div>
                  <p className="max-w-[13rem] text-xl font-semibold leading-[1.02] tracking-tight text-white sm:text-3xl">Make room for<br />better ideas.</p>
                  <div className="mt-3 h-1 w-12 rounded-full bg-cyan-300" />
                </div>
                <div className="flex items-end justify-between text-[8px] uppercase tracking-[0.14em] text-white/70">
                  <span>Strategy / 2026</span><span>01 — 08</span>
                </div>
              </div>
            </div>
            <div className="mt-3 grid grid-cols-4 gap-2" aria-hidden="true">
              <div className="mini-slide mini-slide-active"><span /></div>
              <div className="mini-slide"><span /></div>
              <div className="mini-slide"><span /></div>
              <div className="mini-slide"><span /></div>
            </div>
          </div>
        </div>
      </div>
      <div className="showcase-float showcase-float-chat absolute -left-2 bottom-5 z-20 rounded-xl border p-3 shadow-xl sm:-left-8 sm:bottom-10">
        <div className="mb-2 flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-400" /><span className="font-mono text-[9px] uppercase tracking-wider text-muted">Assistant stream</span></div>
        <div className="chat-line w-28" /><div className="chat-line mt-2 w-20" /><div className="chat-line chat-line-accent mt-2 w-24" />
      </div>
      <div className="showcase-float showcase-float-stack absolute -right-1 top-10 z-20 rounded-xl border p-3 shadow-xl sm:-right-5 sm:top-16">
        <p className="mb-2 font-mono text-[9px] uppercase tracking-wider text-muted">Built with</p>
        <div className="flex gap-1.5"><span className="stack-chip">React</span><span className="stack-chip">TS</span><span className="stack-chip">Next</span></div>
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Mostafa Youssef — Software Engineer | React, Next.js & AI",
  description:
    "Software Engineer building modern web and AI products with React, Next.js, and TypeScript, with a focus on production interfaces and complex frontend workflows.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Mostafa Youssef — Software Engineer | React, Next.js & AI",
    description: "Software Engineer building modern web and AI products with React, Next.js, and TypeScript.",
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mostafa Youssef — Software Engineer | React, Next.js & AI",
    description: "Software Engineer building modern web and AI products with React, Next.js, and TypeScript.",
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
    <PageSection id="home" spacing="hero" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[38rem] bg-[radial-gradient(55%_65%_at_78%_15%,color-mix(in_srgb,var(--glow)_45%,transparent)_0%,transparent_72%)]" />
      <Container size="wide" className="flex flex-col gap-20 lg:gap-28">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8">
          <header className="flex max-w-3xl flex-col gap-6">
            {showAvailability ? (
              <p className="text-micro text-muted flex items-center gap-3 font-mono uppercase">
                <span className="availability-pulse" />
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
            <h1 className="text-display text-balance">{displayName} <span className="text-accent">—</span> {profile.headline}</h1>
            <p className="text-lede text-muted max-w-2xl text-pretty">{profile.summary}</p>
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Button asChild variant="primary"><Link href="/#projects">Explore my work <span aria-hidden="true">↗</span></Link></Button>
              {hasResume ? (
                <Button asChild variant="secondary"><a href={resumeMetadata.filePath} download={resumeMetadata.filename || undefined}>View Resume</a></Button>
              ) : (
                <Button asChild variant="secondary"><Link href="/#contact">Get in touch</Link></Button>
              )}
              {github && isValidHref(github.href) ? (
                <Button asChild variant="ghost"><a href={github.href} target="_blank" rel="noopener noreferrer">GitHub ↗</a></Button>
              ) : null}
            </div>
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 border-t pt-5 text-sm text-muted">
              <span>Frontend engineering</span><span aria-hidden="true" className="text-accent">✳</span><span>AI product interfaces</span><span aria-hidden="true" className="text-accent">✳</span><span>Production systems</span>
            </div>
          </header>
          <ProductShowcase />
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
          <Card variant="raised" padding="spacious" className="relative">
            <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-70" />
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
                {profile.focusAreas.slice(0, 6).map((item) => <li key={item} className="focus-tile rounded-lg border px-3 py-3">{item}</li>)}
              </ul>
            </CardContent>
          </Card>
          <Card variant="default" padding="spacious">
            <CardHeader>
              <p className="text-micro text-muted font-mono uppercase">Core specialties</p>
              <CardTitle>Technical focus</CardTitle>
              <CardDescription>Areas I reach for to ship reliable, scalable frontends.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="flex flex-wrap gap-2">
                {specialties.map((item) => <li key={item} className="specialty-chip rounded-pill border px-3 py-2 text-sm">{item}</li>)}
              </ul>
            </CardContent>
          </Card>
        </div>

        <section id="projects" className="scroll-mt-24"><FeaturedProjects /></section>
        <section id="experience" className="scroll-mt-24"><ExperienceSection /></section>
        <section id="skills" className="scroll-mt-24"><SkillsSection /></section>
        <EngineeringHighlightsSection />
        <section id="contact" className="scroll-mt-24"><ContactSection /></section>
      </Container>
    </PageSection>
  );
}
