import { describe, expect, it } from "vitest";
import { GET } from "../../app/reports/k6/report/route";

describe("K6 report route (ISTQB evidence guardrail)", () => {
  it("serves the K6 report when the artifact exists", async () => {
    delete process.env.TRSN_K6_REPORT_PATH;
    const response = await GET(
      new Request("http://localhost/reports/k6/report")
    );
    expect(response.status).toBe(200);
    const body = await response.text();
    expect(body).toContain("TRSN k6 Report");
  });

  it("returns 404 when the report file is missing", async () => {
    process.env.TRSN_K6_REPORT_PATH = "/tmp/nonexistent-k6-report";
    const response = await GET(
      new Request("http://localhost/reports/k6/report")
    );
    expect(response.status).toBe(404);
    delete process.env.TRSN_K6_REPORT_PATH;
  });
});
