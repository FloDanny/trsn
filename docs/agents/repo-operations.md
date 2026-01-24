# Repo Operations

## Branch Authority & Repo State
- The active branch is determined by `git branch` locally.
- If `staging` is checked out, it is a valid working branch.
- `staging` is NOT a feature branch and does NOT require protection prompts.
- Codex must not assume a "work branch" if `staging` is active.

When starting any task, the agent MUST run:
- `git branch`
- `git status`
- `git rev-parse --abbrev-ref HEAD`

Treat the returned branch as authoritative.

If Codex believes it is on a different branch than Git reports:
1. `git fetch origin --prune`
2. `git checkout staging`
3. `git pull origin staging`
4. Re-check: `git branch`, `git status`

### Branch Visibility in Containers
- If only a single local branch (e.g., `work`) is visible, verify remotes and refs before assuming other branches exist.
- Run:
  - `git branch -a`
  - `git remote -v`
  - `git show-ref --heads`
- If a remote is configured, list remote branches with:
  - `git ls-remote --heads origin`
- If no remote branches are available, report the limitation and avoid inventing branch names.

## Project Structure
- `app/` holds App Router pages and layouts.
- `app/globals.css` contains global styles and Tailwind layers.
- `public/` contains static assets.
- Root config includes `next.config.ts`, `tsconfig.json`, `eslint.config.mjs`, and `postcss.config.mjs`.

## Build / Test / Dev Commands
- `npm run dev`
- `npm run build`
- `npm run start`
- `npm run lint`
- `npm run format`
- `npm run test:vitest`
- `npm run test:k6`
- `npm run test:playwright`
- `npm run test:jest`

## Git Hooks
- `.husky/pre-commit` runs `./scripts/pre-commit.sh` to gate commits.
- `./scripts/pre-commit.sh` runs lint, format, and test scripts before each commit.

## Coding Style
- TypeScript + React with the App Router; keep components in `app/`.
- Indentation is 2 spaces; use double quotes and semicolons.
- Tailwind CSS is used for styling; prefer utility classes over bespoke CSS.
