import { expect, test } from "@playwright/test";

test("homepage hero and primary CTAs are visible (positive case)", async ({
  page,
}) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", {
      name: "QA systems designed for production reality.",
    })
  ).toBeVisible();

  await expect(
    page.getByRole("link", { name: "Start with a risk review" })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Read the QAAS™ model" })
  ).toBeVisible();
});

test("homepage does not show placeholder copy (negative case)", async ({
  page,
}) => {
  await page.goto("/");

  await expect(page.locator("text=/lorem ipsum/i")).toHaveCount(0);
});
