"use client";

import Image from "next/image";
import FadeIn from "@/components/FadeIn";

const projects = [
  {
    title: "Corporate Website",
    description:
      "A professional, high-performance website built for scalability, speed, and long-term growth.",
    image: "/images/projects/corporate-website.png",
    link: "https://travel-agency-zeta-hazel.vercel.app/",
  },
  {
    title: "Startup Landing Page",
    description:
      "Conversion-focused landing page designed to attract users and validate startup ideas.",
    image: "/images/projects/startup-landing.png",
  },
  {
    title: "Brand Identity Design",
    description:
      "Complete brand identity including logo, color system, and Canva-based marketing assets.",
    image: "/images/projects/brand-identity.png",
  },
  {
    title: "AI Automation Tool",
    description:
      "Custom AI-powered automation to reduce manual work and streamline business workflows.",
    image: "/images/projects/ai-automation.png",
  },
  {
    title: "Chatbot Implementation",
    description:
      "Intelligent chatbots for websites and platforms to automate customer support and leads.",
    image: "/images/projects/chatbot.png",
  },
  {
    title: "Canva Marketing Assets",
    description:
      "Social media posts, banners, and marketing creatives designed for engagement and clarity.",
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
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Our Work
            </h2>
          </FadeIn>

          <FadeIn delay={0.05}>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">
              A curated selection of projects demonstrating our expertise in
              web development, AI solutions, and brand identity.
            </p>
          </FadeIn>
        </div>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
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
                  className={`
                    group
                    bg-gray-900
                    border border-gray-800
                    rounded-2xl
                    p-6
                    transition-all
                    duration-300
                    ${
                      isClickable
                        ? "cursor-pointer hover:border-orange-500 hover:-translate-y-1"
                        : ""
                    }
                  `}
                >
                  {/* IMAGE */}
                  <div className="relative h-40 mb-6 rounded-lg overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />

                    {/* HOVER OVERLAY (only if clickable) */}
                    {isClickable && (
                      <div
                        className="
                          absolute inset-0
                          bg-black/60
                          opacity-0
                          group-hover:opacity-100
                          flex items-center justify-center
                          transition-opacity
                          duration-300
                        "
                      >
                        <span className="text-white text-sm font-semibold px-4 py-2 border border-orange-500 rounded-full">
                          View Live →
                        </span>
                      </div>
                    )}
                  </div>

                  {/* TITLE */}
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {project.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* CTA BUTTON */}
        <div className="text-center mt-16">
          <FadeIn delay={0.2}>
            <a
              href="/portfolio"
              className="
                inline-block
                px-10
                py-4
                rounded-xl
                bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400
                text-black
                text-lg
                font-semibold
                hover:scale-105
                hover:shadow-xl
                hover:shadow-orange-500/30
                transition-all
                duration-300
              "
            >
              View Full Portfolio
            </a>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
