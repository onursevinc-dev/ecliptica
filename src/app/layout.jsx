import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import FireFliesBackground from "@/components/FireFliesBackground";
import StarBackground from "@/components/StarBackground";
import Sound from "@/components/Sound";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Ecliptica",
  description: "This project is my portfolio, Powered by OnurSevinc",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body
        className={clsx(
          inter.variable,
          "bg-background text-foreground font-inter"
        )}
      >
        <Analytics/>
        {children}
        <StarBackground />
        <FireFliesBackground />
        <Sound />
        <div id="my-modal" />
      </body>
    </html>
  );
}
