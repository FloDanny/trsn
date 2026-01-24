#!/usr/bin/env bash
set -euo pipefail

# Pre-commit guardrails: run lint, format, and test suites before every commit.
cd "$(dirname "$0")/.." || exit 1
printf "Running pre-commit checks...\n"

npm run lint
npm run format
npm run test:vitest
npm run test:k6
npm run test:playwright
npm run test:jest
