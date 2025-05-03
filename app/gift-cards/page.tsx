import { Footer } from "@/components/footer";
import Image from "next/image";
import seamlessBg from "@/public/palm-pattern.jpg";
import { GiftCardHero } from "./_components/Hero";
import { GiftCardOptions } from "./_components/Options";
import { GradPromo } from "./_components/GradPromo";
import { CallToAction } from "../_components/CallToAction";

export default function GiftCardPage() {
  return (
    <main className="flex flex-col items-center relative">
      <Image
        src={seamlessBg}
        alt="Palm Pattern"
        fill
        className="absolute inset-0 top-0 opacity-10 h-full bg-repeat bg-center bg-cover -z-1"
      />

      <GiftCardHero />
      <GiftCardOptions />
      <GradPromo />
      <CallToAction />
      <Footer />
    </main>
  );
} 