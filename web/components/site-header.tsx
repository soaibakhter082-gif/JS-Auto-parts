import Link from "next/link";

import { businessInfo } from "@/lib/business-info";
import { primaryNavLinks } from "@/lib/site-nav";

import { CallLink, WhatsAppLink } from "./cta-buttons";

function PhoneIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6 shrink-0"
      fill="currentColor"
    >
      <path d="M6.62 10.79a15.03 15.03 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.35 1.02-.24 1.12.38 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.07 21 3 13.93 3 5c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6 shrink-0"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M12 3.25a8.75 8.75 0 0 0-7.58 13.12L3.25 20.75l4.47-1.11A8.75 8.75 0 1 0 12 3.25Zm-2.1 4.05c.18-.42.42-.43.62-.44h.53c.17 0 .44.07.67.56.22.49.74 1.7.81 1.82.07.12.11.26.02.41-.09.15-.14.24-.28.38-.14.14-.29.32-.41.42-.14.12-.29.25-.12.49.17.24.76 1.25 1.64 2.03 1.13 1 2.09 1.31 2.39 1.45.3.14.47.12.64-.07.17-.18.72-.84.91-1.13.19-.28.39-.24.65-.14.26.09 1.68.79 1.97.93.29.14.48.21.55.33.07.12.07.68-.16 1.33-.22.65-1.29 1.25-1.78 1.33-.46.08-1.05.11-1.69-.09a10.11 10.11 0 0 1-1.54-.57c-2.71-1.17-4.48-3.91-4.61-4.09-.13-.18-1.1-1.46-1.1-2.78 0-1.32.69-1.97.94-2.24Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function SiteHeader() {
  return (
    <header className="border-b border-white/8 bg-[rgba(10,12,14,0.88)] backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-4 sm:gap-4 sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-center gap-3">
          <Link
            href="/"
            className="inline-flex min-h-11 items-center whitespace-nowrap rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-surface-strong)] px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
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

        <div className="flex shrink-0 items-center gap-2 md:gap-3">
          <div className="flex items-center gap-2 md:hidden">
            <CallLink
              className="h-11 w-11 min-h-0 rounded-full px-0 shadow-[0_0_22px_rgba(255,179,0,0.24)]"
              ariaLabel="Call JS Auto Parts at 9937940267"
            >
              <PhoneIcon />
            </CallLink>
            <WhatsAppLink
              className="h-11 w-11 min-h-0 rounded-full px-0 text-white shadow-[0_0_22px_rgba(37,211,102,0.24)]"
              ariaLabel="WhatsApp JS Auto Parts at 9937940267"
            >
              <WhatsAppIcon />
            </WhatsAppLink>
          </div>
          <div className="hidden items-center gap-3 md:flex">
            <CallLink />
            <WhatsAppLink />
          </div>
        </div>
      </div>
    </header>
  );
}
