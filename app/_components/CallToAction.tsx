"use client";

import Link from "next/link";
import { buttonVariants } from "../../components/ui/button";
import { motion } from "motion/react";

export function CallToAction() {
  return (
    <section className="relative w-full py-16 sm:py-20 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto rounded-2xl overflow-hidden relative bg-white/50 backdrop-blur-sm p-8 sm:p-12 shadow-xl"
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
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 relative inline-block"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-orange-500 to-red-500">
                Come Taste The Aloha!
              </span>
              <motion.span
                className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 rounded-full"
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
              className="text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed"
            >
              We can&apos;t bring everything from Hawaii, but we sure can bring
              the food you&apos;re used to eating in{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-500 font-semibold">
                Hawaii
              </span>
              . Come inside and enjoy our food, all made and served with{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-500 font-semibold">
                Aloha
              </span>
              .
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Link
                href="/locations"
                className={buttonVariants({ size: "lg" })}
              >
                Order Online
              </Link>
              <Link href="/menu" className={buttonVariants({ size: "lg" })}>
                View Menu
              </Link>
            </motion.div>
          </div>

          {/* Decorative circles */}
          <motion.div
            className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-amber-400/20 to-orange-500/20 rounded-full blur-md"
            animate={{
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
            className="absolute -top-6 -left-6 w-20 h-20 bg-gradient-to-br from-teal-400/20 to-cyan-500/20 rounded-full blur-md"
            animate={{
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
