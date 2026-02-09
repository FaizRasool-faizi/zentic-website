"use client";

import FadeIn from "@/components/FadeIn";

const steps = [
  { title: "Discovery", desc: "Understanding goals, problems & vision." },
  { title: "Design", desc: "Wireframes, UI & brand-aligned visuals." },
  { title: "Development", desc: "Clean, scalable & performance-focused build." },
  { title: "Testing", desc: "Cross-device & performance testing." },
  { title: "Launch & Support", desc: "Go-live with ongoing support." },
];

export default function Process() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Our Process
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-5 gap-6">
          {steps.map((step, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center hover:border-orange-500 transition">
                <div className="text-orange-500 font-bold text-xl mb-2">
                  0{i + 1}
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-zinc-400">{step.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
