import Link from "next/link";

const sections = [
  {
    title: "QAAS™ is a system capability, not a phase.",
    description:
      "We build quality systems that are automation-first, shift-left, risk-based, and observable. The output is not a test report. The output is confidence to deploy with known risk boundaries.",
  },
  {
    title: "MASS is the operating model.",
    description:
      "Models are processors. Agents are the operating system. Skills are the business value. Governance and reproducibility are built into the system, not bolted on later.",
  },
  {
    title: "Governed systems beat clever prompts.",
    description:
      "This site is a live demo of agent governance: AGENTS.md contracts, skills definitions, and auditable output. Quality is enforced early and validated continuously.",
  },
];

const outcomes = [
  {
    title: "Confidence to ship",
    detail:
      "Release decisions grounded in risk signals, not test counts or coverage theater.",
  },
  {
    title: "Failure containment",
    detail:
      "Regression protection focused on the highest-impact failure modes.",
  },
  {
    title: "Repeatable delivery",
    detail: "Test strategy that scales with the system, not against it.",
  },
];

export default function Home() {
  return (
    <div className="bg-white text-zinc-900 dark:bg-black dark:text-zinc-100">
      <section className="border-b border-zinc-200/70 bg-gradient-to-b from-zinc-50 to-white py-20 dark:border-zinc-800 dark:from-zinc-950 dark:to-black">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6">
          <div className="flex flex-col gap-6">
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
              TRSN LLC • QAAS™ • MASS
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-zinc-900 dark:text-white md:text-5xl">
              QA systems designed for production reality.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">
              I build and govern quality systems that make release risk visible,
              enforceable, and repeatable. QA is not a gate. QA is the operating
              model.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-700"
              href="/contact"
            >
              Start with a risk review
            </Link>
            <Link
              className="inline-flex items-center justify-center rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-700 transition hover:border-zinc-500 hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-zinc-500"
              href="/qaas"
            >
              Read the QAAS™ model
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 md:grid-cols-3">
          {sections.map((section) => (
            <div
              key={section.title}
              className="rounded-2xl border border-zinc-200/70 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
            >
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
                {section.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                {section.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-zinc-200/70 bg-zinc-50 py-16 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">
              Outcomes you can defend in a production review.
            </h2>
            <p className="mt-3 text-base leading-7 text-zinc-600 dark:text-zinc-300">
              The goal is corporate confidence in code deploys. That means risk
              is modeled, verification is automated, and validation is aligned
              to real user impact.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {outcomes.map((outcome) => (
              <div
                key={outcome.title}
                className="rounded-2xl bg-white p-6 shadow-sm dark:bg-black"
              >
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                  {outcome.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                  {outcome.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">
            Start with constraints, not promises.
          </h2>
          <p className="max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-300">
            If you need a QA system that survives scale, change, and regulatory
            review, we will map risks and build the enforcement layer first.
          </p>
          <div>
            <Link
              className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-700"
              href="/contact"
            >
              Book a scoping call
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
