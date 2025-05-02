"use client";

import { motion } from "motion/react";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export function AboutJourney() {
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
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12 will-change-transform"
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-400 mb-6 relative inline-block"
          >
            Our Journey
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
            className="text-base sm:text-lg leading-relaxed max-w-3xl mx-auto will-change-transform"
          >
            From a small food truck to a growing restaurant business, our story is one of 
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-500 font-semibold"> passion </span> 
            and 
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-500 font-semibold"> dedication</span>.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-background backdrop-blur-sm rounded-xl p-6 border border-white/10 shadow-xl hover:shadow-2xl transition-shadow duration-300 will-change-transform"
          >
            <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-400">2011</h3>
            <p className="text-base sm:text-lg leading-relaxed">
              Started our first food truck, bringing Hawaiian flavors to the
              streets of Benicia
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-background backdrop-blur-sm rounded-xl p-6 border border-white/10 shadow-xl hover:shadow-2xl transition-shadow duration-300 will-change-transform"
          >
            <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-400">2013</h3>
            <p className="text-base sm:text-lg leading-relaxed">
              Opened our first restaurant in Benicia to share our authentic Hawaiian plate lunches
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-background backdrop-blur-sm rounded-xl p-6 border border-white/10 shadow-xl hover:shadow-2xl transition-shadow duration-300 will-change-transform"
          >
            <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-400">2014</h3>
            <p className="text-base sm:text-lg leading-relaxed">
              Launched our commissary for food truck operations to expand our reach
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center will-change-transform"
        >
          <Link
            href="/food-truck"
            className={buttonVariants({ variant: "brand", size: "lg" })}
          >
            Explore Our Food Truck
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 