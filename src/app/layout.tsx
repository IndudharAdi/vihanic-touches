import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

export const metadata = {
  title: "Vihanic Touches",
  description: "A subtle ecommerce experience for modern essentials."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} bg-[color:var(--background)] text-[color:var(--foreground)] antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1 pb-16 pt-10">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
