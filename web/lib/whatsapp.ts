import { businessInfo } from "@/lib/business-info";

export const generalEnquiryMessage =
  "Hello JS Auto Parts, I want to enquire about auto parts/accessories.";

export const sendPhotoMessage =
  "Hello JS Auto Parts, I need help identifying a part. I will send a photo here.";

export type QuoteRequestMessageInput = {
  details?: string;
  name?: string;
  phone: string;
  preferredContactMethod?: "Call" | "WhatsApp";
  quantity?: string;
  requiredItem: string;
  vehicleType?: string;
};

export function createWhatsAppUrl(message: string) {
  return `${businessInfo.whatsappUrl}?text=${encodeURIComponent(message)}`;
}

export function createAvailabilityMessage(context: string) {
  return `Hello JS Auto Parts, I want to ask availability for ${context}.`;
}

export function buildQuoteRequestMessage({
  details,
  name,
  phone,
  preferredContactMethod,
  quantity,
  requiredItem,
  vehicleType,
}: QuoteRequestMessageInput) {
  return [
    "Hello JS Auto Parts, I want to request a quote.",
    "",
    `Name: ${name?.trim() || "-"}`,
    `Phone: ${phone.trim()}`,
    `Vehicle type: ${vehicleType?.trim() || "-"}`,
    `Part/accessory needed: ${requiredItem.trim()}`,
    `Quantity: ${quantity?.trim() || "-"}`,
    `Preferred contact method: ${preferredContactMethod ?? "WhatsApp"}`,
    `Details: ${details?.trim() || "-"}`,
  ].join("\n");
}
