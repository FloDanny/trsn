import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import ContactForm from "../../app/contact/ContactForm";

describe("ContactForm", () => {
  it("renders the expected CTA for the support email (positive case)", () => {
    // Positive case: the email CTA should be visible to the user.
    render(<ContactForm />);

    const emailLink = screen.getByRole("link", { name: "support@trsnllc.com" });
    expect(emailLink).toHaveAttribute("href", "mailto:support@trsnllc.com");
  });

  it("does not show unrelated messaging (negative case)", () => {
    // Negative case: ensure we are not leaking unrelated or placeholder text.
    render(<ContactForm />);

    expect(screen.queryByText(/todo/i)).not.toBeInTheDocument();
  });
});
