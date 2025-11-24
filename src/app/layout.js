import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import ClientRoot from "../components/ClientRoot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Di Nails UK",
  description: "Bilingual landing page for a nail studio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ClientRoot>{children}</ClientRoot>
      </body>
    </html>
  );
}
