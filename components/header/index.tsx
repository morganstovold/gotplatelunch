"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { cn } from "@/lib/utils";
import Logo from "@/components/logo";
import MobileNav from "./mobile-nav";
import DesktopNav from "./desktop-nav";
import Link from "next/link";

export const navItems = [
  {
    label: "Home",
    href: "/",
    target: false,
  },
  {
    label: "About",
    href: "/about",
    target: false,
  },
  {
    label: "Food Truck",
    href: "/food-truck",
    target: false,
  },
  {
    label: "Catering",
    href: "/catering",
    target: false,
  },
  {
    label: "Locations",
    href: "/locations",
    target: false,
  },
  {
    label: "Menu",
    href: "/menu",
    target: false,
  },
  {
    label: "Gift Cards",
    href: "/gift-cards",
    target: false,
  },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 50], [1, 0.98]);

  useEffect(() => {
    const scrollThreshold = 10;

    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const handleScroll = () => {
      if (timeoutId) return;

      timeoutId = setTimeout(() => {
        const isScrolled = window.scrollY > scrollThreshold;
        if (isScrolled !== scrolled) {
          setScrolled(isScrolled);
        }
        timeoutId = null;
      }, 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [scrolled]);

  return (
    <motion.header
      style={{ opacity: headerOpacity }}
      className={cn(
        "sticky top-0 w-full z-50 py-4",
        scrolled
          ? "flex justify-center transition-transform duration-200 ease-out"
          : "transition-transform duration-100 ease-in"
      )}
    >
      <div className="container mx-auto">
        <motion.div
          className={cn(
            "flex items-center justify-between w-full py-4 border-2 rounded-xl",
            scrolled
              ? "shadow-md bg-background/95 transition-all duration-200 ease-out will-change-transform"
              : "transition-all duration-100 ease-in will-change-transform border-transparent"
          )}
        >
          <motion.div transition={{ duration: 0.2 }}>
            <Link
              href="/"
              aria-label="Home page"
              className="flex items-center shrink-0 px-2"
            >
              <Logo />
            </Link>
          </motion.div>

          <div className="hidden lg:flex items-center gap-8">
            <DesktopNav navItems={navItems} />
          </div>

          <div className="flex items-center lg:hidden">
            <MobileNav navItems={navItems} />
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
}
