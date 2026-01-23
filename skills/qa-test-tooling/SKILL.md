---
name: qaas-quality-enforcement
description: |
  Design, enforce, and maintain QAAS™ quality enforcement using standards-aligned
  testing practices (ISTQB + ISO/IEC/IEEE 29119). Use this skill whenever behavior,
  governance, copy, or system rules change and must be protected by evidence.
  This skill treats testing as a system capability, not a task.
---

QAAS™ Quality Enforcement Skill
Purpose
This skill governs how quality is enforced in the repository.

It is not limited to tooling setup.
It exists to ensure that every behavioral change is traceable, testable, and auditable, consistent with:

ISTQB principles

ISO/IEC/IEEE 29119 software testing standards

QAAS™’s V² (Verify + Validate) philosophy

Use this skill whenever:

Fixing a bug

Changing behavior

Introducing or modifying governance

Adjusting copy or policy with operational meaning

Adding, updating, or repairing test suites

Standards Alignment (Non-Negotiable)
All work performed under this skill must align with:

ISTQB testing principles

ISO/IEC/IEEE 29119, including:

Test processes

Test documentation

Test techniques

Keyword-driven testing (Part 5, latest updates Dec 2024)

Standards exist to enforce:

Consistency

Traceability

Auditability

Repeatability

Certification is treated as an operating guardrail, not a credential signal.

Core Enforcement Rules (Agent-Level)

1. Tests Are Mandatory for Fixes
   Any change that:

Fixes a defect

Alters behavior

Enforces governance

Changes policy, copy, or rules with operational impact

MUST be accompanied by tests.

At minimum:

One positive test (expected behavior)

One negative test (regression guard)

A fix without a test is considered incomplete.

2. V² (Verify + Validate) Is Required
   Every test suite must demonstrate:

Verification — the system behaves as intended

Validation — the system fails safely when assumptions are violated

Both must be explicit in test design and naming.

3. Correct Tool Selection Is Mandatory
   The agent must choose the most appropriate tool based on what is being enforced:

Vitest

Unit and component logic

Fast feedback loops

Coverage-focused enforcement

Jest

Deterministic or legacy-adjacent unit logic

Integration-style validation where needed

Playwright

User-visible flows

Regression, policy, and governance enforcement

Copy and structural drift protection

k6

Performance and stability smoke checks

Threshold-based enforcement

Negative-path validation (intentional failure cases)

Tool misuse is considered a design failure.

Required Workflow
Step 1: Confirm Repo State
Follow branch and safety checks defined in AGENTS.md

Do not introduce architectural changes unless explicitly authorized

Assume the repo is public and adversarially inspected

Step 2: Add or Update Tests
Place tests under tests/ using existing suite names

Reuse existing categories:

unit

component

e2e

regression

performance-smoke

Keep coverage scoped intentionally (e.g., lib/ utilities)

Step 3: Enforce Evidence Output
All test suites must produce evidence artifacts:

Vitest / Jest

HTML coverage

HTML test reports (where applicable)

Playwright

HTML report with screenshots and traces

k6

JSON summary

HTML report

Web dashboard export

Evidence is a first-class QAAS™ output, not optional metadata.

Step 4: Run Tests After Fixes
After any fix:

All relevant test suites must be run

Partial execution requires explicit justification

Failing tests block the change

If evidence is not regenerated, the fix is not trusted.

Step 5: Pre-Commit Enforcement (Required)
This skill assumes pre-commit enforcement is active.

The agent must:

Add or update pre-commit hooks when introducing new test requirements

Ensure commits fail if:

Required tests are missing

Test suites fail

Governance checks are bypassed

Tooling choice (Husky, Lefthook, etc.) is flexible, but enforcement is mandatory.

Step 6: Documentation Updates
When behavior or enforcement changes:

Update TESTING.md to reflect new expectations

Update README.md with concise execution notes if needed

Append resolved failures to:

references/troubleshooting.md

Documentation is part of governance.

Design Constraints
Do not introduce guarantees or compliance claims

Do not expose secrets or internal-only logic

Do not touch application architecture unless explicitly required

Prefer clarity over cleverness

Treat tests as operational contracts, not examples

Success Criteria
Work performed under this skill is considered complete when:

Behavior is protected by tests

Both positive and negative paths are enforced

Evidence artifacts are generated

Tests pass after the fix

Documentation reflects reality

QAAS™ does not measure success by test count.

QAAS™ measures success by:

Prevented regressions

Traceable evidence

Repeatable enforcement

Operational confidence

References
AGENTS.md

TESTING.md

references/troubleshooting.md

When to Use This Skill
Use qaas-quality-enforcement whenever quality, behavior, governance, or operational confidence must be protected.

This skill exists to ensure QAAS™ behaves like a quality operating system, not a test suite.
