import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Home from "../../app/page";

describe("Home page", () => {
  it("renders the QAAS hero language (positive case)", () => {
    // ISTQB positive case: the hero statement must be visible so readers know the product focus.
    render(<Home />);

    const heroHeading = screen.getByRole("heading", {
      level: 1,
      name: /QAAS™ is a productized quality system that ships evidence-first operating confidence./i,
    });
    expect(heroHeading).toBeInTheDocument();
  });

  it("does not render placeholder or unrelated marketing copy (negative case)", () => {
    // ISTQB negative case: ensure placeholder text never appears on the homepage.
    render(<Home />);

    expect(screen.queryByText(/todo/i)).not.toBeInTheDocument();
  });
});
