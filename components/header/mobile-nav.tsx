import { useState } from "react";
import { motion } from "motion/react";
import { MenuIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

interface NavItem {
  label: string;
  href: string;
  target: boolean;
}

interface MobileNavProps {
  navItems: NavItem[];
}

export default function MobileNav({ navItems }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mr-6">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <motion.button
            className="p-2 rounded-md hover:bg-accent/50 transition-colors relative group"
            aria-label="Open menu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MenuIcon className="w-6 h-6 text-foreground transition-colors" />
          </motion.button>
        </SheetTrigger>
        <SheetContent
          side="right"
          className="border-l bg-background/95 backdrop-blur-lg"
        >
          <SheetHeader className="border-b">
            <SheetTitle className="text-xl">Menu</SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col gap-1 px-4">
            {navItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 + 0.1 }}
              >
                <Link
                  href={item.href}
                  target={item.target ? "_blank" : undefined}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 rounded-lg hover:bg-accent/30 transition-colors font-medium relative group"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
