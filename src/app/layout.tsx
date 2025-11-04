import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Footer from "./_components/common/Footer";

const poppin = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zestif",
  description: "Book your Foods and Enjoy Meal in your Favourite Restaurant!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppin.className}`}>
        <div className="flex flex-col min-h-screen justify-between">
          {children}
        <Footer />
        </div>
      </body>
    </html>
  );
}
