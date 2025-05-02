"use client";

import { motion } from "motion/react";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import foodTruck1 from "@/public/food-truck-1.jpg";
import foodTruck2 from "@/public/food-truck-2.jpg";

export function FoodTruckCTA() {
  return (
    <section className="relative w-full py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container mx-auto text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 relative inline-block">
          Book Our Food Truck!
          <span
            className="absolute -bottom-1 left-0 w-12 h-0.5 bg-yellow-400"
            style={{
              boxShadow: "0 0 6px #F0B222, 0 0 12px rgba(240, 178, 34, 0.6)",
            }}
          ></span>
        </h2>
        <p className="text-lg text-primary-foreground max-w-2xl mx-auto mb-8">
          Looking to bring the taste of Hawaii to your next event? Our food
          truck is available for private bookings, corporate events, weddings,
          and more. Contact us today to discuss your catering needs!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/contact"
            className={buttonVariants({ variant: "brand" })}
          >
            Contact Us
          </Link>
          <Link href="/menu" className={buttonVariants({ variant: "brand" })}>
            View Menu
          </Link>
        </div>
      </motion.div>

      <div className="mt-20 grid md:grid-cols-2 gap-8 container">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-lg overflow-hidden shadow-lg"
        >
          <Image
            src={foodTruck1}
            alt="Food Truck in Action"
            className="w-full h-64 object-cover"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-white rounded-lg overflow-hidden shadow-lg"
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
