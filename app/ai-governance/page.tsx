const governanceElements = [
  {
    title: "AGENTS.md contracts",
    detail:
      "Explicit rules that define scope, constraints, and decision rights for every agent.",
  },
  {
    title: "Codex-native skills",
    detail:
      "Skills are modular, reusable behaviors. They are invoked intentionally and reviewed like code.",
  },
  {
    title: "Reproducible outputs",
    detail:
      "Every output can be traced to inputs, constraints, and validation steps.",
  },
  {
    title: "Human ownership",
    detail:
      "Agents assist delivery. Humans own release authority and accountability.",
  },
];

export default function AIGovernancePage() {
  return (
    <div className="bg-white text-zinc-900 dark:bg-black dark:text-zinc-100">
      <section className="border-b border-zinc-200/70 bg-zinc-50 py-16 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-6">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
            AI Agents & Governance
          </p>
          <h1 className="text-3xl font-semibold text-zinc-900 dark:text-white md:text-4xl">
            Governance beats clever prompts.
          </h1>
          <p className="text-base leading-7 text-zinc-600 dark:text-zinc-300">
            Agents are only useful when their behavior is bounded, testable, and
            accountable. Prompts are inputs. Systems are the architecture.
          </p>
        </div>
      </section>

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

      <section className="border-t border-zinc-200/70 bg-zinc-50 py-14 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-4 px-6">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">
            QAAS™ uses governance as a quality gate.
          </h2>
          <p className="text-base leading-7 text-zinc-600 dark:text-zinc-300">
            Every agent output is treated as testable output. Assumptions are
            surfaced. Constraints are explicit. Validation steps are documented.
          </p>
        </div>
      </section>
    </div>
  );
}
