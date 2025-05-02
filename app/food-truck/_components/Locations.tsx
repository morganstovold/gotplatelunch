"use client";

import { motion } from "motion/react";

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
  return (
    <section className="w-full py-20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 relative inline-block">
            Find Our Food Truck
            <span
              className="absolute -bottom-1 left-0 w-12 h-0.5 bg-yellow-400"
              style={{
                boxShadow: "0 0 6px #F0B222, 0 0 12px rgba(240, 178, 34, 0.6)",
              }}
            ></span>
          </h2>
          <p className="text-lg text-primary-foreground max-w-3xl mx-auto">
            Find our Food Truck at various events throughout the Bay Area.
            We work with many different organizations and groups from Yolo County to SF County.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {locationCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold text-yellow-400 mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.items.map((item, idx) => (
                  <li key={idx} className="text-primary-foreground flex items-center">
                    <span className="text-yellow-400 mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 