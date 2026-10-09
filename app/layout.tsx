import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

// Variable font; headings use the width axis (font-stretch / "wdth").
const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  style: ["normal", "italic"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gorush.bike"),
  title: {
    default: "GoRush.bike | Fast local delivery by bike",
    template: "%s | GoRush.bike",
  },
  description:
    "Send parcels, documents, food and essentials across town with GoRush. Verified riders, live tracking and PIN-protected handover.",
  openGraph: {
    images: "/img/gorush-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#FF5A1F",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={archivo.variable}>
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
