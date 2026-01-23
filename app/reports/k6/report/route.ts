import { promises as fs } from "fs";
import path from "path";

const DEFAULT_REPORT_PATH = path.join(
  process.cwd(),
  "reports",
  "k6",
  "report.html"
);

const getReportPath = () => process.env.TRSN_K6_REPORT_PATH || DEFAULT_REPORT_PATH;

export async function GET() {
  try {
    const content = await fs.readFile(getReportPath());
    return new Response(content, {
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  } catch (error) {
    console.error("Failed to read K6 report", error);
    return new Response("K6 evidence not available", { status: 404 });
  }
}
