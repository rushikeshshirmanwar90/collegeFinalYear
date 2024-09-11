import Navbar from "@/components/custom/Navbar";
import Fotter from "@/components/custom/Fotter";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ToastContainer from "@/components/tost/tostContainer";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JEMS",
  description: "We are Jems",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <NextTopLoader color="#F8D247" />
          <Navbar />
          <ToastContainer />
          {children}
          <Fotter />
        </body>
      </html>
    </ClerkProvider>
  );
}
