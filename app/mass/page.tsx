import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MASS Framework | TRSN LLC",
  description:
    "Models, Agents, Skills: a system-first framework for AI governance and QA outcomes.",
};

const massLayers = [
  {
    title: "Models = processors",
    detail:
      "Replaceable capability. Models are inputs to the system, not the system itself.",
  },
  {
    title: "Agents = operating system",
    detail:
      "Rules, memory, orchestration, and governance. Agents enforce constraints and guardrails.",
  },
  {
    title: "Skills = business value",
    detail:
      "Codified behaviors that deliver outcomes. Skills are scoped, testable, and reusable.",
  },
];

export default function MASSPage() {
  return (
    <div className="bg-white text-zinc-900 dark:bg-black dark:text-zinc-100">
      <section className="border-b border-zinc-200/70 bg-zinc-50 py-16 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-6">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
            MASS Framework
          </p>
          <h1 className="text-3xl font-semibold text-zinc-900 dark:text-white md:text-4xl">
            Models → Agents → Skills.
          </h1>
          <p className="text-base leading-7 text-zinc-600 dark:text-zinc-300">
            MASS is the system-level view of AI delivery. Prompts are inputs.
            Architecture is governance, orchestration, and skill design.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto grid w-full max-w-5xl gap-6 px-6 md:grid-cols-3">
          {massLayers.map((layer) => (
            <div
              key={layer.title}
              className="rounded-2xl border border-zinc-200/70 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
            >
              <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
                {layer.title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                {layer.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-zinc-200/70 bg-zinc-50 py-14 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-4 px-6">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">
            Why it matters for QA.
          </h2>
          <p className="text-base leading-7 text-zinc-600 dark:text-zinc-300">
            MASS keeps QA grounded in system design. If a skill cannot be tested
            or governed, it does not ship. If an agent cannot explain its
            constraints, it is not production-ready.
          </p>
          <p className="text-base leading-7 text-zinc-600 dark:text-zinc-300">
            This framework keeps teams focused on reproducible outcomes instead
            of prompt tinkering.
          </p>
        </div>
      </section>
    </div>
  );
}
