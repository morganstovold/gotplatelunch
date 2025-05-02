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
  return (
    <section className="w-full py-28 relative">
      <div className="container w-fit">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {locations.map((location) => (
            <motion.div
              key={location.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="h-64 overflow-hidden">
                <Image
                  src={location.image}
                  alt={location.name}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <div className="p-6 md:p-8 overflow-hidden">
                <h2 className="text-2xl font-bold mb-2">{location.name}</h2>
                <p className="text-gray-600 mb-4">{location.description}</p>
                <p className="text-gray-800 font-medium mb-6">
                  {location.address}
                </p>
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
                    className={cn(buttonVariants({ variant: "brand" }), "flex-1")}
                  >
                    Directions
                  </Link>
                  <Link
                    href="/menu"
                    className={cn(buttonVariants({ variant: "brand" }), "flex-1")}
                  >
                    View Menu
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
