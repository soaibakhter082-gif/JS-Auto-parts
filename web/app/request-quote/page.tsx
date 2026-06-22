import type { Metadata } from "next";

import { RequestQuoteForm } from "@/components/request-quote-form";

export const metadata: Metadata = {
  title: "Request Quote for Auto Parts | JS Auto Parts Khordha",
  description:
    "Request a quote from JS Auto Parts for auto parts, tyres, batteries, oils, lights, horns, helmets, and vehicle accessories in Khordha.",
};

export default function RequestQuotePage() {
  return (
    <div className="pb-16">
      <section className="relative overflow-hidden border-b border-white/8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,229,255,0.14),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(255,179,0,0.12),transparent_26%)]" />
        <div className="relative mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-3xl space-y-6">
            <p className="inline-flex rounded-full border border-[var(--color-accent)]/25 bg-[var(--color-surface)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
              Request Quote
            </p>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Request Quote
              </h1>
              <p className="text-lg leading-8 text-[var(--color-muted)] sm:text-xl">
                Send a clear part request to JS Auto Parts on WhatsApp with your
                phone number, required item, and optional vehicle details.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <RequestQuoteForm />
      </section>
    </div>
  );
}
