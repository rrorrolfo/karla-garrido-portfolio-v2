import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SocialMedia from "@/components/layout/SocialMedia";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://karlagarrido.com"),
  title: {
    default: "Karla Garrido | Actríz",
    template: "%s | Karla Garrido",
  },
  description:
    "Portafolio de la actríz México, Karla garrido. Su trabajo se enfoca en actuar en obras de teatro, cine y televisión",
  openGraph: {
    type: "profile",
    title: "Portafolio de la Actríz Karla Garrido",
    description:
      "Actríz Mexicana con trayectoria en teatro, televisión y cine. Puedes visitar su portafolio así como imágenes y descripciones de sus trabajo de actuación en teatro, cine , y televisión.",
    url: "/",
    siteName: "Karla Garrido",
    images: [{ url: "/og-image.jpg" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={raleway.variable}>
      <body>
        <Header />
        {children}
        <Footer />
        <SocialMedia />
      </body>
    </html>
  );
}
