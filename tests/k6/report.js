import fs from "fs";
import path from "path";

const summaryPath = process.argv[2] || "reports/k6/summary.json";
const outputPath = process.argv[3] || "reports/k6/report.html";

const summary = JSON.parse(fs.readFileSync(summaryPath, "utf-8"));

const checks = summary.metrics?.checks?.values || {};
const httpReqs = summary.metrics?.http_reqs?.values || {};
const httpFailRate = summary.metrics?.http_req_failed?.values || {};
const duration = summary.metrics?.http_req_duration?.values || {};

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>TRSN k6 Report</title>
    <style>
      body { font-family: Arial, sans-serif; background: #f4f4f5; color: #18181b; margin: 0; }
      header { padding: 24px 32px; background: #09090b; color: #fafafa; }
      main { padding: 24px 32px; }
      .grid { display: grid; gap: 16px; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); }
      .card { background: #fff; border-radius: 16px; padding: 16px; box-shadow: 0 10px 20px rgba(9, 9, 11, 0.08); }
      h1 { margin: 0; font-size: 24px; }
      h2 { margin: 0 0 12px; font-size: 16px; color: #3f3f46; }
      .value { font-size: 20px; font-weight: 600; }
      .meta { font-size: 12px; color: #52525b; }
      table { width: 100%; border-collapse: collapse; }
      th, td { padding: 8px 12px; border-bottom: 1px solid #e4e4e7; text-align: left; }
      th { font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; color: #71717a; }
    </style>
  </head>
  <body>
    <header>
      <h1>TRSN k6 Performance Summary</h1>
      <div class="meta">Generated from k6 summary JSON</div>
    </header>
    <main>
      <section class="grid">
        <div class="card">
          <h2>Total Requests</h2>
          <div class="value">${httpReqs.count || 0}</div>
          <div class="meta">Requests executed</div>
        </div>
        <div class="card">
          <h2>Failure Rate</h2>
          <div class="value">${((httpFailRate.rate || 0) * 100).toFixed(2)}%</div>
          <div class="meta">HTTP request failures</div>
        </div>
        <div class="card">
          <h2>Avg Duration</h2>
          <div class="value">${(duration.avg || 0).toFixed(2)} ms</div>
          <div class="meta">Mean response time</div>
        </div>
        <div class="card">
          <h2>Checks Passed</h2>
          <div class="value">${((checks.passes || 0) / Math.max(checks.passes || 0, checks.fails || 0) * 100 || 0).toFixed(2)}%</div>
          <div class="meta">${checks.passes || 0} pass / ${checks.fails || 0} fail</div>
        </div>
      </section>
      <section class="card" style="margin-top: 16px;">
        <h2>Checks Breakdown</h2>
        <table>
          <thead>
            <tr>
              <th>Metric</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Checks Passed</td>
              <td>${checks.passes || 0}</td>
            </tr>
            <tr>
              <td>Checks Failed</td>
              <td>${checks.fails || 0}</td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  </body>
</html>`;

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, html);

console.log(`k6 HTML report written to ${outputPath}`);
