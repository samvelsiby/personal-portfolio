"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const navItems = [
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function NavBar() {
  const [activeSection, setActiveSection] = useState("experience");

  useEffect(() => {
    const observers = new Map();
    
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.5,
      rootMargin: "-50% 0px -50% 0px",
    });

    navItems.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
        observers.set(id, element);
      }
    });

    return () => {
      observers.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

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