import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative">
      {/* Background image */}
      <div className="relative h-[72vh] min-h-[520px] md:h-[85vh] w-full overflow-hidden">
        <Image
          src="/hero.jpg" // put a wide shot here (2400x1400+)
          alt="Kashyap Interior Studio hero"
          fill
          priority
          className="object-cover"
          style={{ objectPosition: "60% 45%" }} // tweak focus if needed
        />

        {/* Brand duotone + readability scrims (gold x charcoal) */}
        <div className="absolute inset-0 mix-blend-multiply bg-[var(--brand)]/70" />
        <div className="absolute inset-0 mix-blend-multiply bg-black/45" />
        {/* subtle edges */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/25 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />
      </div>

      {/* Content rail (no small card; integrates with bg) */}
      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="max-w-4xl">
            {/* Accent tick */}
            <div className="mb-4 h-1.5 w-16 rounded-full bg-[var(--brand)]" />

            {/* Brand + owner */}
            <h1 className="text-balance text-4xl md:text-6xl font-extrabold tracking-[-0.01em] text-white">
              Kashyap Interior Studio
            </h1>
            <p className="mt-1 text-base md:text-lg text-white/80">
              by <span className="font-semibold text-[var(--brand)]">Om Kashyap</span>
            </p>

            {/* Tagline */}
            <h2 className="mt-4 text-balance text-2xl md:text-4xl font-semibold text-white">
              Designing Spaces That Tell Your Story
            </h2>

            {/* Subcopy */}
            <p className="mt-3 max-w-prose text-sm md:text-base text-white/85">
              Interior decoration & Wooden work across Chandigarh, Mohali, Landra, Airport Road....
            </p>

            {/* CTAs */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#portfolio"
                className="inline-flex items-center rounded-md bg-[var(--brand)] px-5 py-3 text-sm md:text-base font-medium text-black hover:opacity-90 transition"
              >
                View Our Work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center rounded-md border border-[var(--brand)] px-5 py-3 text-sm md:text-base font-medium text-white hover:bg-white/10 transition"
              >
                Get a Free Consultation
              </a>
            </div>

            {/* Professional pills row (integrated with image; no box) */}
            <div className="mt-5 flex flex-wrap gap-2 text-[13px] md:text-sm">
              <span className="rounded-full bg-white/15 px-3 py-1 text-white backdrop-blur-sm">
                📞 <a href="tel:+918054144900" className="underline decoration-white/30 underline-offset-2"> +91 8054144900</a>
              </span>
              <span className="rounded-full bg-white/15 px-3 py-1 text-white backdrop-blur-sm">
                ✉️ <a href="mailto:kashyapom429@gmail.com" className="underline decoration-white/30 underline-offset-2">kashyapom429@gmail.com</a>
              </span>
              <span className="rounded-full bg-white/15 px-3 py-1 text-white backdrop-blur-sm">
                Chandigarh & Nearby Areas
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
