import { expect, test } from "@playwright/test";

const pages = [
  {
    path: "/",
    heading:
      "QAAS™ is a productized quality system that ships evidence-first operating confidence.",
    mustContain: "Live quality evidence is the product output.",
  },
  {
    path: "/qaas",
    heading: "Quality Assurance as a Service is a delivery system.",
    mustContain: "corporate confidence in code deploys",
  },
  {
    path: "/mass",
    heading: "Models → Agents → Skills.",
    mustContain: "MASS is the system-level view of AI delivery.",
  },
  {
    path: "/testing-tooling",
    heading: "V² trademark philosophy: Verify, then Validate.",
    mustContain: "testing stack should reflect risk, not preference",
  },
  {
    path: "/demo",
    heading: "Inspect the QA system, not a slide deck.",
    mustContain: "Open the public repo",
    mustContainRole: "link",
  },
  {
    path: "/ai-governance",
    heading: "Governance beats clever prompts.",
    mustContain:
      "AI systems only scale when agent behavior is bounded, testable, and accountable.",
  },
  {
    path: "/about",
    heading: "TRSN LLC — QA systems for production-grade teams.",
    mustContain: "QA is a system capability.",
  },
  {
    path: "/contact",
    heading: "Start with risk and constraints.",
    mustContain: "Email your context",
    mustContainRole: "heading",
  },
];

const bannedWords =
  /Revolutionary|Game-changing|Best in class|Cutting-edge|Guaranteed/i;

test("core page copy remains stable (regression)", async ({ page }) => {
  for (const pageData of pages) {
    await test.step(`check ${pageData.path}`, async () => {
      await page.goto(pageData.path);
      await expect(
        page.getByRole("heading", { name: pageData.heading })
      ).toBeVisible();
      if (pageData.mustContainRole) {
        await expect(
          page.getByRole(pageData.mustContainRole as "heading" | "link", {
            name: pageData.mustContain,
          })
        ).toBeVisible();
      } else {
        await expect(page.getByText(pageData.mustContain)).toBeVisible();
      }
    });
  }
});

test("banned marketing language does not appear (negative case)", async ({
  page,
}) => {
  for (const pageData of pages) {
    await test.step(`scan ${pageData.path}`, async () => {
      await page.goto(pageData.path);
      await expect(page.locator(`text=/${bannedWords.source}/i`)).toHaveCount(
        0
      );
    });
  }
});
