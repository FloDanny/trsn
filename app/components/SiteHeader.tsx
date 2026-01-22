import Link from "next/link";

const navItems = [
  { href: "/qaas", label: "QAAS™" },
  { href: "/proof", label: "QAAS Proof" },
  { href: "/mass", label: "MASS Framework" },
  { href: "/testing-tooling", label: "Testing & Tooling" },
  { href: "/ai-governance", label: "AI Agents & Governance" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  return (
    <header className="border-b border-zinc-200/70 bg-white/90 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/90">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-5">
        <div className="flex flex-col">
          <Link
            className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100"
            href="/"
          >
            TRSN LLC
          </Link>
          <span className="text-xs uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
            QAAS™ • MASS • System Governance
          </span>
        </div>
        <nav className="flex flex-wrap items-center gap-4 text-sm text-zinc-600 dark:text-zinc-300">
          {navItems.map((item) => (
            <Link
              key={item.href}
              className="transition-colors hover:text-zinc-900 dark:hover:text-white"
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
