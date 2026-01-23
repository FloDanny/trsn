import { expect, test } from "@playwright/test";

test("homepage hero and primary CTAs are visible (positive case)", async ({
  page,
}) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", {
      name: "QAAS™ is a productized quality system that ships evidence-first operating confidence.",
    })
  ).toBeVisible();

  await expect(
    page.getByRole("link", { name: "Qualify for a risk review" })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Read the QAAS™ product guide" })
  ).toBeVisible();
});

test("homepage does not show placeholder copy (negative case)", async ({
  page,
}) => {
  await page.goto("/");

  await expect(page.locator("text=/lorem ipsum/i")).toHaveCount(0);
});

test("demo page surfaces the k6 web dashboard interactive links near its title", async ({
  page,
}) => {
  await page.goto("/demo");

  const card = page.locator('div:has-text("k6 web dashboard")').first();

  await expect(
    card.getByText(
      "Interactive HTML. Download the file to explore live metrics and filters."
    )
  ).toBeVisible();
  await expect(
    card.getByRole("link", { name: "Open interactive dashboard" })
  ).toBeVisible();
  await expect(card.getByRole("link", { name: "Download HTML" })).toBeVisible();
});
