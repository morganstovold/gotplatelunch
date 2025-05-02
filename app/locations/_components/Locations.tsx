"use client";

import { buttonVariants } from "@/components/ui/button";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import nineStLocation from "@/public/9th-street-location.jpg";
import bayshoreLocation from "@/public/bayshore-location.jpg";
import { cn } from "@/lib/utils";

const locations = [
  {
    id: "restaurant",
    name: "9th St Restaurant",
    image: nineStLocation,
    description:
      "Our flagship restaurant with full menu options and dine-in seating.",
    address: "810 West 9th St. Benicia, CA 94510",
    orderUrl:
      "https://www.snaptown-online.com/ordering/restaurant/menu?restaurant_uid=1b3efe19-4a8f-4b63-90b4-bc291256b16c",
  },
  {
    id: "express",
    name: "Bayshore Rd Express",
    image: bayshoreLocation,
    description:
      "Quick service express location for convenient takeout and delivery.",
    address: "3200 Bayshore Rd #2, Benicia, CA 94510",
    orderUrl:
      "https://www.snaptown-online.com/ordering/restaurant/menu?restaurant_uid=e0582fa9-9277-4c53-b5bf-e8196b8f8dbf",
  },
];

export function Locations() {
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
    <section id="locations" className="w-full py-12 sm:py-16 md:py-20 lg:py-24 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 relative inline-block">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
              Visit Us
            </span>
            <motion.span
              className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            />
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Experience authentic Hawaiian cuisine at our convenient locations
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        >
          {locations.map((location) => (
            <motion.div
              key={location.id}
              variants={itemVariants}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="h-64 overflow-hidden relative">
                <Image
                  src={location.image}
                  alt={location.name}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-red-500/90 text-white px-4 py-2 rounded-full text-sm font-medium">
                  {location.id === "restaurant" ? "Full Service" : "Express Service"}
                </div>
              </div>
              <div className="p-6 md:p-8 overflow-hidden">
                <h2 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
                  {location.name}
                </h2>
                <p className="text-gray-600 mb-4">{location.description}</p>
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <p className="text-gray-800 font-medium flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {location.address}
                  </p>
                </div>
                <div className="flex flex-col lg:flex-row gap-3">
                  <Link
                    href={location.orderUrl}
                    target="_blank"
                    className={cn(buttonVariants({ variant: "brand" }), "flex-1")}
                  >
                    Order Now
                  </Link>
                  <Link
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      location.address
                    )}`}
                    target="_blank"
                    className={cn(buttonVariants({ variant: "outline" }), "flex-1")}
                  >
                    Directions
                  </Link>
                  <Link
                    href="/menu"
                    className={cn(buttonVariants({ variant: "soft" }), "flex-1")}
                  >
                    View Menu
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
