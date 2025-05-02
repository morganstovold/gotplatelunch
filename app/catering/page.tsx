import { Footer } from "@/components/footer";
import Image from "next/image";
import seamlessBg from "@/public/palm-pattern.jpg";
import { CateringHero } from "./_components/Hero";
import { CateringOptions } from "./_components/Options";
import { CateringContact } from "./_components/Contact";

export default function CateringPage() {
  return (
    <main className="flex flex-col items-center relative">
      <Image
        src={seamlessBg}
        alt="Palm Pattern"
        fill
        className="absolute inset-0 top-0 opacity-10 h-full bg-repeat bg-center bg-cover -z-1"
      />

      <CateringHero />
      <CateringOptions />
      <CateringContact />
      <Footer />
    </main>
  );
}
