import { describe, expect, it } from "vitest";
import { getAllProjectSlugs, getProjectBySlug } from "../projects";

describe("projects utils", () => {
  it("getAllProjectSlugs returns array of strings", () => {
    const slugs = getAllProjectSlugs();
    expect(Array.isArray(slugs)).toBe(true);
  });

  it("getProjectBySlug returns undefined for unknown slug", () => {
    const project = getProjectBySlug("non-existent-slug-xyz");
    expect(project).toBeUndefined();
  });
});
