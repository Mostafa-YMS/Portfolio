import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { contactMethods, externalLinks, profile, resumeMetadata } from "@/content";
import { revealDelay } from "@/lib/tone";

function isValidHref(href: string | undefined): href is string {
  if (!href) return false;
  if (href.startsWith("[PLACEHOLDER")) return false;
  if (href.trim().length === 0) return false;
  return true;
}

function isPlaceholderText(value: string | undefined): boolean {
  if (!value) return true;
  return value.startsWith("[PLACEHOLDER");
}

function getAvailabilityLabel(): string | null {
  switch (profile.availability) {
    case "open":
      return "Open to opportunities";
    case "full-time":
      return "Available full-time";
    case "contract":
      return "Available for contract";
    case "freelance":
      return "Available for freelance";
    default:
      return null;
  }
}

export function ContactSection() {
  const email = contactMethods.find((method) => method.type === "email");
  const links = externalLinks.filter((link) => isValidHref(link.href));
  const location =
    profile.location ?? contactMethods.find((method) => method.type === "location")?.value;

  const hasEmail = email && isValidHref(email.href) && !isPlaceholderText(email.value);
  const hasResume =
    isValidHref(resumeMetadata.filePath) && !resumeMetadata.filePath.includes("[PLACEHOLDER");
  const availability = getAvailabilityLabel();

  return (
    <div className="flex flex-col gap-8">
      <header className="flex flex-col gap-3" data-reveal>
        <p className="section-eyebrow">Contact</p>
        <h2 className="section-title text-heading text-balance">Get in touch</h2>
        <p className="text-lede text-muted max-w-2xl text-pretty">
          Open to discussing engineering opportunities, interesting problems, or collaborations
          around React, Next.js, and production web applications.
        </p>
      </header>

      <Card variant="raised" className="tone-blue relative" data-reveal style={revealDelay(0)}>
        <div
          className="via-tone-blue pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent to-transparent opacity-70"
          aria-hidden="true"
        />

        <CardHeader>
          <div className="flex flex-wrap items-center gap-2">
            {availability ? (
              <span className="tone-chip text-micro rounded-pill px-2.5 py-1 font-mono uppercase">
                <span className="tone-dot" aria-hidden="true" />
                {availability}
              </span>
            ) : null}
            {location ? (
              <span className="tone-chip text-micro rounded-pill px-2.5 py-1 font-mono uppercase">
                Based in {location}
              </span>
            ) : null}
            {profile.openToRemote ? (
              <span className="tone-chip text-micro rounded-pill px-2.5 py-1 font-mono uppercase">
                Open to remote
              </span>
            ) : null}
          </div>
          <CardTitle className="text-2xl sm:text-3xl">Start a conversation</CardTitle>
          <CardDescription>
            The fastest way to reach me is email. You can also find my work and background through
            the links below.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
            <div className="flex flex-col gap-5">
              <div>
                <p className="mini-label">Email</p>
                {hasEmail && email ? (
                  <a
                    href={email.href}
                    className="contact-link focus-visible:ring-focus focus-visible:ring-offset-canvas mt-3 text-base font-medium break-words focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none sm:text-xl"
                  >
                    {email.value}
                  </a>
                ) : (
                  <p className="text-muted mt-2 text-sm">
                    Email address coming soon. Professional links are available below.
                  </p>
                )}
                <p className="text-muted mt-3 max-w-md text-sm text-pretty">
                  Best for opportunities, collaborations, and detailed questions. I usually reply
                  within a couple of business days.
                </p>
              </div>

              {hasEmail && email ? (
                <div>
                  <Button asChild variant="primary" size="lg">
                    <a href={email.href}>Email me</a>
                  </Button>
                </div>
              ) : null}
            </div>

            <div className="flex flex-col gap-6">
              {links.length > 0 ? (
                <div>
                  <p className="mini-label">Professional links</p>
                  <ul className="mt-3 flex flex-col gap-2">
                    {links.map((link) => (
                      <li key={`${link.platform}-${link.href}`}>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="detail-item focus-visible:ring-focus focus-visible:ring-offset-canvas flex items-center justify-between gap-4 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                        >
                          <span className="text-ink text-sm font-medium">{link.label}</span>
                          {"handle" in link && link.handle ? (
                            <span className="text-subtle font-mono text-xs">{link.handle}</span>
                          ) : null}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              <div>
                <p className="mini-label">Resume</p>
                {hasResume ? (
                  <div className="mt-3 flex flex-col gap-2">
                    <Button asChild variant="secondary" size="sm" className="w-fit">
                      <a
                        href={resumeMetadata.filePath}
                        download={resumeMetadata.filename || undefined}
                      >
                        Download resume
                      </a>
                    </Button>
                    {(resumeMetadata.version || resumeMetadata.lastUpdated) && (
                      <p className="text-caption text-subtle">
                        {resumeMetadata.version && `v${resumeMetadata.version}`}
                        {resumeMetadata.version && resumeMetadata.lastUpdated && " · "}
                        {resumeMetadata.lastUpdated && `Updated ${resumeMetadata.lastUpdated}`}
                      </p>
                    )}
                  </div>
                ) : (
                  <p className="text-muted mt-2 text-sm">
                    Resume not configured yet.{" "}
                    {hasEmail && email ? (
                      <a href={email.href} className="contact-link">
                        Email me
                      </a>
                    ) : (
                      "Check back soon."
                    )}
                  </p>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
