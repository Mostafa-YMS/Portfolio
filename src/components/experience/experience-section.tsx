import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { experiences } from "@/content";
import type { Experience } from "@/content/types";

function isPlaceholderText(value: string | undefined): boolean {
  if (!value) return true;
  return value.startsWith("[PLACEHOLDER");
}

function formatDateRange(experience: Experience): string {
  const start = experience.startDate;
  const end = experience.current ? "Present" : experience.endDate;

  if (isPlaceholderText(start)) return "";
  if (!end || isPlaceholderText(end)) return start;
  if (experience.current && isPlaceholderText(experience.endDate)) return `${start} — Present`;
  if (experience.current) return `${start} — Present`;
  return `${start} — ${end}`;
}

function getEmploymentType(experience: Experience): string | null {
  if (!experience.locationType) return null;
  switch (experience.locationType) {
    case "remote":
      return "Remote";
    case "hybrid":
      return "Hybrid";
    case "onsite":
      return "Onsite";
    default:
      return null;
  }
}

function getMeta(experience: Experience): string[] {
  const parts: string[] = [];
  const range = formatDateRange(experience);
  if (range) parts.push(range);
  const type = getEmploymentType(experience);
  if (type) parts.push(type);
  if (experience.location && !isPlaceholderText(experience.location)) {
    parts.push(experience.location);
  }
  return parts;
}

export function ExperienceSection() {
  const hasRealExperience = experiences.some(
    (exp) => !isPlaceholderText(exp.company) && !isPlaceholderText(exp.role),
  );

  if (!hasRealExperience) {
    return (
      <div className="flex flex-col gap-6">
        <header className="flex flex-col gap-3">
          <p className="text-micro text-muted font-mono uppercase">Experience</p>
          <h2 className="text-heading text-balance">Professional experience</h2>
          <p className="text-lede text-muted max-w-2xl text-pretty">
            Experience entries will appear here once filled with verified details.
          </p>
        </header>
        <Card variant="default">
          <CardHeader>
            <CardTitle>Coming soon</CardTitle>
            <CardDescription>
              Add verified experience to{" "}
              <code className="font-mono text-xs">src/content/experience.ts</code>.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8">
      <header className="flex flex-col gap-3">
        <p className="text-micro text-muted font-mono uppercase">Experience</p>
        <h2 className="text-heading text-balance">Professional experience</h2>
        <p className="text-lede text-muted max-w-2xl text-pretty">
          Production engineering work focused on modernizing applications, building reusable
          systems, and delivering complex, accessible interfaces.
        </p>
      </header>

      <div className="relative flex flex-col gap-6">
        <div
          className="bg-line absolute top-0 left-4 hidden h-full w-px sm:block"
          aria-hidden="true"
        />
        {experiences.map((experience) => {
          const meta = getMeta(experience);
          const hasCompany = experience.company && !isPlaceholderText(experience.company);
          const hasSummary = experience.summary && !isPlaceholderText(experience.summary);
          const highlights = (experience.highlights || []).filter(
            (h) => h.text && !isPlaceholderText(h.text),
          );
          const technologies = (experience.technologies || []).filter(
            (tech) => tech && !isPlaceholderText(tech),
          );

          return (
            <article key={experience.id} className="relative grid gap-4 sm:grid-cols-[2rem_1fr]">
              <div className="relative hidden sm:flex sm:justify-center">
                <div className="bg-accent mt-6 h-2.5 w-2.5 rounded-full shadow-[0_0_0_6px_var(--accent-subtle)]" />
              </div>
              <Card variant="raised" className="overflow-hidden">
                <CardHeader>
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <CardTitle className="text-xl sm:text-2xl">{experience.role}</CardTitle>
                        {hasCompany ? (
                          <p className="text-muted mt-1 text-sm">{experience.company}</p>
                        ) : null}
                      </div>
                      {meta.length > 0 ? (
                        <p className="text-muted font-mono text-xs uppercase">{meta.join(" · ")}</p>
                      ) : null}
                    </div>
                    {hasSummary ? <CardDescription>{experience.summary}</CardDescription> : null}
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col gap-6">
                  {highlights.length > 0 ? (
                    <div className="flex flex-col gap-3">
                      <p className="text-sm font-medium">Key engineering contributions</p>
                      <ul className="grid gap-2">
                        {highlights.map((highlight, index) => (
                          <li
                            key={index}
                            className="hairline text-muted flex items-start gap-3 rounded-lg border px-4 py-2.5 text-sm"
                          >
                            <span className="bg-accent mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full" />
                            <span>{highlight.text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}

                  {technologies.length > 0 ? (
                    <div className="flex flex-col gap-3">
                      <p className="text-sm font-medium">Relevant technologies</p>
                      <ul className="flex flex-wrap gap-2">
                        {technologies.map((tech) => (
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
            </article>
          );
        })}
      </div>

      <p className="text-caption text-subtle">
        Details shown only when verified. Company names, dates, or sensitive information may be
        omitted if not approved for publication.
      </p>
    </div>
  );
}
