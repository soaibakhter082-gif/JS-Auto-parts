import type { Metadata } from "next";

import { CallLink, DirectionsLink, WhatsAppLink } from "@/components/cta-buttons";
import { businessInfo } from "@/lib/business-info";

const trustPoints = [
  {
    label: "Owner",
    value: businessInfo.ownerName,
  },
  {
    label: "Experience",
    value: businessInfo.experience,
  },
  {
    label: "Location",
    value: "Khordha, Odisha",
  },
] as const;

const businessDetails = [
  {
    label: "Business",
    value: businessInfo.businessName,
  },
  {
    label: "Owner",
    value: businessInfo.ownerName,
  },
  {
    label: "Phone / WhatsApp",
    value: businessInfo.phone,
  },
  {
    label: "Location",
    value: businessInfo.address,
  },
  {
    label: "Hours",
    value: businessInfo.hours,
  },
] as const;

const customerActions = [
  "Call to ask about part availability.",
  "WhatsApp for quick contact.",
  "Visit during business hours.",
] as const;

export const metadata: Metadata = {
  title: "About JS Auto Parts | 25+ Years Local Trust in Khordha",
  description:
    "JS Auto Parts is a local auto parts and vehicle accessories shop in Khordha with 25+ years of local trust. Owner: SK Samir Bux.",
};

export default function AboutPage() {
  return (
    <div className="pb-16">
      <section className="relative overflow-hidden border-b border-white/8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,229,255,0.14),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(255,179,0,0.12),transparent_26%)]" />
        <div className="relative mx-auto grid w-full max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-24">
          <div className="space-y-6">
            <p className="inline-flex rounded-full border border-[var(--color-accent)]/25 bg-[var(--color-surface)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
              {businessInfo.experience}
            </p>
            <div className="space-y-4">
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                About JS Auto Parts
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-[var(--color-muted)] sm:text-xl">
                A trusted local auto parts business in Khordha, Odisha, led by{" "}
                {businessInfo.ownerName}.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <CallLink className="w-full sm:w-auto" />
              <WhatsAppLink className="w-full sm:w-auto" />
            </div>
          </div>

          <section className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(23,28,33,0.96),rgba(11,13,16,0.96))] p-6 shadow-[0_28px_80px_rgba(0,0,0,0.42)]">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
              Local trust
            </p>
            <div className="mt-5 grid gap-4">
              {trustPoints.map((point) => (
                <div
                  key={point.label}
                  className="rounded-[1.5rem] border border-white/8 bg-white/4 p-5"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                    {point.label}
                  </p>
                  <p className="mt-3 text-lg font-medium text-white">
                    {point.value}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
              Owner and trust
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Local support built on clear, direct contact
            </h2>
            <p className="text-base leading-8 text-[var(--color-muted)] sm:text-lg">
              JS Auto Parts is a trusted local business in Khordha, Odisha,
              with {businessInfo.experience.toLowerCase()} and owner-led support
              from {businessInfo.ownerName}.
            </p>
            <p className="text-base leading-8 text-[var(--color-muted)] sm:text-lg">
              The focus here stays simple and practical: call, WhatsApp, or
              visit the shop for current part availability and in-person help.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {trustPoints.map((point) => (
              <section
                key={point.label}
                className="rounded-[1.75rem] border border-white/10 bg-[var(--color-surface)] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.24)]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                  {point.label}
                </p>
                <p className="mt-3 text-base font-medium text-white">
                  {point.value}
                </p>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/8 bg-[var(--color-surface)]/75">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
                Business details
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Everything customers need before they call or visit
              </h2>
              <p className="text-base leading-8 text-[var(--color-muted)] sm:text-lg">
                Use the same approved business details across the site so the
                shop identity, contact information, location, and hours stay
                clear and consistent.
              </p>
            </div>

            <section className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(18,22,27,0.98),rgba(11,13,16,0.98))] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.34)]">
              <dl className="grid gap-4">
                {businessDetails.map((detail) => (
                  <div
                    key={detail.label}
                    className="rounded-[1.5rem] border border-white/8 bg-white/4 px-5 py-4"
                  >
                    <dt className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                      {detail.label}
                    </dt>
                    <dd className="mt-2 text-base font-medium text-white">
                      {detail.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
              What customers can do
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Reach out in the way that works best
            </h2>
            <p className="text-base leading-8 text-[var(--color-muted)] sm:text-lg">
              This page stays enquiry-focused. It helps customers ask about
              availability, message quickly, and plan an in-person visit during
              open hours.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {customerActions.map((action) => (
              <section
                key={action}
                className="rounded-[1.75rem] border border-white/10 bg-[var(--color-surface)] p-5"
              >
                <p className="text-sm leading-7 text-white">{action}</p>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-[var(--color-accent)]/20 bg-[linear-gradient(135deg,rgba(0,229,255,0.08),rgba(255,179,0,0.08))] px-6 py-10 sm:px-8">
          <div className="max-w-3xl space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
              Contact
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Contact JS Auto Parts today
            </h2>
            <p className="text-base leading-8 text-[var(--color-muted)] sm:text-lg">
              Call, WhatsApp, or open directions before visiting the shop in
              Khordha.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <CallLink className="w-full sm:w-auto" />
              <WhatsAppLink className="w-full sm:w-auto" />
              <DirectionsLink className="w-full sm:w-auto" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
