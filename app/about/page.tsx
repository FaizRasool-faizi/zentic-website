"use client";

import FadeIn from "@/components/FadeIn";
import { CheckCircle2, Terminal, Rocket, BarChart3, Globe, Database, Cpu } from "lucide-react";

export default function AboutPage() {
  return (
    <section className="bg-black text-gray-200 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-24 space-y-32">

        {/* Hero Section */}
        <FadeIn>
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white">
              Engineering <span className="text-orange-500">Excellence.</span>
            </h1>
            <p className="max-w-3xl mx-auto text-zinc-400 text-lg md:text-xl leading-relaxed">
              ZENTIC Studio is a specialized digital engineering firm. We bridge the gap between 
              robust backend systems and world-class frontend experiences using industry-leading technologies.
            </p>
          </div>
        </FadeIn>

        {/* Philosophy Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-white tracking-tight">Our Philosophy</h2>
              <p className="text-zinc-400 text-lg leading-relaxed">
                At ZENTIC, we believe that software should be an asset, not a liability. 
                With 4 years of deep technical roots in full-stack development, our founder established this studio 
                to move away from "temporary fixes" and toward **sustainable, high-performance engineering.**
              </p>
              <p className="text-zinc-400 text-lg leading-relaxed">
                We prioritize **Clean Code, Scalable Logic, and Brand Authority.** Every line of Python, PHP, or JavaScript we write is optimized for one 
                goal: your long-term market dominance.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-10 relative overflow-hidden group">
              <div className="absolute inset-0 bg-orange-500 opacity-0 group-hover:opacity-5 transition duration-700 rounded-3xl"></div>
              <ul className="space-y-6 relative z-10">
                {[
                  "Laravel & Django Backend Excellence",
                  "React & Next.js Performance",
                  "Python-Powered AI Integration",
                  "Scalable Database Architecture",
                  "Radical Technical Transparency"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-zinc-200 text-lg font-medium">
                    <CheckCircle2 className="text-orange-500 w-6 h-6" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>

        {/* What We Do Section - Tech Stack Focus */}
        <FadeIn>
          <div className="space-y-16">
            <h2 className="text-4xl font-bold text-white text-center">Our Core Competencies</h2>

            <div className="grid md:grid-cols-3 gap-8 text-left">
              {[
                { 
                  title: "Full-Stack Systems", 
                  text: "Developing secure backends in PHP/Laravel and Python/Django, seamlessly integrated with lightning-fast React frontends.",
                  icon: <Database className="w-8 h-8 text-orange-500" />
                },
                { 
                  title: "AI & Automation", 
                  text: "Leveraging Python to implement custom AI agents and LLM-driven automation that transforms your business operations.",
                  icon: <Cpu className="w-8 h-8 text-orange-500" />
                },
                { 
                  title: "Modern Web Apps", 
                  text: "Engineering SEO-optimized, conversion-ready platforms using Next.js and TypeScript for the modern web.",
                  icon: <Globe className="w-8 h-8 text-orange-500" />
                },
              ].map((item, i) => (
                <FadeIn delay={0.1 * i} key={i}>
                  <div className="bg-zinc-950 border border-zinc-900 rounded-3xl p-8 hover:border-orange-500/50 transition-all duration-300 h-full">
                    <div className="mb-6">{item.icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                    <p className="text-zinc-400 leading-relaxed">{item.text}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Closing Section */}
        <FadeIn>
          <div className="text-center py-20 bg-zinc-950 border border-zinc-900 rounded-[3rem] space-y-8 px-6">
            <h2 className="text-4xl font-bold text-white">Why ZENTIC Studio?</h2>
            <p className="max-w-3xl mx-auto text-zinc-400 text-xl leading-relaxed">
              We aren't a high-volume agency. We are a specialized studio that 
              focuses on quality over quantity. Using a world-class stack—**PHP, Python, and JavaScript**—we provide 
              a level of engineering depth that ensures your product stays ahead of the curve.
            </p>
            <div className="pt-6">
              <a href="/contact" className="px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-orange-500 transition-all duration-300">
                Work With Us
              </a>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}