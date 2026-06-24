import type { Metadata } from "next";

import { CallLink, DirectionsLink, WhatsAppLink } from "@/components/cta-buttons";
import { businessInfo } from "@/lib/business-info";

const actionCards = [
  {
    label: "Call",
    value: businessInfo.phone,
    description: "Speak directly for current part availability and quick help.",
  },
  {
    label: "WhatsApp",
    value: businessInfo.whatsappPhone,
    description: "Send a message for fast contact before you visit the shop.",
  },
  {
    label: "Visit",
    value: businessInfo.address,
    description: "Stop by in Khordha during open hours for in-person support.",
  },
] as const;

const faqs = [
  {
    question: "Does JS Auto Parts support WhatsApp contact?",
    answer: `Yes. You can call or WhatsApp JS Auto Parts at ${businessInfo.phone}.`,
  },
  {
    question: "What are the shop hours?",
    answer: "JS Auto Parts is open every day from 9:00 AM to 8:00 PM.",
  },
  {
    question: "Is online ordering available?",
    answer:
      "No. This website does not include online ordering, cart, checkout, payment, or ecommerce. Please call or WhatsApp JS Auto Parts for current availability.",
  },
] as const;

const [openDays, openHours] = businessInfo.hours.split(", ");

export const metadata: Metadata = {
  title: "Contact JS Auto Parts Khordha | Call or WhatsApp",
  description:
    "Contact JS Auto Parts at Nayakothi Buxi Lane, Khordha, Odisha. Open Every Day, 9:00 AM – 8:00 PM. Call or WhatsApp 9937940267.",
};

export default function ContactPage() {
  return (
    <div className="pb-16">
      <section className="relative overflow-hidden border-b border-white/8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,229,255,0.14),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(255,179,0,0.12),transparent_26%)]" />
        <div className="relative mx-auto grid w-full max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-24">
          <div className="space-y-6">
            <p className="inline-flex rounded-full border border-[var(--color-accent)]/25 bg-[var(--color-surface)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
              Contact-first support
            </p>
            <div className="space-y-4">
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Contact JS Auto Parts
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-[var(--color-muted)] sm:text-xl">
                Call, WhatsApp, or visit the shop in Khordha during business
                hours.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <CallLink className="w-full sm:w-auto" />
              <WhatsAppLink className="w-full sm:w-auto" />
            </div>
          </div>

          <section className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(23,28,33,0.96),rgba(11,13,16,0.96))] p-6 shadow-[0_28px_80px_rgba(0,0,0,0.42)]">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
              Contact snapshot
            </p>
            <dl className="mt-5 grid gap-4">
              <div className="rounded-[1.5rem] border border-white/8 bg-white/4 p-5">
                <dt className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                  Phone / WhatsApp
                </dt>
                <dd className="mt-3 text-lg font-medium text-white">
                  {businessInfo.phone}
                </dd>
              </div>
              <div className="rounded-[1.5rem] border border-white/8 bg-white/4 p-5">
                <dt className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                  Address
                </dt>
                <dd className="mt-3 text-lg font-medium text-white">
                  {businessInfo.address}
                </dd>
              </div>
              <div className="rounded-[1.5rem] border border-white/8 bg-white/4 p-5">
                <dt className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                  Hours
                </dt>
                <dd className="mt-3 text-lg font-medium text-white">
                  {businessInfo.hours}
                </dd>
              </div>
            </dl>
          </section>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
            Contact actions
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Reach the shop quickly and clearly
          </h2>
        </div>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {actionCards.map((card) => (
            <section
              key={card.label}
              className="rounded-[2rem] border border-white/10 bg-[var(--color-surface)] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.28)]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
                {card.label}
              </p>
              <p className="mt-4 text-lg font-medium text-white">{card.value}</p>
              <p className="mt-3 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                {card.description}
              </p>
            </section>
          ))}
        </div>
      </section>

      <section className="border-y border-white/8 bg-[var(--color-surface)]/75">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
              Hours
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Open daily for local customers in Khordha
            </h2>
            <p className="text-base leading-8 text-[var(--color-muted)] sm:text-lg">
              Use the approved business hours before planning a visit, and call
              or WhatsApp first if you want to check current availability.
            </p>
          </div>

          <section className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.75rem] border border-white/10 bg-[var(--color-surface-strong)] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                Open days
              </p>
              <p className="mt-3 text-xl font-medium text-white">
                {openDays ?? businessInfo.hours}
              </p>
            </div>
            <div className="rounded-[1.75rem] border border-white/10 bg-[var(--color-surface-strong)] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                Hours
              </p>
              <p className="mt-3 text-xl font-medium text-white">
                {openHours ?? businessInfo.hours}
              </p>
            </div>
          </section>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(18,22,27,0.98),rgba(11,13,16,0.98))] p-8 shadow-[0_24px_70px_rgba(0,0,0,0.34)] lg:grid-cols-[1fr_0.92fr]">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
              Location details
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Visit the shop with the real address and directions link
            </h2>
            <p className="text-base leading-8 text-[var(--color-muted)] sm:text-lg">
              {businessInfo.address}. The map below uses a Google Maps search
              for the shop address in Khordha, and the directions CTA opens the
              same query directly in Google Maps.
            </p>
          </div>

          <section className="space-y-5 rounded-[1.5rem] border border-white/10 bg-white/4 p-6">
            <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,#171c21_0%,#0f1215_100%)]">
              <iframe
                src={businessInfo.mapsEmbedUrl}
                title="Google Map for JS Auto Parts in Khordha"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-56 w-full"
              />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
                Address
              </p>
              <p className="mt-2 text-lg font-medium text-white">
                {businessInfo.address}
              </p>
            </div>
            <p className="text-sm leading-7 text-[var(--color-muted)]">
              This is a Google Maps search/embed for the address location. If a
              precise listing is unavailable, use the directions link as the
              authoritative fallback.
            </p>
            <DirectionsLink className="w-full sm:w-auto" />
          </section>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-[var(--color-accent)]/20 bg-[linear-gradient(135deg,rgba(0,229,255,0.08),rgba(255,179,0,0.08))] px-6 py-10 sm:px-8">
          <div className="max-w-3xl space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
              Guidance
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Contact guidance before you visit
            </h2>
            <p className="text-base leading-8 text-[var(--color-muted)] sm:text-lg">
              For current part availability, call or WhatsApp before visiting.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <CallLink className="w-full sm:w-auto" />
              <WhatsAppLink className="w-full sm:w-auto" />
              <DirectionsLink className="w-full sm:w-auto" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
            FAQ
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Quick contact answers
          </h2>
        </div>
        <div className="mt-8 space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-[1.5rem] border border-white/10 bg-[var(--color-surface)] p-5"
            >
              <summary className="cursor-pointer list-none text-left text-base font-semibold text-white marker:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]">
                <span className="flex items-center justify-between gap-4">
                  <span>{faq.question}</span>
                  <span className="text-[var(--color-accent)] transition-transform group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-4 pr-8 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
