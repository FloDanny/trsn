
# AGENTS.md
## TRSN LLC — Agent Operating Contract (Next.js)

---

## 1. Purpose

This repository powers **TRSNLLC.com**, the public authority site for **TRSN LLC**.

The site exists to:
- Educate technical leaders
- Demonstrate QAAS™ (Quality Assurance as a Service)
- Demonstrate MASS (Models → Agents → Skills)
- Generate qualified inbound leads
- Serve as a **live, inspectable demo** of agent-governed systems

This is not a brochure site.  
This is a **working example of system-first AI engineering**.

---

## 2. Primary Audience

Content is written for:
- Engineering leaders
- QA leaders
- CTOs
- Founders with real production systems

Assume readers are:
- Technically literate
- Skeptical of hype
- Outcome-focused
- Short on time

---

## 3. Technology Stack (Locked)

- Framework: **Next.js**
- Rendering: Static-first, SSR only when justified
- Hosting: Vercel
- Styling: Tailwind CSS
- Content: MDX (Markdown + React)
- Forms: Server routes only
- Analytics: Passive, privacy-respecting

Agents **must not** introduce:
- WordPress
- Page builders
- Heavy client-side state for content pages
- Unapproved CMS platforms

---

## 4. Agent Authority

Agents operating in this repo **ARE ALLOWED TO**:
- Create and refactor Next.js pages
- Create and edit MDX content
- Improve clarity, structure, and authority of copy
- Propose new routes and site sections
- Generate diagrams, examples, and supporting visuals
- Scaffold internal demos (sandboxed only)

Agents **MUST NOT**:
- Introduce breaking architectural changes without proposal
- Add unnecessary dependencies
- Over-engineer solutions
- Add marketing fluff or vague claims
- Modify DNS, hosting, or billing configuration

---

## 5. Content Principles (Hard Rules)

All content must:
- Be technically credible
- Be specific, not generic
- Teach before selling
- Avoid buzzwords unless explicitly defined
- Tie ideas back to real system outcomes

Banned language unless proven:
- “Revolutionary”
- “Game-changing”
- “Best in class”
- “Cutting-edge”

---

## 6. MASS Framework Alignment

All content and demos should reinforce:

🟥 Models = Capability (replaceable)
🟩 Agents = Orchestration + Rules
🟨 Skills = Business Value


Agents should:
- Emphasize **system design over prompt cleverness**
- Treat prompts as inputs, not architecture
- Show QA as a **system capability**, not a phase

---

## 7. QAAS™ Demonstration Rules

This site itself is a **QAAS demo**.

Agents should:
- Treat content generation as testable output
- Surface assumptions
- Propose validation steps when systems are added
- Prefer reproducibility over “magic”

Example framing:
> “Here is the output, here are the constraints, here is how it’s validated.”

---

## 8. Future: AGENT Builder Demo (Planned)

This repo will later include a **visitor-facing interactive demo** that allows users to:
- Define their own `AGENTS.md`
- See how governance affects agent behavior
- Learn the difference between prompting and system design

Constraints:
- Read-only by default
- No persistence without explicit consent
- Strict separation from production logic

Agents may scaffold this **only after** the base site is stable.

---

## 9. SEO & Distribution

Agents should:
- Optimize structure and headings
- Write for humans first
- Ensure content can be reused for:
  - LinkedIn
  - X
  - Talks
  - Client education

The website is the **source of truth**.  
Social platforms are distribution layers.

---

## 10. Governance & Review

All agent-generated changes must:
- Be explainable
- Be reviewable via Git diff
- Have a clear reason for existence

If uncertain:
> Propose, do not execute.

---

## 11. Explicit Non-Goals

This repo is **not**:
- A SaaS dashboard
- A marketing automation engine
- A playground for framework experiments
- An AI gimmick showcase

Those belong elsewhere.

---

## 12. Guiding Principle

> Systems beat prompts.  
> Governance beats vibes.  
> Quality is not optional.

This site should **prove** that.


# Repository Guidelines

## Project Structure & Module Organization
- `app/` holds the Next.js App Router pages and layouts (e.g., `app/page.tsx`, `app/layout.tsx`).
- `app/globals.css` contains global styles and Tailwind layers.
- `public/` contains static assets (SVGs, favicon).
- Root config includes `next.config.ts`, `tsconfig.json`, `eslint.config.mjs`, and `postcss.config.mjs`.

## Build, Test, and Development Commands
- `npm run dev` starts the local Next.js dev server.
- `npm run build` creates the production build.
- `npm run start` serves the production build locally.
- `npm run lint` runs ESLint with the Next.js config.

## Coding Style & Naming Conventions
- TypeScript + React with the App Router; keep components in `app/`.
- Indentation is 2 spaces; use double quotes and semicolons (match existing files).
- Tailwind CSS is used for styling; prefer utility classes over bespoke CSS.

## Testing Guidelines
- No automated test framework is configured yet.
- If you add tests, introduce a script in `package.json` and document how to run it here.

## Commit & Pull Request Guidelines
- Commit messages are short and descriptive (see `git log`: "Update readme", "Initial commit").
- PRs should include a clear summary, linked issues when applicable, and screenshots for UI changes.

## Agent-Specific Instructions
- Follow the governance and content rules in `AGENTS.md` before making changes.
- Avoid unapproved dependencies or architecture shifts; propose changes first if uncertain.
