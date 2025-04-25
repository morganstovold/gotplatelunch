"use client";

import { Facebook, Instagram, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import { navItems } from "../header";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-16 relative overflow-hidden border-t-2 border-gray-800/50 bg-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 text-primary-foreground">
          {/* Logo & About */}
          <div className="md:col-span-1 lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col items-center md:items-start"
            >
              <h3 className="text-2xl font-bold mb-4 relative inline-block">
                GOT PLATE LUNCH
                <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-primary shadow-[0_0_6px_var(--primary),0_0_12px_var(--primary)]"></span>
              </h3>
              <p className="text-primary-foreground max-w-xs">
                Authentic Hawaiian plate lunches made with fresh ingredients and
                Aloha spirit by Uncle Myk & Aunty Jamie.
              </p>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1 lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6 relative inline-block">
                Quick Links
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full shadow-[0_0_6px_var(--primary),0_0_12px_var(--primary)]"></span>
              </h4>
              <ul className="space-y-3">
                {navItems.map((item, index) => (
                  <li key={index} className="group">
                    <Link
                      href={item.href}
                      className="text-primary-foreground hover:text-primary transition-colors duration-200 relative"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1 lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6 relative inline-block">
                Contact Us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full shadow-[0_0_6px_var(--primary),0_0_12px_var(--primary)]"></span>
              </h4>
              <address className="text-primary-foreground not-italic space-y-3">
                <p className="flex items-start">
                  <span>
                    810 West 9th St.
                    <br />
                    Benicia, CA 94510
                  </span>
                </p>
                <p className="flex items-start">
                  <span>Phone: (707) 745-4751</span>
                </p>
                <p className="flex items-start">
                  <span>Email: gotplatelunch@gmail.com</span>
                </p>
              </address>
            </motion.div>
          </div>

          {/* Hours */}
          <div className="md:col-span-1 lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6 relative inline-block">
                Hours
                <span
                  className="absolute -bottom-1 left-0 w-8 h-0.5 bg-yellow-400"
                  style={{
                    boxShadow:
                      "0 0 6px #F0B222, 0 0 12px rgba(240, 178, 34, 0.6)",
                  }}
                ></span>
              </h4>
              <div className="space-y-2">
                <p className="flex justify-between">
                  <span>Mon - Thurs:</span>
                  <span>11AM - 8PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Fri - Sat:</span>
                  <span>11AM - 9PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Sun:</span>
                  <span>12PM - 7PM</span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="mt-16 pt-8 border-t-2 border-gray-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-6 md:mb-0"
            >
              <p className="text-gray-500 text-sm">
                © {currentYear} Got Plate Lunch. All rights reserved.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex space-x-4"
            >
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="group p-2 rounded-full transition-all duration-200 hover:bg-yellow-400/10"
                  aria-label={`Social media link ${i + 1}`}
                >
                  <Icon className="w-5 h-5 text-gray-400 group-hover:text-yellow-400 transition-colors duration-200" />
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
