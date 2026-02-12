"use client";

import FadeIn from "@/components/FadeIn";
import { Search, PenTool, Code2, ShieldCheck, Rocket } from "lucide-react";

const steps = [
  {
    title: "Technical Discovery",
    desc: "A deep-dive workshop to map business goals, technical constraints, and system architecture.",
    icon: <Search className="w-6 h-6" />,
  },
  {
    title: "Architectural Design",
    desc: "Crafting wireframes, high-fidelity UI/UX, and technical blueprints in Figma.",
    icon: <PenTool className="w-6 h-6" />,
  },
  {
    title: "Agile Development",
    desc: "Iterative sprints using Next.js, PHP/Laravel, or Python/Django, focusing on performance and scalability.",
    icon: <Code2 className="w-6 h-6" />,
  },
  {
    title: "Rigorous QA",
    desc: "Comprehensive testing for bottlenecks, security vulnerabilities, and cross-platform stability.",
    icon: <ShieldCheck className="w-6 h-6" />,
  },
  {
    title: "Deployment & Scale",
    desc: "Seamless go-live, monitoring setup, and proactive maintenance for long-term growth.",
    icon: <Rocket className="w-6 h-6" />,
  },
];

export default function Process() {
  return (
    <section className="py-24 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
            Our Engineering Process
          </h2>
        </FadeIn>

        <FadeIn delay={0.05}>
          <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-20 text-lg">
            We follow a structured, high-velocity framework to turn complex
            requirements into scalable digital reality.
          </p>
        </FadeIn>

        <div className="relative">
          {/* Background Connecting Line (Desktop Only) */}
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent -translate-y-1/2 hidden lg:block"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative">
            {steps.map((step, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="group relative h-full">
                  {/* Step Card */}
                  <div className="h-full bg-zinc-950 border border-zinc-800 p-8 rounded-2xl flex flex-col items-center text-center transition-all duration-500 hover:border-orange-500/50 hover:-translate-y-2 group-hover:shadow-[0_20px_40px_-20px_rgba(249,115,22,0.2)]">
                    
                    {/* Step Number Badge */}
                    <div className="absolute -top-3 px-3 py-1 bg-zinc-900 border border-zinc-700 rounded-full text-xs font-mono text-orange-500 font-bold group-hover:border-orange-500 transition-colors">
                      PHASE 0{i + 1}
                    </div>

                    {/* Icon Container */}
                    <div className="mb-6 p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 group-hover:text-orange-500 group-hover:border-orange-500/30 transition-all duration-300">
                      {step.icon}
                    </div>

                    <h3 className="text-xl font-bold mb-3 text-white">
                      {step.title}
                    </h3>
                    
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}