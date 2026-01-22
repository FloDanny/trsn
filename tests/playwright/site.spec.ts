import { expect, test } from "@playwright/test";

test("homepage renders the QA positioning (positive case)", async ({ page }) => {
  // Positive case: the hero copy should load for the base route.
  await page.goto("/");

  await expect(
    page.getByRole("heading", {
      name: "QA systems designed for production reality.",
    })
  ).toBeVisible();
});

test("invalid routes return a 404 (negative case)", async ({ page }) => {
  // Negative case: unknown routes should return a 404 response code.
  const response = await page.goto("/does-not-exist");

  expect(response?.status()).toBe(404);
});
