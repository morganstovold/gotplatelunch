"use client";

import Link from "next/link";
import Logo from "@/components/logo";
import MobileNav from "@/components/header/mobile-nav";
import DesktopNav from "@/components/header/desktop-nav";
import { ModeToggle } from "@/components/menu-toggle";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  {
    label: "Home",
    href: "/",
    target: false,
  },
  {
    label: "Blog",
    href: "/blog",
    target: false,
  },
  {
    label: "About",
    href: "/about",
    target: false,
  },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Use a higher threshold to prevent triggering on small scrolls
    const scrollThreshold = 30;
    
    // Add debounce to prevent rapid state changes
    let timeoutId: NodeJS.Timeout | null = null;
    
    const handleScroll = () => {
      if (timeoutId) return; // Skip if we're in debounce period
      
      timeoutId = setTimeout(() => {
        const isScrolled = window.scrollY > scrollThreshold;
        if (isScrolled !== scrolled) {
          setScrolled(isScrolled);
        }
        timeoutId = null;
      }, 10); // Small timeout for smoother transitions
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Check initial scroll position
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [scrolled]);

  return (
    <header
      className={cn(
        "sticky container top-0 w-full z-50 transition-all duration-300 ease-out py-4", // Increased duration and changed easing
        scrolled ? "flex justify-center" : "bg-background/90"
      )}
    >
      <div
        className={cn(
          "flex items-center justify-between transition-all duration-300 ease-out w-full", // Increased duration and changed easing
          scrolled
            ? "rounded-full shadow-md bg-background/95 border border-border/40 max-w-screen-xl mx-auto px-4 py-2"
            : "bg-background/90 py-2"
        )}
      >
        <Link
          href="/"
          aria-label="Home page"
          className="flex items-center shrink-0"
        >
          <Logo />
        </Link>

        <div className="hidden lg:flex gap-6 items-center">
          <DesktopNav navItems={navItems} />
          <div className="border-l border-border/40 h-6 mx-2" />
          <ModeToggle />
        </div>

        <div className="flex items-center lg:hidden">
          <ModeToggle />
          <MobileNav navItems={navItems} />
        </div>
      </div>
    </header>
  );
}
