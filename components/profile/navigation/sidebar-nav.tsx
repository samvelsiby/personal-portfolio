"use client";

import { cn } from "@/lib/utils";
import { useActiveSection } from "./use-active-section";
import { motion } from "framer-motion";
import { navItems } from "./nav-items";

export function SidebarNav() {
  const activeSection = useActiveSection();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="w-full mt-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="space-y-2"
      >
        {navItems.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className={cn(
              "w-full px-4 py-2 text-left rounded-lg transition-all duration-200 relative",
              "hover:bg-white/10",
              activeSection === id
                ? "bg-white/10 text-white font-medium after:absolute after:bottom-0 after:left-4 after:right-4 after:h-0.5 after:bg-white"
                : "text-white/60"
            )}
          >
            {label}
          </button>
        ))}
      </motion.div>
    </nav>
  );
}