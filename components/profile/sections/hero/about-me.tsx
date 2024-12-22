"use client";

import { motion } from "framer-motion";
import { CodeIcon, BookOpenIcon, BrainCircuitIcon } from "lucide-react";

const highlights = [
  {
    icon: <CodeIcon className="w-6 h-6" />,
    title: "Full Stack Development",
    description: "Experienced in building web applications with modern technologies"
  },
  {
    icon: <BookOpenIcon className="w-6 h-6" />,
    title: "Continuous Learning",
    description: "Passionate about learning new technologies and best practices"
  },
  {
    icon: <BrainCircuitIcon className="w-6 h-6" />,
    title: "Problem Solving",
    description: "Strong analytical and algorithmic problem-solving skills"
  }
];

export function AboutMe() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="max-w-4xl mx-auto px-6"
    >
      <div className="text-center mb-12">
        <p className="text-lg text-white/80 leading-relaxed">
          I'm a Computer Science student at the University of Manitoba with a passion for building innovative solutions. 
          Currently working as a Service Desk Analyst, I combine technical expertise with strong problem-solving abilities 
          to create efficient and user-friendly applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {highlights.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
          >
            <div className="flex flex-col items-center text-center">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-lg mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-white/60">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}