# Testing at TRSN LLC

This repo treats testing as a system capability. Each suite ships with HTML reporting and at least one positive and one negative check to demonstrate verification and validation.

## Tooling Overview

- Vitest: unit + component tests with coverage HTML.
- Jest: unit tests with HTML report + coverage HTML.
- Playwright: UI automation with HTML report.
- k6: performance smoke tests with HTML report.

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

k6 (performance smoke):

```bash
npm run test:k6
```

## Reports

- Vitest coverage: `reports/vitest/coverage/index.html`
- Jest report: `reports/jest/report.html`
- Jest coverage: `reports/jest/coverage/index.html`
- Playwright report: `reports/playwright/index.html`
- k6 report: `reports/k6/report.html`

## Notes

- The test data and utilities live under `tests/` and `lib/`.
- Coverage is scoped to `lib/` utilities to keep thresholds meaningful.
- k6 intentionally requests a 404 route for a negative check, so `http_req_failed` will show non-zero even when the checks pass.
- k6 uses `BASE_URL` if you want to target a non-local instance:

```bash
BASE_URL=https://example.com npm run test:k6
```
