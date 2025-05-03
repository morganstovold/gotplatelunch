"use client";

import { motion } from "motion/react";
import Link from "next/link";

export function ChefQuote() {
  return (
    <section className="w-full py-10 md:py-16 overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="absolute -top-10 -left-10 w-24 h-24 bg-gradient-to-br from-red-400/20 to-orange-400/20 rounded-full blur-xl"></div>
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-tr from-orange-400/20 to-red-400/20 rounded-full blur-xl"></div>
          
          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl overflow-hidden shadow-lg border border-red-100 p-6 md:p-10">
            <div className="flex flex-col items-center text-center">
              <div className="mb-6">
                <svg viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14 text-red-300">
                  <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
                </svg>
              </div>
              
              <blockquote className="text-xl md:text-2xl font-medium text-zinc-700 max-w-3xl mb-4">
                &ldquo;It&rsquo;s so simple, yet so delicious&rdquo;
              </blockquote>
              
              <div className="flex items-center justify-center space-x-2">
                <span className="text-zinc-600 font-medium">Featured on</span>
                <Link 
                  href="https://www.youtube.com/watch?v=-FmYPkdLeOc&t=57s" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1 text-red-500 hover:text-red-600 transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  <span className="font-medium">Bay Area Restaurants</span>
                </Link>
              </div>
              
              <div className="mt-6 flex justify-center">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block"
                >
                  <Link 
                    href="/menu" 
                    className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-red-500 to-orange-500 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all"
                  >
                    View Our Menu
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 