import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import AboutPage from "../../app/about/page";

describe("About page", () => {
  it("renders Cryoport Systems in the client list (positive case)", () => {
    // Verification: the public client list must include the requested client name.
    render(<AboutPage />);

    expect(screen.getByText("Cryoport Systems")).toBeInTheDocument();
  });

  it("does not render unsupported rating language near the client list (negative case)", () => {
    // Validation: client entries must remain factual names, not ranking claims.
    render(<AboutPage />);

    expect(
      screen.queryByText(/top rated|best client|five star/i)
    ).not.toBeInTheDocument();
  });
});
