import Image from "next/image";
import Link from "next/link";

const repoUrl = "https://github.com/FloDanny/trsn";
const repoBranch = "main";

const demoHighlights = [
  {
    title: "Governance-first delivery",
    detail:
      "AGENTS.md defines scope, constraints, and review rules. Skills show how we codify repeatable behavior.",
    href: `${repoUrl}/blob/${repoBranch}/AGENTS.md`,
    linkLabel: "View AGENTS.md",
  },
  {
    title: "Automated verification",
    detail:
      "Vitest, Jest, Playwright, and k6 suites demonstrate positive and negative checks across layers.",
    href: `${repoUrl}/tree/${repoBranch}/tests`,
    linkLabel: "Browse tests",
  },
  {
    title: "Evidence artifacts",
    detail:
      "HTML reports and screenshots show the outputs we expect teams to inspect before a release.",
    href: `${repoUrl}/tree/${repoBranch}/reports`,
    linkLabel: "View reports",
  },
  {
    title: "System model alignment",
    detail:
      "QAAS™ and MASS pages explain how we convert system risk into enforceable delivery rules.",
    href: "/qaas",
    linkLabel: "Review QAAS™",
    internal: true,
  },
];

const inspectionChecklist = [
  "Review how risks are documented and enforced in AGENTS.md.",
  "Walk through UI flows in the Playwright e2e and regression suites.",
  "Verify coverage scope in Vitest/Jest and inspect HTML report outputs.",
  "Run k6 to confirm thresholds and dashboard exports reflect performance expectations.",
];

const reportGallery = [
  {
    title: "Vitest coverage summary",
    src: "/report-screenshots/vitest.png",
  },
  {
    title: "Jest HTML report",
    src: "/report-screenshots/jest.png",
  },
  {
    title: "Playwright report",
    src: "/report-screenshots/playwright.png",
  },
  {
    title: "k6 performance report",
    src: "/report-screenshots/k6.png",
  },
  {
    title: "k6 web dashboard",
    src: "/report-screenshots/k6-dashboard.png",
  },
];

export default function DemoPage() {
  return (
    <div className="bg-white text-zinc-900 dark:bg-black dark:text-zinc-100">
      <section className="border-b border-zinc-200/70 bg-zinc-50 py-16 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-6">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
            Demo
          </p>
          <h1 className="text-3xl font-semibold text-zinc-900 dark:text-white md:text-4xl">
            Inspect the QA system, not a slide deck.
          </h1>
          <p className="text-base leading-7 text-zinc-600 dark:text-zinc-300">
            This site is a working demo of how TRSN builds QA systems: governed
            inputs, automated verification, and evidence artifacts that
            executives can audit.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-700"
              href={repoUrl}
              rel="noreferrer"
              target="_blank"
            >
              Open the public repo
            </a>
            <Link
              className="inline-flex items-center justify-center rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-700 transition hover:border-zinc-500 hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-zinc-500"
              href="/testing-tooling"
            >
              View testing approach
            </Link>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto grid w-full max-w-5xl gap-6 px-6 md:grid-cols-2">
          {demoHighlights.map((item) => (
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
              {item.internal ? (
                <Link
                  className="mt-4 inline-flex text-sm font-medium text-zinc-900 underline-offset-4 hover:underline dark:text-white"
                  href={item.href}
                >
                  {item.linkLabel}
                </Link>
              ) : (
                <a
                  className="mt-4 inline-flex text-sm font-medium text-zinc-900 underline-offset-4 hover:underline dark:text-white"
                  href={item.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  {item.linkLabel}
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-zinc-200/70 bg-zinc-50 py-14 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">
            How a billion-dollar company evaluates this demo.
          </h2>
          <p className="text-base leading-7 text-zinc-600 dark:text-zinc-300">
            Enterprise leaders need to see evidence, not promises. Use this
            checklist to inspect the system the way a production review board
            would.
          </p>
          <ul className="grid gap-4 md:grid-cols-2">
            {inspectionChecklist.map((item) => (
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

      <section className="py-14">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">
              Public report gallery.
            </h2>
            <p className="text-base leading-7 text-zinc-600 dark:text-zinc-300">
              These reports are committed so stakeholders can inspect output
              without running the codebase locally.
            </p>
            <a
              className="text-sm font-medium text-zinc-900 underline-offset-4 hover:underline dark:text-white"
              href={`${repoUrl}/tree/${repoBranch}/public/report-screenshots`}
              rel="noreferrer"
              target="_blank"
            >
              Open the full report screenshot archive
            </a>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {reportGallery.map((item) => (
              <div
                key={item.title}
                className="overflow-hidden rounded-2xl border border-zinc-200/70 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
              >
                <div className="border-b border-zinc-200/70 bg-zinc-50 px-4 py-3 text-sm font-medium text-zinc-700 dark:border-zinc-800 dark:bg-black dark:text-zinc-200">
                  {item.title}
                </div>
                <a href={item.src} rel="noreferrer" target="_blank">
                  <Image
                    alt={item.title}
                    className="h-auto w-full"
                    height={675}
                    src={item.src}
                    width={1200}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
