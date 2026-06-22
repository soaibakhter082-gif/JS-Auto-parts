"use client";

import { useState } from "react";

import { CallLink, WhatsAppLink } from "@/components/cta-buttons";
import { businessInfo } from "@/lib/business-info";
import { buildQuoteRequestMessage, createWhatsAppUrl } from "@/lib/whatsapp";

type PreferredContactMethod = "Call" | "WhatsApp";

type QuoteFormState = {
  details: string;
  name: string;
  phone: string;
  preferredContactMethod: PreferredContactMethod;
  quantity: string;
  requiredItem: string;
  vehicleType: string;
};

type QuoteFormErrors = Partial<Record<keyof QuoteFormState, string>>;

const initialState: QuoteFormState = {
  details: "",
  name: "",
  phone: "",
  preferredContactMethod: "WhatsApp",
  quantity: "",
  requiredItem: "",
  vehicleType: "",
};

function hasValidPhoneNumber(value: string) {
  const digits = value.replace(/\D/g, "");

  return digits.length === 10 || (digits.length === 12 && digits.startsWith("91"));
}

export function RequestQuoteForm() {
  const [formState, setFormState] = useState<QuoteFormState>(initialState);
  const [errors, setErrors] = useState<QuoteFormErrors>({});
  const [status, setStatus] = useState<"idle" | "opening" | "error">("idle");

  function updateField<Key extends keyof QuoteFormState>(
    key: Key,
    value: QuoteFormState[Key],
  ) {
    setFormState((current) => ({
      ...current,
      [key]: value,
    }));

    setErrors((current) => {
      if (!current[key]) {
        return current;
      }

      const nextErrors = { ...current };
      delete nextErrors[key];
      return nextErrors;
    });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors: QuoteFormErrors = {};

    if (!formState.phone.trim()) {
      nextErrors.phone = "Phone number is required.";
    } else if (!hasValidPhoneNumber(formState.phone)) {
      nextErrors.phone = "Enter a valid phone number.";
    }

    if (!formState.requiredItem.trim()) {
      nextErrors.requiredItem = "Required part or accessory is required.";
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus("idle");
      return;
    }

    const whatsappUrl = createWhatsAppUrl(
      buildQuoteRequestMessage({
        details: formState.details,
        name: formState.name,
        phone: formState.phone,
        preferredContactMethod: formState.preferredContactMethod,
        quantity: formState.quantity,
        requiredItem: formState.requiredItem,
        vehicleType: formState.vehicleType,
      }),
    );

    setErrors({});
    setStatus("opening");

    try {
      window.location.assign(whatsappUrl);
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
      <form
        noValidate
        onSubmit={handleSubmit}
        className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(18,22,27,0.98),rgba(11,13,16,0.98))] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.34)] sm:p-8"
      >
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
            Quote Form
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white">
            Send a quote request on WhatsApp
          </h2>
          <p className="text-base leading-8 text-[var(--color-muted)]">
            Required fields are phone number and required part/accessory.
            Optional details can be left blank.
          </p>
        </div>

        <div className="mt-8 grid gap-5">
          <div className="grid gap-2">
            <label htmlFor="name" className="text-sm font-medium text-white">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formState.name}
              onChange={(event) => updateField("name", event.target.value)}
              className="min-h-12 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-[var(--color-muted)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
              placeholder="Your name"
            />
          </div>

          <div className="grid gap-2">
            <label htmlFor="phone" className="text-sm font-medium text-white">
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              value={formState.phone}
              onChange={(event) => updateField("phone", event.target.value)}
              aria-invalid={errors.phone ? "true" : "false"}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              className="min-h-12 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-[var(--color-muted)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
              placeholder="Phone number"
              required
            />
            {errors.phone ? (
              <p id="phone-error" className="text-sm font-medium text-red-300">
                {errors.phone}
              </p>
            ) : null}
          </div>

          <div className="grid gap-2">
            <label
              htmlFor="vehicleType"
              className="text-sm font-medium text-white"
            >
              Vehicle Type
            </label>
            <select
              id="vehicleType"
              name="vehicleType"
              value={formState.vehicleType}
              onChange={(event) => updateField("vehicleType", event.target.value)}
              className="min-h-12 rounded-2xl border border-white/10 bg-[var(--color-surface)] px-4 py-3 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
            >
              <option value="">Select vehicle type</option>
              <option value="Auto-rickshaw">Auto-rickshaw</option>
              <option value="Bike">Bike</option>
              <option value="Scooty">Scooty</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="grid gap-2">
            <label
              htmlFor="requiredItem"
              className="text-sm font-medium text-white"
            >
              Required Part / Accessory
            </label>
            <input
              id="requiredItem"
              name="requiredItem"
              type="text"
              value={formState.requiredItem}
              onChange={(event) => updateField("requiredItem", event.target.value)}
              aria-invalid={errors.requiredItem ? "true" : "false"}
              aria-describedby={
                errors.requiredItem ? "required-item-error" : undefined
              }
              className="min-h-12 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-[var(--color-muted)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
              placeholder="Required part or accessory"
              required
            />
            {errors.requiredItem ? (
              <p
                id="required-item-error"
                className="text-sm font-medium text-red-300"
              >
                {errors.requiredItem}
              </p>
            ) : null}
          </div>

          <div className="grid gap-2">
            <label htmlFor="quantity" className="text-sm font-medium text-white">
              Quantity If Known
            </label>
            <input
              id="quantity"
              name="quantity"
              type="text"
              value={formState.quantity}
              onChange={(event) => updateField("quantity", event.target.value)}
              className="min-h-12 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-[var(--color-muted)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
              placeholder="Quantity"
            />
          </div>

          <fieldset className="grid gap-3">
            <legend className="text-sm font-medium text-white">
              Preferred Contact Method
            </legend>
            <div className="grid gap-3 sm:grid-cols-2">
              {(["WhatsApp", "Call"] as const).map((option) => (
                <label
                  key={option}
                  className="flex min-h-12 items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white"
                >
                  <input
                    type="radio"
                    name="preferredContactMethod"
                    value={option}
                    checked={formState.preferredContactMethod === option}
                    onChange={(event) =>
                      updateField(
                        "preferredContactMethod",
                        event.target.value as PreferredContactMethod,
                      )
                    }
                    className="h-4 w-4 accent-[var(--color-accent)]"
                  />
                  {option}
                </label>
              ))}
            </div>
          </fieldset>

          <div className="grid gap-2">
            <label htmlFor="details" className="text-sm font-medium text-white">
              Message / Details
            </label>
            <textarea
              id="details"
              name="details"
              rows={5}
              value={formState.details}
              onChange={(event) => updateField("details", event.target.value)}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-[var(--color-muted)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
              placeholder="Vehicle details, issue, or anything else you want to mention"
            />
          </div>
        </div>

        <div className="mt-8 space-y-4">
          <button
            type="submit"
            className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[var(--color-call)] px-5 py-3 text-sm font-semibold tracking-[0.02em] text-black transition-colors hover:bg-[#ffc93d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
          >
            {status === "opening" ? "Opening WhatsApp..." : "Submit Request"}
          </button>
          <p className="text-sm leading-7 text-[var(--color-muted)]">
            Something went wrong. Please call or WhatsApp JS Auto Parts directly
            at {businessInfo.phone}.
          </p>
          {status === "error" ? (
            <p className="text-sm font-medium text-red-300">
              WhatsApp did not open. Please call JS Auto Parts at{" "}
              {businessInfo.phone}.
            </p>
          ) : null}
        </div>
      </form>

      <aside className="space-y-5 rounded-[2rem] border border-white/10 bg-[var(--color-surface)] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.28)] sm:p-8">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
            WhatsApp-first MVP
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white">
            No backend storage. Direct contact stays visible.
          </h2>
          <p className="text-base leading-8 text-[var(--color-muted)]">
            This form prepares a WhatsApp message only. It does not store quote
            requests, send email, or require sign-in.
          </p>
        </div>

        <div className="grid gap-4">
          <section className="rounded-[1.5rem] border border-white/10 bg-white/4 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
              Required
            </p>
            <p className="mt-3 text-sm leading-7 text-white">
              Phone number and required part/accessory.
            </p>
          </section>
          <section className="rounded-[1.5rem] border border-white/10 bg-white/4 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
              Optional
            </p>
            <p className="mt-3 text-sm leading-7 text-white">
              Name, vehicle type, quantity, and message/details can be left
              blank.
            </p>
          </section>
          <section className="rounded-[1.5rem] border border-white/10 bg-white/4 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
              Fallback
            </p>
            <p className="mt-3 text-sm leading-7 text-white">
              Phone / WhatsApp: {businessInfo.phone}
            </p>
          </section>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <WhatsAppLink className="w-full sm:w-auto lg:w-full" />
          <CallLink className="w-full sm:w-auto lg:w-full" />
        </div>
      </aside>
    </div>
  );
}
