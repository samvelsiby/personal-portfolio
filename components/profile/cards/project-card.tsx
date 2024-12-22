"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ProjectDetails } from "@/lib/types/project";
import { useState } from "react";
import { ProjectDialog } from "./project-dialog";
import Image from "next/image";

interface ProjectCardProps {
  project: ProjectDetails;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [dialogOpen, setDialogOpen] = useState(false);

  if (!project) return null;

  return (
    <>
      <Card 
        className="p-6 bg-card/50 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 h-full cursor-pointer group"
        onClick={() => setDialogOpen(true)}
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {project.image && (
            <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={600}
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          )}
          <h3 className="text-xl font-semibold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent mb-2">
            {project.title}
          </h3>
          <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-white/5 text-white/80 rounded-md text-sm border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </Card>

      <ProjectDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        project={project}
      />
    </>
  );
}