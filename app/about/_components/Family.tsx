"use client";

import { motion } from "motion/react";
import Image from "next/image";
import familyImage from "@/public/family.jpg";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export function AboutFamily() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full py-12 md:py-16 lg:py-24 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-18 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4 will-change-transform"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-400 mb-4 sm:mb-6 relative inline-block will-change-transform"
            >
              Our Family&apos;s Passion
              <motion.span
                className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-red-400 to-orange-400 rounded-full will-change-transform"
                initial={{ width: "0%" }}
                animate={{ width: "48px" }}
                whileInView={{ width: "48px" }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              />
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg leading-relaxed will-change-transform"
            >
              We are a{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-500 font-semibold">
                family run business
              </span>{" "}
              - husband, wife, and daughter - dedicated to sharing authentic Hawaiian-style food. 
              Our journey began with a simple desire to bring the unique flavors of Hawaii to the mainland.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg leading-relaxed will-change-transform"
            >
              Growing up in{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-500 font-semibold">
                Hawaii
              </span>
              , we know firsthand the bold flavors that make
              island cuisine special. From SPAM Musubi to Loco Moco, we&apos;re
              passionate about bringing these authentic tastes to your plate.
            </motion.p>

            <motion.div variants={itemVariants} className="pt-4 will-change-transform">
              <Link
                href="/locations"
                className={buttonVariants({ variant: "brand", size: "lg" })}
              >
                Visit Our Locations
              </Link>
            </motion.div>
          </motion.div>
          <motion.div className="relative mx-auto max-w-md md:max-w-full order-1 md:order-2 mb-8 md:mb-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="will-change-transform"
            >
              <Image
                src={familyImage}
                alt="Our Family"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
