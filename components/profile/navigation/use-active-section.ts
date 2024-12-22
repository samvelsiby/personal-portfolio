"use client";

import { useEffect, useState } from "react";
import { navItems, type NavItem } from "./nav-items";

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<NavItem["id"]>("experience");

  useEffect(() => {
    const observers = new Map();
    
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id as NavItem["id"]);
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

  return activeSection;
}