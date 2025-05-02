"use client";

import { motion } from "motion/react";
import Image from "next/image";
import familyImage from "@/public/family.jpg";

export function AboutFamily() {
  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden py-12 sm:py-16 lg:py-20">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center container">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 relative inline-block">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
              Our Family&apos;s Passion
            </span>
            <motion.span
              className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            />
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            We are a family-run business - husband, wife, and daughter -
            dedicated to sharing authentic Hawaiian-style food. Our journey
            began with a simple desire to bring the unique flavors of Hawaii to
            the mainland.
          </p>
          <p className="text-lg text-gray-700">
            Growing up in Hawaii, we know firsthand the bold flavors that make
            island cuisine special. From SPAM Musubi to Loco Moco, we&apos;re
            passionate about bringing these authentic tastes to your plate.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative h-96 w-full"
        >
          <Image
            src={familyImage}
            alt="Our Family"
            fill
            className="rounded-2xl object-cover shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
