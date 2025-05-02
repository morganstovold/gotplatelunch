"use client";

import { motion } from "motion/react";
import foodTruck1 from "@/public/food-truck-1.jpg";
import catering1 from "@/public/catering-1.jpg";
import catering2 from "@/public/catering-2.jpg";
import Image from "next/image";

const cateringOptions = [
  {
    title: "Food Truck Catering",
    description:
      "We bring our food truck to you and you select/customize your menu. Guests come up to the truck and pick up their plates.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 6h19l-3 10H6L3 6z" />
        <path d="M9 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
        <path d="M19 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
        <path d="M6 10h13" />
      </svg>
    ),
    details: [
      "Minimum 50 people",
      "Pricing varies based on menu selection",
      "Hourly truck rate, tax, travel fee and gratuity are additional",
    ],
    image: foodTruck1,
  },
  {
    title: "Service Line Catering",
    description:
      "You select the menu items and we come to your location with staff ready to work. We set up and attend the service line, serve your guests, and clean up.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
    details: [
      "Minimum 45 people",
      "You get to enjoy the party with your guests",
      "Service fee based on number of guests",
      "Tax, travel fee and gratuity are additional",
    ],
    image: catering1,
  },
  {
    title: "Party Trays",
    description:
      'Our party trays come in deep/half pans (12¾" x 10⅜") and feed approximately 12-15 adults per tray.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
      </svg>
    ),
    details: [
      "Pick up or delivery only (Monday-Saturday)",
      "Free delivery in Benicia with $500 minimum order (based on availability)",
      "Plates, plastic cutlery, napkins and serving utensils not included",
    ],
    image: catering2,
  },
];

export function CateringOptions() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-400 mb-4 relative inline-block pb-2">
            Catering Options
            <motion.span
              className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-red-400 to-orange-400 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "48px" }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            />
          </h2>
          <p className="text-lg text-primary-foreground max-w-3xl mx-auto">
            We offer multiple catering options to fit your event needs. Choose
            from our food truck, service line, or party trays for a delicious
            Hawaiian-style experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {cateringOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-xl border border-gray-100"
            >
              <div className="h-48 overflow-hidden">
                <Image
                  src={option.image}
                  alt={option.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <div className="p-6">
                <div className="mb-4 flex items-center">
                  <div className="size-10 bg-gradient-to-r from-red-400 to-orange-400 rounded-full flex items-center justify-center mr-3 text-white shadow-md">
                    {option.icon}
                  </div>
                  <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-400">
                    {option.title}
                  </h3>
                </div>
                <p className="text-primary-foreground mb-6">
                  {option.description}
                </p>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2 text-lg">
                    Details:
                  </h4>
                  <ul className="space-y-2">
                    {option.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-orange-500 mr-2">•</span>
                        <span className="text-primary-foreground">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
