import type { Experience } from "./types";

export const experiences: Experience[] = [
  {
    id: "exp-[PLACEHOLDER: ID]",
    company: "[PLACEHOLDER: COMPANY_NAME]",
    role: "[PLACEHOLDER: JOB_TITLE]",
    startDate: "[PLACEHOLDER: START_DATE YYYY-MM or YYYY]",
    endDate: "[PLACEHOLDER: END_DATE YYYY-MM or YYYY]",
    current: true,
    location: "[PLACEHOLDER: LOCATION]",
    locationType: "hybrid",
    summary:
      "[PLACEHOLDER: ROLE_SUMMARY - Focus on scope/responsibilities you can verify. Avoid metrics.]",
    highlights: [
      {
        text: "[PLACEHOLDER: HIGHLIGHT_1 - e.g., Modernized production web app using React/Next.js/TypeScript]",
        verified: false,
      },
      {
        text: "[PLACEHOLDER: HIGHLIGHT_2 - e.g., Implemented auth flows and Arabic/English i18n with RTL support]",
        verified: false,
      },
      {
        text: "[PLACEHOLDER: HIGHLIGHT_3 - e.g., Built streaming chat UI for AI-powered product]",
        verified: false,
      },
      {
        text: "[PLACEHOLDER: HIGHLIGHT_4 - e.g., Implemented slide/component management and DnD in presentation editor]",
        verified: false,
      },
    ],
    technologies: ["React", "Next.js", "TypeScript"],
  },
];
