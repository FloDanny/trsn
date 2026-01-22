import { expect, test } from "@playwright/test";

test("unknown routes return 404 (negative case)", async ({ page }) => {
  const response = await page.goto("/does-not-exist");
  expect(response?.status()).toBe(404);
});
