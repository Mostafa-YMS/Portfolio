import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ProjectCard } from "../featured-projects";
import type { Project } from "@/content/types";

const mockProject: Project = {
  id: "test-1",
  slug: "test-project",
  title: "Test Project",
  shortDescription: "A test project description",
  longDescription: undefined,
  year: 2026,
  role: "Frontend Developer",
  team: "solo",
  category: "web-app",
  stack: ["React", "TypeScript"],
  links: [{ type: "case-study", href: "/projects/test-project", label: "View case study" }],
  media: [],
  featured: true,
  confidential: false,
  hasPublicRepo: false,
  hasLiveDemo: false,
  highlights: [],
  challenge: undefined,
  approach: undefined,
  learnings: undefined,
  verified: true,
};

describe("ProjectCard", () => {
  it("renders project title", () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByRole("heading", { name: /test project/i })).toBeInTheDocument();
  });

  it("renders category", () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText("Web App")).toBeInTheDocument();
  });

  it("renders case study link when available", () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByRole("link", { name: /view case study/i })).toBeInTheDocument();
  });
});
