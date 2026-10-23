import { Container } from "@/components/ui/container";
import { cn } from "@/lib/cn";
import { contactMethods, externalLinks, profile } from "@/content";

function isValidHref(href: string | undefined): href is string {
  if (!href) return false;
  if (href.startsWith("[PLACEHOLDER")) return false;
  if (href.trim().length === 0) return false;
  return true;
}

export function SiteFooter() {
  const year = 2026;
  const displayName = profile.preferredName || profile.displayName;

  const email = contactMethods.find((m) => m.type === "email");
  const links = externalLinks.filter((link) => isValidHref(link.href));

  return (
    <footer className="hairline bg-canvas-subtle border-t">
      <Container className="flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-medium">{displayName}</p>
          <p className="text-muted text-sm">
            © {year} {displayName}. All rights reserved.
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap items-center gap-x-4 gap-y-2">
          {email && isValidHref(email.href) ? (
            <a
              href={email.href}
              className={cn(
                "text-muted duration-medium text-sm transition-[color,opacity] ease-out",
                "hover:text-ink focus-visible:ring-focus focus-visible:ring-offset-canvas-subtle focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
              )}
            >
              {email.label}
            </a>
          ) : null}

          {links.map((link) => (
            <a
              key={`${link.platform}-${link.href}`}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "text-muted duration-medium text-sm transition-[color,opacity] ease-out",
                "hover:text-ink focus-visible:ring-focus focus-visible:ring-offset-canvas-subtle focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </Container>
    </footer>
  );
}
