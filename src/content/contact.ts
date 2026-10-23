import type { ContactMethod, ExternalLink, ResumeMetadata } from "./types";

export const contactMethods: ContactMethod[] = [
  {
    type: "email",
    value: "mostafa.youssef.dev@gmail.com",
    href: "mailto:mostafa.youssef.dev@gmail.com",
    label: "Email",
  },
  {
    type: "location",
    value: "Cairo, Egypt",
    label: "Location",
  },
];

export const externalLinks: ExternalLink[] = [
  {
    platform: "github",
    href: "https://github.com/Mostafa-YMS",
    label: "GitHub",
    handle: "Mostafa-YMS",
  },
];

export const resumeMetadata: ResumeMetadata = {
  filePath: "",
  filename: "",
};
