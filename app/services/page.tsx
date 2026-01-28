"use client";

import FadeIn from "@/components/FadeIn";
import {
  Code,
  Brain,
  Palette,
  Layout,
  Megaphone,
  TrendingUp,
} from "lucide-react";

const services = [
  {
    title: "Web Design & Development",
    description:
      "High-performance, modern websites built with clean UI, fast loading speed, and scalable architecture.",
    icon: Code,
  },
  {
    title: "Agentic AI Solutions",
    description:
      "Custom AI-powered systems to automate workflows, improve efficiency, and enhance decision-making.",
    icon: Brain,
  },
  {
    title: "Brand Identity Design",
    description:
      "Logos, brand systems, and visual identities designed to communicate trust, clarity, and authority.",
    icon: Palette,
  },
  {
    title: "UI / UX Design",
    description:
      "User-focused interfaces designed for clarity, usability, and seamless digital experiences.",
    icon: Layout,
  },
  {
    title: "Social Media Design",
    description:
      "Professional Canva-based designs for posts, ads, and stories aligned with your brand identity.",
    icon: Megaphone,
  },
  {
    title: "Business Growth Support",
    description:
      "Strategic digital guidance and long-term support for growing brands.",
    icon: TrendingUp,
  },
];

export default function ServicesPage() {
  return (
    <section className="bg-black text-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-32">

        {/* Heading */}
        <FadeIn>
          <div className="mb-20 text-center">
            <h1 className="text-3xl md:text-4xl font-semibold text-white">
              Our Services
            </h1>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Carefully crafted digital services focused on quality, performance, and long-term value.
            </p>
          </div>
        </FadeIn>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <FadeIn delay={0.1 * i} key={i}>
                <div className="group relative rounded-2xl p-[1px]
                                bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400
                                bg-[length:200%_200%] animate-gradient-x
                                opacity-90 hover:opacity-100 transition duration-500">
                  <div className="h-full bg-gray-900 rounded-2xl p-8 border border-gray-800
                                  group-hover:border-transparent transform group-hover:-translate-y-1
                                  transition-all duration-300">
                    {/* Icon */}
                    <Icon className="w-7 h-7 text-gray-300 mb-4" />

                    {/* Title */}
                    <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Divider */}
        <FadeIn delay={0.5}>
          <div className="my-24 border-t border-gray-800"></div>
        </FadeIn>

        {/* Closing Section */}
        <FadeIn delay={0.6}>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Let’s Build Something Meaningful
            </h2>
            <p className="text-gray-400 leading-relaxed">
              ZENTIC Studio delivers digital solutions that feel premium, perform reliably, and grow with your brand.
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
