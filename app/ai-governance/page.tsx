const governanceElements = [
  {
    title: "AGENTS.md contracts",
    detail:
      "Explicit contracts define scope, constraints, and decision rights for every agent. Behavior is governed by rules, not prompts.",
  },
  {
    title: "Codex-native skills",
    detail:
      "Skills are modular, reviewable behaviors invoked intentionally. They are versioned, audited, and treated as system capabilities.",
  },
  {
    title: "Reproducible outputs",
    detail:
      "Every agent output is traceable to inputs, constraints, and execution context. Nothing is opaque or one-off.",
  },
  {
    title: "Human ownership",
    detail:
      "Agents assist execution. Humans retain release authority, accountability, and final decision-making responsibility.",
  },
];

export default function AIGovernancePage() {
  return (
    <div className="bg-white text-zinc-900 dark:bg-black dark:text-zinc-100">
      {/* Hero */}
      <section className="border-b border-zinc-200/70 bg-zinc-50 py-16 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-6">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
            AI Agents & Governance
          </p>
          <h1 className="text-3xl font-semibold text-zinc-900 dark:text-white md:text-4xl">
            Governance beats clever prompts.
          </h1>
          <p className="text-base leading-7 text-zinc-600 dark:text-zinc-300">
            AI systems only scale when agent behavior is bounded, testable, and
            accountable. Prompts are inputs. Governance is the architecture.
          </p>
        </div>
      </section>

      {/* Governance pillars */}
      <section className="py-14">
        <div className="mx-auto grid w-full max-w-5xl gap-6 px-6 md:grid-cols-2">
          {governanceElements.map((element) => (
            <div
              key={element.title}
              className="rounded-2xl border border-zinc-200/70 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
            >
              <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
                {element.title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                {element.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Boundary clarification */}
      <section className="border-t border-zinc-200/70 bg-zinc-50 py-14 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-4 px-6">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">
            Governance defines behavior. Quality systems establish trust.
          </h2>
          <p className="text-base leading-7 text-zinc-600 dark:text-zinc-300">
            MASS governs how AI systems behave — defining constraints,
            ownership, and traceability for agent-driven execution.
          </p>
          <p className="text-base leading-7 text-zinc-600 dark:text-zinc-300">
            Downstream quality systems consume these governed outputs as
            testable evidence, applying verification and validation before any
            release or decision is trusted.
          </p>
        </div>
      </section>
    </div>
  );
}
