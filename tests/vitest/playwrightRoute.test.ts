import { describe, expect, it } from "vitest";
import { GET } from "../../app/reports/playwright/route";

describe("Playwright artifact route (ISTQB evidence guardrail)", () => {
  it("serves the Playwright report when the artifact exists", async () => {
    delete process.env.TRSN_PLAYWRIGHT_REPORT_PATH;
    const response = await GET(
      new Request("http://localhost/reports/playwright")
    );
    expect(response.status).toBe(200);
    const body = await response.text();
    expect(body).toContain("Playwright Test Report");
  });

  it("returns 404 when the report file is missing", async () => {
    process.env.TRSN_PLAYWRIGHT_REPORT_PATH = "/tmp/does-not-exist";
    const response = await GET(
      new Request("http://localhost/reports/playwright")
    );
    expect(response.status).toBe(404);
    delete process.env.TRSN_PLAYWRIGHT_REPORT_PATH;
  });
});
