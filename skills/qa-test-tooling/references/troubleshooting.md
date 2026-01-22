# QA Test Tooling Troubleshooting

## init_skill.py permission denied

- Symptom: running `scripts/init_skill.py` directly fails with `permission denied`.
- Fix: invoke with `python3` (script may not be executable).
- Example: `python3 /path/to/init_skill.py <skill-name> --path <skills-dir>`.

## npm install fails for jest-html-reporter

- Symptom: `npm install` fails with `No matching version found for jest-html-reporter@^3.12.0`.
- Fix: use a published version (e.g., `^4.3.0`).

## npm install fails for k6-reporter

- Symptom: `npm install` fails with `404 Not Found` for `k6-reporter`.
- Fix: remove the dependency and generate HTML from the summary JSON in a local script (`tests/k6/report.js`).

## k6 summary export fails with missing directory

- Symptom: k6 cannot write `reports/k6/summary.json` because the directory does not exist.
- Fix: create the directory before running k6 (e.g., `mkdir -p reports/k6`).

## k6 command not found

- Symptom: `k6` is missing when running `npm run test:k6`.
- Fix: install k6 (macOS: `brew install k6`).

## package_skill.py fails with missing yaml

- Symptom: `ModuleNotFoundError: No module named 'yaml'` when packaging skills.
- Fix: install PyYAML (`python3 -m pip install pyyaml`).

## Playwright strict mode violations

- Symptom: `strict mode violation` when a locator matches multiple elements.
- Fix: scope the locator (e.g., `page.locator("header nav").getByRole(...)`) or use a more specific selector.
