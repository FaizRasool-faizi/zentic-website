"use client";

import Image from "next/image";
import FadeIn from "@/components/FadeIn";

const projects = [
  {
    title: "Enterprise Global Mobility Platform",
    category: "Web Engineering",
    description:
      "A high-performance, SEO-optimized system built for scale, featuring real-time data synchronization and a premium user interface.",
    image: "/images/projects/corporate-website.png",
    link: "https://travel-agency-zeta-hazel.vercel.app/",
  },
  {
    title: "FinTech Discovery Engine",
    category: "SaaS Development",
    description:
      "Conversion-engineered architecture designed to validate market hypotheses and capture high-intent user data for emerging startups.",
    image: "/images/projects/startup-landing.png",
  },
  {
    title: "Neural-Sync AI Automations",
    category: "Agentic AI",
    description:
      "Custom autonomous agent integration that optimized internal operations, reducing manual data entry overhead by an estimated 60%.",
    image: "/images/projects/ai-automation.png",
  },
  {
    title: "Intelligent Lead Concierge",
    category: "AI & Chatbots",
    description:
      "Advanced LLM-integrated support system capable of 24/7 lead qualification and automated appointment scheduling.",
    image: "/images/projects/chatbot.png",
  },
  {
    title: "Quantum Brand Ecosystem",
    category: "Brand Identity",
    description:
      "A comprehensive visual identity system including architectural design language, typography scales, and strategic brand positioning.",
    image: "/images/projects/brand-identity.png",
  },
  {
    title: "Strategic Growth Collateral",
    category: "Digital Strategy",
    description:
      "A series of high-impact marketing systems designed for cross-platform engagement and premium market authority.",
    image: "/images/projects/canva-assets.png",
  },
];

export default function Portfolio() {
  return (
    <section className="py-24 bg-black text-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* SECTION HEADING */}
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Selected Work
            </h2>
          </FadeIn>

          <FadeIn delay={0.05}>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              We specialize in turning technical complexity into seamless digital experiences. 
              Explore our engineering and design milestones.
            </p>
          </FadeIn>
        </div>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => {
            const isClickable = Boolean(project.link);

            return (
              <FadeIn delay={0.1 * i} key={i}>
                <div
                  onClick={() => {
                    if (project.link) {
                      window.open(project.link, "_blank");
                    }
                  }}
                  className={`group relative bg-zinc-950 border border-zinc-900 rounded-3xl overflow-hidden transition-all duration-500 ${
                    isClickable
                      ? "cursor-pointer hover:border-orange-500/50 hover:shadow-[0_20px_50px_-20px_rgba(249,115,22,0.2)]"
                      : ""
                  }`}
                >
                  {/* IMAGE CONTAINER */}
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* CATEGORY BADGE */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="bg-black/60 backdrop-blur-md text-orange-400 text-[10px] uppercase tracking-[2px] font-bold px-3 py-1.5 rounded-full border border-orange-500/30">
                        {project.category}
                      </span>
                    </div>

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />
                    
                    {isClickable && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-orange-500 text-black px-6 py-2 rounded-full font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          View Project →
                        </div>
                      </div>
                    )}
                  </div>

                  {/* CONTENT */}
                  <div className="p-8">
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-orange-500 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* CTA BUTTON */}
        <div className="text-center mt-20">
          <FadeIn delay={0.2}>
            <a
              href="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-orange-500 transition-colors duration-300 group"
            >
              Explore Full Archive
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}