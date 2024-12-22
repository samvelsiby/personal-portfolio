"use client";

import { cn } from "@/lib/utils";
import { navItems } from "./nav-items";
import { useActiveSection } from "./use-active-section";

export function NavBar() {
  const activeSection = useActiveSection();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="flex justify-center gap-8 p-4">
        {navItems.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              activeSection === id
                ? "text-primary"
                : "text-muted-foreground"
            )}
          >
            {label}
          </button>
        ))}
      </div>
    </nav>
  );
}