"use client";

import { useEffect, useState } from "react";
import FadeIn from "@/components/FadeIn"; // Make sure you have this component

export default function ContactPage() {
  const [gradientPos, setGradientPos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    // Animate background gradient slowly
    const interval = setInterval(() => {
      setGradientPos((prev) => ({
        x: (prev.x + 0.3) % 100,
        y: (prev.y + 0.2) % 100,
      }));
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative bg-black text-gray-200 min-h-screen overflow-hidden"
      style={{
        background: `radial-gradient(circle at ${gradientPos.x}% ${gradientPos.y}%, #1f0f3b, #000)`,
        transition: "background 0.03s linear",
      }}
    >
      {/* Floating circles for ultra-premium effect */}
      <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-gradient-to-tr from-purple-500 via-fuchsia-500 to-cyan-500 opacity-20 animate-pulse"></div>
      <div className="absolute -bottom-32 -right-24 w-96 h-96 rounded-full bg-gradient-to-br from-cyan-400 via-purple-600 to-fuchsia-500 opacity-20 animate-pulse animation-delay-2000"></div>

      <div className="relative max-w-6xl mx-auto px-6 py-32 grid grid-cols-1 md:grid-cols-2 gap-20 z-10">

        {/* LEFT: Text / Pitch */}
        <FadeIn>
          <div className="space-y-8">
            <h1 className="text-3xl md:text-4xl font-semibold text-white leading-tight">
              Let’s Build Something Meaningful
            </h1>

            <p className="text-gray-400 leading-relaxed max-w-lg">
              Whether you’re a startup, brand, or business — we help turn ideas
              into high-quality digital experiences.
            </p>

            <div className="space-y-4 text-gray-400">
              <p>📍 Remote — Working Worldwide</p>
              <p>📧 contact@zenticstudio.com</p>
              <p>⏱ Response within 24 hours</p>
            </div>

            <div className="text-sm text-gray-500 max-w-md">
              We only take on a limited number of projects to ensure quality,
              focus, and long-term value.
            </div>
          </div>
        </FadeIn>

        {/* RIGHT: Contact Form */}
        <FadeIn delay={0.2}>
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500">
            <h2 className="text-xl font-semibold text-white mb-8">
              Start a Project
            </h2>

            <form className="space-y-6">

              {/* Name */}
              <div className="relative group">
                <label className="block text-sm text-gray-400 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-gray-200
                             focus:outline-none focus:border-gradient transition-all duration-300
                             group-focus-within:border-fuchsia-500"
                />
              </div>

              {/* Email */}
              <div className="relative group">
                <label className="block text-sm text-gray-400 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-gray-200
                             focus:outline-none focus:border-gradient transition-all duration-300
                             group-focus-within:border-purple-500"
                />
              </div>

              {/* Message */}
              <div className="relative group">
                <label className="block text-sm text-gray-400 mb-2">
                  Project Details
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your project, goals, and timeline..."
                  className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-gray-200
                             focus:outline-none focus:border-gradient transition-all duration-300
                             group-focus-within:border-cyan-500 resize-none"
                />
              </div>

              {/* Gradient Button */}
              <button
                type="submit"
                className="w-full py-3 rounded-lg font-medium
                           bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-500
                           text-black hover:brightness-110 transition-all duration-300"
              >
                Send Message
              </button>
            </form>

            <p className="mt-6 text-xs text-gray-500 text-center">
              We’ll review your request and get back within 24 hours.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
