"use client";

import Image from "next/image";

const projects = [
  {
    title: "Corporate Business Website",
    category: "Web Development",
    description: "Modern corporate website built for clarity and performance.",
    image: "/images/projects/corporate-website.png",
  },
  {
    title: "AI Workflow Automation",
    category: "Agentic AI",
    description: "Automated internal operations using intelligent AI agents.",
    image: "/images/projects/ai-automation.png",
  },
  {
    title: "Brand Identity System",
    category: "Branding",
    description: "Complete visual identity for a growing startup.",
    image: "/images/projects/brand-identity.png",
  },
  {
    title: "Social Media Design Pack",
    category: "Canva Design",
    description: "Consistent social media visuals for brand presence.",
    image: "/images/projects/social-media.png",
  },
  {
    title: "Landing Page Optimization",
    category: "UI / UX",
    description: "High-conversion landing page redesign.",
    image: "/images/projects/landing-page.png",
  },
  {
    title: "E-Commerce UI Design",
    category: "UI / UX",
    description: "Clean and user-friendly e-commerce interface.",
    image: "/images/projects/ecommerce-ui.png",
  },
];

export default function PortfolioPage() {
  return (
    <section className="bg-black text-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-32">

        {/* Heading */}
        <div className="mb-20 text-center">
          <h1 className="text-3xl md:text-4xl font-semibold text-white">
            Our Work
          </h1>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            A selection of projects showcasing our focus on quality, performance, and thoughtful design.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="
                group
                bg-gray-900
                rounded-2xl
                border
                border-gray-800
                p-6
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-orange-500/40
                hover:shadow-[0_0_40px_-10px_rgba(249,115,22,0.6)]
              "
            >
              {/* Image */}
              <div className="relative h-40 mb-6 rounded-lg overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Category */}
              <span className="inline-block text-xs tracking-wide uppercase
                               px-3 py-1 rounded-full mb-3
                               bg-gray-800 text-gray-400
                               group-hover:text-orange-400 transition">
                {project.category}
              </span>

              {/* Title */}
              <h3 className="text-lg font-semibold text-white mb-2">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>

        {/* How We Work */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto text-center space-y-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              How We Work
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our simple, proven process ensures clarity, quality, and results for every project.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
              {[
                { title: "Discover", icon: "🔍", description: "Understanding your brand, goals, and audience." },
                { title: "Design", icon: "🎨", description: "Crafting clean, modern, and scalable designs." },
                { title: "Build", icon: "💻", description: "Developing high-performance websites & systems." },
                { title: "Launch", icon: "🚀", description: "Deploying, optimizing, and supporting long-term growth." },
              ].map((step, i) => (
                <div
                  key={i}
                  className="
                    bg-gray-900
                    border
                    border-gray-800
                    rounded-2xl
                    p-8
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-orange-500/40
                    hover:shadow-[0_0_30px_-12px_rgba(249,115,22,0.5)]
                  "
                >
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="my-24 border-t border-gray-800"></div>

        {/* Closing */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Want to Work With Us?
          </h2>
          <p className="text-gray-400 leading-relaxed">
            We collaborate with ambitious brands to build digital experiences that deliver real value.
          </p>
        </div>

      </div>
    </section>
  );
}
