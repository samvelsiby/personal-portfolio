"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string;
}

export function ExperienceCard({ title, company, period, description }: ExperienceCardProps) {
  return (
    <Card className="p-6 bg-card/50 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <h3 className="text-xl font-semibold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
          {title}
        </h3>
        <p className="text-muted-foreground font-medium">{company}</p>
        <p className="text-sm text-muted-foreground/80">{period}</p>
        <p className="mt-2 text-muted-foreground/90 leading-relaxed">{description}</p>
      </motion.div>
    </Card>
  );
}