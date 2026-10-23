const fallbackUrl = "http://localhost:3000";
const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

if (process.env.NODE_ENV === "production" && !configuredUrl) {
  console.warn(
    "[site] NEXT_PUBLIC_SITE_URL is not set. Falling back to localhost for metadata URLs.",
  );
}

export const siteConfig = {
  name: "Frontend Engineer",
  title: "Frontend Engineer — React, Next.js & TypeScript",
  description:
    "Frontend engineer specializing in React, Next.js, TypeScript, and AI-powered web applications.",
  url: configuredUrl || fallbackUrl,
  locale: "en_US",
  language: "en",
} as const;

export const siteUrl = new URL(siteConfig.url);
