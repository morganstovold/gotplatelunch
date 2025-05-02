"use client";

import { motion } from "motion/react";
import Image from "next/image";
import qualityImage from "@/public/plate-lunch-history.jpg";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export function AboutQuality() {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 overflow-hidden relative">
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative mx-auto max-w-md md:max-w-full order-1 md:order-1 mb-8 md:mb-0 will-change-transform"
          >
            <Image
              src={qualityImage}
              alt="Fresh Ingredients"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, staggerChildren: 0.2, delayChildren: 0.3 }}
            viewport={{ once: true }}
            className="order-2 md:order-2 space-y-6 will-change-transform"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-400 mb-6 relative inline-block will-change-transform"
            >
              Our Quality Promise
              <motion.span
                className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-red-400 to-orange-400 rounded-full will-change-transform"
                initial={{ width: "0%" }}
                animate={{ width: "48px" }}
                whileInView={{ width: "48px" }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              />
            </motion.h2>

            <ul className="space-y-6">
              <motion.li 
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex items-start"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-400 text-2xl mr-4 font-bold">✓</span>
                <span className="text-base sm:text-lg leading-relaxed">
                  Fresh meats delivered three times weekly
                </span>
              </motion.li>
              <motion.li 
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex items-start"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-400 text-2xl mr-4 font-bold">✓</span>
                <span className="text-base sm:text-lg leading-relaxed">
                  Certified Ground Chuck 80/20 for our patties
                </span>
              </motion.li>
              <motion.li 
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex items-start"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-400 text-2xl mr-4 font-bold">✓</span>
                <span className="text-base sm:text-lg leading-relaxed">
                  Authentic Hawaiian ingredients from trusted brands
                </span>
              </motion.li>
              <motion.li 
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex items-start"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-400 text-2xl mr-4 font-bold">✓</span>
                <span className="text-base sm:text-lg leading-relaxed">
                  Daily preparation of patties and gravy
                </span>
              </motion.li>
            </ul>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="pt-4 will-change-transform"
            >
              <Link
                href="/menu"
                className={buttonVariants({ variant: "brand", size: "lg" })}
              >
                Explore Our Menu
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
