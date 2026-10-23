import type { Project } from "./types";

export const projects: Project[] = [
  {
    id: "proj-presentation-editor",
    slug: "presentation-editor",
    title: "AI-Powered Presentation Editor",
    shortDescription:
      "A Canva-like presentation editing experience focused on slide workflows and interactive component manipulation.",
    longDescription:
      "An interactive presentation editor where users work with slides and editable components. My frontend contribution has included slide navigation and CRUD workflows, component CRUD operations, and component layout and positioning. The case study intentionally describes my contribution rather than claiming ownership of the entire product or its AI generation capabilities.",
    role: "Frontend engineering contributor",
    category: "editor",
    stack: ["React", "Next.js", "TypeScript", "Zustand", "React Query", "Drag-and-Drop"],
    links: [{ type: "case-study", href: "/projects/presentation-editor", label: "View case study" }],
    media: [],
    featured: true,
    confidential: true,
    hasPublicRepo: false,
    hasLiveDemo: false,
    highlights: [
      {
        text: "Implemented slide navigation and slide create, update, and delete workflows.",
        verified: true,
      },
      {
        text: "Implemented component create, update, and delete workflows.",
        verified: true,
      },
      {
        text: "Worked on component layout and positioning within the editor.",
        verified: true,
      },
      {
        text: "Implemented optimistic updates for relevant slide operations.",
        verified: true,
      },
    ],
    challenge:
      "An interactive editor needs coordinated slide workflows and component-level editing without making everyday interactions feel cumbersome.",
    approach:
      "Contributed to the frontend workflows for slide navigation and CRUD, component CRUD, layout, and positioning. Optimistic updates were used for relevant slide operations to make the interface respond promptly while server-backed data changes were processed.",
    learnings:
      "Interactive editing experiences require careful coordination between user actions, local UI state, and server-backed data. The implementation details and trade-offs should be discussed only at a level that does not expose proprietary product information.",
    verified: true,
  },
  {
    id: "proj-ai-productivity-platform",
    slug: "ai-productivity-platform",
    title: "AI Productivity Platform",
    shortDescription:
      "A productivity product with AI-powered workflows, streaming chat interactions, and application interfaces integrated with backend APIs.",
    longDescription:
      "Contributed to frontend experiences for an AI-powered productivity platform. Relevant work has included chat interaction flows, handling streamed assistant responses, application state, API integration, authentication flows, and Arabic/English interface behavior. This summary focuses on frontend contributions and does not claim ownership of the underlying models or backend services.",
    role: "Frontend engineering contributor",
    category: "ai",
    stack: ["React", "Next.js", "TypeScript", "React Query", "Zustand", "Server-Sent Events"],
    links: [
      {
        type: "case-study",
        href: "/projects/ai-productivity-platform",
        label: "View case study",
      },
    ],
    media: [],
    featured: true,
    confidential: true,
    hasPublicRepo: false,
    hasLiveDemo: false,
    highlights: [
      {
        text: "Worked on streaming AI chat interfaces and incremental response handling.",
        verified: true,
      },
      {
        text: "Integrated frontend workflows with backend APIs and application state.",
        verified: true,
      },
      {
        text: "Worked on authentication flows and localized Arabic/English interfaces.",
        verified: true,
      },
    ],
    challenge:
      "AI-powered interfaces need to represent asynchronous responses and conversation state while keeping the interaction understandable to the user.",
    approach:
      "Contributed to the chat UI, streaming-response handling, and application workflows around API integration, state, authentication, and localization. Product-specific architecture and implementation details are intentionally omitted where they may be confidential.",
    learnings:
      "Streaming interfaces require deliberate handling of incremental data, in-progress states, and user actions. The exact implementation and trade-offs should be described further only where they can be shared publicly.",
    verified: true,
  },
  {
    id: "proj-enterprise-frontend",
    slug: "enterprise-frontend-engineering",
    title: "Enterprise Frontend Engineering",
    shortDescription:
      "Frontend work across production applications, including reusable UI systems, complex forms, API workflows, and Arabic/English RTL support.",
    longDescription:
      "A sanitized overview of frontend engineering contributions across production web applications. The work has included modernizing React and Next.js interfaces, building reusable components, integrating APIs, implementing authentication and complex form workflows, and addressing rendering and internationalization issues. This entry is a high-level summary of related experience, not a claim that these activities belong to one single product.",
    role: "Frontend engineering contributor",
    category: "web-app",
    stack: ["React", "Next.js", "TypeScript", "Material UI", "Tailwind CSS", "React Hook Form", "next-intl"],
    links: [
      {
        type: "case-study",
        href: "/projects/enterprise-frontend-engineering",
        label: "View case study",
      },
    ],
    media: [],
    featured: true,
    confidential: true,
    hasPublicRepo: false,
    hasLiveDemo: false,
    highlights: [
      {
        text: "Modernized and improved complex production web application interfaces.",
        verified: true,
      },
      {
        text: "Built reusable UI components and integrated frontend workflows with APIs.",
        verified: true,
      },
      {
        text: "Implemented complex forms, dynamic fields, and validation flows.",
        verified: true,
      },
      {
        text: "Worked on Arabic/English localization, RTL/LTR layout consistency, and SSR/hydration debugging.",
        verified: true,
      },
    ],
    challenge:
      "Production applications often combine complex workflows, shared UI patterns, asynchronous data, and localization requirements that must remain consistent across the product.",
    approach:
      "Contributed to UI modernization, reusable components, API integration, form workflows, and internationalized layouts. This summary intentionally groups related areas of experience without presenting them as one fictional project.",
    learnings:
      "Maintaining complex production interfaces benefits from consistent component patterns, explicit state boundaries, and testing behavior across locale and rendering modes.",
    verified: true,
  },
  {
    id: "proj-rpa-interfaces",
    slug: "rpa-management-interfaces",
    title: "RPA Management Interfaces",
    shortDescription:
      "Workflow-oriented frontend interfaces for RPA-related applications, including integration tabs and list-service UI.",
    longDescription:
      "Frontend contributions to RPA-related interfaces, including integration tabs and list-service UI within a component-based package environment. The public description is limited to the general interface work and does not expose internal service endpoints or proprietary workflow details.",
    role: "Frontend engineering contributor",
    category: "internal",
    stack: ["TypeScript", "Stencil", "Lerna"],
    links: [
      {
        type: "case-study",
        href: "/projects/rpa-management-interfaces",
        label: "View case study",
      },
    ],
    media: [],
    featured: false,
    confidential: true,
    hasPublicRepo: false,
    hasLiveDemo: false,
    highlights: [
      {
        text: "Contributed to integration-tab and list-service frontend interfaces.",
        verified: true,
      },
    ],
    challenge:
      "Reusable interfaces for workflow-oriented applications need to fit within an existing component and package structure.",
    approach:
      "Contributed to RPA frontend package interfaces, including integration tabs and list-service UI. Internal endpoints and confidential workflow details are not included.",
    verified: true,
  },
];
