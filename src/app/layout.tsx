import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import CustomCursor from "@/components/layout/CustomCursor";
import { ThemeProvider } from "@/components/layout/ThemeProvider";

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400"],
});

export const metadata: Metadata = {
  title: "Shri Varalakshmi — Premium B2B German Silver Pooja Items Showroom",
  description:
    "Explore the ultimate digital showroom of German Silver Pooja items, kalash, diyas, plates, and temple accessories by Shri Varalakshmi Jewellery and Metals, Kalaburagi.",
  keywords:
    "German Silver Pooja Items, Wholesale German Silver, Pooja Plates, Silver Diya, Kalash Wholesale, Temple Accessories, B2B Pooja items, Kalaburagi Jewellery, Shri Varalakshmi Gulbarga",
  metadataBase: new URL("https://shrivaralakshmi.com"),
  openGraph: {
    title: "Shri Varalakshmi — Premium B2B German Silver Pooja Items Showroom",
    description:
      "Prestige wholesale manufacturers of chiseled German Silver Pooja plates, lamps, kalash, and custom deities. Discover elite craftsmanship.",
    url: "https://shrivaralakshmi.com",
    siteName: "Shri Varalakshmi",
    images: [
      {
        url: "/images/Gemini_Generated_Image_5yu5d55yu5d55yu5.png",
        width: 1200,
        height: 630,
        alt: "Shri Varalakshmi Pooja Items Showroom",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shri Varalakshmi — Premium B2B German Silver Pooja Items Showroom",
    description:
      "Prestige wholesale manufacturers of chiseled German Silver Pooja plates, lamps, kalash, and custom deities.",
    images: ["/images/Gemini_Generated_Image_5yu5d55yu5d55yu5.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} h-full antialiased dark-theme`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <CustomCursor />
          <SmoothScroll>
            <Navbar />
            <main className="flex-grow pt-24">{children}</main>
            <Footer />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
