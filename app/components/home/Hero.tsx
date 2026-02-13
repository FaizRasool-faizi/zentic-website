"use client";

import FadeIn from "@/components/FadeIn";
import { ArrowRight } from "lucide-react"; // Optional: npm install lucide-react

export default function Hero() {
  return (
    <section className="relative bg-[#050505] text-gray-200 min-h-[85vh] flex items-center overflow-hidden">
      {/* Refined Background: Soft Orange Glow instead of harsh blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 text-center space-y-8 relative z-10">
        <FadeIn>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
            Engineered for <span className="text-orange-500">Velocity.</span>
            <br />
            Built for Scale.
          </h1>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl leading-relaxed">
            ZENTIC Studio transforms complex business challenges into elite digital products. 
            We build robust architectures and high-performance frontends for forward-thinking brands.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-10">
            
            {/* PRIMARY: SOLID BRAND ORANGE */}
            <a
              href="/contact"
              className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-black transition-all duration-300 bg-orange-500 rounded-xl hover:bg-orange-400 hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] active:scale-95"
            >
              Book a Technical Audit
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>

            {/* SECONDARY: MISTY GLASS ORANGE BORDER */}
            <a
              href="/portfolio"
              className="inline-flex items-center justify-center px-8 py-4 font-semibold text-white transition-all duration-300 bg-white/5 border border-orange-500/30 rounded-xl hover:bg-orange-500/10 hover:border-orange-500 group"
            >
              Explore Our Expertise
            </a>
            
          </div>
        </FadeIn>
      </div>
    </section>
  );
}