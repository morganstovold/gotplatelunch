import { Footer } from "@/components/footer";
import Image from "next/image";
import seamlessBg from "@/public/palm-pattern.jpg";
import { MenuHero } from "./_components/Hero";
import { MenuItems } from "./_components/Items";
import { CallToAction } from "../_components/CallToAction";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu | Got Plate Lunch | Authentic Hawaiian Cuisine",
  description:
    "Explore our selection of authentic Hawaiian cuisine made with Aloha. From traditional plate lunches to fresh poke, discover the taste of Hawaii at Got Plate Lunch.",
  keywords: [
    "Hawaiian menu",
    "plate lunch menu",
    "Hawaiian food",
    "loco moco",
    "kalua pork",
    "spam musubi",
    "poke",
    "chicken katsu",
  ],
  alternates: {
    canonical: "/menu",
  },
  openGraph: {
    title: "Menu | Got Plate Lunch | Authentic Hawaiian Cuisine",
    description:
      "Explore our selection of authentic Hawaiian cuisine made with Aloha. From traditional plate lunches to fresh poke, discover the taste of Hawaii at Got Plate Lunch.",
    url: "/menu",
    images: [
      {
        url: "/menu/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Menu - Got Plate Lunch - Authentic Hawaiian Cuisine",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Menu | Got Plate Lunch | Authentic Hawaiian Cuisine",
    description:
      "Explore our selection of authentic Hawaiian cuisine made with Aloha. From traditional plate lunches to fresh poke, discover the taste of Hawaii at Got Plate Lunch.",
    images: ["/menu/opengraph-image"],
  },
};

export default function MenuPage() {
  return (
    <main className="flex flex-col items-center relative">
      <Image
        src={seamlessBg}
        alt="Palm Pattern"
        fill
        className="absolute inset-0 top-0 opacity-10 h-full bg-repeat bg-center bg-cover -z-1"
      />

      <MenuHero />
      <MenuItems />
      <CallToAction />
      <Footer />
    </main>
  );
}
