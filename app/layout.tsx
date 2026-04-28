import type { Metadata } from "next";
import { Bodoni_Moda, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const BASE_URL = "https://lokilegal.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/icon.png", type: "image/png" }],
    shortcut: ["/icon.png"],
  },
  title: {
    default: "DUE & DO — Firma de Abogados",
    template: "%s — DUE & DO",
  },
  description:
    "Diseño legal con visión estratégica. Compliance, due diligence, derecho penal corporativo, societario, tributario y cambiario en Colombia.",
  keywords: [
    "abogados Colombia",
    "firma de abogados Bogotá",
    "compliance",
    "due diligence",
    "derecho corporativo",
    "derecho penal empresarial",
    "derecho tributario",
    "derecho cambiario",
    "DUE & DO",
  ],
  authors: [{ name: "DUE & DO" }],
  openGraph: {
    title: "DUE & DO — Firma de Abogados",
    description:
      "Diseño legal con visión estratégica. Una firma que combina criterio, claridad y presencia contemporánea.",
    url: BASE_URL,
    siteName: "DUE & DO",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "/brand/logo.png",
        width: 800,
        height: 800,
        alt: "DUE & DO — Firma de Abogados",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DUE & DO — Firma de Abogados",
    description:
      "Diseño legal con visión estratégica. Compliance, due diligence y derecho corporativo en Colombia.",
    images: ["/brand/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${bodoni.variable} ${inter.variable}`}>
      <body className="antialiased bg-black text-white">
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
