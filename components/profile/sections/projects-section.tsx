"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "../cards/project-card";
import { GradientText } from "@/components/ui/gradient-text";
import { projectsData } from "@/lib/data/projects-data";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-black/5">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-4">
          <GradientText>Projects</GradientText>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto px-4">
          Here are some of the projects I've worked on that showcase my skills and interests.
        </p>
      </motion.div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-6"
      >
        {projectsData.map((project, index) => (
          <motion.div key={project.title} variants={fadeInUp}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}