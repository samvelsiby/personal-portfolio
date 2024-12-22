"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { socialLinks } from "@/lib/data/social-links";

export function SocialLinks() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="w-full space-y-2"
    >
      {socialLinks.map((link, index) => (
        <Button
          key={link.name}
          variant="outline"
          className="w-full gap-2 bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
          asChild
        >
          <a href={link.url} target="_blank" rel="noopener noreferrer">
            {link.icon}
            {link.name}
          </a>
        </Button>
      ))}
    </motion.div>
  );
}