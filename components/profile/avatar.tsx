"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function Avatar() {
  return (
    <div className="relative w-48 h-48 mx-auto mb-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.2,
          ease: [0, 0.71, 0.2, 1.01]
        }}
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 animate-gradient" />
        <div className="absolute inset-[2px] rounded-full bg-black" />
        <div className="absolute inset-[4px] rounded-full overflow-hidden">
          <Image
            src="/images/profile.jpg"
            alt="Profile"
            width={192}
            height={192}
            className="object-cover w-full h-full rounded-full"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        </div>
      </motion.div>
    </div>
  );
}