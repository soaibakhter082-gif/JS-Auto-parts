import Link from "next/link";

import {
  AskAvailabilityLink,
  CallLink,
  SendPhotoLink,
  WhatsAppLink,
} from "@/components/cta-buttons";
import { productCategories } from "@/lib/product-categories";

const enquirySteps = [
  {
    title: "Know the category or part?",
    copy: "Use Ask Availability to message JS Auto Parts with the category or product context you already know.",
    action: (
      <AskAvailabilityLink
        context="auto parts or vehicle accessories"
        className="mt-5 w-full sm:w-auto"
      />
    ),
  },
  {
    title: "Not sure about the exact part?",
    copy: "Use WhatsApp to send a message first, then attach a photo directly inside WhatsApp for part identification support.",
    action: <SendPhotoLink className="mt-5 w-full sm:w-auto" />,
  },
  {
    title: "Need a quote instead?",
    copy: "Move to the Request Quote page when you want to send clearer part, quantity, and vehicle details through WhatsApp.",
    action: (
      <Link
        href="/request-quote"
        className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full bg-[var(--color-call)] px-5 py-2.5 text-sm font-semibold tracking-[0.02em] text-black transition-colors hover:bg-[#ffc93d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
      >
        Request Quote
      </Link>
    ),
  },
] as const;

export function ProductsPage() {
  return (
    <div className="pb-16">
      <section className="relative overflow-hidden border-b border-white/8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,229,255,0.14),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(255,179,0,0.12),transparent_26%)]" />
        <div className="relative mx-auto grid w-full max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1.12fr_0.88fr] lg:px-8 lg:py-24">
          <div className="space-y-6">
            <p className="inline-flex rounded-full border border-[var(--color-accent)]/25 bg-[var(--color-surface)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
              Product Enquiry
            </p>
            <div className="space-y-4">
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Products and Product Enquiry
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-[var(--color-muted)] sm:text-xl">
                Ask about auto parts and vehicle accessories in Khordha through
                call or WhatsApp, and send a photo when you need help
                identifying a part.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <AskAvailabilityLink
                context="auto parts or vehicle accessories"
                className="w-full sm:w-auto"
              />
              <SendPhotoLink className="w-full sm:w-auto" />
              <Link
                href="/request-quote"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-[var(--color-call)] px-5 py-2.5 text-sm font-semibold tracking-[0.02em] text-black transition-colors hover:bg-[#ffc93d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
              >
                Request Quote
              </Link>
            </div>
          </div>

          <section className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(23,28,33,0.96),rgba(11,13,16,0.96))] p-6 shadow-[0_28px_80px_rgba(0,0,0,0.42)]">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
              Enquiry guidance
            </p>
            <div className="mt-5 space-y-4">
              {[
                "Ask before visiting for current availability.",
                "Use WhatsApp when you need a quick text conversation.",
                "Send a photo on WhatsApp if you do not know the exact part name.",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[1.5rem] border border-white/8 bg-white/4 p-5"
                >
                  <p className="text-sm leading-7 text-white">{item}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
            Enquiry Options
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Choose the fastest enquiry path
          </h2>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {enquirySteps.map((step) => (
            <section
              key={step.title}
              className="flex h-full flex-col rounded-[2rem] border border-white/10 bg-[var(--color-surface)] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.28)]"
            >
              <h2 className="text-2xl font-semibold tracking-tight text-white">
                {step.title}
              </h2>
              <p className="mt-4 flex-1 text-base leading-8 text-[var(--color-muted)]">
                {step.copy}
              </p>
              {step.action}
            </section>
          ))}
        </div>
      </section>

      <section className="border-y border-white/8 bg-[var(--color-surface)]/70">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
              Example Categories
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Category-level enquiry examples only
            </h2>
            <p className="text-base leading-8 text-[var(--color-muted)] sm:text-lg">
              This page stays at category level. It does not show prices, stock
              counts, or ecommerce actions. Contact JS Auto Parts directly for
              current availability.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {productCategories.slice(0, 6).map((category) => (
              <section
                key={category.name}
                className="rounded-[1.75rem] border border-white/10 bg-[var(--color-surface-strong)] p-5"
              >
                <p className="text-base font-medium text-white">{category.name}</p>
                <AskAvailabilityLink
                  context={category.name}
                  className="mt-4 w-full sm:w-auto"
                />
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-[var(--color-accent)]/20 bg-[linear-gradient(135deg,rgba(0,229,255,0.08),rgba(255,179,0,0.08))] px-6 py-10 sm:px-8">
          <div className="max-w-3xl space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
              Direct Contact
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Call or message before you visit
            </h2>
            <p className="text-base leading-8 text-[var(--color-muted)] sm:text-lg">
              Use WhatsApp for quick context, send a photo if needed, or call
              JS Auto Parts directly for urgent local support.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <CallLink className="w-full sm:w-auto" />
              <WhatsAppLink className="w-full sm:w-auto" />
              <SendPhotoLink className="w-full sm:w-auto" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
