"use client";

import { motion } from "motion/react";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import foodTruck1 from "@/public/food-truck-1.jpg";
import foodTruck2 from "@/public/food-truck-2.jpg";

export function FoodTruckCTA() {
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full py-24">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto text-center will-change-transform"
      >
        <motion.h2
          variants={itemVariants}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-400 mb-6 relative inline-block"
        >
          Book Our Food Truck!
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
          className="text-lg text-primary-foreground max-w-2xl mx-auto mb-8"
        >
          Looking to bring the 
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-500 font-semibold"> taste of Hawaii </span>
          to your next event? Our food truck is available for private bookings, corporate events, weddings,
          and more. Contact us today to discuss your catering needs!
        </motion.p>
        <motion.div
          variants={containerVariants}
          className="flex flex-col sm:flex-row justify-center gap-4 will-change-transform"
        >
          <Link
            href="/contact"
            className={buttonVariants({ variant: "brand" })}
          >
            Contact Us
          </Link>
          <Link href="/menu" className={buttonVariants({ variant: "brand" })}>
            View Menu
          </Link>
        </motion.div>
      </motion.div>

      <div className="mt-20 grid md:grid-cols-2 gap-8 container">
        <motion.div
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-background rounded-xl overflow-hidden shadow-xl border border-white/10 hover:shadow-2xl transition-shadow duration-300 will-change-transform"
        >
          <Image
            src={foodTruck1}
            alt="Food Truck in Action"
            className="w-full h-64 object-cover"
          />
        </motion.div>
        <motion.div
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-background rounded-xl overflow-hidden shadow-xl border border-white/10 hover:shadow-2xl transition-shadow duration-300 will-change-transform"
        >
          <Image
            src={foodTruck2}
            alt="Food Truck Serving"
            className="w-full h-64 object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
