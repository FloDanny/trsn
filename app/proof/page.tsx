import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "QAAS Proof | TRSN LLC",
  description:
    "Inputs, constraints, outputs, and validation for QAAS delivery. System governance for production risk.",
};

const proofSections = [
  {
    title: "Inputs",
    detail:
      "System map, release cadence, top revenue workflows, historical incidents, and current QA coverage.",
  },
  {
    title: "Constraints",
    detail:
      "Regulatory and uptime requirements, change windows, and the acceptable risk boundary for release.",
  },
  {
    title: "Output",
    detail:
      "Risk register, verification map, and release signal with explicit remaining uncertainty.",
  },
  {
    title: "Validation",
    detail:
      "Run logs, failure-mode coverage evidence, and decision criteria for ship or block.",
  },
];

const deliverables = [
  {
    title: "Risk register",
    detail:
      "Prioritized list of failure modes tied to business impact and owners.",
  },
  {
    title: "Verification map",
    detail:
      "Which checks exist, where they run, and what risk they reduce.",
  },
  {
    title: "Release signal",
    detail:
      "A concise summary of what was verified, validated, and deferred.",
  },
];

const guardrails = [
  "No reliance on vanity coverage; only risk-aligned checks count.",
  "All critical flows have automated gates with explicit failure behavior.",
  "Assumptions are documented and re-validated when inputs change.",
];

export default function ProofPage() {
  return (
    <div className="bg-white text-zinc-900 dark:bg-black dark:text-zinc-100">
      <section className="border-b border-zinc-200/70 bg-zinc-50 py-16 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-6">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
            QAAS Proof
          </p>
          <h1 className="text-3xl font-semibold text-zinc-900 dark:text-white md:text-4xl">
            Output, constraints, validation.
          </h1>
          <p className="text-base leading-7 text-zinc-600 dark:text-zinc-300">
            QAAS is only credible if the output is testable. This is the
            delivery shape: what goes in, what is constrained, what comes out,
            and how it is validated.
          </p>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Implemented in production environments where compliance, revenue,
            and platform stability were on the line.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto grid w-full max-w-5xl gap-6 px-6 md:grid-cols-2">
          {proofSections.map((section) => (
            <div
              key={section.title}
              className="rounded-2xl border border-zinc-200/70 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
            >
              <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
                {section.title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                {section.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-zinc-200/70 bg-zinc-50 py-14 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6">
          <div>
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">
              Typical QAAS deliverables.
            </h2>
            <p className="mt-3 text-base leading-7 text-zinc-600 dark:text-zinc-300">
              Every engagement produces artifacts that can be reviewed, audited,
              and reproduced. Nothing is hand-wavy.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {deliverables.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white p-6 shadow-sm dark:bg-black"
              >
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-6">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">
            Guardrails that make the output defensible.
          </h2>
          <ul className="grid gap-4">
            {guardrails.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-zinc-200/70 bg-white p-5 text-sm text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
