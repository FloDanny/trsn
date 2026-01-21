const tooling = [
  {
    title: "Playwright",
    detail: "E2E and critical user flows with deterministic coverage.",
  },
  {
    title: "Vitest",
    detail: "Fast unit and component verification aligned to CI cadence.",
  },
  {
    title: "Jest + Supertest",
    detail: "API verification when server architecture warrants it.",
  },
  {
    title: "K6",
    detail: "Performance and load testing for revenue-critical systems.",
  },
];

const principles = [
  "Verify: Did we build it right?",
  "Validate: Did we build the right thing?",
  "Risk-based prioritization over coverage vanity.",
  "No silent failures. All errors are surfaced, logged, or blocked.",
];

export default function TestingToolingPage() {
  return (
    <div className="bg-white text-zinc-900 dark:bg-black dark:text-zinc-100">
      <section className="border-b border-zinc-200/70 bg-zinc-50 py-16 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-6">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
            Testing & Tooling
          </p>
          <h1 className="text-3xl font-semibold text-zinc-900 dark:text-white md:text-4xl">
            V²: Verify, then Validate.
          </h1>
          <p className="text-base leading-7 text-zinc-600 dark:text-zinc-300">
            If a system cannot be tested reasonably, the design is wrong. The
            testing stack should reflect risk, not preference.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">
            Principles that drive every test plan.
          </h2>
          <ul className="grid gap-4 md:grid-cols-2">
            {principles.map((item) => (
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

      <section className="border-t border-zinc-200/70 bg-zinc-50 py-14 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto grid w-full max-w-5xl gap-6 px-6 md:grid-cols-2">
          {tooling.map((tool) => (
            <div
              key={tool.title}
              className="rounded-2xl bg-white p-6 shadow-sm dark:bg-black"
            >
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                {tool.title}
              </h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                {tool.detail}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
