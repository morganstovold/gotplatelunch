import { Footer } from "@/components/footer";
import Image from "next/image";
import seamlessBg from "@/public/palm-pattern.jpg";
import { MenuHero } from "./_components/Hero";
import { MenuItems } from "./_components/Items";

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
      <Footer />
    </main>
  );
}
