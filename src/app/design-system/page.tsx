import type { Metadata } from "next";

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
import { PageHeading } from "@/components/ui/section-heading";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Design System",
  description: "Component and token showcase for the portfolio design system.",
  alternates: {
    canonical: "/design-system",
  },
  robots: {
    index: false,
    follow: false,
  },
};

const palette = [
  { name: "canvas", variable: "--canvas" },
  { name: "canvas-subtle", variable: "--canvas-subtle" },
  { name: "surface", variable: "--surface" },
  { name: "surface-raised", variable: "--surface-raised" },
  { name: "surface-inset", variable: "--surface-inset" },
  { name: "ink", variable: "--ink" },
  { name: "muted", variable: "--muted" },
  { name: "line", variable: "--line" },
  { name: "accent", variable: "--accent" },
  { name: "accent-subtle", variable: "--accent-subtle" },
  { name: "tone-blue", variable: "--tone-blue" },
  { name: "tone-blue-2", variable: "--tone-blue-2" },
  { name: "success", variable: "--success" },
  { name: "warning", variable: "--warning" },
  { name: "danger", variable: "--danger" },
] as const;

const typeScale = [
  { name: "Display", className: "text-display", sample: "Build with intent" },
  { name: "Heading", className: "text-heading", sample: "Selected capabilities" },
  {
    name: "Lede",
    className: "text-lede",
    sample: "I focus on performant interfaces, clear systems, and pragmatic AI integration.",
  },
  {
    name: "Body",
    className: "text-body",
    sample:
      "Comfortable shipping design systems, data-heavy interfaces, and production workflows with tight performance budgets.",
  },
  {
    name: "Caption",
    className: "text-caption",
    sample: "Metadata, supporting text, and UI hints stay legible without competing with content.",
  },
  {
    name: "Micro",
    className: "font-mono text-micro uppercase",
    sample: "Focus · Systems · Delivery",
  },
] as const;

export default function DesignSystemPage() {
  return (
    <>
      <Section spacing="hero">
        <Container>
          <PageHeading
            eyebrow="Design System"
            title="Premium, engineering-focused, one blue tone."
            description="Semantic tokens, typographic rhythm, and restrained primitives built to scale across the portfolio without adding a second styling system."
          />
        </Container>
      </Section>

      <Section spacing="default">
        <Container>
          <header className="flex flex-col gap-3">
            <p className="section-eyebrow">Tokens</p>
            <h2 className="section-title text-heading text-balance">Color palette</h2>
            <p className="text-lede text-muted max-w-2xl text-pretty">
              Light and dark palettes follow the system preference. The portfolio uses a single blue
              brand tone with same-hue gradients.
            </p>
          </header>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {palette.map((token) => (
              <div
                key={token.name}
                className="hairline flex flex-col overflow-hidden rounded-xl border"
              >
                <div
                  className="h-24 w-full"
                  style={{ backgroundColor: `var(${token.variable})` }}
                  aria-hidden="true"
                />
                <div className="flex items-center justify-between px-4 py-3">
                  <p className="text-sm font-medium">{token.name}</p>
                  <p className="text-muted font-mono text-xs">{token.variable}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section spacing="default">
        <Container>
          <header className="flex flex-col gap-3">
            <p className="section-eyebrow">Typography</p>
            <h2 className="section-title text-heading text-balance">Responsive type scale</h2>
            <p className="text-lede text-muted max-w-2xl text-pretty">
              Fluid sizing with tight tracking for display and headings, relaxed line height for
              body copy.
            </p>
          </header>
          <div className="hairline divide-line bg-surface mt-8 divide-y overflow-hidden rounded-2xl border">
            {typeScale.map((item) => (
              <div
                key={item.name}
                className="grid gap-4 px-6 py-6 sm:grid-cols-[10rem_1fr] sm:items-center lg:px-8"
              >
                <p className="text-muted font-mono text-xs uppercase">{item.name}</p>
                <p className={item.className}>{item.sample}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section spacing="default">
        <Container>
          <header className="flex flex-col gap-3">
            <p className="section-eyebrow">Components</p>
            <h2 className="section-title text-heading text-balance">
              Buttons, cards, and section headings
            </h2>
            <p className="text-lede text-muted max-w-2xl text-pretty">
              Accessible by default with visible focus states and reduced-motion support.
            </p>
          </header>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Button variant="primary">Primary action</Button>
            <Button variant="secondary">Secondary action</Button>
            <Button variant="subtle">Subtle action</Button>
            <Button variant="ghost">Ghost action</Button>
            <Button variant="secondary" disabled>
              Disabled
            </Button>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Card variant="raised">
              <CardHeader>
                <p className="text-micro text-muted font-mono uppercase">Featured</p>
                <CardTitle>Systems-first engineering</CardTitle>
                <CardDescription>
                  Opinionated component patterns, strict typing, and performance budgets that keep
                  large product surfaces predictable in production.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-body text-muted">
                  Prefer explicit data flows, server-first rendering, and minimal client JavaScript.
                  Accessibility and resilience are treated as requirements, not polish.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="primary">View approach</Button>
                <Button variant="ghost">Read notes</Button>
              </CardFooter>
            </Card>

            <Card variant="default">
              <CardHeader>
                <p className="text-micro text-muted font-mono uppercase">Capabilities</p>
                <CardTitle>AI-powered interfaces</CardTitle>
                <CardDescription>
                  Practical integrations with clear guardrails, cost awareness, and graceful
                  fallbacks.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-muted grid gap-2 text-sm sm:grid-cols-2">
                  <li className="hairline rounded-lg border px-3 py-2">Typed tool schemas</li>
                  <li className="hairline rounded-lg border px-3 py-2">Streaming UX</li>
                  <li className="hairline rounded-lg border px-3 py-2">Rate limiting</li>
                  <li className="hairline rounded-lg border px-3 py-2">Observability hooks</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="secondary">Case study coming soon</Button>
              </CardFooter>
            </Card>
          </div>
        </Container>
      </Section>
    </>
  );
}
