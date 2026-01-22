"use client";

export default function ContactForm() {
    return (
        <div className="rounded-2xl border border-zinc-200/70 bg-white p-6 text-sm text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                Email your context
            </h3>
            <p className="mt-2 leading-6 text-zinc-600 dark:text-zinc-300">
                Send the details to scope a QAAS engagement. We reply with a scoped plan
                and next steps.
            </p>
            <div className="mt-4">
                <a
                    className="inline-flex items-center rounded-full bg-zinc-900 px-5 py-2 text-sm font-medium text-white transition hover:bg-zinc-700"
                    href="mailto:support@trsnllc.com"
                >
                    support@trsnllc.com
                </a>
            </div>
            <p className="mt-3 text-xs text-zinc-500 dark:text-zinc-400">
                Include architecture notes, risks, and what success looks like.
            </p>
        </div >
    );
}
