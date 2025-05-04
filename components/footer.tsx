"use client";

import Link from "next/link";
import { Separator } from "./ui/separator";
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
      <div className="relative w-full -mb-0.5">
        <svg
          className="w-full h-auto"
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0L48 8C96 16 192 32 288 42.7C384 53 480 59 576 58.7C672 59 768 53 864 42.7C960 32 1056 16 1152 10.7C1248 5 1344 11 1392 13.3L1440 16V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V0Z"
            className="fill-neutral-950"
          />
        </svg>
      </div>

      <div className="bg-neutral-950 backdrop-blur-md to-90% pt-8 pb-12 relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div className="space-y-4">
              <div className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-400">
                Got Plate Lunch
              </div>
              <p className="text-red-100/90 text-sm max-w-xs">
                Authentic Hawaiian plate lunches made with Aloha spirit.
                Bringing the taste of the islands to your neighborhood since
                2011.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 hover:from-red-500/30 hover:to-orange-500/30 flex items-center justify-center group transition-all duration-300"
                  >
                    <span className="text-red-400 group-hover:text-red-300 transition-colors">
                      {renderSocialIcon(link.icon)}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-6 sm:mt-0">
              <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-400 font-bold mb-4">
                Explore
              </h3>
              <ul className="grid grid-cols-2 sm:grid-cols-1 gap-y-2">
                <FooterLink href="/">Home</FooterLink>
                <FooterLink href="/about">About Us</FooterLink>
                <FooterLink href="/food-truck">Food Truck</FooterLink>
                <FooterLink href="/catering">Catering</FooterLink>
                <FooterLink href="/locations">Location</FooterLink>
                <FooterLink href="/menu">Menu</FooterLink>
                <FooterLink href="/gift-cards">Gift Cards</FooterLink>
              </ul>
            </div>

            <div className="space-y-4 mt-6 lg:mt-0">
              <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-400 font-bold mb-4">
                Find Us
              </h3>
              <div className="text-red-100/90 space-y-3">
                <div>
                  <p className="font-semibold">Multiple Locations:</p>
                  <ul className="mt-2 space-y-1">
                    <li>9th St Restaurant, Benicia</li>
                    <li>Bayshore Rd Express, Benicia</li>
                    <li>Food Truck - Various Locations</li>
                  </ul>
                  <Link 
                    href="/locations" 
                    className="inline-block mt-3 text-sm bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-400 hover:opacity-80"
                  >
                    View All Locations →
                  </Link>
                </div>
                <p>Phone: (707) 745-4751</p>
                <p>Email: info@gotplatelunch.com</p>
              </div>
            </div>
          </div>

          <Separator className="my-6 sm:my-8 bg-red-100/30" />

          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex flex-col sm:items-start">
              <p className="text-red-100/90 text-xs sm:text-sm">
                &copy; {currentYear} Got Plate Lunch. All rights reserved.
              </p>
              <p className="text-red-100/70 text-xs mt-1">
                Website by <a href="https://morgannstovold.com" target="_blank" rel="noopener noreferrer" className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400 hover:opacity-80 transition-opacity">Morgan Stovold</a>
              </p>
            </div>
            <div className="flex space-x-4 sm:space-x-6 mt-4 sm:mt-0">
              <Link
                href="/privacy"
                className="text-xs sm:text-sm transition-colors text-red-100 hover:text-transparent bg-clip-text bg-gradient-to-r from-red-100 to-red-100 hover:from-red-400 hover:to-orange-400"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-xs sm:text-sm transition-colors text-red-100 hover:text-transparent bg-clip-text bg-gradient-to-r from-red-100 to-red-100 hover:from-red-400 hover:to-orange-400"
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

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="relative transition-colors group bg-clip-text text-transparent bg-gradient-to-r from-red-100 to-red-100 hover:from-red-400 hover:to-orange-400"
      >
        {children}
        <motion.span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-400 to-orange-400 transition-all duration-300 group-hover:w-full" />
      </Link>
    </li>
  );
}

function renderSocialIcon(icon: string) {
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
          className="w-4 h-4 sm:w-5 sm:h-5"
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
          className="w-4 h-4 sm:w-5 sm:h-5"
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
          className="w-4 h-4 sm:w-5 sm:h-5"
        >
          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
        </svg>
      );
    default:
      return null;
  }
}
