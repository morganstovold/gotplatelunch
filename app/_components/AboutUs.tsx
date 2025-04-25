"use client";

import { Button } from "../../components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import FamilyImage from "../../public/family.jpg";

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
      {/* Background gradient blobs positioned to stay within bounds */}
      <motion.div className="absolute top-[20%] right-[5%] w-64 h-64 rounded-full bg-gradient-to-r from-orange-400/10 to-pink-500/10 blur-3xl" />
      <motion.div className="absolute bottom-[20%] left-[5%] w-64 h-64 rounded-full bg-gradient-to-r from-blue-400/10 to-purple-500/10 blur-3xl" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div className="relative mx-auto max-w-md md:max-w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <Image
                src={FamilyImage}
                alt="Got Plate Lunch Family"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              {/* Decorative border - constrained on mobile */}
              <motion.div
                className="absolute -inset-2 sm:-inset-3 border-2 border-dashed border-yellow-400/30 rounded-xl z-0"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              />
            </motion.div>
            {/* Floating decoration elements - constrained to not overflow */}
            <motion.div
              className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-orange-400/60 to-red-500/60 rounded-full blur-md"
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
              className="absolute -top-4 -left-4 sm:-top-8 sm:-left-8 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-400/60 to-purple-500/60 rounded-full blur-md"
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
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6 max-w-lg"
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
              <Button
                size="lg"
                variant="default"
                className="font-bold px-6 sm:px-8 mt-2"
              >
                Learn More About Us

                </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
