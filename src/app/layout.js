'use client';

import { Sen } from "next/font/google";
import { majorMonoDisplay } from './fonts';
import "./globals.css";
import Head from "./components/Head";
import FloatingNavBar from './components/FloatingNavBar';

const sen = Sen({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${majorMonoDisplay.variable} ${sen.className}`}>
      <Head />
      <body className={`font-sen ${sen.className}`}>
        {children}
        <FloatingNavBar />
      </body>
    </html>
  );
}
