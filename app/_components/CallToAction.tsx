"use client";

import Link from "next/link";
import { buttonVariants } from "../../components/ui/button";
import { motion } from "motion/react";

export function CallToAction() {
  return (
    <section className="relative w-full py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="container mx-auto relative z-10">
        <motion.div
          className="max-w-4xl mx-auto rounded-2xl overflow-hidden relative bg-white/50 backdrop-blur-sm p-4 sm:p-8 md:p-12 shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 relative inline-block"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-400">
                Come Taste The Aloha!
              </span>
              <motion.span
                className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 rounded-full"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              />
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-base sm:text-lg max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed px-2"
            >
              We can&apos;t bring everything from Hawaii, but we sure can bring
              the food you&apos;re used to eating in{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 font-semibold">
                Hawaii
              </span>
              . Come inside and enjoy our food, all made and served with{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400 font-semibold">
                Aloha
              </span>
              .
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4"
            >
              <Link
                href="/locations"
                className={buttonVariants({ size: "lg", variant: "brand" })}
              >
                Order Online
              </Link>
              <Link
                href="/menu"
                className={buttonVariants({ size: "lg", variant: "brand" })}
              >
                View Menu
              </Link>
            </motion.div>
          </div>

          {/* Decorative circles */}
          <motion.div
            className="absolute -bottom-6 -right-6 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-gradient-to-br from-amber-400/20 to-orange-400/20 rounded-full blur-md"
            whileInView={{
              y: [0, -5, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="absolute -top-6 -left-6 w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 bg-gradient-to-br from-teal-400/20 to-cyan-400/20 rounded-full blur-md"
            whileInView={{
              y: [0, 5, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
