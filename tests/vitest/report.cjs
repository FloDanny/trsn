const fs = require("fs");
const path = require("path");

const summaryPath =
  process.argv[2] || "reports/vitest/coverage/coverage-summary.json";
const outputPath = process.argv[3] || "reports/vitest/index.html";

const summary = JSON.parse(fs.readFileSync(summaryPath, "utf-8"));
const totals = summary.total || {};

const pct = (value) => (typeof value === "number" ? value.toFixed(2) : "0.00");

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>TRSN Vitest Coverage Summary</title>
    <style>
      body { font-family: Arial, sans-serif; background: #f4f4f5; color: #18181b; margin: 0; }
      header { padding: 24px 32px; background: #09090b; color: #fafafa; }
      main { padding: 24px 32px; }
      .grid { display: grid; gap: 16px; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); }
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
      <h1>TRSN Vitest Coverage Summary</h1>
      <div class="meta">Generated from coverage-summary.json</div>
    </header>
    <main>
      <section class="grid">
        <div class="card">
          <h2>Statements</h2>
          <div class="value">${pct(totals.statements?.pct)}</div>
          <div class="meta">${totals.statements?.covered || 0} covered</div>
        </div>
        <div class="card">
          <h2>Branches</h2>
          <div class="value">${pct(totals.branches?.pct)}</div>
          <div class="meta">${totals.branches?.covered || 0} covered</div>
        </div>
        <div class="card">
          <h2>Functions</h2>
          <div class="value">${pct(totals.functions?.pct)}</div>
          <div class="meta">${totals.functions?.covered || 0} covered</div>
        </div>
        <div class="card">
          <h2>Lines</h2>
          <div class="value">${pct(totals.lines?.pct)}</div>
          <div class="meta">${totals.lines?.covered || 0} covered</div>
        </div>
      </section>
      <section class="card" style="margin-top: 16px;">
        <h2>Totals</h2>
        <table>
          <thead>
            <tr>
              <th>Metric</th>
              <th>Covered</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Statements</td>
              <td>${totals.statements?.covered || 0}</td>
              <td>${totals.statements?.total || 0}</td>
            </tr>
            <tr>
              <td>Branches</td>
              <td>${totals.branches?.covered || 0}</td>
              <td>${totals.branches?.total || 0}</td>
            </tr>
            <tr>
              <td>Functions</td>
              <td>${totals.functions?.covered || 0}</td>
              <td>${totals.functions?.total || 0}</td>
            </tr>
            <tr>
              <td>Lines</td>
              <td>${totals.lines?.covered || 0}</td>
              <td>${totals.lines?.total || 0}</td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  </body>
</html>`;

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, html);

console.log(`Vitest HTML summary written to ${outputPath}`);
