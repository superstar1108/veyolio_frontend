"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { nav } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/85 backdrop-blur">
      <div className="container-site flex h-16 items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {nav.filter((n) => n.href !== "/contact").map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={`rounded-full px-3 py-2 text-sm transition-colors ${isActive(n.href) ? "bg-ink/5 text-ink" : "text-ink-muted hover:text-ink"}`}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Link href="/contact" className="btn-primary hidden md:inline-flex">Start a project</Link>
        <button
          className="md:hidden rounded-lg p-2"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <nav className="border-t border-ink/10 md:hidden" aria-label="Mobile">
          <div className="container-site flex flex-col py-3">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} className={`py-3 text-base ${isActive(n.href) ? "font-medium" : "text-ink-muted"}`}>
                {n.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
