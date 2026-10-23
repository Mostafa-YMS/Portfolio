import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { engineeringHighlights } from "@/content/highlights";

function isPlaceholderText(value: string | undefined): boolean {
  if (!value) return true;
  return value.startsWith("[PLACEHOLDER");
}

export function EngineeringHighlightsSection() {
  const highlights = engineeringHighlights.filter((h) => !isPlaceholderText(h.title));

  if (highlights.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col gap-8">
      <header className="flex flex-col gap-3">
        <p className="text-micro text-muted font-mono uppercase">Engineering highlights</p>
        <h2 className="text-heading text-balance">Technical judgment in practice</h2>
        <p className="text-lede text-muted max-w-2xl text-pretty">
          Concrete examples of approaching complex frontend problems with clear trade-offs.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-2">
        {highlights.map((highlight) => (
          <Card key={highlight.id} variant="raised" className="flex h-full flex-col">
            <CardHeader>
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-micro text-muted font-mono uppercase">Highlight</p>
                {highlight.draft ? (
                  <span className="hairline rounded-pill text-micro text-muted border px-2.5 py-1 font-mono uppercase">
                    Draft — needs input
                  </span>
                ) : null}
              </div>
              <CardTitle className="mt-2">{highlight.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col gap-5">
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Problem</p>
                <p className="text-muted text-sm">
                  {!isPlaceholderText(highlight.problem)
                    ? highlight.problem
                    : "Problem description coming soon."}
                </p>
              </div>

              {highlight.constraints && highlight.constraints.length > 0 ? (
                <div className="flex flex-col gap-2">
                  <p className="text-sm font-medium">Constraints</p>
                  <ul className="grid gap-2">
                    {highlight.constraints
                      .filter((c) => !isPlaceholderText(c))
                      .map((constraint, index) => (
                        <li
                          key={index}
                          className="hairline text-muted rounded-lg border px-3 py-2 text-sm"
                        >
                          {constraint}
                        </li>
                      ))}
                  </ul>
                </div>
              ) : null}

              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Approach</p>
                <p className="text-muted text-sm">
                  {!isPlaceholderText(highlight.approach)
                    ? highlight.approach
                    : "Approach description coming soon."}
                </p>
              </div>

              {highlight.tradeoffs && highlight.tradeoffs.length > 0 ? (
                <div className="flex flex-col gap-2">
                  <p className="text-sm font-medium">Trade-offs</p>
                  <ul className="grid gap-2">
                    {highlight.tradeoffs
                      .filter((t) => !isPlaceholderText(t))
                      .map((tradeoff, index) => (
                        <li
                          key={index}
                          className="hairline text-muted rounded-lg border px-3 py-2 text-sm"
                        >
                          {tradeoff}
                        </li>
                      ))}
                  </ul>
                </div>
              ) : null}

              {highlight.outcome && !isPlaceholderText(highlight.outcome) ? (
                <div className="flex flex-col gap-2">
                  <p className="text-sm font-medium">Outcome</p>
                  <p className="text-muted text-sm">{highlight.outcome}</p>
                </div>
              ) : null}

              {highlight.technologies.length > 0 ? (
                <div className="mt-auto flex flex-col gap-2">
                  <p className="text-sm font-medium">Technologies</p>
                  <ul className="flex flex-wrap gap-2">
                    {highlight.technologies
                      .filter((tech) => !isPlaceholderText(tech))
                      .map((tech) => (
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
        ))}
      </div>
    </div>
  );
}
