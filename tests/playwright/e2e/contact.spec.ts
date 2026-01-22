import { expect, test } from "@playwright/test";

test("contact page includes intake checklist and mailto CTA (positive case)", async ({
  page,
}) => {
  await page.goto("/contact");

  const intakeItems = page.locator("section").nth(1).locator("li");
  await expect(intakeItems).toHaveCount(4);

  const emailLink = page.getByRole("link", { name: "support@trsnllc.com" });
  await expect(emailLink).toHaveAttribute("href", "mailto:support@trsnllc.com");
});

test("contact page avoids placeholder messaging (negative case)", async ({
  page,
}) => {
  await page.goto("/contact");

  await expect(page.locator("text=/placeholder/i")).toHaveCount(0);
});
