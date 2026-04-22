import type { Metadata } from "next";
import { Inter, Crimson_Text } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400"],
  display: "swap",
});

const crimson = Crimson_Text({
  subsets: ["latin"],
  variable: "--font-itc",
  weight: ["400", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Leonardo Miranda — Designer",
  description: "Creative work focused on design, motion and digital products.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${crimson.variable}`}>
      <body className="font-sans bg-canvas">
        <Header />
        {children}
      </body>
    </html>
  );
}
