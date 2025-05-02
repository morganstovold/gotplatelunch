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
  return (
    <section className="w-full">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 relative inline-block">
            Food Truck Schedule
            <span
              className="absolute -bottom-1 left-0 w-12 h-0.5 bg-yellow-400"
              style={{
                boxShadow: "0 0 6px #F0B222, 0 0 12px rgba(240, 178, 34, 0.6)",
              }}
            ></span>
          </h2>
          <p className="text-lg text-primary-foreground max-w-3xl mx-auto mb-2">
            Find us at these upcoming locations. Truck schedules may change.
          </p>
          <p className="text-lg text-primary-foreground max-w-3xl mx-auto font-medium">
            Please call the restaurant at (707) 745-4751 for any updates or
            changes. Mahalo!
          </p>
        </motion.div>

        <div className="grid gap-6 mb-12">
          {scheduleItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row md:items-center md:justify-between"
            >
              <div className="md:w-1/4 mb-4 md:mb-0">
                <h3 className="text-xl font-bold text-gray-900">{item.date}</h3>
                <p className="text-primary-foreground">{item.time}</p>
              </div>
              <div className="md:w-1/2 mb-4 md:mb-0">
                <h4 className="text-lg font-bold text-yellow-400">
                  {item.location}
                </h4>
                <p className="text-primary-foreground">{item.address}</p>
              </div>
              <div className="md:w-1/4 text-right">
                <Button variant="soft" className="font-medium">
                  Get Directions
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center w-full"
        >
          <div className="bg-white p-8 rounded-lg shadow-md w-full text-center">
            <div className="text-2xl text-yellow-400 mb-4">
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
