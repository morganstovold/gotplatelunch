"use client";

import { motion } from "motion/react";
import Image from "next/image";
import heroBg from "@/public/hero-bg.jpg";

export function LocationsHero() {
  return (
    <section className="relative w-full py-24 md:py-36 lg:py-52 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={heroBg}
          alt="Hero Background"
          fill
          className="w-full h-full object-cover"
          priority
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="container relative z-10 flex flex-col items-center text-center px-4 sm:px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 relative inline-block"
        >
          Our Locations
          <motion.span
            className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-red-400 to-orange-400 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "48px" }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          />
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mb-6 sm:mb-8"
        >
          Find a Got Plate Lunch location near you!
        </motion.p>
      </div>
    </section>
  );
}
