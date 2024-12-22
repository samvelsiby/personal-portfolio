"use client";

import { motion } from "framer-motion";
import { ExperienceCard } from "../cards/experience-card";
import { GradientText } from "@/components/ui/gradient-text";
import { experienceData } from "@/lib/data/experience-data";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-4xl font-bold mb-8 text-center">
          <GradientText>Experience</GradientText>
        </h2>
      </motion.div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-6 max-w-3xl mx-auto px-4"
      >
        {experienceData.map((experience, index) => (
          <motion.div key={index} variants={fadeInUp}>
            <ExperienceCard {...experience} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}