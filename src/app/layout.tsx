import type { Metadata } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";

import "./globals.css";

const floriselScript = localFont({
  src: "../fonts/bakinskay-temp/creativemarket-1236867-bakinskay-handmade-font-brush/Bakinskay.otf",
  variable: "--font-bakinskay",
  weight: "400",
  display: "swap",
});

const felidae = localFont({
  src: "../fonts/felidae-temp/Felidae.ttf",
  variable: "--font-felidae",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Кристина и Юрий | Свадебное приглашение",
  description: "Современный one-page сайт-приглашение на свадьбу с программой дня и локацией.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${floriselScript.variable} ${felidae.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
