import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import StickyPlayer from "@/components/StickyPlayer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Radio Madagasikara ho an'i Kristy - 102.4 FM RMK",
  description: "Christian Radio Station in Madagascar - Broadcasting faith, hope, and love across the island nation. Listen live to inspiring programs, music, and spiritual content.",
  keywords: "radio, madagascar, christian, faith, 102.4 FM, RMK, spiritual, music, programs",
  authors: [{ name: "Radio Madagasikara ho an'i Kristy" }],
  openGraph: {
    title: "Radio Madagasikara ho an'i Kristy - 102.4 FM RMK",
    description: "Christian Radio Station in Madagascar - Broadcasting faith, hope, and love",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased bg-dark-900 text-gray-950 dark:text-white`}
      >
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <StickyPlayer />
      </body>
    </html>
  );
}
