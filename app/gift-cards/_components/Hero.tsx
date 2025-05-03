"use client";

import { motion } from "motion/react";

export function GiftCardHero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center space-y-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-2"
          >
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-400">
              Gift Cards & Vouchers
            </h1>
            <p className="mx-auto max-w-[700px] text-zinc-500 md:text-xl">
              Share the taste of Hawaii with friends and family. Perfect for any occasion.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full max-w-sm rounded-lg overflow-hidden shadow-lg relative mt-8"
          >
            <div className="w-full h-64 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-sm z-10 rounded-lg"></div>
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="bg-white/90 backdrop-blur-md p-6 rounded-lg shadow-xl transform rotate-3">
                  <div className="text-2xl font-bold text-neutral-800">Got Plate Lunch</div>
                  <div className="text-sm font-medium text-neutral-600 mb-3">GIFT CARD</div>
                  <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-400">$50</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 