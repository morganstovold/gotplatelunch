"use client";

import { Button } from "../../components/ui/button";
import { siteConfig } from "../../lib/site";
import { motion } from "framer-motion";
import Image from "next/image";

export function FoodShowcase() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
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

  const cardHoverVariants = {
    rest: { scale: 1 },
    hover: {
      scale: 1.03,
      boxShadow: "0 20px 30px rgba(0, 0, 0, 0.15)",
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full py-16 sm:py-20 md:py-28 relative overflow-hidden">
      {/* Decorative circles - positioned with percentages to ensure they stay within bounds */}
      <motion.div
        className="absolute top-[20%] left-[5%] w-40 sm:w-56 h-40 sm:h-56 rounded-full bg-gradient-to-r from-yellow-300/10 to-orange-400/10 blur-3xl"
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
        className="absolute bottom-[10%] right-[5%] w-48 sm:w-72 h-48 sm:h-72 rounded-full bg-gradient-to-r from-teal-300/10 to-blue-400/10 blur-3xl"
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
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 relative inline-block"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-teal-400 to-emerald-500">
              Island Flavors
            </span>
            <motion.span
              className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-blue-500 via-teal-400 to-emerald-500 rounded-full"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg max-w-3xl mx-auto px-0"
          >
            From SPAM Musubi to Loco Moco, we bring the{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-500 font-semibold">
              authentic taste
            </span>{" "}
            of Hawaii to you.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {siteConfig.foodItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              initial="rest"
              animate="rest"
              className="relative bg-white rounded-xl overflow-hidden shadow-xl group"
            >
              <motion.div
                variants={cardHoverVariants}
                className="h-full w-full"
              >
                <div className="h-48 sm:h-56 overflow-hidden relative">
                  <Image
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-4 sm:p-6 relative">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-amber-600 transition-colors duration-300">
                    {item.name}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">{item.description}</p>
                </div>
              </motion.div>

              {/* Floating corner decoration - properly constrained */}
              <motion.div
                className="absolute top-0 right-0 w-10 h-10 sm:w-16 sm:h-16 rounded-bl-3xl bg-gradient-to-br from-orange-400/0 to-orange-400/5 opacity-0 group-hover:opacity-100"
                animate={{
                  rotate: [0, 10, 0],
                  scale: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-10 sm:mt-16"
        >
          <motion.div variants={itemVariants}>
            <Button
              size="lg"
              variant="default"
              className="font-bold px-6 sm:px-8"
            >
              View Full Menu
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
