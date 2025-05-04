import { Footer } from "@/components/footer";
import Image from "next/image";
import seamlessBg from "@/public/palm-pattern.jpg";
import { LocationsHero } from "./_components/Hero";
import { Locations } from "./_components/Locations";
import { CallToAction } from "../_components/CallToAction";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Locations | Got Plate Lunch | Authentic Hawaiian Cuisine",
  description: "Visit Got Plate Lunch at our convenient locations in Benicia. Enjoy authentic Hawaiian cuisine with beautiful waterfront views.",
  keywords: ["Hawaiian restaurant locations", "Benicia restaurant", "Got Plate Lunch locations", "Hawaiian food Benicia", "plate lunch Benicia"],
  alternates: {
    canonical: "/locations",
  },
  openGraph: {
    title: "Locations | Got Plate Lunch | Authentic Hawaiian Cuisine",
    description: "Visit Got Plate Lunch at our convenient locations in Benicia. Enjoy authentic Hawaiian cuisine with beautiful waterfront views.",
    url: "/locations",
    images: [
      {
        url: "/api/og?title=Our+Locations&subtitle=Visit+Us+Today",
        width: 1200,
        height: 630,
        alt: "Locations - Got Plate Lunch",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Locations | Got Plate Lunch | Authentic Hawaiian Cuisine",
    description: "Visit Got Plate Lunch at our convenient locations in Benicia. Enjoy authentic Hawaiian cuisine with beautiful waterfront views.",
    images: ["/api/og?title=Our+Locations&subtitle=Visit+Us+Today"],
  },
};

export default function LocationsPage() {
  // Location data for structured data
  const locationsData = [
    {
      "@type": "Restaurant",
      name: "Got Plate Lunch - 9th St Restaurant",
      description: "Our flagship restaurant with full menu options and dine-in seating.",
      image: "https://gotplatelunch.com/9th-street-location.jpg",
      address: {
        "@type": "PostalAddress",
        streetAddress: "810 West 9th St",
        addressLocality: "Benicia",
        addressRegion: "CA",
        postalCode: "94510",
        addressCountry: "US"
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "38.058204367871426",
        longitude: "-122.17380250489956"
      },
      url: "https://gotplatelunch.com/locations#restaurant",
      telephone: "+1-707-745-4751",
      servesCuisine: "Hawaiian",
      priceRange: "$$",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday"],
          opens: "00:00",
          closes: "00:00",
          description: "Closed"
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "11:00",
          closes: "14:30"
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "16:00",
          closes: "20:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Saturday"],
          opens: "10:00",
          closes: "20:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Sunday"],
          opens: "10:00",
          closes: "15:00"
        }
      ],
      specialOpeningHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        description: "Operating dates and hours are subject to change based on the needs of the business"
      }
    },
    {
      "@type": "Restaurant",
      name: "Got Plate Lunch - Bayshore Rd Express",
      description: "Quick service express location for convenient takeout and delivery.",
      image: "https://gotplatelunch.com/bayshore-location.jpg",
      address: {
        "@type": "PostalAddress",
        streetAddress: "3200 Bayshore Rd #2",
        addressLocality: "Benicia",
        addressRegion: "CA",
        postalCode: "94510",
        addressCountry: "US"
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "38.065743",
        longitude: "-122.133054"
      },
      url: "https://gotplatelunch.com/locations#express",
      telephone: "+1-707-745-4751",
      servesCuisine: "Hawaiian",
      priceRange: "$$",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "10:00",
          closes: "14:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Saturday", "Sunday"],
          opens: "00:00",
          closes: "00:00",
          description: "Closed"
        }
      ],
      specialOpeningHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        description: "Operating dates and hours are subject to change based on the needs of the business"
      }
    }
  ];

  return (
    <main className="flex flex-col items-center relative">
      <Script
        id="schema-locations"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": locationsData
          })
        }}
      />
      <Image
        src={seamlessBg}
        alt="Palm Pattern"
        fill
        className="absolute inset-0 top-0 opacity-10 h-full bg-repeat bg-center bg-cover -z-1"
      />

      <LocationsHero />
      <Locations />
      <CallToAction />
      <Footer />
    </main>
  );
}
