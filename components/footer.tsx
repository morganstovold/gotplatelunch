"use client";

import Link from "next/link";
  import { motion } from "motion/react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Instagram",
      href: "https://instagram.com/gotplatelunch",
      icon: "instagram",
    },
    {
      name: "Facebook",
      href: "https://facebook.com/gotplatelunch",
      icon: "facebook",
    },
    {
      name: "Twitter",
      href: "https://twitter.com/gotplatelunch",
      icon: "twitter",
    },
  ];

  return (
    <footer className="relative w-full overflow-hidden">
      <div className="relative w-full">
        <svg
          className="w-full h-auto"
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0L48 8C96 16 192 32 288 42.7C384 53 480 59 576 58.7C672 59 768 53 864 42.7C960 32 1056 16 1152 10.7C1248 5 1344 11 1392 13.3L1440 16V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V0Z"
            className="fill-amber-900/90"
          />
        </svg>
      </div>

      <div className="bg-gradient-to-b from-amber-900/90 from-0% to-neutral-950/95 backdrop-blur-md to-90% pt-8 pb-12 relative overflow-hidden">
        <motion.div
          className="absolute top-[10%] left-[5%] w-48 h-48 rounded-full bg-gradient-to-r from-orange-400/10 to-amber-500/10 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-[10%] right-[5%] w-56 h-56 rounded-full bg-gradient-to-r from-teal-400/10 to-cyan-500/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="space-y-4">
              <div className="h-14 flex items-center">
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-500">
                  Got Plate Lunch
                </span>
              </div>
              <p className="text-blue-100/80 text-sm max-w-xs">
                Authentic Hawaiian plate lunches made with Aloha spirit.
                Bringing the taste of the islands to your neighborhood since
                2011.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 hover:from-amber-500/30 hover:to-orange-500/30 flex items-center justify-center group transition-all duration-300"
                  >
                    <span className="text-amber-400 group-hover:text-amber-300 transition-colors">
                      {renderSocialIcon(link.icon)}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4">Explore</h3>
              <ul className="space-y-2">
                <FooterLink href="/">Home</FooterLink>
                <FooterLink href="/menu">Menu</FooterLink>
                <FooterLink href="/locations">Locations</FooterLink>
                <FooterLink href="/about">About Us</FooterLink>
                <FooterLink href="/catering">Catering</FooterLink>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4">Visit Us</h3>
              <address className="not-italic text-blue-100/80 space-y-2">
                <p>123 Aloha Street</p>
                <p>Benicia, CA 94510</p>
                <p>Phone: (555) 123-4567</p>
                <p>Email: info@gotplatelunch.com</p>
              </address>
            </div>
          </div>

          <div className="border-t border-blue-700/50 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200/60 text-sm">
              &copy; {currentYear} Got Plate Lunch. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-blue-200/60 hover:text-amber-400 text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-blue-200/60 hover:text-amber-400 text-sm transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }) {
  return (
    <li>
      <Link
        href={href}
        className="text-blue-100/80 hover:text-amber-400 transition-colors relative group"
      >
        <span>{children}</span>
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-300 group-hover:w-full"></span>
      </Link>
    </li>
  );
}

function renderSocialIcon(icon) {
  switch (icon) {
    case "instagram":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      );
    case "facebook":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      );
    case "twitter":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
        </svg>
      );
    default:
      return null;
  }
}
