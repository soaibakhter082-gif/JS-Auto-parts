import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { businessInfo } from "@/lib/business-info";
import {
  createAvailabilityMessage,
  createWhatsAppUrl,
  generalEnquiryMessage,
  sendPhotoMessage,
} from "@/lib/whatsapp";

type CtaVariant = "call" | "whatsapp" | "directions" | "ghost";

type CtaLinkProps = {
  children: ReactNode;
  href: string;
  variant?: CtaVariant;
  ariaLabel?: string;
  className?: string;
  external?: boolean;
} & Omit<ComponentPropsWithoutRef<"a">, "children" | "href" | "className">;

type CtaPresetProps = Omit<
  CtaLinkProps,
  "href" | "variant" | "external" | "children"
> & {
  children?: ReactNode;
};

type WhatsAppPresetProps = CtaPresetProps & {
  message?: string;
};

const variantClasses: Record<CtaVariant, string> = {
  call: "bg-[var(--color-call)] text-black hover:bg-[#ffc93d]",
  whatsapp: "bg-[var(--color-whatsapp)] text-black hover:bg-[#34eb7a]",
  directions:
    "border border-white/15 bg-white/5 text-white hover:border-[var(--color-accent)] hover:bg-white/10",
  ghost:
    "border border-white/10 bg-transparent text-white hover:border-white/25 hover:bg-white/5",
};

export function CtaLink({
  children,
  href,
  variant = "ghost",
  ariaLabel,
  className = "",
  external = false,
  ...props
}: CtaLinkProps) {
  const externalProps = external
    ? {
        rel: "noopener noreferrer",
        target: "_blank",
      }
    : {};

  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className={`inline-flex min-h-11 items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold tracking-[0.02em] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] ${variantClasses[variant]} ${className}`.trim()}
      {...externalProps}
      {...props}
    >
      {children}
    </a>
  );
}

export function CallLink({
  children = `Call ${businessInfo.phone}`,
  className,
  ...props
}: CtaPresetProps) {
  return (
    <CtaLink
      href={businessInfo.telUrl}
      variant="call"
      ariaLabel={`Call ${businessInfo.businessName} at ${businessInfo.phone}`}
      className={className}
      {...props}
    >
      {children}
    </CtaLink>
  );
}

export function WhatsAppLink({
  children = `WhatsApp ${businessInfo.whatsappPhone}`,
  message = generalEnquiryMessage,
  className,
  ...props
}: WhatsAppPresetProps) {
  return (
    <CtaLink
      href={createWhatsAppUrl(message)}
      variant="whatsapp"
      ariaLabel={`Message ${businessInfo.businessName} on WhatsApp at ${businessInfo.whatsappPhone}`}
      className={className}
      external
      {...props}
    >
      {children}
    </CtaLink>
  );
}

export function AskAvailabilityLink({
  children = "Ask Availability",
  className,
  context,
  ...props
}: WhatsAppPresetProps & { context: string }) {
  return (
    <WhatsAppLink
      message={createAvailabilityMessage(context)}
      ariaLabel={`Ask ${businessInfo.businessName} about availability for ${context}`}
      className={className}
      {...props}
    >
      {children}
    </WhatsAppLink>
  );
}

export function SendPhotoLink({
  children = "Send Photo on WhatsApp",
  className,
  ...props
}: CtaPresetProps) {
  return (
    <WhatsAppLink
      message={sendPhotoMessage}
      ariaLabel={`Send a photo enquiry to ${businessInfo.businessName} on WhatsApp`}
      className={className}
      {...props}
    >
      {children}
    </WhatsAppLink>
  );
}

export function DirectionsLink({
  children = "Get Directions",
  className,
  ...props
}: CtaPresetProps) {
  return (
    <CtaLink
      href={businessInfo.directionsUrl}
      variant="directions"
      ariaLabel={`Get directions to ${businessInfo.businessName} at ${businessInfo.address}`}
      className={className}
      external
      {...props}
    >
      {children}
    </CtaLink>
  );
}
