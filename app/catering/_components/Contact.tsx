"use client";

import { buttonVariants } from "@/components/ui/button";
import { motion } from "motion/react";
import Link from "next/link";

export function CateringContact() {
  return (
    <section className="relative w-full pb-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden"
        >
          <div className="p-8 md:p-12">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6 relative inline-block">
                Request Catering Information
                <span
                  className="absolute -bottom-1 left-0 right-0 mx-auto w-12 h-0.5 bg-yellow-400"
                  style={{
                    boxShadow:
                      "0 0 6px #F0B222, 0 0 12px rgba(240, 178, 34, 0.6)",
                  }}
                ></span>
              </h2>

              <p className="text-lg text-primary-foreground mb-4">
                For catering inquiries, please email us at:
              </p>
              <a
                href="mailto:catering@gotplatelunch.com"
                className="text-xl font-bold text-yellow-600 hover:text-yellow-700 transition-colors"
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
                className={buttonVariants({ variant: "brand" })}
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
