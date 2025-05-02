"use client";

import { buttonVariants } from "@/components/ui/button";
import { motion } from "motion/react";
import Link from "next/link";

export function CateringContact() {
  return (
    <section className="relative w-full py-12 md:py-16 lg:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden border border-gray-100"
        >
          <div className="p-8 md:p-12">
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-red-400 to-orange-400 rounded-full flex items-center justify-center shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>

            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-400 mb-6 relative inline-block pb-2">
                Request Catering Information
                <motion.span
                  className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-red-400 to-orange-400 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "48px" }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                />
              </h2>

              <p className="text-lg text-primary-foreground mb-4">
                For catering inquiries, please email us at:
              </p>
              <a
                href="mailto:catering@gotplatelunch.com"
                className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400 hover:from-red-500 hover:to-orange-500 transition-colors"
              >
                catering@gotplatelunch.com
              </a>
              <p className="text-primary-foreground mt-4">
                Kindly allow 72 business hours for a response. Mahalo!
              </p>
            </div>

            <div className="flex justify-center">
              <Link
                href="mailto:catering@gotplatelunch.com"
                className={buttonVariants({ variant: "brand", size: "lg" })}
              >
                Send Email Inquiry
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
