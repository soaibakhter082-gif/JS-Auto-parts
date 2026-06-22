import type { Metadata } from "next";

import { ProductsPage } from "@/components/products-page";

export const metadata: Metadata = {
  title: "Ask Availability for Auto Parts | JS Auto Parts Khordha",
  description:
    "Ask JS Auto Parts about availability for auto parts and vehicle accessories in Khordha. Call, WhatsApp, or send a product photo for help.",
};

export default function Page() {
  return <ProductsPage />;
}
