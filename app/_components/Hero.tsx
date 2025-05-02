"use client";

import { buttonVariants } from "../../components/ui/button";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import heroBg from "@/public/hero-bg.jpg";

export function Hero() {
  return (
    <section className="relative w-full py-52 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* <div className="w-full h-full bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-90"></div> */}
        <Image
          src={heroBg}
          alt="Hero Background"
          fill
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="container relative z-10 flex flex-col items-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 relative inline-block"
        >
          Taste of the Islands
          <span
            className="absolute -bottom-1 left-0 w-12 h-0.5 bg-yellow-400"
            style={{
              boxShadow: "0 0 6px #F0B222, 0 0 12px rgba(240, 178, 34, 0.6)",
            }}
          ></span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-white/90 max-w-3xl mb-8"
        >
          Authentic Hawaiian plate lunches made with Aloha spirit
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            className={buttonVariants({ variant: "yellow", size: "lg" })}
            href="/locations"
          >
            Order Now
          </Link>
          <Link
            className={buttonVariants({ variant: "soft", size: "lg" })}
            href="/menu"
          >
            Our Menu
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
