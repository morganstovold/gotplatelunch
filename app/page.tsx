import { Hero } from "./_components/Hero";
import { AboutUs } from "./_components/AboutUs";
import { FoodShowcase } from "./_components/Food-Showcase";
import { BusinessInfo } from "./_components/BusinessInfo";
import { Testimonials } from "./_components/Testimonials";
import { CallToAction } from "./_components/CallToAction";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Hero />
      <AboutUs />
      <FoodShowcase />
      <BusinessInfo />
      <Testimonials />
      <CallToAction />
    </main>
  );
}
