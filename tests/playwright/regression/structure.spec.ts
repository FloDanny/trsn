import { expect, test } from "@playwright/test";

test("header navigation shows all primary links (regression)", async ({
  page,
}) => {
  await page.goto("/");

  const nav = page.locator("header nav");
  const navLinks = nav.locator("a");
  await expect(navLinks).toHaveCount(7);

  await expect(nav.getByRole("link", { name: "QAAS™" })).toBeVisible();
  await expect(nav.getByRole("link", { name: "MASS Framework" })).toBeVisible();
  await expect(
    nav.getByRole("link", { name: "Testing & Tooling" })
  ).toBeVisible();
  await expect(nav.getByRole("link", { name: "Demo" })).toBeVisible();
  await expect(
    nav.getByRole("link", { name: "AI Agents & Governance" })
  ).toBeVisible();
  await expect(nav.getByRole("link", { name: "About" })).toBeVisible();
  await expect(nav.getByRole("link", { name: "Contact" })).toBeVisible();
});

test("footer message remains intact (regression)", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByText("TRSN LLC — QA systems built for production reality.")
  ).toBeVisible();
  await expect(
    page.getByText("Governance over vibes. Evidence over claims.")
  ).toBeVisible();
});

test("testing-tooling page lists core principles and tools", async ({
  page,
}) => {
  await page.goto("/testing-tooling");

  const principles = page.locator("section").nth(1).locator("li");
  await expect(principles).toHaveCount(4);

  const toolCards = page.locator("section").nth(2).locator("h3");
  await expect(toolCards).toHaveCount(4);
  await expect(page.getByRole("heading", { name: "Playwright" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Vitest" })).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Jest + Supertest" })
  ).toBeVisible();
  await expect(page.getByRole("heading", { name: "K6" })).toBeVisible();
});
