"use client";

import { motion } from "motion/react";

export function GradPromo() {
  return (
    <section className="w-full py-16 md:py-24 overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="relative">
          {/* Decorative elements */}
          <div className="absolute -top-10 -left-10 w-24 h-24 bg-gradient-to-br from-red-400/20 to-orange-400/20 rounded-full blur-xl"></div>
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-tr from-orange-400/20 to-red-400/20 rounded-full blur-xl"></div>
          
          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl overflow-hidden shadow-lg border border-red-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left side with image */}
              <div className="relative min-h-[300px] md:min-h-[400px]">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 mix-blend-multiply z-10"></div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="absolute top-0 right-0 bottom-0 left-0 z-0"
                >
                  <div className="relative h-full w-full overflow-hidden rounded-l-2xl">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-full h-full">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-gradient-to-r from-red-500 to-orange-500 p-8 rounded-full w-48 h-48 flex items-center justify-center transform rotate-12">
                            <div className="text-center text-white">
                              <div className="text-5xl font-bold">2025</div>
                              <div className="text-lg font-medium">GRAD</div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Decorative graduation caps */}
                        <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
                          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-red-400">
                            <path d="M12 4L3 9L12 14L21 9L12 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M19 11V16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M7 10.5V15C7 15 9 17 12 17C15 17 17 15 17 15V10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <div className="absolute bottom-1/3 right-1/4 transform translate-x-1/2 translate-y-1/2">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-orange-400">
                            <path d="M12 4L3 9L12 14L21 9L12 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M19 11V16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M7 10.5V15C7 15 9 17 12 17C15 17 17 15 17 15V10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              {/* Right side with content */}
              <div className="p-6 md:p-10 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="space-y-4"
                >
                  <div>
                    <div className="inline-block bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                      LIMITED TIME OFFER
                    </div>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-400">
                    Graduation Special
                  </h2>
                  <p className="text-zinc-600">
                    Celebrate your high school or middle school graduate with our special Hawaiian feast! Purchase a gift card of $50 or more and receive a free dessert voucher to make their celebration even sweeter.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Valid for all 2025 graduates</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Free dessert voucher with $50+ gift card</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Offer valid May 15 - June 30, 2025</span>
                    </li>
                  </ul>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-2 inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all"
                  >
                    Get Graduation Special
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 