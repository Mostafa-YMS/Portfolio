import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { skills } from "@/content";
import type { Skill } from "@/content/types";

type SkillSection = {
  id: string;
  title: string;
  description: string;
  categories: Array<Skill["category"] | "special">;
};

const skillSections: SkillSection[] = [
  {
    id: "core",
    title: "Core frontend",
    description: "Languages and fundamentals I rely on daily.",
    categories: ["languages"],
  },
  {
    id: "frameworks",
    title: "Frameworks and rendering",
    description: "Production frameworks and rendering approaches.",
    categories: ["frameworks"],
  },
  {
    id: "ui",
    title: "UI engineering and design systems",
    description: "Reusable components, styling, and design system patterns.",
    categories: ["ui"],
  },
  {
    id: "data",
    title: "State management and data fetching",
    description: "Application state, APIs, and data flow.",
    categories: ["state-data", "backend-api"],
  },
  {
    id: "forms",
    title: "Forms and validation",
    description: "Complex forms, dynamic fields, and interactive workflows.",
    categories: ["forms-interactions"],
  },
  {
    id: "product",
    title: "Product engineering",
    description: "Pragmatic features for real products and AI-powered interfaces.",
    categories: ["ai"],
  },
  {
    id: "i18n",
    title: "Internationalization and accessibility",
    description: "Multilingual interfaces, RTL layouts, and accessible patterns.",
    categories: ["auth-i18n"],
  },
  {
    id: "tools",
    title: "Development tools",
    description: "Everyday tooling that supports reliable delivery.",
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
        <header className="flex flex-col gap-3">
          <p className="text-micro text-muted font-mono uppercase">Skills</p>
          <h2 className="text-heading text-balance">Technical skills</h2>
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
      <header className="flex flex-col gap-3">
        <p className="text-micro text-muted font-mono uppercase">Skills</p>
        <h2 className="text-heading text-balance">Technical skills</h2>
        <p className="text-lede text-muted max-w-2xl text-pretty">
          Focused on frontend engineering for production web applications, with emphasis on
          reliability, accessibility, and maintainability.
        </p>
      </header>

      {coreSkills.length > 0 ? (
        <Card variant="raised">
          <CardHeader>
            <p className="text-micro text-muted font-mono uppercase">Core strengths</p>
            <CardTitle>Strongest technologies</CardTitle>
            <CardDescription>Technologies I reach for to ship production work.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="flex flex-wrap gap-2">
              {coreSkills.map((skill) => (
                <li
                  key={skill.name}
                  className="hairline-strong rounded-pill text-ink border px-3 py-1 text-sm"
                >
                  {skill.name}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ) : null}

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {sections.map((section) => (
          <Card key={section.id} variant="default" className="h-full">
            <CardHeader>
              <CardTitle className="text-xl">{section.title}</CardTitle>
              <CardDescription>{section.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="flex flex-wrap gap-2">
                {section.items.map((skill) => (
                  <li
                    key={skill.name}
                    className="hairline rounded-pill text-muted border px-2.5 py-1 text-sm"
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
