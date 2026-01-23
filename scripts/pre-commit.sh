#!/usr/bin/env bash
set -euo pipefail

# Pre-commit guardrails: run lint to keep policy consistency before every commit.
cd "$(dirname "$0")/.." || exit 1
printf "Running pre-commit lint guard...\n"
npm run lint
npm run format

