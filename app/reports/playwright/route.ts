import { promises as fs } from "fs";
import path from "path";

const DEFAULT_REPORT_PATH = path.join(
  process.cwd(),
  "reports",
  "playwright",
  "index.html"
);

const getReportPath = () =>
  process.env.TRSN_PLAYWRIGHT_REPORT_PATH || DEFAULT_REPORT_PATH;

export async function GET() {
  try {
    const content = await fs.readFile(getReportPath());
    return new Response(content, {
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  } catch {
    return new Response("Playwright evidence not available", { status: 404 });
  }
}
