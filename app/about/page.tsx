import { Footer } from "@/components/footer";
import Image from "next/image";
import seamlessBg from "@/public/palm-pattern.jpg";
import { AboutHero } from "./_components/Hero";
import { AboutFamily } from "./_components/Family";
import { AboutJourney } from "./_components/Journey";
import { AboutQuality } from "./_components/FoodQuality";
import { AboutPlateLunch } from "./_components/AboutGotPlateLunch";

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center relative">
      <Image
        src={seamlessBg}
        alt="Palm Pattern"
        fill
        className="absolute inset-0 top-0 opacity-10 h-full bg-repeat bg-center bg-cover -z-1"
      />

      <AboutHero />
      <AboutFamily />
      <AboutJourney />
      <AboutQuality />
      <AboutPlateLunch />
      <Footer />
    </main>
  );
}
