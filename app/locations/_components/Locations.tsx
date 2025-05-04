"use client";

import { buttonVariants } from "@/components/ui/button";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import nineStLocation from "@/public/9th-street-location.jpg";
import bayshoreLocation from "@/public/bayshore-location.jpg";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, ExternalLink, Navigation, Menu } from "lucide-react";

const locations = [
  {
    id: "restaurant",
    name: "9th St Restaurant",
    image: nineStLocation,
    description:
      "Our flagship restaurant with full menu options and dine-in seating.",
    address: "810 West 9th St. Benicia, CA 94510",
    hours: [
      "Monday: Closed",
      "Tuesday-Friday: 11:00am - 2:30pm / 4:00pm - 8:00pm",
      "Saturday: 10:00am - 8:00pm",
      "Sunday: 10:00am - 3:00pm"
    ],
    note: "* Hours subject to change based on business needs",
    orderUrl:
      "https://www.snaptown-online.com/ordering/restaurant/menu?restaurant_uid=1b3efe19-4a8f-4b63-90b4-bc291256b16c",
    type: "Full Service",
  },
  {
    id: "express",
    name: "Bayshore Rd Express",
    image: bayshoreLocation,
    description:
      "Quick service express location for convenient takeout and delivery.",
    address: "3200 Bayshore Rd #2, Benicia, CA 94510",
    hours: [
      "Monday-Friday: 10:00am - 2:00pm",
      "Saturday & Sunday: Closed"
    ],
    note: "* Hours subject to change based on business needs",
    orderUrl:
      "https://www.snaptown-online.com/ordering/restaurant/menu?restaurant_uid=e0582fa9-9277-4c53-b5bf-e8196b8f8dbf",
    type: "Express Service",
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
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
              animate={{ width: "100%" }}
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
          animate="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12"
        >
          {locations.map((location) => (
            <motion.div
              key={location.id}
              variants={itemVariants}
              className="flex flex-col h-full bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="h-64 md:h-72 overflow-hidden relative">
                <Image
                  src={location.image}
                  alt={location.name}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <Badge 
                  className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white border-none py-1.5 px-3 text-sm"
                >
                  {location.type}
                </Badge>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h2 className="text-2xl md:text-3xl font-bold mb-1 drop-shadow-md">
                    {location.name}
                  </h2>
                </div>
              </div>
              
              <div className="flex-1 p-6 md:p-8 space-y-6">
                <p className="text-gray-700 text-base md:text-lg">
                  {location.description}
                </p>
                
                <div className="space-y-5">
                  {/* Address */}
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1">
                      <MapPin className="h-5 w-5 text-red-500" />
                    </div>
                    <div>
                      <h3 className="text-base font-medium text-gray-900 mb-1">Address</h3>
                      <p className="text-gray-700">{location.address}</p>
                    </div>
                  </div>
                  
                  {/* Hours */}
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1">
                      <Clock className="h-5 w-5 text-red-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-medium text-gray-900 mb-1">Hours</h3>
                      <div className="space-y-1 text-sm text-gray-700">
                        {location.hours.map((hour, index) => (
                          <p key={index}>{hour}</p>
                        ))}
                        <p className="text-xs italic text-gray-500 mt-2">{location.note}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6 md:p-8 pt-0 grid gap-3 sm:grid-cols-3">
                <Link
                  href={location.orderUrl}
                  target="_blank"
                  className={cn(
                    buttonVariants({ variant: "brand" }),
                    "sm:col-span-1 flex items-center justify-center"
                  )}
                >
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Order
                </Link>
                <Link
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    location.address
                  )}`}
                  target="_blank"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "sm:col-span-1 flex items-center justify-center border-gray-200 hover:border-red-300 hover:bg-red-50/50"
                  )}
                >
                  <Navigation className="w-4 h-4 mr-1" />
                  Directions
                </Link>
                <Link
                  href="/menu"
                  className={cn(
                    buttonVariants({ variant: "soft" }),
                    "sm:col-span-1 flex items-center justify-center bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300"
                  )}
                >
                  <Menu className="w-4 h-4 mr-1" />
                  Menu
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
