import Link from "next/link";

import { AskAvailabilityLink, CallLink, WhatsAppLink } from "@/components/cta-buttons";
import { productCategories } from "@/lib/product-categories";

export function ProductCategoriesPage() {
  return (
    <div className="pb-16">
      <section className="relative overflow-hidden border-b border-white/8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,229,255,0.14),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(255,179,0,0.12),transparent_26%)]" />
        <div className="relative mx-auto grid w-full max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
          <div className="space-y-6">
            <p className="inline-flex rounded-full border border-[var(--color-accent)]/25 bg-[var(--color-surface)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
              Product Categories
            </p>
            <div className="space-y-4">
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Product Categories at JS Auto Parts
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-[var(--color-muted)] sm:text-xl">
                Browse the main auto parts and vehicle accessory categories in
                Khordha, then ask availability through WhatsApp or call
                directly.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <WhatsAppLink className="w-full sm:w-auto" />
              <CallLink className="w-full sm:w-auto" />
              <Link
                href="/products"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold tracking-[0.02em] text-white transition-colors hover:border-[var(--color-accent)] hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
              >
                Product Enquiry
              </Link>
            </div>
          </div>

          <section className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(23,28,33,0.96),rgba(11,13,16,0.96))] p-6 shadow-[0_28px_80px_rgba(0,0,0,0.42)]">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
              How to use this page
            </p>
            <div className="mt-5 grid gap-4">
              {[
                "Browse the approved categories only.",
                "Use Ask Availability when you know the category you need.",
                "Move to Product Enquiry if you need help identifying a part.",
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
            Browse Categories
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Major auto parts and accessories categories
          </h2>
          <p className="max-w-3xl text-base leading-8 text-[var(--color-muted)] sm:text-lg">
            This page stays enquiry-first. It helps customers understand what
            JS Auto Parts handles without listing prices, stock counts, or
            ecommerce actions.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {productCategories.map((category) => (
            <section
              key={category.name}
              className="flex h-full flex-col rounded-[2rem] border border-white/10 bg-[var(--color-surface)] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.28)]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
                Category
              </p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white">
                {category.name}
              </h2>
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
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-[var(--color-accent)]/20 bg-[linear-gradient(135deg,rgba(0,229,255,0.08),rgba(255,179,0,0.08))] px-6 py-10 sm:px-8">
          <div className="max-w-3xl space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
              Need More Help?
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Move from categories to a direct enquiry
            </h2>
            <p className="text-base leading-8 text-[var(--color-muted)] sm:text-lg">
              If you know the category, ask availability now. If you are unsure
              about the exact part, go to Product Enquiry or Request Quote for a
              clearer message.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/products"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold tracking-[0.02em] text-white transition-colors hover:border-[var(--color-accent)] hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
              >
                Product Enquiry
              </Link>
              <Link
                href="/request-quote"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-[var(--color-call)] px-5 py-2.5 text-sm font-semibold tracking-[0.02em] text-black transition-colors hover:bg-[#ffc93d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
              >
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
