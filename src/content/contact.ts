import type { ContactMethod, ExternalLink, ResumeMetadata } from "./types";

export const contactMethods: ContactMethod[] = [
  {
    type: "email",
    value: "[PLACEHOLDER: EMAIL_ADDRESS]",
    href: "mailto:[PLACEHOLDER: EMAIL_ADDRESS]",
    label: "Email",
  },
  {
    type: "location",
    value: "[PLACEHOLDER: CITY/COUNTRY]",
    label: "Location",
  },
];

export const externalLinks: ExternalLink[] = [
  {
    platform: "github",
    href: "[PLACEHOLDER: GITHUB_URL]",
    label: "GitHub",
    handle: "[PLACEHOLDER: GITHUB_HANDLE]",
  },
  {
    platform: "linkedin",
    href: "[PLACEHOLDER: LINKEDIN_URL]",
    label: "LinkedIn",
    handle: "[PLACEHOLDER: LINKEDIN_HANDLE]",
  },
];

export const resumeMetadata: ResumeMetadata = {
  filePath: "/resume.pdf",
  filename: "[PLACEHOLDER: RESUME_FILENAME e.g., First-Last-Resume.pdf]",
  version: "[PLACEHOLDER: VERSION e.g., 2025-10]",
  lastUpdated: "[PLACEHOLDER: YYYY-MM-DD]",
  notes: "[PLACEHOLDER: NOTES about resume contents]",
};
