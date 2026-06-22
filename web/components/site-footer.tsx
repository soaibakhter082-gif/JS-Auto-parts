import Link from "next/link";

import { businessInfo } from "@/lib/business-info";
import { primaryNavLinks } from "@/lib/site-nav";

import { CallLink, DirectionsLink, WhatsAppLink } from "./cta-buttons";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/8 bg-[var(--color-surface)]">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_1fr] lg:px-8">
        <section aria-labelledby="footer-business">
          <p
            id="footer-business"
            className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]"
          >
            {businessInfo.businessName}
          </p>
          <div className="mt-4 space-y-2 text-sm text-[var(--color-muted)]">
            <p>
              <span className="font-semibold text-white">Owner:</span>{" "}
              {businessInfo.ownerName}
            </p>
            <p>
              <span className="font-semibold text-white">Phone / WhatsApp:</span>{" "}
              {businessInfo.phone}
            </p>
            <p>
              <span className="font-semibold text-white">Location:</span>{" "}
              {businessInfo.address}
            </p>
            <p>
              <span className="font-semibold text-white">Hours:</span>{" "}
              {businessInfo.hours}
            </p>
          </div>
        </section>

        <nav aria-label="Footer" className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
            Navigate
          </p>
          <ul className="space-y-2">
            {primaryNavLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white transition-colors hover:text-[var(--color-accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <section aria-labelledby="footer-contact">
          <p
            id="footer-contact"
            className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]"
          >
            Contact
          </p>
          <div className="mt-4 flex flex-col gap-3">
            <CallLink className="w-full sm:w-fit" />
            <WhatsAppLink className="w-full sm:w-fit" />
            <DirectionsLink className="w-full sm:w-fit" />
          </div>
        </section>
      </div>
    </footer>
  );
}
