import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact TRSN LLC | QAAS Intake",
  description:
    "Share system context and risks to start a QAAS engagement. Scoping focuses on governance, validation, and release risk.",
};

const intakeItems = [
  "Current system architecture and release cadence.",
  "Highest-risk workflows and known failure modes.",
  "Current automation coverage and gaps.",
  "Critical compliance or uptime requirements.",
];

const nextSteps = [
  "TRSN LLC reviews the context and maps the top failure modes.",
  "You receive a scoped plan with risks, constraints, and deliverables.",
  "If aligned, TRSN LLC schedules a working session to build the QA charter.",
];

export default function ContactPage() {
  return (
    <div className="bg-white text-zinc-900 dark:bg-black dark:text-zinc-100">
      <section className="border-b border-zinc-200/70 bg-zinc-50 py-16 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-6">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
            Contact
          </p>
          <h1 className="text-3xl font-semibold text-zinc-900 dark:text-white md:text-4xl">
            Start with risk and constraints.
          </h1>
          <p className="text-base leading-7 text-zinc-600 dark:text-zinc-300">
            If you want a QA system that can withstand production pressure,
            share the context below. TRSN LLC will respond with a scoped plan,
            not a pitch.
          </p>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Engagements work best when quality is a business-critical system,
            not a side task.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-6">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">
            What to include
          </h2>
          <ul className="grid gap-4">
            {intakeItems.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-zinc-200/70 bg-white p-5 text-sm text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="rounded-2xl border border-zinc-200/70 bg-white p-6 text-sm text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200">
            <p className="text-base font-semibold text-zinc-900 dark:text-white">
              What happens next
            </p>
            <ul className="mt-3 list-inside list-disc leading-6">
              {nextSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-zinc-500 dark:text-zinc-400">
              Response target: two business days.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
