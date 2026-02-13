"use client";

import FadeIn from "@/components/FadeIn";

export default function Hero() {
  return (
    <section className="relative bg-black text-gray-200 min-h-[85vh] flex items-center overflow-hidden">
      {/* Background blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-purple-600 via-pink-500 to-cyan-400 rounded-full opacity-20 animate-pulse pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 rounded-full opacity-20 animate-pulse pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 text-center space-y-6 relative z-10">
        <FadeIn>
          <h1 className="text-4xl md:text-6xl font-semibold text-white leading-tight">
            Engineered for Velocity.
            <br className="hidden md:block" />
            Built for Scale.
          </h1>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            ZENTIC Studio transforms complex business challenges into elite digital products. 
            Leveraging expert engineering in React/NextJS, PHP/Laravel, Python/Django, and AI, we build robust backend architectures and 
            high-performance frontends for forward-thinking brands.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex justify-center gap-5 mt-10 flex-wrap">
            {/* ALWAYS ON NEON BUTTON */}
            <a
              href="/contact"
              className="relative px-8 py-4 rounded-xl font-semibold text-white
              bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-500
              animate-neonGlow
              shadow-[0_0_30px_rgba(255,165,0,0.9)]
              hover:scale-105 transition-transform duration-300"
            >
              Book a Technical Audit
            </a>

            {/* BLACK BUTTON WITH MOVING NEON BORDER */}
            <a
              href="/portfolio"
              className="relative p-[2px] rounded-xl animate-borderMove
              shadow-[0_0_25px_rgba(255,140,0,0.7)]"
            >
              {/* Neon Border */}
              <span
                className="absolute inset-0 rounded-xl
                bg-[length:300%_300%]
                bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-500"
              />

              {/* Inner Button */}
              <span
                className="relative block px-8 py-4 rounded-xl
                bg-black text-gray-200
                shadow-[inset_0_0_10px_rgba(255,165,0,0.35)]
                hover:text-white transition"
              >
                Explore Our Expertise
              </span>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
