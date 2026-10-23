import type { ContactMethod, ExternalLink, ResumeMetadata } from "./types";

export const contactMethods: ContactMethod[] = [
  {
    type: "email",
    value: "mostafa.yms94@gmail.com",
    href: "mailto:mostafa.yms94@gmail.com",
    label: "Email",
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
