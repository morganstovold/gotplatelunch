"use client";

import { Button } from "../../components/ui/button";
import { motion } from "framer-motion";

export function CallToAction() {
  return (
    <section className="relative w-full py-16 sm:py-20 md:py-24 overflow-hidden">
      {/* Decorative background elements */}
      <motion.div 
        className="absolute top-[20%] left-[5%] w-48 sm:w-64 h-48 sm:h-64 rounded-full bg-gradient-to-r from-orange-300/10 to-amber-400/10 blur-3xl"
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
        className="absolute bottom-[10%] right-[5%] w-40 sm:w-56 h-40 sm:h-56 rounded-full bg-gradient-to-r from-teal-300/10 to-emerald-400/10 blur-3xl"
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
          className="max-w-4xl mx-auto rounded-2xl overflow-hidden relative bg-gradient-to-br from-amber-500/5 to-orange-500/10 backdrop-blur-sm border border-white/10 p-8 sm:p-12 shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Decorative palm leaf silhouettes */}
          <div className="absolute top-0 right-0 w-40 h-40 opacity-10 bg-[url('/palm-leaf-silhouette.svg')] bg-no-repeat bg-right-top"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 opacity-10 bg-[url('/palm-leaf-silhouette.svg')] bg-no-repeat bg-left-bottom transform rotate-180"></div>
          
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
              />
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed"
            >
              We can&apos;t bring everything from Hawaii, but we sure can bring the
              food you&apos;re used to eating in <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-500 font-semibold">Hawaii</span>. Come inside and enjoy our
              food, all made and served with <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-500 font-semibold">Aloha</span>.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Button 
                size="lg" 
                variant="default"
              >
                Order Online
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
              >
                Find Location
              </Button>
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
