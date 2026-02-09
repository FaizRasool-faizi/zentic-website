"use client";

import FadeIn from "@/components/FadeIn";
import Image from "next/image";
import founderImg from "@/assets/images/founder/founder.jpg";

export default function Founder() {
  return (
    <section className="py-24 bg-black text-gray-100">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT: TEXT */}
        <FadeIn>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Meet the Founder
            </h2>

            <p className="text-gray-300">
              <strong>Faiz Rasool Faizi</strong> — Founder & Lead Technologist
            </p>

            <p className="text-gray-400 leading-relaxed">
              I’m a multidisciplinary developer and digital strategist working
              across <strong>Web Design & Development</strong>,{" "}
              <strong>AI Automation</strong>, <strong>Chatbots</strong>,{" "}
              <strong>Machine Learning</strong>, and{" "}
              <strong>Brand Identity Design</strong>.
            </p>

            <p className="text-gray-400 leading-relaxed">
              At ZENTIC Studio, we don’t just build websites — we create smart,
              automated, and scalable digital systems that help businesses save
              time, increase conversions, and grow faster.
            </p>

            <p className="text-gray-400 leading-relaxed">
              <strong>Why I started ZENTIC Studio:</strong><br />
              I saw too many businesses stuck with slow websites, poor branding,
              and zero automation. ZENTIC Studio was created to combine clean
              design, modern tech, AI-powered workflows, and honest communication
              — all under one roof.
            </p>
          </div>
        </FadeIn>

        {/* RIGHT: PHOTO */}
        <FadeIn delay={0.1}>
          <div className="flex justify-center">
            <div className="relative w-96 h-96 rounded-3xl overflow-hidden shadow-2xl border border-gray-700">

              {/* BACKGROUND IMAGE */}
              <Image
                src={founderImg}
                alt="Faiz Rasool Faizi"
                fill
                priority
                className="object-cover"
              />

              {/* BRICK BLOCKS */}
              <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 z-20">
                {[...Array(36)].map((_, i) => (
                  <div
                    key={i}
                    className="brick-block"
                    style={{
                      animationDelay: `${i * 80}ms`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
