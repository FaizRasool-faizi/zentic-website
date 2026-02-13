"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import { Mail, MessageSquare, Clock, ArrowRight } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("https://zenticstudios.42web.io/contact.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const data = await res.json();

      if (data.status === "success") {
        setStatus("✅ Your message was received. We'll be in touch shortly.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ " + (data.message || "Failed to send. Please try again."));
      }
    } catch (error) {
      setStatus("❌ Service temporarily unavailable. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <section className="bg-black text-gray-200 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-2 gap-20">
          
          {/* Left Side: Contact Info */}
          <FadeIn>
            <div className="space-y-12">
              <div>
                <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
                  Let&apos;s Engineering <br />
                  <span className="text-orange-500">Your Vision.</span>
                </h1>
                <p className="text-zinc-400 text-lg leading-relaxed max-w-md">
                  Have a complex project? We specialize in scaling digital infrastructure with Laravel, Django, and Next.js.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 flex items-center justify-center text-orange-500 shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold">Email Us</h3>
                    <p className="text-zinc-400 text-sm">faiz.rasool.faiiizi@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 flex items-center justify-center text-orange-500 shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold">Response Time</h3>
                    <p className="text-zinc-400 text-sm">Usually within 24 business hours.</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 flex items-center justify-center text-orange-500 shrink-0">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold">Consultation</h3>
                    <p className="text-zinc-400 text-sm">Free initial technical audit for Q1 projects.</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right Side: Form */}
          <FadeIn delay={0.1}>
            <div className="bg-zinc-950 border border-zinc-900 p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden group">
              <div className="absolute inset-0 bg-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1">Full Name</label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full bg-zinc-900 border border-zinc-800 focus:border-orange-500/50 focus:ring-0 px-5 py-4 rounded-2xl text-white transition-all outline-none"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1">Email Address</label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className="w-full bg-zinc-900 border border-zinc-800 focus:border-orange-500/50 focus:ring-0 px-5 py-4 rounded-2xl text-white transition-all outline-none"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1">Project Details</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your technical requirements..."
                    rows={5}
                    className="w-full bg-zinc-900 border border-zinc-800 focus:border-orange-500/50 focus:ring-0 px-5 py-4 rounded-2xl text-white transition-all outline-none resize-none"
                    required
                  />
                </div>

                <button
                  disabled={loading}
                  className="w-full group flex items-center justify-center gap-2 bg-white text-black py-5 rounded-2xl font-bold text-lg hover:bg-orange-500 transition-all duration-300 transform active:scale-95 disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Request Proposal"}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                {status && (
                  <div className={`p-4 rounded-xl text-sm font-medium animate-in fade-in slide-in-from-bottom-2 ${
                    status.includes("✅") ? "bg-green-500/10 text-green-400 border border-green-500/20" : "bg-red-500/10 text-red-400 border border-red-500/20"
                  }`}>
                    {status}
                  </div>
                )}
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}