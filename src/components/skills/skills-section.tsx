import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { skills } from "@/content";
import { revealDelay } from "@/lib/tone";
import type { Skill } from "@/content/types";

type SkillSection = {
  id: string;
  title: string;
  description: string;
  glyph: string;
  categories: Array<Skill["category"] | "special">;
};

const skillSections: SkillSection[] = [
  {
    id: "core",
    title: "Core frontend",
    description: "Languages and fundamentals I rely on daily.",
    glyph: "{ }",
    categories: ["languages"],
  },
  {
    id: "frameworks",
    title: "Frameworks and rendering",
    description: "Production frameworks and rendering approaches.",
    glyph: "⚛",
    categories: ["frameworks"],
  },
  {
    id: "ui",
    title: "UI engineering and design systems",
    description: "Reusable components, styling, and design system patterns.",
    glyph: "◈",
    categories: ["ui"],
  },
  {
    id: "data",
    title: "State management and data fetching",
    description: "Client-side state, server data, and API consumption in frontend applications.",
    glyph: "⇄",
    categories: ["state-data"],
  },
  {
    id: "backend",
    title: "Backend and API fundamentals",
    description: "Practical full-stack experience with backend maintenance, Node.js, and data fundamentals.",
    glyph: "⌘",
    categories: ["backend-api"],
  },
  {
    id: "forms",
    title: "Forms and validation",
    description: "Complex forms, dynamic fields, and interactive workflows.",
    glyph: "▤",
    categories: ["forms-interactions"],
  },
  {
    id: "product",
    title: "Product engineering",
    description: "Pragmatic features for real products and AI-powered interfaces.",
    glyph: "✳",
    categories: ["ai"],
  },
  {
    id: "i18n",
    title: "Internationalization and accessibility",
    description: "Multilingual interfaces, RTL layouts, and accessible patterns.",
    glyph: "⊕",
    categories: ["auth-i18n"],
  },
  {
    id: "tools",
    title: "Development tools",
    description: "Everyday tooling that supports reliable delivery.",
    glyph: "⌘",
    categories: ["tooling"],
  },
];

function isPlaceholderText(value: string | undefined): boolean {
  if (!value) return true;
  return value.startsWith("[PLACEHOLDER");
}

function groupSkills(): Array<SkillSection & { items: Skill[] }> {
  return skillSections
    .map((section) => {
      const items = skills.filter((skill) => {
        if (isPlaceholderText(skill.name)) return false;
        return section.categories.includes(skill.category);
      });
      return { ...section, items };
    })
    .filter((section) => section.items.length > 0);
}

export function SkillsSection() {
  const sections = groupSkills();

  if (sections.length === 0) {
    return (
      <div className="flex flex-col gap-6">
        <header className="flex flex-col gap-3" data-reveal>
          <p className="section-eyebrow">Skills</p>
          <h2 className="section-title text-heading text-balance">Technical skills</h2>
          <p className="text-lede text-muted max-w-2xl text-pretty">
            Skills will appear here once added to the typed content model.
          </p>
        </header>
        <Card variant="default">
          <CardHeader>
            <CardTitle>Coming soon</CardTitle>
            <CardDescription>
              Add skills to <code className="font-mono text-xs">src/content/skills.ts</code>.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

  const coreSkills = skills.filter((skill) => skill.featured && !isPlaceholderText(skill.name));

  return (
    <div className="flex flex-col gap-8">
      <header className="flex flex-col gap-3" data-reveal>
        <p className="section-eyebrow">Skills</p>
        <h2 className="section-title text-heading text-balance">Technical skills</h2>
        <p className="text-lede text-muted max-w-2xl text-pretty">
          Focused on frontend engineering for production web applications, with practical full-stack
          experience in backend maintenance and API-connected SaaS products.
        </p>
      </header>

      {coreSkills.length > 0 ? (
        <Card variant="raised" className="tone-blue card-hover" data-reveal style={revealDelay(0)}>
          <CardHeader>
            <p className="section-eyebrow">Core strengths</p>
            <CardTitle>Strongest technologies</CardTitle>
            <CardDescription>Technologies I reach for to ship production work.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="flex flex-wrap gap-2">
              {coreSkills.map((skill) => (
                <li key={skill.name} className="tone-chip rounded-pill px-3 py-1 text-sm">
                  {skill.name}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ) : null}

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {sections.map((section, index) => (
          <Card
            key={section.id}
            variant="default"
            className="tone-blue card-hover h-full"
            data-reveal
            style={revealDelay(index + 1)}
          >
            <CardHeader>
              <div className="flex items-start justify-between gap-3">
                <span className="skill-glyph" aria-hidden="true">
                  {section.glyph}
                </span>
                <span className="tone-chip text-micro rounded-pill px-2.5 py-1 font-mono uppercase">
                  {section.items.length} skills
                </span>
              </div>
              <CardTitle className="text-xl">{section.title}</CardTitle>
              <CardDescription>{section.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="flex flex-wrap gap-2">
                {section.items.map((skill) => (
                  <li
                    key={skill.name}
                    className="tone-chip rounded-pill px-2.5 py-1 text-sm"
                    aria-label={skill.name}
                  >
                    {skill.name}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <p className="text-caption text-subtle">
        Skills are listed based on actual experience. No proficiency percentages or ratings are
        shown.
      </p>
    </div>
  );
}
