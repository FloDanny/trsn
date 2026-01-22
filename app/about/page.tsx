import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About TRSN LLC | QA Systems Leadership",
  description:
    "Background and operating principles behind TRSN LLC. Governance-led QA systems for production risk.",
};

const experience = [
  "Supported production platforms in healthcare, media, and data migration.",
  "Designed QA automation frameworks across API, UI, and performance layers.",
  "Led QA strategy aligned to ISTQB and IEEE 29119 standards.",
  "Established QA leadership practices for teams shipping under pressure.",
  "Zero tolerance for fragile systems, fake metrics, or test theater.",
];

export default function AboutPage() {
  return (
    <div className="bg-white text-zinc-900 dark:bg-black dark:text-zinc-100">
      <section className="border-b border-zinc-200/70 bg-zinc-50 py-16 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-6">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
            About
          </p>
          <h1 className="text-3xl font-semibold text-zinc-900 dark:text-white md:text-4xl">
            TRSN LLC — QA systems and governance.
          </h1>
          <p className="text-base leading-7 text-zinc-600 dark:text-zinc-300">
            TRSN LLC builds systems that can ship under real load, real revenue,
            and real failure conditions. QA is not a phase. QA is a system
            capability.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-6">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">
            Experience highlights
          </h2>
          <ul className="grid gap-4">
            {experience.map((item) => (
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
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-4 px-6">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">
            Operating principles
          </h2>
          <p className="text-base leading-7 text-zinc-600 dark:text-zinc-300">
            Systems beat prompts. Governance beats vibes. Quality is not optional.
            Every system should withstand change, explain its failures, and
            recover quickly.
          </p>
        </div>
      </section>
    </div>
  );
}
