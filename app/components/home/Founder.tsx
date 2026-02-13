"use client";

import FadeIn from "@/components/FadeIn";
import Image from "next/image";
import founderImg from "@/assets/images/founder/founder.png";

export default function Founder() {
  return (
    <section className="py-16 md:py-24 bg-black text-gray-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        
        {/* LEFT: TEXT */}
        <FadeIn>
          <div className="space-y-6 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
              Engineering the Future of ZENTIC
            </h2>

            <p className="text-gray-300 text-sm sm:text-base">
              <strong>Faiz Rasool </strong> — Founder & Lead Technologist
            </p>

            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
              With over 4 years of hands-on experience in high-performance software engineering,
              I specialize in building complex digital architectures. My expertise spans across{" "}
              <strong>backend development</strong>,{" "}
              <strong>PHP/Laravel & Python/Django</strong>,{" "}
              <strong>AI-powered automation</strong>, and{" "}
              <strong>high-performance Web Systems.</strong>
            </p>

            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
              At ZENTIC Studio, we don't just build websites; we engineer automated,
              scalable systems that solve business bottlenecks. My mission is to bridge the gap
              between sophisticated technical engineering and tangible business growth.
            </p>

            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
              <strong>Why ZENTIC?</strong><br />
              To replace slow, manual workflows with intelligent, high-velocity digital solutions.
            </p>
          </div>
        </FadeIn>

        {/* RIGHT: PHOTO */}
        <FadeIn delay={0.1}>
          <div className="flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg aspect-square rounded-3xl overflow-hidden shadow-2xl border border-gray-700">

              {/* IMAGE */}
              <Image
                src={founderImg}
                alt="Faiz Rasool"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
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
