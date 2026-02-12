"use client";

import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import { Search, PenTool, Code2, Rocket } from "lucide-react";

const projects = [
  {
    title: "Enterprise E-Commerce Engine",
    category: "PHP / Laravel",
    description: "A robust, scalable marketplace with real-time inventory and custom payment gateways.",
    image: "/images/projects/corporate-website.png",
  },
  {
    title: "AI-Driven Logistics Pipeline",
    category: "Python / Django",
    description: "Autonomous data processing and predictive analytics for supply chain management.",
    image: "/images/projects/ai-automation.png",
  },
  {
    title: "FinTech Dashboard Interface",
    category: "Next.js / React",
    description: "High-performance financial visualization with real-time data streaming.",
    image: "/images/projects/ecommerce-ui.png",
  },
  {
    title: "Neural Search Integration",
    category: "Agentic AI",
    description: "LLM-powered semantic search engine for complex internal documentation.",
    image: "/images/projects/landing-page.png",
  },
  {
    title: "Global Brand Identity",
    category: "Visual Design",
    description: "Comprehensive branding system for a Silicon Valley tech venture.",
    image: "/images/projects/brand-identity.png",
  },
  {
    title: "Automated Lead Concierge",
    category: "Python / AI",
    description: "Custom-trained chatbot for 24/7 lead qualification and CRM sync.",
    image: "/images/projects/social-media.png",
  },
];

export default function PortfolioPage() {
  return (
    <section className="bg-black text-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-32">

        {/* Heading */}
        <FadeIn>
          <div className="mb-24 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
              The <span className="text-orange-500">Archive.</span>
            </h1>
            <p className="mt-6 text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">
              A curated selection of high-performance engineering and 
              strategic design projects built to scale.
            </p>
          </div>
        </FadeIn>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="group bg-zinc-950 rounded-3xl border border-zinc-900 overflow-hidden transition-all duration-500 hover:border-orange-500/30 hover:shadow-[0_20px_40px_-20px_rgba(249,115,22,0.3)]">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                <div className="p-8">
                  {/* Category */}
                  <span className="inline-block text-[10px] tracking-[2px] uppercase font-bold px-3 py-1 rounded-full mb-4 bg-zinc-900 text-orange-500 border border-orange-500/20">
                    {project.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* How We Work Section */}
        <div className="mt-40 space-y-16">
          <FadeIn>
            <div className="text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Our Engineering Lifecycle
              </h2>
              <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
                We combine the speed of a startup with the rigor of enterprise engineering.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Discovery", icon: <Search />, desc: "Strategic auditing and technical planning." },
              { title: "Architecture", icon: <PenTool />, desc: "UI/UX mapping and database modeling." },
              { title: "Engineering", icon: <Code2 />, desc: "Full-stack build with Laravel, Django, or React." },
              { title: "Deployment", icon: <Rocket />, desc: "Scaling, optimization, and 24/7 monitoring." },
            ].map((step, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-zinc-950 border border-zinc-900 rounded-2xl p-8 hover:border-orange-500/20 transition-all text-center">
                  <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center mx-auto mb-6 text-orange-500">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-zinc-400 text-sm">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Closing CTA */}
        <FadeIn>
          <div className="mt-40 p-12 bg-zinc-950 border border-zinc-900 rounded-[3rem] text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to build the next milestone?
            </h2>
            <p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto">
              We are currently accepting new partnerships for Q1 2026. 
              Let’s discuss how we can engineer your growth.
            </p>
            <a href="/contact" className="inline-block px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-orange-500 transition-all">
              Initiate Project
            </a>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}