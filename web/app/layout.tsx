import type { Metadata } from "next";
import "./globals.css";

import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { businessInfo } from "@/lib/business-info";

const localBusinessStructuredData = {
  "@context": "https://schema.org",
  "@type": "AutoPartsStore",
  name: businessInfo.businessName,
  telephone: "+919937940267",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Nayakothi Buxi Lane",
    addressLocality: "Khordha",
    addressRegion: "Odisha",
    addressCountry: "IN",
  },
  openingHours: "Mo-Su 09:00-20:00",
  owner: {
    "@type": "Person",
    name: businessInfo.ownerName,
  },
  areaServed: "Khordha, Odisha",
} as const;

export const metadata: Metadata = {
  applicationName: businessInfo.businessName,
  title: {
    default: "JS Auto Parts Khordha | Auto Parts & Vehicle Accessories",
    template: "%s",
  },
  description:
    "JS Auto Parts in Khordha offers auto-rickshaw parts, tyres, tubes, helmets, engine oils, batteries, lights, horns, bike accessories, scooty accessories, and vehicle accessories. Call or WhatsApp to ask availability.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body
        suppressHydrationWarning
        className="min-h-full bg-[var(--color-background)] text-[var(--color-foreground)]"
      >
        <div className="flex min-h-full flex-col">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(localBusinessStructuredData),
            }}
          />
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-[var(--color-call)] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-black"
          >
            Skip to content
          </a>
          <SiteHeader />
          <main id="main-content" tabIndex={-1} className="flex-1 pb-24 md:pb-0">
            {children}
          </main>
          <SiteFooter />
          <MobileStickyCta />
        </div>
      </body>
    </html>
  );
}
