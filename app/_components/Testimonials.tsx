"use client";

import { siteConfig } from "../../lib/site";
import { motion } from "motion/react";

export function Testimonials() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
      <div className="container mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10 md:mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 relative inline-block"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
              What Our Ohana Says
            </span>
            <motion.span
              className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 rounded-full"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg max-w-3xl mx-auto"
          >
            Don&apos;t just take our word for it - here&apos;s what our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-400 font-semibold">
              island family
            </span>{" "}
            has to say about our authentic Hawaiian flavors.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
        >
          {siteConfig.testimonials.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-background backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 shadow-xl relative overflow-hidden group"
            >
              <div className="relative z-10">
                <div className="text-red-400 text-3xl sm:text-4xl mb-3 sm:mb-4 opacity-80">❝</div>

                <p className="text-primary-foreground mb-5 sm:mb-6 italic text-sm sm:text-base leading-relaxed">
                  {item.quote}
                </p>

                <div className="flex items-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-red-400 to-orange-400 flex items-center justify-center text-white font-bold text-sm">
                    {item.author.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <p className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-400">
                      {item.author}
                    </p>
                    <p className="text-xs sm:text-sm text-primary-foreground/80">
                      {item.location}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
