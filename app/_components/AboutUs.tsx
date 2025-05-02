"use client";

import { buttonVariants } from "../../components/ui/button";
import { motion } from "motion/react";
import Image from "next/image";
import FamilyImage from "../../public/family.jpg";
import Link from "next/link";

export function AboutUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <section className="w-full py-4 md:py-24 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-18 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-8 relative inline-block"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600">
                Our Story
              </span>
              <motion.span
                className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 rounded-full"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              />
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg leading-relaxed"
            >
              We are a{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-500 font-semibold">
                family run business
              </span>
              ; husband, wife and daughter. It all started out with wanting to
              share the taste of Hawaiian kine style food. We are inspired by
              the &quot;Hawaiian style plate lunch.&quot;
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg leading-relaxed"
            >
              Growing up in{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-500 font-semibold">
                Hawaii
              </span>
              , we know first hand the flavors of the food, &quot;da kine&quot;
              that you get from the islands. It&apos;s not just Hawaiian,
              Korean, Japanese, or Filipino, it&apos;s any kind food.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg leading-relaxed"
            >
              After many years of sharing and making food for family and friends
              for parties, it finally dawned on us that there are more people
              that want to enjoy the{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-500 font-semibold">
                island style food
              </span>
              .
            </motion.p>

            <motion.div variants={itemVariants}>
              <Link
                href="/about"
                className={buttonVariants({ variant: "yellow", size: "lg" })}
              >
                Learn More About Us
              </Link>
            </motion.div>
          </motion.div>
          <motion.div className="relative mx-auto max-w-md md:max-w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Image
                src={FamilyImage}
                alt="Got Plate Lunch Family"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
