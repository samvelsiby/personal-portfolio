"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { ProjectDetails } from "@/lib/types/project";
import Image from "next/image";

interface ProjectDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  project: ProjectDetails | null;
}

export function ProjectDialog({ open, onOpenChange, project }: ProjectDialogProps) {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl bg-background">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {project.title}
          </DialogTitle>
          <DialogDescription className="text-lg">
            {project.description}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {project.image && (
            <div className="relative w-full h-64">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          )}

          {project.longDescription && (
            <div className="prose prose-sm max-w-none">
              <p className="text-muted-foreground">{project.longDescription}</p>
            </div>
          )}

          {project.technologies && (
            <div className="space-y-2">
              <h4 className="font-semibold">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          <div className="flex gap-4">
            {project.liveUrl && (
              <Button
                variant="default"
                className="flex items-center gap-2"
                onClick={() => window.open(project.liveUrl, "_blank")}
              >
                <ExternalLink className="h-4 w-4" />
                View Live
              </Button>
            )}
            {project.githubUrl && (
              <Button
                variant="outline"
                className="flex items-center gap-2"
                onClick={() => window.open(project.githubUrl, "_blank")}
              >
                <Github className="h-4 w-4" />
                View Code
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}