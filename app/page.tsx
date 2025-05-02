import { Hero } from "./_components/Hero";
import { AboutUs } from "./_components/AboutUs";
import { FoodShowcase } from "./_components/Food-Showcase";
import { BusinessInfo } from "./_components/BusinessInfo";
import { Testimonials } from "./_components/Testimonials";
import { CallToAction } from "./_components/CallToAction";
import { Footer } from "../components/footer";
import Image from "next/image";
import seamlessBg from "@/public/palm-pattern.jpg";

export default function Home() {
  return (
    <main className="flex flex-col items-center relative">
      <Image
        src={seamlessBg}
        alt="Palm Pattern"
        fill
        className="absolute inset-0 top-0 opacity-10 h-full bg-repeat bg-center bg-cover -z-1"
      />
      <Hero />
      <AboutUs />
      <FoodShowcase />
      <BusinessInfo />
      <Testimonials />
      <CallToAction />
      <Footer />
    </main>
  );
}
