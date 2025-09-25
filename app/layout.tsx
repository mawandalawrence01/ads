import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppFloat from "@/components/whatsapp-float";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CyberAds - Your One-Stop Cyber & Stationery Hub in Changamwe",
  description: "CyberAds in Changamwe, Mombasa offers internet browsing, printing, photocopying, scanning, lamination, typing, stationery sales, computer accessories, and M-Pesa services. Affordable, reliable, and convenient.",
  keywords: "cyber café Changamwe, printing services Changamwe, stationery shop Mombasa, internet café Mombasa, M-Pesa services, photocopying, scanning, lamination",
  alternates: {
    canonical: "https://cyberads.co.ke",
  },
  openGraph: {
    title: "CyberAds - Your One-Stop Cyber & Stationery Hub in Changamwe",
    description: "Affordable and reliable cyber café, printing, and stationery services in Changamwe, Mombasa.",
    url: "https://cyberads.co.ke",
    siteName: "CyberAds",
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourhandle", // optional if you have Twitter
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <WhatsAppFloat />
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "CyberAds",
      image: "https://ads-changamwe-services.vercel.app/logo.png", // replace with actual logo
      url: "https://ads-changamwe-services.vercel.app",
      telephone: "+254123456789",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Changamwe",
        addressLocality: "Mombasa",
        addressCountry: "KE",
      },
      sameAs: [
        "https://www.facebook.com/yourpage",
        "https://twitter.com/yourhandle"
      ]
    }),
  }}
/>

      </body>
    </html>
  );
}
