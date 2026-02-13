"use client";

import FadeIn from "@/components/FadeIn";

const services = [
  {
    title: "High-Performance Web Engineering",
    problem: "Legacy systems that are slow, unscalable, or fail to convert visitors into customers.",
    deliver: "Next-gen, SEO-optimized platforms built with React/NextJS, PHP/Laravel, or Python/Django for extreme speed.",
    for: "Series A+ Startups, Enterprise Firms, and Visionary Brands.",
    icon: "⚡", // Or use <Zap size={32} />
  },
  {
    title: "Agentic AI & Workflow Automation",
    problem: "Operational friction, high overhead, and inefficient manual data processing.",
    deliver: "Custom autonomous AI agents and LLM-integrated pipelines that automate complex tasks.",
    for: "Founders, Operations Leads, and Data-Driven Teams.",
    icon: "🧠", // Or use <Cpu size={32} />
  },
  {
    title: "Brand Strategy & UI/UX Design",
    problem: "Inconsistent visual identity that fails to establish trust or authority in the market.",
    deliver: "Comprehensive brand systems and high-fidelity UI/UX design that commands premium attention.",
    for: "Innovative Companies and High-Growth Creators.",
    icon: "💎", // Or use <Layers size={32} />
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Our Services
          </h2>
        </FadeIn>

        <FadeIn delay={0.05}>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
            Clear solutions built to solve real business problems — not generic services.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-orange-500/50 transition-all duration-300 group">
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {s.icon}
                </div>
                <h3 className="text-2xl font-bold mb-6 text-white">{s.title}</h3>

                <div className="space-y-4">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-orange-500 font-bold mb-1">The Problem</p>
                    <p className="text-zinc-300 leading-relaxed">{s.problem}</p>
                  </div>
                  
                  <div>
                    <p className="text-xs uppercase tracking-widest text-green-500 font-bold mb-1">The Solution</p>
                    <p className="text-zinc-300 leading-relaxed">{s.deliver}</p>
                  </div>

                  <div className="pt-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-zinc-800 text-zinc-400 text-xs font-medium border border-zinc-700">
                      Ideal for: {s.for}
                    </span>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
