import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import type React from "react";
import ThemeSwitcher from "../components/ThemeSwitcher";
import LoadingSpinner from "../components/LoadingSpinner";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FIXIFY",
  description: "AI-Powered Fraud Detection on Solana",
  generator: "v0.dev",
  openGraph: {
    title: "FIXIFY - AI-Powered Fraud Detection",
    description: "Protect your assets with AI-driven fraud detection on Solana.",
    url: "https://fixify.com",
    siteName: "FIXIFY",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FIXIFY Fraud Detection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FIXIFY - AI-Powered Fraud Detection",
    description: "Protect your assets with AI-driven fraud detection on Solana.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/og-image.jpg" as="image" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-black dark:text-white`}>
        <Navbar />
        <ThemeSwitcher />
        <LoadingSpinner />
        {children}
      </body>
    </html>
  );
}
