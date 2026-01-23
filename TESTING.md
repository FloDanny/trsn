# Testing at TRSN LLC

This repo treats testing as a system capability. Each suite ships with HTML reporting and at least one positive and one negative check to demonstrate verification and validation.

## ISTQB mandate

Every page or governance-facing change must follow the ISTQB testing approach: capture the expected behavior in an explicit positive case and guard against regressions with a negative case. Document the claim being verified so QAAS outputs stay traceable and testable.

## Tooling Overview

- Vitest: unit + component tests with coverage HTML.
- Jest: unit tests with HTML report + coverage HTML.
- Playwright: UI automation with HTML report.
- k6: performance smoke tests with HTML report.

## Test Types in This Repo

- Unit: small logic checks focused on `lib/` utilities (Vitest/Jest).
- Component: isolated UI checks for React components (Vitest + Testing Library).
- E2E: user-visible flows across routes and navigation (Playwright project: `e2e`).
- Regression: copy, structure, and policy checks to prevent drift (Playwright project: `regression`).
- Performance smoke: basic response health with thresholds (k6).

Keep new tests aligned to these categories and reuse the existing suite names.

## Setup

Install dependencies:

```bash
npm install
```

Install Playwright browsers (first time only):

```bash
npx playwright install
```

Install k6 (required for the k6 suite):

```bash
brew install k6
```

## Running Tests

Vitest (unit + component):

```bash
npm run test:vitest
```

Jest (unit):

```bash
npm run test:jest
```

Playwright (UI):

```bash
npm run test:playwright
```

Playwright report viewer:

```bash
npm run test:playwright:report
```

Playwright report screenshot:

```bash
npm run test:playwright:screenshot
```

Run a specific Playwright suite:

```bash
npx playwright test --project=e2e
npx playwright test --project=regression
```

k6 (performance smoke):

```bash
npm run test:k6
```

## Reports

- Vitest summary: `reports/vitest/index.html`
- Vitest full coverage: `reports/vitest/coverage/index.html`
- Jest report: `reports/jest/report.html`
- Jest coverage: `reports/jest/coverage/index.html`
- Playwright report: `reports/playwright/index.html`
- k6 report: `reports/k6/report.html`
- k6 web dashboard export: `reports/k6/web-dashboard.html`

## Notes

- The test data and utilities live under `tests/` and `lib/`.
- Coverage is scoped to `lib/` utilities to keep thresholds meaningful.
- k6 intentionally requests a 404 route for a negative check, so `http_req_failed` will show non-zero even when the checks pass.
- k6 thresholds live in `tests/k6/smoke.js` to keep performance expectations explicit.
- The web dashboard export is generated when `npm run test:k6` runs; the test duration is set to 60s to ensure enough data for the export.
- k6 uses `BASE_URL` if you want to target a non-local instance:

```bash
BASE_URL=https://example.com npm run test:k6
```
