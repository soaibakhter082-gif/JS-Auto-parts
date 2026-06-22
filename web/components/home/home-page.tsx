import Link from "next/link";

import {
  AskAvailabilityLink,
  CallLink,
  DirectionsLink,
  SendPhotoLink,
  WhatsAppLink,
} from "@/components/cta-buttons";
import { productCategories } from "@/lib/product-categories";
import { businessInfo } from "@/lib/business-info";

const trustBarItems = [
  businessInfo.experience,
  "Open Every Day",
  businessInfo.hours,
  "Khordha, Odisha",
  `Phone / WhatsApp: ${businessInfo.phone}`,
] as const;

const supportCards = [
  {
    title: "Auto Parts Help",
    copy: "Contact us for auto parts availability and guidance before you visit the shop.",
  },
  {
    title: "Local Vehicle Parts Support",
    copy: "Trusted local support in Khordha for customers who need quick, direct help.",
  },
  {
    title: "Visit or Call for Availability",
    copy: "Call or WhatsApp before visiting for current availability and faster in-shop assistance.",
  },
] as const;

const reasons = [
  "25+ years local trust",
  `Owner: ${businessInfo.ownerName}`,
  "Convenient Khordha location",
  "Open every day",
  "Phone and WhatsApp contact available",
] as const;

const faqs = [
  {
    question: "What are the shop hours?",
    answer: `JS Auto Parts is open every day from 9:00 AM to 8:00 PM.`,
  },
  {
    question: "Where is JS Auto Parts located?",
    answer: `JS Auto Parts is located at ${businessInfo.address}.`,
  },
  {
    question: "Can I contact the shop on WhatsApp?",
    answer: `Yes. You can call or WhatsApp JS Auto Parts at ${businessInfo.phone}.`,
  },
  {
    question: "Who owns JS Auto Parts?",
    answer: `JS Auto Parts is owned by ${businessInfo.ownerName}.`,
  },
  {
    question: "Does the website show prices or online stock?",
    answer:
      "No. This website does not show prices, online stock, cart, or checkout. Please call or WhatsApp JS Auto Parts for current availability.",
  },
] as const;

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl space-y-3">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-8 text-[var(--color-muted)] sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function HomePage() {
  return (
    <div className="pb-16">
      <section className="relative overflow-hidden border-b border-white/8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,229,255,0.14),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(255,179,0,0.14),transparent_24%)]" />
        <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-24">
          <div className="space-y-8">
            <div className="space-y-5">
              <p className="inline-flex rounded-full border border-[var(--color-accent)]/25 bg-[var(--color-surface)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
                25+ Years Local Trust
              </p>
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                JS Auto Parts in Khordha
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-[var(--color-muted)] sm:text-xl">
                Trusted local auto parts support at {businessInfo.address}.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <CallLink className="w-full sm:w-auto" />
              <WhatsAppLink className="w-full sm:w-auto" />
              <Link
                href="/request-quote"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-[var(--color-call)] px-5 py-2.5 text-sm font-semibold tracking-[0.02em] text-black transition-colors hover:bg-[#ffc93d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
              >
                Request Quote
              </Link>
            </div>

            <dl className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-white/8 bg-[var(--color-surface)]/80 p-4">
                <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
                  Hours
                </dt>
                <dd className="mt-2 text-sm font-medium text-white">
                  {businessInfo.hours}
                </dd>
              </div>
              <div className="rounded-3xl border border-white/8 bg-[var(--color-surface)]/80 p-4">
                <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
                  Contact
                </dt>
                <dd className="mt-2 text-sm font-medium text-white">
                  {businessInfo.phone}
                </dd>
              </div>
              <div className="rounded-3xl border border-white/8 bg-[var(--color-surface)]/80 p-4">
                <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
                  Owner
                </dt>
                <dd className="mt-2 text-sm font-medium text-white">
                  {businessInfo.ownerName}
                </dd>
              </div>
            </dl>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(23,28,33,0.96),rgba(11,13,16,0.96))] p-6 shadow-[0_28px_80px_rgba(0,0,0,0.42)]">
            <div className="rounded-[1.5rem] border border-white/8 bg-black/20 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
                Garage Direction
              </p>
              <div className="mt-5 h-40 rounded-[1.5rem] border border-white/8 bg-[radial-gradient(circle_at_top,rgba(0,229,255,0.22),transparent_35%),linear-gradient(180deg,#171c21_0%,#0f1215_100%)]" />
              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/4 px-4 py-3">
                  <span className="text-sm text-[var(--color-muted)]">Location</span>
                  <span className="text-sm font-medium text-white">Khordha, Odisha</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/4 px-4 py-3">
                  <span className="text-sm text-[var(--color-muted)]">Availability</span>
                  <span className="text-sm font-medium text-white">Call or WhatsApp</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/4 px-4 py-3">
                  <span className="text-sm text-[var(--color-muted)]">Visit</span>
                  <span className="text-sm font-medium text-white">Open Every Day</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Trust bar" className="border-b border-white/8 bg-[var(--color-surface)]/80">
        <div className="mx-auto w-full max-w-6xl px-4 py-5 sm:px-6 lg:px-8">
          <ul className="grid gap-3 text-sm text-white sm:grid-cols-2 xl:grid-cols-5">
            {trustBarItems.map((item) => (
              <li
                key={item}
                className="rounded-full border border-white/8 bg-white/4 px-4 py-3 text-center font-medium"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Support"
          title="Parts and support without the guesswork"
          description="Contact us for auto parts availability and guidance, get local vehicle parts support in Khordha, and call or WhatsApp before visiting for current availability."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {supportCards.map((card) => (
            <section
              key={card.title}
              className="rounded-[2rem] border border-white/10 bg-[var(--color-surface)] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.28)]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
                {card.title}
              </p>
              <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
                {card.copy}
              </p>
            </section>
          ))}
        </div>
      </section>

      <section className="border-y border-white/8 bg-[var(--color-surface)]/70">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Category Highlights"
            title="Browse categories, then ask availability"
            description="These approved category highlights help customers understand what JS Auto Parts handles before they message or call."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {productCategories.slice(0, 6).map((category) => (
              <section
                key={category.name}
                className="flex h-full flex-col rounded-[2rem] border border-white/10 bg-[var(--color-surface)] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.28)]"
              >
                <h3 className="text-2xl font-semibold tracking-tight text-white">
                  {category.name}
                </h3>
                <p className="mt-4 flex-1 text-base leading-8 text-[var(--color-muted)]">
                  {category.description}
                </p>
                <AskAvailabilityLink
                  context={category.name}
                  className="mt-6 w-full sm:w-auto"
                />
              </section>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/product-categories"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold tracking-[0.02em] text-white transition-colors hover:border-[var(--color-accent)] hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
            >
              View All Categories
            </Link>
            <Link
              href="/products"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold tracking-[0.02em] text-white transition-colors hover:border-[var(--color-accent)] hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
            >
              Product Enquiry
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-white/8 bg-[var(--color-surface)]/70">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="A dependable local auto parts stop in Khordha"
            description="The home page stays grounded in approved facts only: long-standing local trust, direct owner support, convenient location, daily opening hours, and quick contact options."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason) => (
              <div
                key={reason}
                className="rounded-[1.75rem] border border-white/10 bg-[var(--color-surface-strong)] p-5"
              >
                <p className="text-sm leading-7 text-white">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(18,22,27,0.98),rgba(11,13,16,0.98))] p-8 shadow-[0_24px_70px_rgba(0,0,0,0.34)] lg:grid-cols-[1.05fr_0.95fr]">
          <SectionHeading
            eyebrow="Visit the Shop"
            title="Stop by in Khordha or get directions before visiting"
            description={`${businessInfo.address}. ${businessInfo.hours}. Use the directions link to open the real address query in maps.`}
          />
          <div className="space-y-5 rounded-[1.5rem] border border-white/10 bg-white/4 p-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
                Address
              </p>
              <p className="mt-2 text-lg font-medium text-white">
                {businessInfo.address}
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
                Hours
              </p>
              <p className="mt-2 text-lg font-medium text-white">
                {businessInfo.hours}
              </p>
            </div>
            <DirectionsLink className="w-full sm:w-auto" />
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-[var(--color-accent)]/20 bg-[linear-gradient(135deg,rgba(0,229,255,0.08),rgba(255,179,0,0.08))] px-6 py-10 sm:px-8">
          <div className="max-w-3xl space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
              Final CTA
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Need auto parts help in Khordha?
            </h2>
            <p className="text-base leading-8 text-[var(--color-muted)] sm:text-lg">
              Call or WhatsApp JS Auto Parts before visiting, request a quote,
              or send a photo on WhatsApp if you are unsure of the exact part.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <CallLink className="w-full sm:w-auto" />
              <WhatsAppLink className="w-full sm:w-auto" />
              <SendPhotoLink className="w-full sm:w-auto" />
              <Link
                href="/request-quote"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold tracking-[0.02em] text-white transition-colors hover:border-[var(--color-accent)] hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
              >
                Request Quote
              </Link>
              <DirectionsLink className="w-full sm:w-auto" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Quick answers before you call or visit"
        />
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
