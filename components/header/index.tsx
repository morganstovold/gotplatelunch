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
    label: "About Us",
    href: "/about",
    target: false,
  },
  {
    label: "Food Trucks",
    href: "food-trucks",
    target: false,
  },
  {
    label: "Catering",
    href: "catering",
    target: false
  },
  {
    label: "Order Online",
    href: "/about",
    target: false,
    variant: "primary"
  },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const scrollThreshold = 30;
    
    let rafId: number | null = null;
    let lastKnownScrollY = window.scrollY;
    
    const handleScroll = () => {
      lastKnownScrollY = window.scrollY;
      
      if (rafId) return;
      
      rafId = requestAnimationFrame(() => {
        const isScrolled = lastKnownScrollY > scrollThreshold;
        if (isScrolled !== scrolled) {
          setScrolled(isScrolled);
        }
        rafId = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [scrolled]);

  return (
    <header
      className={cn(
        "sticky container top-0 w-full z-50 py-4", 
        scrolled 
          ? "flex justify-center transition-transform duration-200 ease-out" 
          : "bg-background/90 transition-transform duration-150 ease-in"
      )}
    >
      <div
        className={cn(
          "flex items-center justify-between w-full py-4", 
          scrolled
            ? "rounded-full shadow-md bg-background/95 border border-border/40 max-w-screen-xl mx-auto px-4 transition-all duration-200 ease-out will-change-transform"
            : "bg-background/90 transition-all duration-150 ease-in will-change-transform"
        )}
      >
        <Link
          href="/"
          aria-label="Home page"
          className="flex items-center shrink-0 px-2"
        >
          <Logo />
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          <DesktopNav navItems={navItems} />
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
