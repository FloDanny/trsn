---
name: qa-test-tooling
description: Configure and maintain QA test tooling (Vitest, Jest, Playwright, k6) in this Next.js repo, including configs, coverage, HTML reports, and documentation. Use when adding or repairing test suites, improving coverage, or documenting how to run tests and troubleshoot failures.
---

# Qa Test Tooling

## Overview

Use this skill to set up or refine the repo’s testing stack with repeatable scripts, clear coverage targets, and HTML reporting. Keep changes scoped to test tooling and documentation.

## Workflow

### 1. Confirm repo state

- Run the branch checks required by AGENTS.md.
- Avoid architectural changes; stick to test tooling and docs.

### 2. Add or update tooling

- Add dependencies for Vitest, Jest, Playwright, and k6 reporting.
- Create configs in repo root (`vitest.config.ts`, `jest.config.ts`, `playwright.config.ts`).
- Keep test folders under `tests/` and avoid touching app code unless required for coverage.

### 3. Create teaching-focused tests

- Provide at least one positive and one negative case per tool.
- Use generous, explanatory comments in tests.
- Keep coverage scope narrow and achievable (e.g., `lib/` utilities).

### 4. Ensure HTML reporting

- Vitest/Jest: HTML coverage reports + HTML test reports if applicable.
- Playwright: HTML report via built-in reporter.
- k6: JSON summary exported and converted to HTML.

### 5. Document execution

- Add `TESTING.md` with step-by-step commands and report locations.
- Update `README.md` with concise run instructions.

### 6. Capture troubleshooting

- When a failure is resolved, append the fix to `references/troubleshooting.md`.

## References

Use `references/troubleshooting.md` to capture resolved failures and their fixes.
