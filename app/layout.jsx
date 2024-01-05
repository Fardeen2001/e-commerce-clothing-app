"use client";
import NavBar from "@/Components/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/Components/Footer";
import Providers from "@/ReduxStore/Provider";
import NextTopLoader from "nextjs-toploader";

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
          <NextTopLoader
            color="#000"
            initialPosition={0.01}
            crawlSpeed={1000}
            height={3}
            crawl={true}
            showSpinner={true}
            easing="ease"
            speed={1000}
            shadow="0 0 10px #2299DD,0 0 5px #2299DD"
          />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
