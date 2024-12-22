"use client";

import { HeroTitle } from "./hero/hero-title";
import { AboutMe } from "./hero/about-me";

export function HeroSection() {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-transparent to-transparent" />
      <div className="relative z-10 space-y-16">
        <HeroTitle />
        <AboutMe />
      </div>
    </section>
  );
}