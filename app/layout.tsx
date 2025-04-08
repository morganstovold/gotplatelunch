import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const isProduction = process.env.NEXT_PUBLIC_SITE_ENV === "production";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL!),
  title: {
    template: "%s | Got Plate Lunch",
    default: "Got Plate Lunch",
  },
  openGraph: {
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/images/og-image.jpg`,
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: !isProduction ? "noindex, nofollow" : "index, follow",
};

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <meta name="apple-mobile-web-app-title" content="Got Plate Lunch" />
      <link rel="icon" href="/favicon.ico" />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased overscroll-none",
          merriweather.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
