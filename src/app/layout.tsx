import type { Metadata } from "next";
import { Inter } from "next/font/google";
import BackgroundCircles from "@/components/BackgroundCircles";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio - Full Stack Developer",
  description: "Modern portfolio with dynamic background effects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <BackgroundCircles />
        {children}
      </body>
    </html>
  );
}