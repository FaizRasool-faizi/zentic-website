"use client";

import FadeIn from "@/components/FadeIn";
import Hero from "./components/home/Hero";
import WhyChoose from "./components/home/WhyChoose";
import Services from "./components/home/Services";
import Portfolio from "./components/home/Portfolio";
import FinalCTA from "./components/home/FinalCTA";
import Founder from "./components/home/Founder";
import TechStack from "./components/home/TechStack";
import Process from "./components/home/Process";

export default function HomePage() {
  return (
    <>
      {/* ================= HERO / POSITIONING ================= */}
      <Hero />
      <Founder />
      <WhyChoose />
      <Services />
      <Process />
      <Portfolio />
      <FinalCTA />
    </>
  );
}
