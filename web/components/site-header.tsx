import Link from "next/link";

import { businessInfo } from "@/lib/business-info";
import { primaryNavLinks } from "@/lib/site-nav";

import { CallLink, WhatsAppLink } from "./cta-buttons";
import { MobileNav } from "./mobile-nav";

export function SiteHeader() {
  return (
    <header className="border-b border-white/8 bg-[rgba(10,12,14,0.88)] backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-center gap-3">
          <Link
            href="/"
            className="inline-flex min-h-11 items-center rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-surface-strong)] px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
          >
            {businessInfo.businessName}
          </Link>
          <p className="hidden text-xs uppercase tracking-[0.24em] text-[var(--color-muted)] lg:block">
            25+ Years Local Trust
          </p>
        </div>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {primaryNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-[var(--color-muted)] transition-colors hover:bg-white/5 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <CallLink className="hidden md:inline-flex" />
          <WhatsAppLink className="hidden md:inline-flex" />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
