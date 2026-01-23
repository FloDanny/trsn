const fs = require("fs");
const path = require("path");

const summaryPath = process.argv[2] || "reports/k6/summary.json";
const outputPath = process.argv[3] || "reports/k6/report.html";

const summary = JSON.parse(fs.readFileSync(summaryPath, "utf-8"));

const metrics = summary.metrics || {};
const httpReqs = metrics.http_reqs || {};
const httpFailRate = metrics.http_req_failed || {};
const duration = metrics.http_req_duration || {};
const checksMetric = metrics.checks || {};
const checksGroup = summary.root_group?.checks || {};

const thresholdTargets = Object.entries(metrics)
  .filter(([, metric]) => metric && metric.thresholds)
  .flatMap(([metricName, metric]) =>
    Object.keys(metric.thresholds).map((expression) => ({
      metricName,
      expression,
      metric,
    }))
  );

const operators = ["<=", ">=", "==", "<", ">"];

function getMetricValue(metric, token) {
  if (token === "rate" || token === "value") {
    return metric.value;
  }
  if (Object.prototype.hasOwnProperty.call(metric, token)) {
    return metric[token];
  }
  return undefined;
}

function evaluateThreshold(metric, expression) {
  const operator = operators.find((op) => expression.includes(op));
  if (!operator) {
    return { pass: false, actual: null };
  }

  const [left, right] = expression.split(operator).map((value) => value.trim());
  const actual = getMetricValue(metric, left);
  const target = Number(right);

  if (typeof actual !== "number" || Number.isNaN(target)) {
    return { pass: false, actual };
  }

  switch (operator) {
    case "<":
      return { pass: actual < target, actual };
    case "<=":
      return { pass: actual <= target, actual };
    case ">":
      return { pass: actual > target, actual };
    case ">=":
      return { pass: actual >= target, actual };
    case "==":
      return { pass: actual === target, actual };
    default:
      return { pass: false, actual };
  }
}

const thresholds = thresholdTargets.map((item) => {
  const result = evaluateThreshold(item.metric, item.expression);
  return {
    metricName: item.metricName,
    expression: item.expression,
    actual: result.actual,
    pass: result.pass,
  };
});

const checkResults = Object.values(checksGroup).map((check) => ({
  name: check.name,
  passes: check.passes || 0,
  fails: check.fails || 0,
}));

const thresholdSummary = thresholds.reduce(
  (acc, threshold) => {
    acc.total += 1;
    if (threshold.pass) {
      acc.passed += 1;
    } else {
      acc.failed += 1;
    }
    return acc;
  },
  { total: 0, passed: 0, failed: 0 }
);

const checkSummary = checkResults.reduce(
  (acc, check) => {
    acc.total += 1;
    acc.passes += check.passes;
    acc.fails += check.fails;
    return acc;
  },
  { total: 0, passes: 0, fails: 0 }
);

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
      .status-pass { color: #15803d; font-weight: 600; }
      .status-fail { color: #b91c1c; font-weight: 600; }
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
          <div class="value">${((httpFailRate.value || 0) * 100).toFixed(2)}%</div>
          <div class="meta">HTTP request failures</div>
        </div>
        <div class="card">
          <h2>Avg Duration</h2>
          <div class="value">${(duration.avg || 0).toFixed(2)} ms</div>
          <div class="meta">Mean response time</div>
        </div>
        <div class="card">
          <h2>Checks Passed</h2>
          <div class="value">${(((checksMetric.passes || 0) / Math.max(checksMetric.passes || 0, checksMetric.fails || 0)) * 100 || 0).toFixed(2)}%</div>
          <div class="meta">${checksMetric.passes || 0} pass / ${checksMetric.fails || 0} fail</div>
        </div>
        <div class="card">
          <h2>Thresholds Passed</h2>
          <div class="value">${thresholdSummary.passed}/${thresholdSummary.total}</div>
          <div class="meta">${thresholdSummary.failed} failed</div>
        </div>
      </section>
      <section class="card" style="margin-top: 16px;">
        <h2>Check Results</h2>
        <table>
          <thead>
            <tr>
              <th>Check</th>
              <th>Passes</th>
              <th>Fails</th>
            </tr>
          </thead>
          <tbody>
            ${checkResults
              .map(
                (check) => `
            <tr>
              <td>${check.name}</td>
              <td>${check.passes}</td>
              <td>${check.fails}</td>
            </tr>`
              )
              .join("")}
          </tbody>
        </table>
      </section>
      <section class="card" style="margin-top: 16px;">
        <h2>Threshold Results</h2>
        <table>
          <thead>
            <tr>
              <th>Metric</th>
              <th>Threshold</th>
              <th>Actual</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            ${thresholds
              .map(
                (threshold) => `
            <tr>
              <td>${threshold.metricName}</td>
              <td>${threshold.expression}</td>
              <td>${typeof threshold.actual === "number" ? threshold.actual.toFixed(4) : "n/a"}</td>
              <td class="${threshold.pass ? "status-pass" : "status-fail"}">${threshold.pass ? "PASS" : "FAIL"}</td>
            </tr>`
              )
              .join("")}
          </tbody>
        </table>
      </section>
    </main>
  </body>
</html>`;

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, html);

console.log(`k6 HTML report written to ${outputPath}`);
