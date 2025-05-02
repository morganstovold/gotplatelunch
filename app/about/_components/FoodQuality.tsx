"use client";

import { motion } from "motion/react";
import Image from "next/image";
import qualityImage from "@/public/food-quality.jpg";

export function AboutQuality() {
  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden py-20">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <Image
          src={qualityImage}
          alt="Fresh Ingredients"
          className="rounded-lg h-96 w-full object-cover shadow-md"
        />
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 relative inline-block">
            Our Quality Promise
            <span
              className="absolute -bottom-1 left-0 w-12 h-0.5 bg-yellow-400"
              style={{
                boxShadow: "0 0 6px #F0B222, 0 0 12px rgba(240, 178, 34, 0.6)",
              }}
            ></span>
          </h2>
          <ul className="space-y-6">
            <li className="flex items-start">
              <span className="text-yellow-400 text-2xl mr-4">✓</span>
              <span className="text-primary-foreground text-lg">
                Fresh meats delivered three times weekly
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-400 text-2xl mr-4">✓</span>
              <span className="text-primary-foreground text-lg">
                Certified Ground Chuck 80/20 for our patties
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-400 text-2xl mr-4">✓</span>
              <span className="text-primary-foreground text-lg">
                Authentic Hawaiian ingredients from trusted brands
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-400 text-2xl mr-4">✓</span>
              <span className="text-primary-foreground text-lg">
                Daily preparation of patties and gravy
              </span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
