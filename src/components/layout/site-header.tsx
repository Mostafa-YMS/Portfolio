import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/cn";
import { profile, resumeMetadata } from "@/content";

const navItems = [
  { href: "/#home", label: "Home" },
  { href: "/#projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/#skills", label: "Skills" },
  { href: "/#contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const hasResume = Boolean(resumeMetadata?.filePath);
  const displayName = profile.preferredName || profile.displayName;

  return (
    <header className="hairline bg-canvas/80 supports-[backdrop-filter]:bg-canvas/70 sticky top-0 z-40 border-b backdrop-blur">
      <Container size="wide" className="flex h-16 items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <Link href="/#home" className="group flex items-center gap-2">
            <span className="rounded-pill hairline bg-surface inline-flex h-8 w-8 items-center justify-center border text-xs font-semibold">
              {displayName
                .split(/\s+/)
                .filter(Boolean)
                .slice(0, 2)
                .map((part) => part[0]?.toUpperCase())
                .join("") || "FE"}
            </span>
            <span className="text-sm font-medium tracking-tight">{displayName}</span>
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-pill text-muted duration-medium px-3 py-1.5 text-sm transition-[color,background-color] ease-out",
                  "hover:bg-surface-raised hover:text-ink focus-visible:ring-focus focus-visible:ring-offset-canvas focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          {hasResume ? (
            <Button asChild variant="primary" size="sm" className="hidden sm:inline-flex">
              <a href={resumeMetadata.filePath} download={resumeMetadata.filename || undefined}>
                Resume
              </a>
            </Button>
          ) : null}

          <details className="group relative md:hidden">
            <summary
              className={cn(
                "rounded-pill hairline bg-surface flex h-9 cursor-pointer items-center gap-2 border px-3 text-sm",
                "duration-medium hover:bg-surface-raised transition-colors ease-out",
                "focus-visible:ring-focus focus-visible:ring-offset-canvas focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
              )}
              aria-label="Toggle navigation menu"
            >
              Menu
              <svg
                aria-hidden="true"
                viewBox="0 0 16 16"
                className="duration-medium h-3.5 w-3.5 transition-transform ease-out group-open:rotate-180"
              >
                <path
                  d="M4 6l4 4 4-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </summary>
            <div className="hairline bg-surface shadow-soft absolute right-0 mt-2 w-56 overflow-hidden rounded-2xl border">
              <nav aria-label="Mobile" className="flex flex-col p-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "text-muted duration-medium rounded-xl px-3 py-2 text-sm transition-[color,background-color] ease-out",
                      "hover:bg-surface-raised hover:text-ink",
                      "focus-visible:ring-focus focus-visible:ring-offset-surface focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
                {hasResume ? (
                  <a
                    href={resumeMetadata.filePath}
                    download={resumeMetadata.filename || undefined}
                    className={cn(
                      "text-ink duration-medium mt-1 rounded-xl px-3 py-2 text-sm font-medium transition-colors ease-out",
                      "bg-accent-subtle hover:bg-accent/20",
                      "focus-visible:ring-focus focus-visible:ring-offset-surface focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
                    )}
                  >
                    Download Resume
                  </a>
                ) : null}
              </nav>
            </div>
          </details>
        </div>
      </Container>
    </header>
  );
}
