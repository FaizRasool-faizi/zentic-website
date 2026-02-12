"use client";

import FadeIn from "@/components/FadeIn";
import { ArrowRight, Calendar } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <FadeIn>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Ready to Scale Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-400">
              Digital Infrastructure?
            </span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.05}>
          <p className="mt-8 text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            From high-performance engineering to autonomous AI workflows, 
            we build the systems that drive modern industry leaders. 
            Stop building websites, start engineering solutions.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="/contact"
              className="group flex items-center gap-2 px-10 py-5 rounded-full
              bg-orange-500 text-black text-lg font-bold
              hover:bg-orange-400 hover:shadow-[0_0_30px_rgba(249,115,22,0.4)]
              transition-all duration-300 transform hover:-translate-y-1"
            >
              Request a Technical Proposal
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="https://calendly.com/your-link" // Replace with your actual booking link
              className="flex items-center gap-2 px-10 py-5 rounded-full
              bg-zinc-900 text-white border border-zinc-700 text-lg font-semibold
              hover:bg-zinc-800 transition-all duration-300"
            >
              <Calendar className="w-5 h-5 text-orange-500" />
              Book a Strategy Call
            </a>
          </div>
        </FadeIn>
        
        <FadeIn delay={0.15}>
          <p className="mt-8 text-zinc-500 text-sm font-mono uppercase tracking-widest">
            Currently accepting 2 new projects for Q1 2026
          </p>
        </FadeIn>
      </div>
    </section>
  );
}