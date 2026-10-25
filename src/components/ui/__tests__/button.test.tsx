import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Button } from "../button";

describe("Button", () => {
  it("renders a button by default", () => {
    render(<Button>Send</Button>);

    expect(screen.getByRole("button", { name: "Send" })).toBeInTheDocument();
  });

  it("renders its child instead of a nested button when asChild is set", () => {
    render(
      <Button asChild variant="primary">
        <a href="https://example.com/projects">Projects</a>
      </Button>,
    );

    const link = screen.getByRole("link", { name: "Projects" });

    expect(link).toHaveAttribute("href", "https://example.com/projects");
    expect(link).toHaveClass("btn-shine");
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });

  it("merges button and child classes", () => {
    render(
      <Button asChild className="custom-button">
        <a href="https://example.com/contact" className="custom-link">
          Contact
        </a>
      </Button>,
    );

    expect(screen.getByRole("link", { name: "Contact" })).toHaveClass(
      "custom-button",
      "custom-link",
      "btn-shine",
    );
  });
});
