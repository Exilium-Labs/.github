import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import type React from "react";
import ThemeSwitcher from "../components/ThemeSwitcher";
import LoadingSpinner from "../components/LoadingSpinner";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FIXIFY",
  description: "AI-Powered Fraud Detection on Solana",
  generator: "v0.dev",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <script src="/analytics.js" defer></script>
      </head>
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-black dark:text-white`}>
        <nav aria-label="Main Navigation">
          <Navbar />
        </nav>
        <ThemeSwitcher />
        <LoadingSpinner />
        <Newsletter />
        <main role="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
