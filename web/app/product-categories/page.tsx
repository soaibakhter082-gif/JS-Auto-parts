import type { Metadata } from "next";

import { ProductCategoriesPage } from "@/components/product-categories-page";

export const metadata: Metadata = {
  title: "Auto Parts & Accessories Categories | JS Auto Parts Khordha",
  description:
    "Browse auto-rickshaw parts, tyres, tubes, helmets, oils, batteries, lights, horns, bike accessories, scooty accessories, and vehicle accessories at JS Auto Parts Khordha.",
};

export default function Page() {
  return <ProductCategoriesPage />;
}
