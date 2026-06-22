import type { Metadata } from "next";

import { HomePage } from "@/components/home/home-page";

export const metadata: Metadata = {
  title: "JS Auto Parts Khordha | Auto Parts & Vehicle Accessories",
  description:
    "JS Auto Parts in Khordha offers auto-rickshaw parts, tyres, tubes, helmets, engine oils, batteries, lights, horns, bike accessories, scooty accessories, and vehicle accessories. Call or WhatsApp to ask availability.",
};

export default function Page() {
  return <HomePage />;
}
