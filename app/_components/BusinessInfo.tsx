"use client";

import { Button } from "../../components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import FoodTruck2 from "../../public/food-truck-2.jpg";

export function BusinessInfo() {
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
      {/* Decorative background elements */}
      <motion.div 
        className="absolute top-[15%] right-[5%] w-40 sm:w-56 h-40 sm:h-56 rounded-full bg-gradient-to-r from-blue-300/10 to-cyan-400/10 blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div 
        className="absolute bottom-[10%] left-[5%] w-48 sm:w-64 h-48 sm:h-64 rounded-full bg-gradient-to-r from-amber-300/10 to-orange-400/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          <motion.div 
            className="w-full md:w-1/2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="max-w-lg mx-auto md:mx-0 space-y-5 sm:space-y-6">
              <motion.h2
                variants={itemVariants}
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 relative inline-block"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-teal-400 to-cyan-500">
                  Our Journey
                </span>
                <motion.span 
                  className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-blue-500 via-teal-400 to-cyan-500 rounded-full"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="text-base sm:text-lg leading-relaxed"
              >
                Our journey began in <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-500 font-semibold">2011</span> with a single food truck, bringing
                authentic Hawaiian flavors to the streets of Benicia. By <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-emerald-500 font-semibold">2013</span>,
                we opened our first restaurant, and in <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500 font-semibold">2014</span>, we expanded with a
                commissary to support our growing fleet of food trucks.
              </motion.p>
              
              <motion.p
                variants={itemVariants}
                className="text-base sm:text-lg leading-relaxed"
              >
                Today, we&apos;re proud to share our <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-500 font-semibold">Aloha spirit</span> through our
                expanding network of food trucks and upcoming restaurant
                franchises.
              </motion.p>
              
              <motion.div
                variants={itemVariants}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 shadow-xl"
              >
                <h3 className="text-lg sm:text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-500">
                  Hours of Operation
                </h3>
                <ul className="space-y-3">
                  <li className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span className="font-medium">Monday - Thursday</span>
                    <span className="bg-amber-400/10 px-3 py-1 rounded-full text-amber-500 font-medium">11AM - 8PM</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span className="font-medium">Friday - Saturday</span>
                    <span className="bg-amber-400/10 px-3 py-1 rounded-full text-amber-500 font-medium">11AM - 9PM</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="font-medium">Sunday</span>
                    <span className="bg-amber-400/10 px-3 py-1 rounded-full text-amber-500 font-medium">12PM - 7PM</span>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <Button
                  size="lg"
                  variant="default"
                >
                  Get Directions
                </Button>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2 mt-8 md:mt-0"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative max-w-md mx-auto md:max-w-full">
              {/* Main image with animation */}
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
              
              {/* Decorative elements */}
              <motion.div
                className="absolute -bottom-6 -right-6 w-36 h-36 bg-gradient-to-br from-orange-400/30 to-red-500/30 rounded-full blur-lg"
                animate={{
                  y: [0, -10, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut",
                }}
              />
              
              <motion.div
                className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-teal-400/30 to-blue-500/30 rounded-full blur-lg"
                animate={{
                  y: [0, 10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
              
              {/* Since 2011 badge */}
              <motion.div 
                className="absolute bottom-4 right-4 z-20 bg-gradient-to-r from-amber-500 to-orange-500 p-4 rounded-xl shadow-xl"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6, type: "spring" }}
                viewport={{ once: true }}
              >
                <p className="text-white font-bold text-lg sm:text-xl">
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
