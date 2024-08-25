'use client';

import { Sen } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Head from "./components/Head";

const sen = Sen({ subsets: ["latin"], variable: '--font-sen' });
const stolenHand = localFont({
  src: './fonts/StolenHand-Regular.otf',
  variable: '--font-stolen-hand'
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head />
      <body className={`${sen.variable} ${stolenHand.variable} font-sen`}>
        {children}
      </body>
    </html>
  );
}
