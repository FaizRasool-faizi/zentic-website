"use client";

import FadeIn from "@/components/FadeIn";

const features = [
  {
    title: "🚀 Results-Driven Approach",
    text: "We don’t design for looks only. Every website, automation, and AI solution is built to convert, scale, and deliver measurable results.",
  },
  {
    title: "🧠 AI & Automation Expertise",
    text: "From AI chatbots to smart workflows, we help businesses save time and automate repetitive tasks using modern AI solutions.",
  },
  {
    title: "🎨 Design + Brand Identity",
    text: "Clean UI, strong brand identity, and Canva-based design systems that keep your business consistent across all platforms.",
  },
  {
    title: "⚡ Modern Technology Stack",
    text: "Next.js, performance-first development, scalable architecture, and future-ready solutions.",
  },
  {
    title: "🤝 Client-Centered Process",
    text: "Clear communication, honest timelines, and zero fake promises. You stay in control at every step.",
  },
  {
    title: "📈 Built for Long-Term Growth",
    text: "We don’t disappear after delivery. We support, improve, and grow alongside your business.",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-24 bg-black text-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold">
              Why Choose ZENTIC Studio
            </h2>
          </FadeIn>
          <FadeIn delay={0.05}>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              We combine strategy, design, and AI-powered technology to build
              digital systems that actually move businesses forward.
            </p>
          </FadeIn>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, i) => (
            <FadeIn delay={0.1 * i} key={i}>
              <div className="h-full p-6 bg-gray-800 border border-gray-700 rounded-xl hover:-translate-y-1 hover:border-orange-500 cursor-pointer transition">
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {item.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
