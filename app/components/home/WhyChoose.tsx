"use client";

import FadeIn from "@/components/FadeIn";

const features = [
  {
    title: "⚡ Performance-First Engineering",
    text: "We don't just build sites; we engineer high-velocity systems. Using Next.js, PHP/Laravel, and Python/Django, we ensure your infrastructure is fast, secure, and ready to scale infinitely.",
  },
  {
    title: "🧠 Intelligent AI Integration",
    text: "Move beyond simple chatbots. We build custom AI-powered workflows and automated pipelines that eliminate manual bottlenecks and drive operational efficiency.",
  },
  {
    title: "🎨 Strategic Digital Identity",
    text: "Design with purpose. We create sophisticated UI/UX and cohesive brand systems in Figma that resonate with global audiences and command premium positioning.",
  },
  {
    title: "🔬 Technical Strategy & Audits",
    text: "We act as your technical partner. Every project begins with a deep dive into your business logic to ensure the tech stack aligns with your long-term goals.",
  },
  {
    title: "🤝 Radical Transparency",
    text: "No 'agency fluff' or fake promises. You get direct access to lead engineers, clear technical documentation, and honest, data-backed timelines.",
  },
  {
    title: "📈 Continuous Evolution",
    text: "The launch is just the beginning. We provide post-deployment support and iterative improvements to ensure your system evolves with the market.",
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
              <div className="h-full p-8 bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl hover:-translate-y-2 hover:border-orange-500/50 hover:shadow-[0_0_30px_-10px_rgba(249,115,22,0.3)] cursor-pointer transition-all duration-300">
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
