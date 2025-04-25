"use client";

import { siteConfig } from "../../lib/site";
import { motion } from "framer-motion";

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
      {/* Decorative background elements */}
      <motion.div 
        className="absolute top-[10%] left-[5%] w-48 sm:w-64 h-48 sm:h-64 rounded-full bg-gradient-to-r from-pink-300/10 to-purple-400/10 blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div 
        className="absolute bottom-[20%] right-[5%] w-40 sm:w-56 h-40 sm:h-56 rounded-full bg-gradient-to-r from-cyan-300/10 to-blue-400/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
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
          className="text-center mb-10 sm:mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 relative inline-block"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
              What Our Ohana Says
            </span>
            <motion.span 
              className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full"
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
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-500 font-semibold">
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {siteConfig.testimonials.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -5, 
                boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
                transition: { duration: 0.3 }
              }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 sm:p-8 shadow-xl border border-white/10 relative overflow-hidden group"
            >
              {/* Decorative accent */}
              <div className="absolute top-0 right-0 w-24 h-24">
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-amber-400/20 to-transparent rounded-bl-[100px]"></div>
              </div>
              
              {/* Quote icon */}
              <div className="relative z-10">
                <motion.div 
                  className="text-amber-400 text-4xl mb-4 opacity-80"
                  animate={{ rotate: [0, 3, 0, -3, 0] }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                >
                  ❝
                </motion.div>
                
                <p className="text-primary-foreground mb-6 italic text-sm sm:text-base leading-relaxed">
                  {item.quote}
                </p>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 flex items-center justify-center text-white font-bold text-sm">
                    {item.author.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <p className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                      {item.author}
                    </p>
                    <p className="text-xs sm:text-sm text-primary-foreground/80">
                      {item.location}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Decorative bottom corner */}
              <motion.div 
                className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-blue-400/0 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{ rotate: [0, 10, 0] }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
