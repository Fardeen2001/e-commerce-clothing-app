"use client";
import NavBar from "@/Components/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/Components/Footer";
import Providers from "@/ReduxStore/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ClothWears.com - wear the clothes",
  description: "ClothWears.com - wear the clothes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <NavBar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
