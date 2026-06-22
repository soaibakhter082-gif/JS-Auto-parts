import { CallLink, WhatsAppLink } from "@/components/cta-buttons";

export function MobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[rgba(10,12,14,0.96)] px-4 py-3 backdrop-blur md:hidden">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-3">
        <CallLink className="w-full" />
        <WhatsAppLink className="w-full" />
      </div>
    </div>
  );
}
