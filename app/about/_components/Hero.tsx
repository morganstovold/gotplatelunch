"use client";

import { motion } from "motion/react";
import Image from "next/image";
import heroBg from "@/public/hero-bg-old.jpg";

export function AboutHero() {
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

      <div className="container relative z-10 flex flex-col gap-6 items-center text-center px-4 sm:px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white relative inline-block will-change-transform"
        >
          Our Story
          <motion.span
            className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-red-400 to-orange-400 rounded-full will-change-transform"
            initial={{ width: "0%" }}
            animate={{ width: "48px" }}
            whileInView={{ width: "48px" }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          />
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl will-change-transform"
        >
          A Family&apos;s Journey to Share the Taste of the Islands
        </motion.p>
      </div>
    </section>
  );
}
