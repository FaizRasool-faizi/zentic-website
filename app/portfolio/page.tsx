"use client";

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
              className="group relative rounded-2xl p-[2px]
                         bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-500
                         bg-[length:200%_200%] animate-gradient-x
                         opacity-80 hover:opacity-100 transition"
            >
              <div className="h-full bg-gray-900 rounded-2xl p-8
                              border border-gray-800
                              group-hover:border-transparent
                              transform group-hover:-translate-y-1
                              transition-all duration-300">
                {/* Image Placeholder */}
                <div className="h-40 bg-gray-800 rounded-lg mb-6 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900
                                  group-hover:scale-105 transition-transform duration-500" />
                </div>

                {/* Category */}
                <span className="inline-block text-xs tracking-wide uppercase
                                 px-3 py-1 rounded-full mb-3
                                 bg-gray-800 text-gray-400
                                 group-hover:text-white transition">
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
            </div>
          ))}
        </div>

        {/* How We Work Section */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-6 text-center space-y-12">
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
                <div key={i} className="group bg-gray-900 border border-gray-800 rounded-2xl p-8
                                        hover:-translate-y-1 transition-all duration-300">
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
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
