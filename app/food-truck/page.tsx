import { Footer } from "@/components/footer";
import Image from "next/image";
import seamlessBg from "@/public/palm-pattern.jpg";
import { FoodTruckHero } from "./_components/Hero";
import { FoodTruckLocations } from "./_components/Locations";
import { FoodTruckCTA } from "./_components/CallToAction";
import { FoodTruckSchedule } from "./_components/Schedule";

export default function FoodTruckPage() {
  return (
    <main className="flex flex-col items-center relative">
      <Image
        src={seamlessBg}
        alt="Palm Pattern"
        fill
        className="absolute inset-0 top-0 opacity-10 h-full bg-repeat bg-center bg-cover -z-1"
      />

      <FoodTruckHero />
      <FoodTruckLocations />
      <FoodTruckSchedule />
      <FoodTruckCTA />
      <Footer />
    </main>
  );
}
