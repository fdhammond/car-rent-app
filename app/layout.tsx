import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Outfit } from 'next/font/google';
import Footer from "@/components/footer/Footer";
import InterestedInRental from "@/components/interestedInRental/InterestedInRental";
import Navbar from "@/components/Navbar";
import Template from "./template";

const outfit = Outfit({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RENAX",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body className={`${outfit.className} overflow-x-hidden`}>
        <Template>
          <main>
              <Navbar />
                {children}
              <InterestedInRental />
              <Footer />
          </main>
        </Template>
      </body>
    </html>
  );
}
