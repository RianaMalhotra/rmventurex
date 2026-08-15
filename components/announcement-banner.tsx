import Image from "next/image";

export function AnnouncementBanner() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="relative rounded-3xl overflow-hidden border border-white/10">
        <Image
          src="/images/rmventurex-banner.png"
          alt="RMVentureX — AI Powered Investment Intelligence & Research. Follow us on YouTube, Instagram, Telegram, Threads, X and LinkedIn."
          width={1248}
          height={832}
          className="w-full h-auto"
          priority
        />
      </div>
    </section>
  );
}
