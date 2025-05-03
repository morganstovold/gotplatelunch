import type { Metadata, Viewport } from "next";
import { Merriweather_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const merriweatherSans = Merriweather_Sans({
  variable: "--font-merriweather-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Got Plate Lunch | Authentic Hawaiian Cuisine",
  description: "Experience authentic Hawaiian cuisine at Got Plate Lunch. Enjoy traditional plate lunches, fresh poke, and island favorites made with Aloha.",
  keywords: ["Hawaiian food", "plate lunch", "Hawaiian cuisine", "authentic Hawaiian", "poke", "Hawaii restaurant", "kalua pork", "loco moco"],
  authors: [{ name: "Got Plate Lunch" }],
  creator: "Got Plate Lunch",
  publisher: "Got Plate Lunch",
  openGraph: {
    title: "Got Plate Lunch | Authentic Hawaiian Cuisine",
    description: "Experience authentic Hawaiian cuisine at Got Plate Lunch. Enjoy traditional plate lunches, fresh poke, and island favorites made with Aloha.",
    url: "/",
    siteName: "Got Plate Lunch",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Got Plate Lunch | Authentic Hawaiian Cuisine",
    description: "Experience authentic Hawaiian cuisine at Got Plate Lunch. Enjoy traditional plate lunches, fresh poke, and island favorites made with Aloha.",
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/manifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

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
        <Header />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
