"use client";
import NavBar from "@/Components/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/Components/Footer";
import Providers from "@/ReduxStore/Provider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>ClothWears.com - wear the clothes</title>
        <meta name="description" content="ClothWears.com - wear the clothes" />
        <link
          rel="shortcut icon"
          href="@/public/favicon.ico"
          type="image/x-icon"
        />
      </head>
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
