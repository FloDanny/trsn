"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

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
    id: "vitest",
    title: "Vitest coverage summary",
    src: "/report-screenshots/vitest.png",
  },
  {
    id: "jest",
    title: "Jest HTML report",
    src: "/report-screenshots/jest.png",
  },
  {
    id: "playwright",
    title: "Playwright report",
    src: "/report-screenshots/playwright.png",
  },
  {
    id: "k6",
    title: "k6 performance report",
    src: "/report-screenshots/k6.png",
  },
  {
    id: "k6-dashboard",
    title: "k6 web dashboard",
    src: "/report-screenshots/k6-dashboard.png",
    note: "Interactive HTML. Download the file to explore live metrics and filters.",
    href: `${repoUrl}/blob/${repoBranch}/reports/k6/web-dashboard.html`,
  },
];

export default function DemoPage() {
  const [activeReportId, setActiveReportId] = useState<string | null>(null);
  const activeReport = useMemo(
    () => reportGallery.find((item) => item.id === activeReportId) || null,
    [activeReportId]
  );

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
            Evaluation checklist for this demo.
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
                <button
                  className="group w-full text-left"
                  onClick={() => setActiveReportId(item.id)}
                  type="button"
                >
                  <Image
                    alt={item.title}
                    className="h-auto w-full transition duration-200 ease-out group-hover:scale-[1.01]"
                    height={675}
                    src={item.src}
                    width={1200}
                  />
                </button>
                {item.note ? (
                  <div className="border-t border-zinc-200/70 px-4 py-3 text-xs text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
                    {item.note}
                    {item.href ? (
                      <a
                        className="ml-2 font-medium text-zinc-700 underline-offset-4 hover:underline dark:text-zinc-200"
                        href={item.href}
                        rel="noreferrer"
                        target="_blank"
                      >
                        Download HTML
                      </a>
                    ) : null}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      {activeReport ? (
        <div
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-sm"
          role="dialog"
          onClick={() => setActiveReportId(null)}
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-zinc-950"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-zinc-200/70 px-4 py-3 text-sm font-medium text-zinc-700 dark:border-zinc-800 dark:text-zinc-200">
              <span>{activeReport.title}</span>
              <button
                className="rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-600 transition hover:border-zinc-400 hover:text-zinc-900 dark:border-zinc-800 dark:text-zinc-300 dark:hover:border-zinc-600"
                onClick={() => setActiveReportId(null)}
                type="button"
              >
                Close
              </button>
            </div>
            <div className="max-h-[75vh] overflow-y-auto bg-zinc-50 p-4 dark:bg-black">
              <Image
                alt={activeReport.title}
                className="h-auto w-full"
                height={900}
                src={activeReport.src}
                width={1600}
              />
              {activeReport.note ? (
                <div className="mt-4 text-sm text-zinc-600 dark:text-zinc-300">
                  {activeReport.note}
                  {activeReport.href ? (
                    <a
                      className="ml-2 font-medium text-zinc-900 underline-offset-4 hover:underline dark:text-white"
                      href={activeReport.href}
                      rel="noreferrer"
                      target="_blank"
                    >
                      Download the interactive file
                    </a>
                  ) : null}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
