"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const locationCategories = [
  {
    title: "Food Truck Organizations",
    items: ["Off the Grid", "SactoMofo", "Roaming Hunger", "SoMa StreatFood", "Taste of the World Market"]
  },
  {
    title: "Local Wineries and Breweries",
    items: ["Wooden Valley", "GV Cellers", "Heretic", "Five Suns"]
  },
  {
    title: "Public Special Events",
    items: ["Farmer's Market", "Music Festivals", "Concerts", "Sporting Events", "Church Functions", "School Fundraisers"]
  }
];

export function FoodTruckLocations() {
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

  const cardHoverVariants = {
    rest: { scale: 1 },
    hover: {
      scale: 1.03,
      boxShadow: "0 20px 30px rgba(0, 0, 0, 0.15)",
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full py-20">
      <div className="container mx-auto">
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
            Find Our Food Truck
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
            className="text-lg text-primary-foreground max-w-3xl mx-auto"
          >
            Find our Food Truck at various events throughout the Bay Area.
            We work with many different organizations and groups from 
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-500 font-semibold"> Yolo County to SF County</span>.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {locationCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              className="bg-background backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-white/10 shadow-xl will-change-transform"
            >
              <motion.div
                variants={cardHoverVariants}
                className="h-full w-full"
              >
                <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-400 mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="text-primary-foreground flex items-center">
                      <span className="text-red-400 mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-10 sm:mt-12 md:mt-16"
        >
          <motion.div variants={itemVariants}>
            <Link
              href="/locations"
              className={buttonVariants({
                size: "lg",
                variant: "brand",
              })}
            >
              View All Locations
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 