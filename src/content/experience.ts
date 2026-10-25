import type { Experience } from "./types";

export const experiences: Experience[] = [
  {
    id: "exp-wakeb",
    company: "Wakeb_data",
    role: "Software Engineer",
    startDate: "2024-11",
    current: true,
    summary:
      "Build and modernize production web applications and AI-powered product interfaces, collaborating with cross-functional teams to deliver product features and improve engineering workflows.",
    highlights: [
      {
        text: "Collaborated with AI, UI/UX, and DevOps teams to design and deliver product features.",
        verified: true,
      },
      {
        text: "Rebuilt a legacy PHP Blade admin panel in Next.js and resolved longstanding bugs.",
        verified: true,
      },
      {
        text: "Integrated frontend product workflows with backend APIs and application services.",
        verified: true,
      },
      {
        text: "Automated deployment pipelines with shell scripting, reducing release time from 30 minutes to 5 minutes (an 83% reduction).",
        verified: true,
      },
    ],
    technologies: ["React", "Next.js", "TypeScript", "REST API Integration", "PHP Blade", "Shell Scripting"],
  },
  {
    id: "exp-pentavalue",
    company: "Pentavalue",
    role: "Software Engineer",
    startDate: "2022-03",
    endDate: "2024-11",
    current: false,
    summary:
      "Contributed to full-stack SaaS product development, white-label deployments, production maintenance, and team mentorship.",
    highlights: [
      {
        text: "Designed and implemented a multi-tenant SaaS platform from the ground up, with multiple white-label versions for different clients.",
        verified: true,
      },
      {
        text: "Worked across frontend and backend systems, including Node.js-based application code, production maintenance, bug fixes, and deployment scripts.",
        verified: true,
      },
      {
        text: "Mentored four junior developers and interns through code reviews and technical guidance.",
        verified: true,
      },
      {
        text: "Interviewed candidates and evaluated take-home assignments as part of the hiring process.",
        verified: true,
      },
      {
        text: "Collaborated with product owners, project managers, and UI/UX teams to define requirements and deliver features.",
        verified: true,
      },
    ],
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "SaaS", "Shell Scripting"],
  },
];
