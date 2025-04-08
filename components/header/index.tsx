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
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Check initial scroll position
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={cn(
        "sticky top-0 w-full z-50 transition-all duration-200 ease-in-out",
        scrolled
          ? "shadow-md bg-background/95 border-b border-border/40 translate-y-0.5"
          : "bg-background/90"
      )}
    >
      <div
        className={cn(
          "container flex items-center justify-between transition-all duration-200",
          scrolled ? "h-12" : "h-16"
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
