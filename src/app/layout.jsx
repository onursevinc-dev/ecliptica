import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import FireFliesBackground from "@/components/FireFliesBackground";
import { StarBackground } from "@/components/StarBackground";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Ideaverse",
  description: "This project is my portfolio, Powered by OnurSevinc",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={clsx(inter.variable, "bg-background text-foreground")}>
        {/* <StarBackground /> */}
        <FireFliesBackground />
        {children}
      </body>
    </html>
  );
}
