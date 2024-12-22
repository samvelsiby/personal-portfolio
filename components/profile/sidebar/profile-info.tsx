"use client";

import { MapPinIcon, MailIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Avatar } from "../avatar";

export function ProfileInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center"
    >
      <Avatar />
      
      <motion.h1 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-3xl font-bold bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent"
      >
        Samvel Siby
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-xl text-white/60 mt-2"
      >
        Computer Science Student
      </motion.p>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-4 text-sm text-white/60 space-y-2"
      >
        <div className="flex items-center justify-center gap-2">
          <MapPinIcon size={16} className="text-white/40" />
          <span>Winnipeg, Manitoba</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <MailIcon size={16} className="text-white/40" />
          <span>samvelsiby@gmail.com</span>
        </div>
      </motion.div>
    </motion.div>
  );
}