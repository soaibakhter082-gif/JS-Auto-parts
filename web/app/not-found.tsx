import Link from "next/link";

import { CallLink, WhatsAppLink } from "@/components/cta-buttons";
import { businessInfo } from "@/lib/business-info";

export default function NotFound() {
  return (
    <div className="mx-auto flex w-full max-w-6xl items-center px-4 py-16 sm:px-6 lg:min-h-[calc(100vh-14rem)] lg:px-8 lg:py-24">
      <section className="w-full rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(18,22,27,0.98),rgba(11,13,16,0.98))] p-8 text-center shadow-[0_28px_80px_rgba(0,0,0,0.42)] sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
          Recovery
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Page Not Found
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-[var(--color-muted)] sm:text-xl">
          This page could not be found.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
          <Link
            href="/"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold tracking-[0.02em] text-white transition-colors hover:border-[var(--color-accent)] hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold tracking-[0.02em] text-white transition-colors hover:border-[var(--color-accent)] hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
          >
            Contact JS Auto Parts
          </Link>
          <CallLink className="w-full sm:w-auto" />
          <WhatsAppLink className="w-full sm:w-auto" />
        </div>

        <div className="mt-10 grid gap-4 text-left sm:grid-cols-3">
          <section className="rounded-[1.5rem] border border-white/10 bg-white/4 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
              Business
            </p>
            <p className="mt-3 text-base font-medium text-white">
              {businessInfo.businessName}
            </p>
          </section>
          <section className="rounded-[1.5rem] border border-white/10 bg-white/4 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
              Location
            </p>
            <p className="mt-3 text-base font-medium text-white">
              {businessInfo.address}
            </p>
          </section>
          <section className="rounded-[1.5rem] border border-white/10 bg-white/4 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
              Hours
            </p>
            <p className="mt-3 text-base font-medium text-white">
              {businessInfo.hours}
            </p>
          </section>
        </div>
      </section>
    </div>
  );
}
