import { expect, test } from "@playwright/test";

const navigationItems = [
  {
    label: "QAAS™",
    href: "/qaas",
    heading: "Quality Assurance as a Service is a delivery system.",
  },
  {
    label: "MASS Framework",
    href: "/mass",
    heading: "Models → Agents → Skills.",
  },
  {
    label: "Testing & Tooling",
    href: "/testing-tooling",
    heading: "V² trademark philosophy: Verify, then Validate.",
  },
  {
    label: "AI Agents & Governance",
    href: "/ai-governance",
    heading: "Governance beats clever prompts.",
  },
  {
    label: "About",
    href: "/about",
    heading: "TRSN LLC — QA systems for production-grade teams.",
  },
  {
    label: "Contact",
    href: "/contact",
    heading: "Start with risk and constraints.",
  },
];

test("primary navigation routes to each section (positive case)", async ({
  page,
}) => {
  const nav = page.locator("header nav");

  for (const item of navigationItems) {
    await test.step(`navigate to ${item.label}`, async () => {
      await page.goto("/");
      await nav.getByRole("link", { name: item.label }).click();
      await expect(page).toHaveURL(item.href);
      await expect(
        page.getByRole("heading", { name: item.heading })
      ).toBeVisible();
    });
  }
});
