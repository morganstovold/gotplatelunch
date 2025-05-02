"use client";

import { motion } from "motion/react";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const scheduleItems = [
  {
    date: "March 15, 2024",
    time: "11:30 AM - 2:00 PM",
    location: "Wooden Valley Winery",
    address: "4756 Suisun Valley Rd, Fairfield, CA",
  },
  {
    date: "March 18, 2024",
    time: "11:00 AM - 3:00 PM",
    location: "Off the Grid - Fort Mason",
    address: "2 Marina Blvd, San Francisco, CA",
  },
  {
    date: "March 20, 2024",
    time: "4:00 PM - 8:00 PM",
    location: "Heretic Brewing Company",
    address: "1052 Horizon Dr, Fairfield, CA",
  },
  {
    date: "March 22, 2024",
    time: "11:30 AM - 2:30 PM",
    location: "Five Suns Brewing",
    address: "701 Escobar St, Martinez, CA",
  },
];

export function FoodTruckSchedule() {
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

  const rowVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
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
            Food Truck Schedule
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
            className="text-lg text-primary-foreground max-w-3xl mx-auto mb-2"
          >
            Find us at these upcoming locations. Truck schedules may change.
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="text-lg text-primary-foreground max-w-3xl mx-auto font-medium"
          >
            Please call the restaurant at 
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-500 font-semibold"> (707) 745-4751 </span>
            for any updates or changes. Mahalo!
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 mb-12 will-change-transform"
        >
          {scheduleItems.map((item, index) => (
            <motion.div
              key={index}
              variants={rowVariants}
              custom={index}
              className="bg-background backdrop-blur-sm rounded-xl p-6 border border-white/10 shadow-xl flex flex-col md:flex-row md:items-center md:justify-between hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="md:w-1/4 mb-4 md:mb-0">
                <h3 className="text-xl font-bold text-primary-foreground">{item.date}</h3>
                <p className="text-primary-foreground">{item.time}</p>
              </div>
              <div className="md:w-1/2 mb-4 md:mb-0">
                <h4 className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-400">
                  {item.location}
                </h4>
                <p className="text-primary-foreground">{item.address}</p>
              </div>
              <div className="md:w-1/4 text-right">
                <Button variant="brand" className="font-medium">
                  Get Directions
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center w-full will-change-transform"
        >
          <motion.div
            variants={itemVariants}
            className="bg-background backdrop-blur-sm rounded-xl p-8 border border-white/10 shadow-xl w-full text-center hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-400 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <p className="text-lg text-primary-foreground mb-2">
              Want to book our food truck for your event?
            </p>
            <p className="text-primary-foreground mb-4">
              We&apos;re available for private events, corporate functions, and
              special occasions.
            </p>
            <Link
              href="/contact"
              className={buttonVariants({ variant: "brand" })}
            >
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
