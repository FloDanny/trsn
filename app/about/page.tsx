const companyFocus = [
  "QA systems engineered for production pressure, not lab conditions.",
  "Automation strategies across API, UI, and performance layers.",
  "Release risk mapping tied to real business outcomes.",
  "Governance-first delivery that favors clarity over hype.",
  "Zero tolerance for fragile systems, fake metrics, or test theater.",
];

const founderTimeline = [
  "2010: Started the live streaming company TRW.",
  "2014: Sold the intellectual property to FloSports.tc.",
  "2014+: Consultant for FloSports; started their QA and automation department.",
];

const clientList = [
  "MortgageX-Change",
  "Upper Canyon Lodging Company",
  "FloSports.tv",
  "Concentra Healthcare",
  "USA Wrestling",
  "Brute Athletic Apparel",
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
            TRSN LLC — QA systems for production-grade teams.
          </h1>
          <p className="text-base leading-7 text-zinc-600 dark:text-zinc-300">
            TRSN LLC builds QA systems that can ship under real load, real
            revenue, and real failure conditions. QA is not a phase. QA is a
            system capability.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-6">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">
            Company focus
          </h2>
          <ul className="grid gap-4">
            {companyFocus.map((item) => (
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
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-6">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">
            Founder
          </h2>
          <p className="text-base leading-7 text-zinc-600 dark:text-zinc-300">
            Danny Cartagena is the founder of TRSN LLC. His work centers on
            building QA organizations and automation systems that hold up in
            production.
          </p>
          <ul className="grid gap-3 text-sm text-zinc-700 dark:text-zinc-200">
            {founderTimeline.map((item) => (
              <li key={item} className="rounded-xl border border-zinc-200/70 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-6">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">
            Client list
          </h2>
          <ul className="grid gap-3 md:grid-cols-2">
            {clientList.map((client) => (
              <li
                key={client}
                className="rounded-2xl border border-zinc-200/70 bg-white p-4 text-sm text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200"
              >
                {client}
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
