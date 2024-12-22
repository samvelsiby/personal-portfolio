"use client";

import { HeroSection } from "./sections/hero-section";
import { ExperienceSection } from "./sections/experience-section";
import { ProjectsSection } from "./sections/projects-section";
import { ContactSection } from "./contact-section";

export function MainContent() {
  return (
    <div className="space-y-4">
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}