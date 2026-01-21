export default function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200/70 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-zinc-500 dark:text-zinc-400 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-medium text-zinc-700 dark:text-zinc-200">
            TRSN LLC — QA systems built for production reality.
          </p>
          <p>Governance over vibes. Evidence over claims.</p>
        </div>
        <div className="text-xs uppercase tracking-[0.2em]">
          Systems &gt; Prompts • QAAS™ • MASS
        </div>
      </div>
    </footer>
  );
}
