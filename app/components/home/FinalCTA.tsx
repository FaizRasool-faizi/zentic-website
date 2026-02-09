"use client";

import FadeIn from "@/components/FadeIn";

export default function FinalCTA() {
  return (
    <section className="py-24 bg-gray-900 text-white text-center">
      <div className="max-w-4xl mx-auto px-6 space-y-6">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Build Something That Actually Works?
          </h2>
        </FadeIn>

        <FadeIn delay={0.05}>
          <p className="mt-4 text-gray-400 text-lg">
            Whether you need a modern website, AI-powered solutions, chatbots, or a full brand identity — we’re ready to bring your ideas to life.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-8">
            <a
              href="/contact"
              className="inline-block px-10 py-4 rounded-xl
              bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-500
              text-white text-lg font-semibold
              shadow-[0_0_25px_rgba(255,165,0,0.8)]
              hover:shadow-[0_0_45px_rgba(255,165,0,1)]
              hover:scale-105
              transition-all duration-300"
            >
              Request Free Consultation
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
