"use client";

import FadeIn from "@/components/FadeIn";

const projects = [
  {
    title: "Corporate Business Website",
    category: "Web Development",
    description: "Modern corporate website built for clarity and performance.",
  },
  {
    title: "AI Workflow Automation",
    category: "Agentic AI",
    description: "Automated internal operations using intelligent AI agents.",
  },
  {
    title: "Brand Identity System",
    category: "Branding",
    description: "Complete visual identity for a growing startup.",
  },
  {
    title: "Social Media Design Pack",
    category: "Canva Design",
    description: "Consistent social media visuals for brand presence.",
  },
  {
    title: "Landing Page Optimization",
    category: "UI / UX",
    description: "High-conversion landing page redesign.",
  },
  {
    title: "E-Commerce UI Design",
    category: "UI / UX",
    description: "Clean and user-friendly e-commerce interface.",
  },
];

export default function PortfolioPage() {
  return (
    <section className="bg-black text-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-32">

        {/* Heading */}
        <FadeIn>
          <div className="mb-20 text-center">
            <h1 className="text-3xl md:text-4xl font-semibold text-white">
              Our Work
            </h1>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              A selection of projects showcasing our focus on quality, performance, and thoughtful design.
            </p>
          </div>
        </FadeIn>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <FadeIn delay={0.1 * i} key={i}>
              <div className="group relative rounded-2xl p-[1px]
                              bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400
                              bg-[length:200%_200%] animate-gradient-x
                              opacity-90 hover:opacity-100 transition duration-500">
                <div className="h-full bg-gray-900 rounded-2xl p-6 border border-gray-800
                                group-hover:border-transparent transform group-hover:-translate-y-1
                                transition-all duration-300">
                  {/* Image Placeholder */}
                  <div className="h-48 bg-gray-800 rounded-lg mb-6 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900
                                    group-hover:scale-105 transition-transform duration-500" />
                  </div>

                  {/* Category */}
                  <span className="inline-block text-xs tracking-wide uppercase
                                   px-3 py-1 rounded-full mb-2
                                   bg-gray-800 text-gray-400
                                   group-hover:text-white transition">
                    {project.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Divider */}
        <FadeIn delay={0.7}>
          <div className="my-24 border-t border-gray-800"></div>
        </FadeIn>

        {/* Closing Section */}
        <FadeIn delay={0.8}>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Want to Work With Us?
            </h2>
            <p className="text-gray-400 leading-relaxed">
              We collaborate with ambitious brands to build digital experiences that deliver real value.
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
