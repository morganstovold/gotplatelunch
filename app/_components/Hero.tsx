"use client";

import { Button } from "../../components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import HeroImage from "../../public/hero-bg.jpg";

export function Hero() {
  return (
    <div className="w-full overflow-hidden">
      <div className="container px-4 py-8 mx-auto">
        {/* Card container with constrained width */}
        <div className="relative max-w-full mx-auto">
          {/* Decorative border */}
          <motion.div
            className="absolute -inset-3 border-2 border-dashed border-yellow-400/30 rounded-xl z-0 hidden sm:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          />
          
          {/* Mobile-friendly smaller border */}
          <motion.div
            className="absolute -inset-1.5 border border-dashed border-yellow-400/30 rounded-lg z-0 sm:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          />
          
          {/* Main card container */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-full rounded-lg overflow-hidden shadow-lg border border-border/40 z-10"
          >
            {/* Maintain aspect ratio while ensuring mobile compatibility */}
            <div className="w-full aspect-[16/9] relative">
              {/* Background image */}
              <div className="absolute inset-0">
                <Image
                  src={HeroImage}
                  alt="Hawaiian sunset beach"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/60"></div>
              </div>

              {/* Content container */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-8">
                <div className="max-w-4xl w-full text-center space-y-4 sm:space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-3 sm:space-y-4"
                  >
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
                      Taste of the Islands
                    </h1>
                    
                    {/* Animated underline */}
                    <motion.div 
                      className="h-1 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 w-0 mx-auto rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "40%" }}
                      transition={{ 
                        duration: 1.2, 
                        delay: 0.5,
                        ease: "easeOut" 
                      }}
                    />
                  </motion.div>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-2xl mx-auto"
                  >
                    Authentic Hawaiian plate lunches made with Aloha spirit
                  </motion.p>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="flex flex-col sm:flex-row gap-3 justify-center pt-2"
                  >
                    <Button 
                      size="lg" 
                      variant="default" 
                      className="font-bold px-5 sm:px-8"
                    >
                      Order Now
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline" 
                    >
                      Our Menu
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Wave divider - positioned absolutely to prevent affecting layout */}
      <div className="relative w-full -mt-1">
        <svg
          className="w-full h-auto"
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 100L48 85C96 70 192 40 288 35C384 30 480 50 576 60C672 70 768 70 864 55C960 40 1056 20 1152 15C1248 10 1344 20 1392 25L1440 30V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0Z"
            className="fill-background"
          />
        </svg>
      </div>
    </div>
  );
}
