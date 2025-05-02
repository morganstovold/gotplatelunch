import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";
import seamlessBg from "@/public/palm-pattern.jpg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | Got Plate Lunch",
  description: "Sorry, the page you're looking for isn't on our menu.",
};

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen relative">
      <Image
        src={seamlessBg}
        alt="Palm Pattern"
        fill
        className="absolute inset-0 top-0 opacity-10 h-full bg-repeat bg-center bg-cover -z-1"
      />
      
      <div className="container max-w-4xl py-20 flex flex-col items-center text-center z-10">
        <div className="relative mb-8">
          <h1 className="text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500 mb-2">
            404
          </h1>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-red-500 to-orange-500 rounded-full"></div>
        </div>
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Oops! Page Not Found
        </h2>
        
        <p className="text-xl text-gray-700 mb-12 max-w-2xl">
          Looks like this dish isn't on our menu! The page you're looking for has been removed, 
          renamed, or is temporarily unavailable.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <Button asChild size="lg" variant="brand" className="rounded-full">
            <Link href="/">
              Back to Home
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full">
            <Link href="/menu">
              See Our Menu
            </Link>
          </Button>
        </div>
      </div>
      
      <div className="w-full mt-auto">
        <Footer />
      </div>
    </main>
  );
} 