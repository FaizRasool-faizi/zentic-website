"use client";

import FadeIn from "@/components/FadeIn";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-black text-gray-200 min-h-[80vh] flex items-center overflow-hidden">
        {/* Optional: subtle floating gradient shapes */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-purple-600 via-pink-500 to-cyan-400 rounded-full opacity-20 animate-pulse-slow pointer-events-none"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 rounded-full opacity-20 animate-pulse-slow pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-6 text-center space-y-6 relative z-10">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
              Building Digital Experiences<br className="hidden md:block" />
              That Feel Premium
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="max-w-2xl mx-auto text-gray-400 text-lg">
              ZENTIC Studio is a digital agency focused on clean design, scalable development, and long-term brand value.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex justify-center gap-4 mt-6">
              <a
                href="/contact"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 text-black font-medium hover:scale-105 transform transition"
              >
                Start a Project
              </a>
              <a
                href="/portfolio"
                className="px-6 py-3 rounded-xl border border-gray-700 text-gray-300 hover:border-gray-500 transition"
              >
                View Work
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-black text-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold">Why Choose ZENTIC Studio</h2>
            </FadeIn>
            <FadeIn delay={0.05}>
              <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                We don’t just build websites — we create digital solutions that help businesses grow and stand out.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "🚀 Results-Driven", text: "Our focus is on real business results — performance, conversions, and long-term growth." },
              { title: "🎯 Client-Focused", text: "We listen, understand your goals, and tailor solutions specifically for your business." },
              { title: "🧠 Modern Technology", text: "We use modern tools and best practices to deliver fast, secure, and scalable solutions." },
              { title: "🤝 Long-Term Partnership", text: "We believe in long-term relationships, providing ongoing support and continuous improvement." },
            ].map((item, i) => (
              <FadeIn delay={0.1 * i} key={i}>
                <div className="p-6 bg-gray-800 border border-gray-700 rounded-xl shadow hover:-translate-y-1 hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
                  {/* Animated Gradient Border */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 opacity-0 group-hover:opacity-30 transition duration-500"></div>
                  <h3 className="text-xl font-semibold mb-3 text-white relative z-10">{item.title}</h3>
                  <p className="text-gray-300 relative z-10">{item.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="bg-gray-900 py-24 text-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold">Our Work</h2>
            </FadeIn>
            <FadeIn delay={0.05}>
              <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                A selection of projects we’ve crafted with strategy, creativity, and cutting-edge technology.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Corporate Website", "Startup Landing Page", "Brand Identity Design"].map((title, i) => (
              <FadeIn delay={0.1 * i} key={i}>
                <div className="group relative rounded-2xl p-[1px] bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 bg-[length:200%_200%] animate-gradient-x opacity-80 hover:opacity-100 transition">
                  <div className="h-full bg-gray-900 rounded-2xl p-6 border border-gray-800 group-hover:border-transparent transform group-hover:-translate-y-1 transition-all duration-300">
                    <div className="h-40 bg-gray-800 rounded-lg mb-6 flex items-center justify-center text-gray-400">
                      Project Image
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
                    <p className="text-gray-300 text-sm">
                      A modern, professional project showcasing our agency-level design and development skills.
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="text-center mt-12">
            <FadeIn delay={0.2}>
              <a
                href="/portfolio"
                className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 text-black rounded-md text-lg hover:scale-105 transform transition"
              >
                View Full Portfolio
              </a>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold">Let’s Build Something Great Together</h2>
          </FadeIn>
          <FadeIn delay={0.05}>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
              Whether you need a modern website, a strong brand identity, or smart AI-powered solutions — ZENTIC Studio is ready to turn your ideas into reality.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="mt-10">
              <a
                href="/contact"
                className="inline-block bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 text-black px-10 py-4 rounded-md text-lg font-semibold hover:scale-105 transform transition"
              >
                Start Your Project
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
