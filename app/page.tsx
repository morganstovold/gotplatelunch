import { Hero } from "./_components/Hero";
import { AboutUs } from "./_components/AboutUs";
import { FoodShowcase } from "./_components/Food-Showcase";
import { BusinessInfo } from "./_components/BusinessInfo";
import { Testimonials } from "./_components/Testimonials";
import { CallToAction } from "./_components/CallToAction";
import { ChefQuote } from "./_components/ChefQuote";
import { Footer } from "../components/footer";
import Image from "next/image";
import seamlessBg from "@/public/palm-pattern.jpg";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Got Plate Lunch | Authentic Hawaiian Cuisine | Home",
  description: "Experience the flavors of Hawaii at Got Plate Lunch. Authentic Hawaiian plate lunches, fresh poke, and island favorites made with the spirit of Aloha.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Got Plate Lunch | Authentic Hawaiian Cuisine | Home",
    description: "Experience the flavors of Hawaii at Got Plate Lunch. Authentic Hawaiian plate lunches, fresh poke, and island favorites made with the spirit of Aloha.",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Got Plate Lunch | Authentic Hawaiian Cuisine | Home",
    description: "Experience the flavors of Hawaii at Got Plate Lunch. Authentic Hawaiian plate lunches, fresh poke, and island favorites made with the spirit of Aloha.",
  },
};

export default function HomePage() {
  return (
    <main className="flex flex-col items-center relative">
      <Image
        src={seamlessBg}
        alt="Palm Pattern"
        fill
        className="absolute inset-0 top-0 opacity-10 h-full bg-repeat bg-center bg-cover -z-1"
      />
      
      <Hero />
      <ChefQuote />
      <AboutUs />
      <FoodShowcase />
      <BusinessInfo />
      <Testimonials />
      <CallToAction />
      <Footer />
    </main>
  );
}
