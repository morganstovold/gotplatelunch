"use client";

import { motion } from "motion/react";

export function AboutJourney() {
  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 relative inline-block">
            Our Journey
            <motion.span
              className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full"
              initial={{ width: "0%" }}
              whileInView={{ width: "48px" }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            />
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            From a small food truck to a growing restaurant business, our story is one of passion and dedication.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-yellow-400">2011</h3>
            <p className="text-gray-700">
              Started our first food truck, bringing Hawaiian flavors to the
              streets
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-yellow-400">2013</h3>
            <p className="text-gray-700">
              Opened our first restaurant in Benicia
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-yellow-400">2014</h3>
            <p className="text-gray-700">
              Launched our commissary for food truck operations
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 