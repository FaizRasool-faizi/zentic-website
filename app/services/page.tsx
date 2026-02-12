"use client";

import FadeIn from "@/components/FadeIn";
import {
  Code2,
  Cpu,
  Fingerprint,
  Layers,
  Zap,
  BarChart3,
} from "lucide-react";

const services = [
  {
    title: "Full-Stack Engineering",
    description:
      "Enterprise-grade backends built with PHP/Laravel and Python/Django, integrated with high-performance React & Next.js frontends.",
    icon: Code2,
  },
    {
    title: "Strategic Brand Systems",
    description:
      "Beyond just logos—we build comprehensive visual identities that establish authority and command a premium market position.",
    icon: Fingerprint,
  },
  {
    title: "Agentic AI & LLMs",
    description:
      "Custom Python-based AI agents and automation pipelines that integrate Large Language Models into your existing business workflows.",
    icon: Cpu,
  },
  {
    title: "UI / UX Architecture",
    description:
      "Data-driven interface design focusing on user psychology, rapid performance, and seamless cross-platform experiences.",
    icon: Layers,
  },
  {
    title: "High-Velocity SaaS Labs",
    description:
      "Rapid prototyping and MVP development for startups, ensuring your product is scalable from day one using modern tech stacks.",
    icon: Zap,
  },
  {
    title: "Technical Consulting",
    description:
      "Expert guidance on software architecture, cloud scaling, and digital growth strategies backed by 4+ years of industry experience.",
    icon: BarChart3,
  },
];

export default function ServicesPage() {
  return (
    <section className="bg-black text-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-32">

        {/* Heading */}
        <FadeIn>
          <div className="mb-24 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
              Our <span className="text-orange-500">Expertise</span>
            </h1>
            <p className="mt-6 text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">
              We specialize in solving complex business problems through elite 
              engineering and high-fidelity design.
            </p>
          </div>
        </FadeIn>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <FadeIn delay={0.1 * i} key={i}>
                <div
                  className="
                    group
                    relative
                    bg-zinc-950
                    rounded-3xl
                    p-10
                    border
                    border-zinc-900
                    transition-all
                    duration-500
                    hover:border-orange-500/30
                    hover:shadow-[0_20px_40px_-20px_rgba(249,115,22,0.3)]
                  "
                >
                  {/* Icon with subtle background */}
                  <div className="w-14 h-14 rounded-2xl bg-zinc-900 flex items-center justify-center mb-6 group-hover:bg-orange-500/10 transition-colors duration-500">
                    <Icon className="w-7 h-7 text-zinc-400 group-hover:text-orange-500 transition-colors duration-300" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Divider */}
        <FadeIn delay={0.5}>
          <div className="my-32 border-t border-zinc-900"></div>
        </FadeIn>

        {/* Closing Section */}
        <FadeIn delay={0.6}>
          <div className="max-w-4xl mx-auto text-center px-6 py-16 bg-zinc-950 border border-zinc-900 rounded-[3rem]">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Engineer Your Vision?
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-10">
              Stop settling for generic solutions. Work with a studio that treats 
              your digital product like an engineering masterpiece.
            </p>
            <a 
              href="/contact" 
              className="px-10 py-4 bg-orange-500 text-black font-bold rounded-full hover:bg-orange-400 transition-all transform hover:scale-105"
            >
              Start Your Project
            </a>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}