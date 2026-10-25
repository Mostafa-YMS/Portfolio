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
    title: "Supporting Arabic/English interfaces with RTL",
    problem:
      "Supporting Arabic and English interfaces requires direction-aware layout behavior and consistent rendering across right-to-left and left-to-right locales.",
    constraints: [
      "Keep shared interface patterns consistent across locale directions.",
      "Avoid introducing layout regressions when locale-dependent direction changes.",
    ],
    approach:
      "Worked on localization and RTL/LTR layout support in React and Next.js applications, including locale-dependent layout and styling behavior.",
    tradeoffs: [
      "Direction-sensitive styling needs to stay consistent with shared component rules and design tokens.",
    ],
    technologies: ["React", "Next.js", "TypeScript", "next-intl", "RTL/LTR"],
    draft: false,
    verified: true,
  },
  {
    id: "highlight-editor-interactions",
    title: "Building interactive editor workflows",
    problem:
      "A presentation editor must support slide-level workflows alongside component-level editing, layout, and positioning.",
    constraints: [
      "Keep slide navigation and CRUD workflows coherent with component editing.",
      "Support responsive interactions without exposing proprietary product details.",
    ],
    approach:
      "Implemented slide navigation and CRUD operations, component CRUD, and component layout and positioning. Optimistic updates were used for relevant slide operations.",
    tradeoffs: [
      "Optimistic UI can improve perceived responsiveness, but it must be coordinated carefully with server-backed state and error handling.",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Zustand", "React Query", "Drag-and-Drop"],
    draft: false,
    verified: true,
  },
  {
    id: "highlight-ai-streaming",
    title: "Handling streaming AI chat interactions",
    problem:
      "Chat interfaces need to display incremental assistant responses while preserving a coherent conversation state and clear interaction states.",
    constraints: [
      "Handle partial response data while the assistant is still responding.",
      "Keep send and stop interactions understandable during asynchronous work.",
    ],
    approach:
      "Worked on streaming chat UI and conversation state, including send/stop interactions and handling structured stream events where applicable.",
    tradeoffs: [
      "Frequent updates improve perceived responsiveness but require deliberate state and rendering boundaries.",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Server-Sent Events"],
    draft: false,
    verified: true,
  },
  {
    id: "highlight-full-stack-saas",
    title: "Maintaining full-stack SaaS applications",
    problem:
      "Multi-tenant SaaS products require frontend features to work reliably with backend application behavior across client-specific configurations.",
    constraints: [
      "Maintain existing production behavior while extending product features.",
      "Keep implementation details and customer-specific information confidential.",
    ],
    approach:
      "Contributed across frontend and backend code in a multi-tenant SaaS environment, including Node.js application maintenance, bug fixes, and deployment scripting.",
    tradeoffs: [
      "Changes across application layers require coordination between user-facing workflows, backend behavior, and release processes.",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "SaaS", "Shell Scripting"],
    draft: false,
    verified: true,
  },
];
