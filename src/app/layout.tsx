import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LocaleProvider } from "@/components/provider/LocaleProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Juan Cardona | Full Stack Developer Portfolio",
  description: "Portfolio profesional de Juan Sebastián Cardona - Full Stack Developer especializado en React, Next.js, Node.js y TypeScript. Descubre mis proyectos, experiencia y servicios de desarrollo web.",
  keywords: [
    "Juan Cardona",
    "Full Stack Developer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Portfolio",
    "Web Developer",
    "Software Engineer",
    "Desarrollador Web",
    "Frontend Developer",
    "Backend Developer",
    "Barranquilla Colombia",
    "Riwi"
  ],
  authors: [{ name: "Juan Cardona" }],
  creator: "Juan Cardona",
  publisher: "Juan Cardona",
  metadataBase: new URL("https://juan.devpoint.app"),
  alternates: {
    canonical: "/",
    languages: {
      "es": "/es",
      "en": "/en",
    },
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    alternateLocale: ["en_US"],
    url: "https://juan.devpoint.app",
    title: "Juan Cardona | Full Stack Developer Portfolio",
    description: "Portfolio profesional de Juan Sebastián Cardona - Full Stack Developer especializado en React, Next.js, Node.js y TypeScript. Descubre mis proyectos, experiencia y servicios de desarrollo web.",
    siteName: "Juan Cardona Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Juan Cardona - Full Stack Developer",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png" },
    ],
  },
  manifest: "/site.webmanifest",
  category: "technology",
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
        <LocaleProvider>
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
}
