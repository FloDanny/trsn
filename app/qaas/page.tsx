import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "QAAS Model | TRSN LLC",
  description:
    "Quality Assurance as a Service (QAAS) as a delivery system: governed, risk-based, and observable.",
};

const qaasPrinciples = [
  {
    title: "Automation-first",
    detail:
      "Critical paths are covered by repeatable, versioned automation. Manual testing is targeted and explicit.",
  },
  {
    title: "Shift-left by design",
    detail:
      "Quality gates move upstream: contract tests, component verification, and risk modeling before release.",
  },
  {
    title: "Risk-based enforcement",
    detail:
      "Test effort maps to failure impact. Containment is prioritized over vanity coverage.",
  },
  {
    title: "Observable and auditable",
    detail:
      "Signals are centralized, actionable, and tied to release decisions.",
  },
];

const coeElements = [
  {
    title: "Corporate QA Charter",
    detail:
      "A written contract defining quality ownership, release authority, and non-negotiable verification standards.",
  },
  {
    title: "Center of Excellence (CoE)",
    detail:
      "A dedicated QA systems group that sets standards, enables teams, and protects shared test infrastructure.",
  },
  {
    title: "Confidence reporting",
    detail:
      "Executive-ready risk summaries that explain what was verified, what was validated, and what remains uncertain.",
  },
];

export default function QAASPage() {
  return (
    <div className="bg-white text-zinc-900 dark:bg-black dark:text-zinc-100">
      <section className="border-b border-zinc-200/70 bg-zinc-50 py-16 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-6">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
            QAAS™
          </p>
          <h1 className="text-3xl font-semibold text-zinc-900 dark:text-white md:text-4xl">
            Quality Assurance as a Service is a delivery system.
          </h1>
          <p className="text-base leading-7 text-zinc-600 dark:text-zinc-300">
            QAAS™ formalizes quality as an operating capability. The output is
            corporate confidence in code deploys: measurable risk signals,
            repeatable verification, and enforced release criteria.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto grid w-full max-w-5xl gap-6 px-6 md:grid-cols-2">
          {qaasPrinciples.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-zinc-200/70 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
            >
              <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
                {item.title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-zinc-200/70 bg-zinc-50 py-14 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6">
          <div>
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">
              CoE + Corporate QA Charter = shared confidence.
            </h2>
            <p className="mt-3 text-base leading-7 text-zinc-600 dark:text-zinc-300">
              TRSN implements a Center of Excellence (CoE) and Corporate QA
              Charter to ensure quality ownership is explicit and enforceable.
              The Charter defines standards and release authority; the CoE keeps
              the system healthy, enabled, and observable.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {coeElements.map((element) => (
              <div
                key={element.title}
                className="rounded-2xl bg-white p-6 shadow-sm dark:bg-black"
              >
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                  {element.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                  {element.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-4 px-6">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">
            Delivery signal, not test theater.
          </h2>
          <p className="text-base leading-7 text-zinc-600 dark:text-zinc-300">
            QAAS™ delivers a release signal that executives can trust: what was
            verified, what was validated, and which risks remain. If it cannot be
            tested reasonably, the design is wrong.
          </p>
        </div>
      </section>
    </div>
  );
}
