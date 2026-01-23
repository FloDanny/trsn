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
