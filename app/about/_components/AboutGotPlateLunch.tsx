"use client";

import { motion } from "motion/react";
import Image from "next/image";
import plateLunchImage from "@/public/plate-lunch-history.jpg";

export function AboutPlateLunch() {
  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center container">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 relative inline-block">
            What is Plate Lunch?
            <span
              className="absolute -bottom-1 left-0 w-12 h-0.5 bg-yellow-400"
              style={{
                boxShadow: "0 0 6px #F0B222, 0 0 12px rgba(240, 178, 34, 0.6)",
              }}
            ></span>
          </h2>
          <p className="text-lg text-primary-foreground mb-6">
            The Hawaiian Plate Lunch has a rich history dating back to the 1890s
            when plantation workers from Portugal, Japan, Philippines, and other
            parts of Asia brought their leftover dinners to work. This simple
            act of sharing food and culture among workers gave birth to what we
            now know as the &quot;aloha spirit.&quot;
          </p>
          <p className="text-lg text-primary-foreground mb-6">
            In the 1960s, Lunch Wagons and Food Trucks began selling Plate
            Lunches and Manapuas to locals and construction workers, eventually
            evolving into the restaurants we know today. The foundation of a
            Plate Lunch is two scoops of rice, one scoop of mac salad, and a
            meat entree - a perfect blend of cultures and flavors.
          </p>
          <p className="text-lg text-primary-foreground">
            More than just a meal, Plate Lunch is a lifestyle. It&apos;s enjoyed
            for breakfast, lunch, dinner, and late-night meals. From Korean
            Kal-Bi to Hawaiian Kalua Pork, Japanese Katsu to Loco Moco, each
            dish tells a story of Hawaii&apos;s diverse cultural heritage.
          </p>
        </motion.div>
        <Image
          src={plateLunchImage}
          alt="Traditional Plate Lunch"
          className="rounded-lg h-96 w-full object-cover shadow-md"
        />
      </div>
    </section>
  );
}
