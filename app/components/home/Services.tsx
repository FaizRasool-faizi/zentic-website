"use client";

import FadeIn from "@/components/FadeIn";

const services = [
  {
    title: "Web Design & Development",
    problem: "Outdated, slow or low-conversion websites.",
    deliver: "Modern, fast, SEO-friendly and conversion-focused websites.",
    for: "Startups, businesses & personal brands",
    icon: "🌐",
  },
  {
    title: "Agentic AI Solutions",
    problem: "Manual work, inefficiency & lack of automation.",
    deliver: "AI agents, workflows & smart automation systems.",
    for: "Founders, agencies & growing teams",
    icon: "🤖",
  },
  {
    title: "Graphic & Canva Design",
    problem: "Weak branding & inconsistent visuals.",
    deliver: "Logos, social media designs & brand visuals using Canva Pro.",
    for: "Businesses & content creators",
    icon: "🎨",
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
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-orange-500 transition">
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{s.title}</h3>

                <p className="text-sm text-zinc-400 mb-2">
                  <strong className="text-white">Problem:</strong> {s.problem}
                </p>
                <p className="text-sm text-zinc-400 mb-2">
                  <strong className="text-white">We Deliver:</strong> {s.deliver}
                </p>
                <p className="text-sm text-zinc-400">
                  <strong className="text-white">Best For:</strong> {s.for}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
