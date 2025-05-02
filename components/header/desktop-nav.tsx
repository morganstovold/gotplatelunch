import { motion } from "motion/react";
import Link from "next/link";

interface NavItem {
  label: string;
  href: string;
  target: boolean;
}

interface DesktopNavProps {
  navItems: NavItem[];
}

export default function DesktopNav({ navItems }: DesktopNavProps) {
  return (
    <nav className="flex items-center">
      {navItems.map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
          className="mr-6"
        >
          <Link
            href={item.href}
            target={item.target ? "_blank" : undefined}
            className="relative px-2 py-1 text-foreground hover:text-foreground transition-colors group"
          >
            {item.label}
            <motion.span
              className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F0B222] transition-all duration-300"
              layoutId={`underline-${item.label}`}
            />
          </Link>
        </motion.div>
      ))}
    </nav>
  );
}
