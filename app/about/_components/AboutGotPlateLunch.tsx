"use client";

import { motion } from "motion/react";
import Image from "next/image";
import plateLunchImage from "@/public/plate-lunch-history.jpg";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export function AboutPlateLunch() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
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
    <section className="w-full py-12 sm:py-16 md:py-20 overflow-hidden relative">
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4 order-1 md:order-1 will-change-transform"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-400 mb-4 sm:mb-6 relative inline-block will-change-transform"
            >
              What is Plate Lunch?
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
              The Hawaiian Plate Lunch has a rich history dating back to the 1890s
              when plantation workers from{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-500 font-semibold">
                Portugal, Japan, Philippines
              </span>
              , and other parts of Asia brought their leftover dinners to work. This simple
              act of sharing food and culture among workers gave birth to what we
              now know as the &quot;aloha spirit.&quot;
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg leading-relaxed will-change-transform"
            >
              In the 1960s,{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-500 font-semibold">
                Lunch Wagons and Food Trucks
              </span>{" "}
              began selling Plate Lunches and Manapuas to locals and construction workers, eventually
              evolving into the restaurants we know today. The foundation of a
              Plate Lunch is two scoops of rice, one scoop of mac salad, and a
              meat entree - a perfect blend of cultures and flavors.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg leading-relaxed will-change-transform"
            >
              More than just a meal, Plate Lunch is a{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-amber-500 font-semibold">
                lifestyle
              </span>
              . It&apos;s enjoyed for breakfast, lunch, dinner, and late-night meals. From Korean
              Kal-Bi to Hawaiian Kalua Pork, Japanese Katsu to Loco Moco, each
              dish tells a story of Hawaii&apos;s diverse cultural heritage.
            </motion.p>

            <motion.div variants={itemVariants} className="pt-4 will-change-transform">
              <Link
                href="/menu"
                className={buttonVariants({ variant: "brand", size: "lg" })}
              >
                Explore Our Menu
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative mx-auto max-w-md md:max-w-full order-2 md:order-2 mb-8 md:mb-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative will-change-transform">
              <Image
                src={plateLunchImage}
                alt="Traditional Plate Lunch"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-lg"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
