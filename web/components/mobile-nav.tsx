import Link from "next/link";

import { businessInfo } from "@/lib/business-info";
import { primaryNavLinks } from "@/lib/site-nav";

import { CallLink, DirectionsLink, WhatsAppLink } from "./cta-buttons";

export function MobileNav() {
  return (
    <details className="relative md:hidden">
      <summary className="flex min-h-11 cursor-pointer list-none items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]">
        Menu
      </summary>
      <div className="absolute right-0 z-20 mt-3 w-[min(20rem,calc(100vw-2rem))] rounded-3xl border border-white/10 bg-[var(--color-surface)] p-4 shadow-[0_24px_60px_rgba(0,0,0,0.45)]">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
          {businessInfo.businessName}
        </p>
        <nav aria-label="Mobile">
          <ul className="space-y-1">
            {primaryNavLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-2xl px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-white/6 hover:text-[var(--color-accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-4 grid gap-2">
          <CallLink className="w-full" />
          <WhatsAppLink className="w-full" />
          <DirectionsLink className="w-full" />
        </div>
      </div>
    </details>
  );
}
