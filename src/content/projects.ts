import type { Project } from "./types";

export const projects: Project[] = [
  {
    id: "proj-[PLACEHOLDER: ID]",
    slug: "[PLACEHOLDER: SLUG-kebab-case]",
    title: "[PLACEHOLDER: PROJECT_TITLE]",
    shortDescription:
      "[PLACEHOLDER: SHORT_DESCRIPTION - 1-2 sentences, describe problem/approach without unverifiable outcomes.]",
    longDescription: "[PLACEHOLDER: LONG_DESCRIPTION - Optional detailed case study text.]",
    year: undefined,
    role: "[PLACEHOLDER: YOUR_ROLE]",
    team: "[PLACEHOLDER: TEAM e.g., solo or team size]",
    category: "web-app",
    stack: ["React", "Next.js", "TypeScript"],
    links: [],
    media: [],
    featured: false,
    confidential: false,
    hasPublicRepo: false,
    hasLiveDemo: false,
    highlights: [
      {
        text: "[PLACEHOLDER: VERIFIED_HIGHLIGHT]",
        verified: false,
      },
    ],
    challenge: "[PLACEHOLDER: PROBLEM_STATEMENT - verifiable context only]",
    approach: "[PLACEHOLDER: APPROACH - your decisions/techniques]",
    learnings: "[PLACEHOLDER: LEARNINGS - optional]",
    verified: false,
  },
];
