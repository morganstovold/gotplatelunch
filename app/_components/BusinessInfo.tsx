"use client";

import { buttonVariants } from "../../components/ui/button";
import { motion } from "motion/react";
import Image from "next/image";
import FoodTruck2 from "../../public/food-truck-2.jpg";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function BusinessInfo() {
  // Award years
  const awardYears = [2017, 2018, 2019, 2020, 2021, 2022, 2023];

  // Animation variants
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
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          <motion.div
            className="w-full md:w-1/2 order-2 md:order-1"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="max-w-lg mx-auto md:mx-0 space-y-5 sm:space-y-6">
              <motion.h2
                variants={itemVariants}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 relative inline-block"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-teal-400 to-cyan-500">
                  Our Journey
                </span>
                <motion.span
                  className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-blue-500 via-teal-400 to-cyan-500 rounded-full"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                />
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="text-base sm:text-lg leading-relaxed"
              >
                Our journey began in{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-500 font-semibold">
                  2011
                </span>{" "}
                with a single food truck, bringing authentic Hawaiian flavors to
                the streets of Benicia. By{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-emerald-500 font-semibold">
                  2013
                </span>
                , we opened our first restaurant, and in{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500 font-semibold">
                  2014
                </span>
                , we expanded with a commissary to support our growing fleet of
                food trucks.
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-base sm:text-lg leading-relaxed"
              >
                Today, we&apos;re proud to share our{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-500 font-semibold">
                  Aloha spirit
                </span>{" "}
                through our expanding network of food trucks and upcoming
                restaurant franchises.
              </motion.p>

              {/* Awards Section (replacing Hours of Operation) */}
              <motion.div
                variants={itemVariants}
                className="bg-gradient-to-r from-amber-50/80 to-orange-50/80 rounded-xl p-4 sm:p-6 border border-amber-100 shadow-xl"
              >
                <div className="flex items-center gap-3 mb-3">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 text-amber-500 flex-shrink-0"
                  >
                    <path
                      d="M7 22H17M12 17V22M7 8.5V11.5C7 14.26 9.24 16.5 12 16.5C14.76 16.5 17 14.26 17 11.5V8.5M19 5H21C21 3.34 19.66 2 18 2H6C4.34 2 3 3.34 3 5H5M19 8.5C19 8.5 20 8.5 21 8.5C21 11.54 18.76 14 16 14M5 8.5C5 8.5 4 8.5 3 8.5C3 11.54 5.24 14 8 14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <div>
                    <h3 className="text-lg sm:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-red-500">
                      Award-Winning Island Cuisine
                    </h3>
                    <p className="text-sm sm:text-base text-neutral-700">
                      Times-Herald Best of {awardYears.join(", ")} · First Place
                    </p>
                  </div>
                </div>

                <p className="text-base font-medium text-neutral-700 mb-4">
                  Voted the{" "}
                  <span className="font-bold text-amber-600">
                    BEST Island Restaurant
                  </span>{" "}
                  in Solano County
                </p>

                <div className="flex flex-wrap gap-2 justify-center">
                  {awardYears.map((year) => (
                    <Badge
                      key={year}
                      variant="outline"
                      className="text-sm bg-amber-100/80 text-amber-800 border-amber-200 hover:bg-amber-200"
                    >
                      {year}
                    </Badge>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-4"
              >
                <Link
                  href="/locations"
                  className={cn(
                    buttonVariants({
                      size: "lg",
                      variant: "brand",
                    }),
                    "w-full md:w-auto"
                  )}
                >
                  View Locations
                </Link>
                <Link
                  href="/food-truck"
                  className={cn(
                    buttonVariants({
                      size: "lg",
                      variant: "brand",
                    }),
                    "w-full md:w-auto"
                  )}
                >
                  Food Truck
                </Link>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2 order-1 md:order-2 mb-8 md:mb-0"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative max-w-md mx-auto md:max-w-full">
              <motion.div
                className="relative z-10 rounded-xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={FoodTruck2}
                  alt="Got Plate Lunch Food Truck"
                  className="w-full h-auto rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              </motion.div>

              {/* Since 2011 badge */}
              <motion.div
                className="absolute bottom-4 right-4 z-20 bg-gradient-to-r from-red-500 to-orange-500 p-2 sm:p-4 rounded-xl shadow-xl"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6, type: "spring" }}
                viewport={{ once: true }}
              >
                <p className="text-white font-bold text-base sm:text-lg md:text-xl">
                  Since 2011
                </p>
                <p className="text-white/80 text-xs sm:text-sm">
                  Sharing Aloha Spirit
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
