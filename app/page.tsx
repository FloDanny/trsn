import Link from "next/link";

const evidenceHighlights = [
  {
    title: "Regression risk transparency for release boards (Playwright)",
    description:
      "QAAS surfaces Storybook flows with failure classification, recordings, and telemetry so teams can stop regressions before critical releases.",
    meta: "Auto-updated per GitLab merge",
    href: "/reports/playwright",
    linkLabel: "Open dashboard",
  },
  {
    title: "Throughput guardrails for release trains (k6 load report)",
    description:
      "QAAS validates latency and throughput budgets against production-like traffic nightly, keeping scale risk anchored before rollout.",
    meta: "Scheduled nightly executions",
    href: "/reports/k6/report",
    linkLabel: "View report",
  },
  {
    title: "Branch-aware capacity guardrails (k6 web dashboard)",
    description:
      "Release committees audit readiness by branch/tag so QAAS-backed KPIs align with planned deployments.",
    meta: "Branch-aware refresh on merges",
    href: "/reports/k6/web-dashboard.html",
    linkLabel: "Inspect dashboard",
  },
];

const qaasDefinitions = [
  {
    title: "QAAS™ is a productized quality system.",
    detail:
      "It is delivered as an operating layer that hooks into platforms, not an engagement that spins up bespoke consulting.",
  },
  {
    title: "QAAS™ is evidence-first.",
    detail:
      "Artifacts—dashboards, runs, traces—are the output. The consumer is the release board who needs clear, live risk posture.",
  },
  {
    title: "QAAS™ is governed.",
    detail:
      "Governance rules, AGENTS.md contracts, and sensors enforce standards, not individual heroics.",
  },
];

const systemFlowSteps = [
  {
    step: "Risk modeling",
    detail:
      "QAAS ingests product, infrastructure, and operations signals to surface prioritized exposures before each deployment.",
  },
  {
    step: "Enforcement",
    detail:
      "Governance rules let orchestrated agents invoke replaceable skills—testing, validation, reporting—to gate risk and approvals.",
  },
  {
    step: "Feedback loop",
    detail:
      "Every artifact feeds back into QAAS governance logs so traceability is preserved ahead of every release.",
  },
];

const massSnapshot = [
  {
    label: "Models",
    value: "Capability engines (UI, load, API) that remain replaceable.",
  },
  {
    label: "Agents",
    value: "Operational systems enforcing rules and approvals.",
  },
  {
    label: "Skills",
    value: "Repeatable business value (regression, load, compliance checks).",
  },
];

const clientOutcomes = [
  {
    client: "FloSports",
    detail:
      "QAAS keeps streaming releases aligned to peak event spikes with regression and load evidence that release boards inspect before go-live to guard against regressions and outages.",
  },
  {
    client: "Concentra",
    detail:
      "QAAS flags risk across enterprise workflows, surfaces compliance artifacts, and delivers the audit trail governance committees use to keep critical care paths running.",
  },
];

export default function Home() {
  return (
    <div className="bg-white text-zinc-900 dark:bg-black dark:text-zinc-100">
      <section className="border-b border-zinc-200/70 bg-gradient-to-b from-zinc-50 to-white py-20 dark:border-zinc-800 dark:from-zinc-950 dark:to-black">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.4em] text-zinc-500 dark:text-zinc-400">
              QAAS™ • Quality Operating System
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-zinc-900 dark:text-white md:text-5xl">
              QAAS™ is a productized quality system that ships evidence-first
              operating confidence.
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">
              TRSN LLC delivers QAAS™ as a standalone quality operating system.
              It integrates with your CI/CD pipelines, surfaces live evidence,
              and maintains governance guardrails so enterprise teams can deploy
              with traceable risk.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-700"
                href="/qaas"
              >
                Read the QAAS™ product guide
              </Link>
              <Link
                className="inline-flex items-center justify-center rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-700 transition hover:border-zinc-400 hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-zinc-500 dark:hover:text-white"
                href="#contact"
              >
                Qualify for a risk review
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-zinc-500 dark:text-zinc-400">
              Evidence First
            </p>
            <h2 className="text-3xl font-semibold text-zinc-900 dark:text-white">
              Live quality evidence is the product output.
            </h2>
            <p className="mt-2 text-base leading-7 text-zinc-600 dark:text-zinc-300">
              QAAS orchestrates these dashboards so release boards can see
              regression and outage risk before deployments. Each artifact
              refreshes when GitLab merges land or nightly schedules run so the
              evidence never goes stale.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {evidenceHighlights.map((item) => (
              <article
                key={item.title}
                className="group rounded-2xl border border-zinc-200/70 bg-white p-6 shadow-sm transition hover:border-zinc-900/40 dark:border-zinc-800 dark:bg-zinc-950"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
                  Live artifact
                </p>
                <h3 className="mt-2 text-lg font-semibold text-zinc-900 dark:text-white">
                  {item.title}
                </h3>
                {item.href.endsWith("/reports/k6/web-dashboard.html") && (
                  <>
                    <p className="mt-1 text-xs leading-5 text-zinc-500 dark:text-zinc-400">
                      Interactive HTML. Download the file to explore live
                      metrics and filters.
                    </p>
                    <div className="mt-2 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
                      <a
                        className="underline-offset-4 hover:underline"
                        href={item.href}
                        rel="noreferrer"
                        target="_blank"
                      >
                        Open interactive dashboard
                      </a>
                      <a
                        className="underline-offset-4 hover:underline"
                        href={item.href}
                        rel="noreferrer"
                        target="_blank"
                        download
                      >
                        Download HTML
                      </a>
                    </div>
                  </>
                )}
                <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                  {item.description}
                </p>
                <p className="mt-4 text-xs font-medium uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
                  {item.meta}
                </p>
                <a
                  className="mt-2 inline-flex text-sm font-semibold text-zinc-900 transition group-hover:text-zinc-600 dark:text-white"
                  href={item.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  {item.linkLabel} →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-100 bg-zinc-50/80 py-16 dark:border-zinc-900 dark:bg-zinc-950/60">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-3">
          <div className="space-y-4 lg:col-span-1">
            <p className="text-sm uppercase tracking-[0.4em] text-zinc-500 dark:text-zinc-400">
              What QAAS Is (and Isn’t)
            </p>
            <p className="text-2xl font-semibold text-zinc-900 dark:text-white">
              A repeatable product, not a consulting sprint.
            </p>
          </div>
          <div className="grid gap-6 lg:col-span-2 lg:grid-cols-3">
            {qaasDefinitions.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-zinc-200/70 bg-white/80 p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
              >
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto w-full max-w-6xl space-y-10 px-6">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-zinc-500 dark:text-zinc-400">
              How QAAS Works
            </p>
            <h2 className="text-3xl font-semibold text-zinc-900 dark:text-white">
              System flow enforced as product governance.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {systemFlowSteps.map((step) => (
              <div
                key={step.step}
                className="rounded-2xl border border-zinc-200/70 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
                  {step.step}
                </p>
                <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                  {step.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-b border-zinc-100 bg-gradient-to-b from-white to-zinc-50 py-16 dark:border-zinc-900 dark:from-black">
        <div className="mx-auto w-full max-w-6xl space-y-8 px-6">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-zinc-500 dark:text-zinc-400">
              MASS Framework Snapshot
            </p>
            <h2 className="text-3xl font-semibold text-zinc-900 dark:text-white">
              Models → Agents → Skills visualized for every release.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {massSnapshot.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-zinc-200/70 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
                  {item.label}
                </p>
                <p className="mt-3 text-base leading-6 text-zinc-600 dark:text-zinc-300">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-b border-zinc-100 bg-zinc-50 py-16 dark:border-zinc-900 dark:bg-zinc-950">
        <div className="mx-auto w-full max-w-6xl space-y-10 px-6">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.4em] text-zinc-500 dark:text-zinc-400">
              Client Outcomes
            </p>
            <h2 className="text-3xl font-semibold text-zinc-900 dark:text-white">
              Enterprise outcomes, presented with clear scope.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {clientOutcomes.map((item) => (
              <div
                key={item.client}
                className="rounded-2xl border border-zinc-200/70 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
                  {item.client}
                </p>
                <p className="mt-3 text-base leading-7 text-zinc-600 dark:text-zinc-300">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200/70 bg-gradient-to-b from-zinc-50 to-white py-16 dark:border-zinc-800 dark:from-zinc-950 dark:to-black">
        <div className="mx-auto w-full max-w-6xl space-y-6 px-6">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.4em] text-zinc-500 dark:text-zinc-400">
              Governance &amp; Safety
            </p>
            <h2 className="text-3xl font-semibold text-zinc-900 dark:text-white">
              Standards-Aligned Quality Governance
            </h2>
            <p className="text-base leading-7 text-zinc-600 dark:text-zinc-300">
              QAAS™ is designed and operated by ISTQB-certified quality
              engineers and aligned with internationally recognized testing
              lifecycle standards.
            </p>
            <p className="text-base leading-7 text-zinc-600 dark:text-zinc-300">
              Certification is not used as a hiring signal — it is used to
              enforce consistency, traceability, and auditability across QAAS
              pipelines.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto w-full max-w-6xl space-y-6 px-6">
          <div className="space-y-2">
            <p className="text-sm uppercase tracking-[0.4em] text-zinc-500 dark:text-zinc-400">
              Engagement Model
            </p>
            <h2 className="text-3xl font-semibold text-zinc-900 dark:text-white">
              Operating rhythm built for enterprise scale.
            </h2>
            <p className="text-base leading-7 text-zinc-600 dark:text-zinc-300">
              QAAS™ delivery keeps test strategy, execution, and reporting
              aligned to formal quality standards as systems scale.
            </p>
          </div>
          <p className="max-w-3xl text-base leading-7 text-zinc-600 dark:text-zinc-300">
            We align to your release cadence, map risks first, build enforcement
            layers, and hand over artifacts so internal teams can continue
            validating with the same guardrails.
          </p>
        </div>
      </section>

      <section
        id="contact"
        className="border-t border-zinc-200/70 bg-zinc-900 py-16 text-white dark:border-zinc-800"
      >
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-zinc-400">
            Contact
          </p>
          <h2 className="text-3xl font-semibold">
            Start with a quality readiness review.
          </h2>
          <p className="max-w-2xl text-base leading-7 text-zinc-200">
            Book a qualification call so we can confirm architectural fit,
            traceable evidence expectations, and handoff discipline before any
            work begins.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-zinc-900"
              href="/contact"
            >
              Qualify for a review
            </Link>
            <a
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-zinc-900 transition hover:bg-zinc-200"
              href="mailto:support@trsnllc.com"
            >
              support@trsnllc.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
