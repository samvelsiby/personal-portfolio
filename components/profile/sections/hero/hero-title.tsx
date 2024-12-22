"use client";

import { motion } from "framer-motion";
import { GradientText } from "@/components/ui/gradient-text";

export function HeroTitle() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-12"
    >
      <h1 className="text-6xl font-bold mb-4">
        Hi, I'm <GradientText>Samvel Siby</GradientText>
      </h1>
      <p className="text-2xl text-muted-foreground">
        Computer Science Student & Developer
      </p>
    </motion.div>
  );
}