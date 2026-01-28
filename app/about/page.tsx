"use client";

import FadeIn from "@/components/FadeIn";

export default function AboutPage() {
  return (
    <section className="bg-black text-gray-200 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-24 space-y-24">

        {/* Hero Section */}
        <FadeIn>
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
              About ZENTIC Studio
            </h1>
            <p className="max-w-3xl mx-auto text-gray-400 text-lg">
              We are a digital-first creative studio focused on building meaningful, scalable, and visually refined digital products.
            </p>
          </div>
        </FadeIn>

        {/* Philosophy Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-white">Our Philosophy</h2>
              <p className="text-gray-400 leading-relaxed">
                At ZENTIC Studio, we believe great digital products are not built by chance — they are designed with clarity, strategy, and intent.
              </p>
              <p className="text-gray-400 leading-relaxed">
                We don’t chase trends. We focus on fundamentals: usability, performance, branding consistency, and long-term growth.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="bg-[#111] border border-gray-800 rounded-2xl p-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 opacity-0 group-hover:opacity-20 transition duration-500 rounded-2xl"></div>
              <ul className="space-y-4 text-gray-300 relative z-10">
                <li>• Strategy before execution</li>
                <li>• Clean, scalable architecture</li>
                <li>• Design that serves purpose</li>
                <li>• Long-term client partnerships</li>
              </ul>
            </div>
          </FadeIn>
        </div>

        {/* What We Do Section */}
        <FadeIn>
          <div className="space-y-10">
            <h2 className="text-3xl font-semibold text-white text-center">What We Do</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Digital Experiences", text: "We design and develop modern websites and applications that communicate clarity, credibility, and professionalism." },
                { title: "Brand Identity", text: "From logos to complete brand systems, we help businesses establish a strong, consistent, and memorable identity." },
                { title: "Growth-Focused Solutions", text: "Our work is aligned with business goals — performance, scalability, and measurable impact." },
              ].map((item, i) => (
                <FadeIn delay={0.1 * i} key={i}>
                  <div className="bg-[#111] border border-gray-800 rounded-2xl p-8 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 opacity-0 group-hover:opacity-20 transition duration-500 rounded-2xl"></div>
                    <h3 className="text-xl font-medium text-white mb-3 relative z-10">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed relative z-10">{item.text}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Closing Section */}
        <FadeIn>
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-semibold text-white">Why ZENTIC Studio?</h2>
            <p className="max-w-3xl mx-auto text-gray-400 text-lg">
              We are not a template-based agency. We work closely with our clients, understand their vision, and build digital solutions that feel intentional — not generic.
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
