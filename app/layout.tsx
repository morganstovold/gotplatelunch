import type { Metadata, Viewport } from "next";
import { Merriweather_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";

const merriweatherSans = Merriweather_Sans({
  variable: "--font-merriweather-sans",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://gotplatelunch.com"),
  title: "Got Plate Lunch | Authentic Hawaiian Cuisine",
  description: "Experience authentic Hawaiian cuisine at Got Plate Lunch. Enjoy traditional plate lunches, fresh poke, and island favorites made with Aloha.",
  keywords: ["Hawaiian food", "plate lunch", "Hawaiian cuisine", "authentic Hawaiian", "poke", "Hawaii restaurant", "kalua pork", "loco moco"],
  authors: [{ name: "Got Plate Lunch" }],
  creator: "Got Plate Lunch",
  publisher: "Got Plate Lunch",
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
    url: true,
  },
  category: "Food & Drink",
  openGraph: {
    title: "Got Plate Lunch | Authentic Hawaiian Cuisine",
    description: "Experience authentic Hawaiian cuisine at Got Plate Lunch. Enjoy traditional plate lunches, fresh poke, and island favorites made with Aloha.",
    url: "/",
    siteName: "Got Plate Lunch",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Got Plate Lunch - Authentic Hawaiian Cuisine",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Got Plate Lunch | Authentic Hawaiian Cuisine",
    description: "Experience authentic Hawaiian cuisine at Got Plate Lunch. Enjoy traditional plate lunches, fresh poke, and island favorites made with Aloha.",
    images: ["/opengraph-image"],
    creator: "@gotplatelunch",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add Google verification if you have it
    // google: "your-google-site-verification",
  },
  manifest: "/manifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${merriweatherSans.className} antialiased min-h-screen bg-background overscroll-none relative`}
      >
        <Script
          id="schema-restaurant"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Restaurant",
                  name: "Got Plate Lunch - 9th St Restaurant",
                  description: "Authentic Hawaiian cuisine including traditional plate lunches, fresh poke, and island favorites.",
                  image: "https://gotplatelunch.com/opengraph-image",
                  url: "https://gotplatelunch.com",
                  telephone: "+1-707-745-4751",
                  servesCuisine: "Hawaiian",
                  priceRange: "$$",
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
                  hasMenu: "https://gotplatelunch.com/menu",
                  sameAs: [
                    "https://www.facebook.com/gotplatelunch",
                    "https://www.instagram.com/gotplatelunch"
                  ],
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
                  url: "https://gotplatelunch.com/locations#express",
                  telephone: "+1-707-745-4751",
                  servesCuisine: "Hawaiian",
                  priceRange: "$$",
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
                  hasMenu: "https://gotplatelunch.com/menu",
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
              ]
            })
          }}
        />
        <Header />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
