export type EngineeringHighlight = {
  id: string;
  title: string;
  problem: string;
  constraints?: string[];
  approach: string;
  tradeoffs?: string[];
  outcome?: string;
  technologies: string[];
  draft: boolean;
  verified: boolean;
};

export const engineeringHighlights: EngineeringHighlight[] = [
  {
    id: "highlight-i18n-rtl",
    title: "Arabic/English interfaces with RTL support",
    problem:
      "[PLACEHOLDER: PROBLEM - Describe a specific, verifiable scenario where you needed to support both LTR and RTL layouts.]",
    constraints: [
      "[PLACEHOLDER: CONSTRAINT 1 - e.g., Keep layout consistent across bidirectional text]",
      "[PLACEHOLDER: CONSTRAINT 2 - e.g., Handle locale switching without layout shift]",
    ],
    approach:
      "[PLACEHOLDER: APPROACH - Describe your concrete decisions (directional CSS, logical properties, translation structure) without exposing internal details.]",
    tradeoffs: [
      "[PLACEHOLDER: TRADEOFF - e.g., Choosing logical CSS properties over manual RTL overrides]",
    ],
    outcome: undefined,
    technologies: ["React", "Next.js", "TypeScript", "i18n"],
    draft: true,
    verified: false,
  },
  {
    id: "highlight-editor-interactions",
    title: "Interactive editor workflows",
    problem:
      "[PLACEHOLDER: PROBLEM - Describe a specific editor/workflow challenge you addressed.]",
    constraints: [
      "[PLACEHOLDER: CONSTRAINT - e.g., Preserve UI state and handle complex component interactions]",
    ],
    approach:
      "[PLACEHOLDER: APPROACH - Focus on architecture decisions (state structure, composition) rather than listing libraries.]",
    tradeoffs: [
      "[PLACEHOLDER: TRADEOFF - e.g., Balancing flexibility vs. complexity in component management]",
    ],
    outcome: undefined,
    technologies: ["React", "TypeScript", "Drag-and-Drop"],
    draft: true,
    verified: false,
  },
  {
    id: "highlight-ai-streaming",
    title: "Streaming AI chat interfaces",
    problem: "[PLACEHOLDER: PROBLEM - Describe a verifiable challenge with streaming responses.]",
    constraints: [
      "[PLACEHOLDER: CONSTRAINT - e.g., Handle partial responses and maintain UX during streaming]",
    ],
    approach:
      "[PLACEHOLDER: APPROACH - Describe how you structured state/updates for streamed content.]",
    tradeoffs: ["[PLACEHOLDER: TRADEOFF - e.g., Trade-off between responsiveness and complexity]"],
    outcome: undefined,
    technologies: ["React", "Next.js", "TypeScript"],
    draft: true,
    verified: false,
  },
];
