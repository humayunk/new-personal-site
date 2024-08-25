'use client';

import { Sen, Major_Mono_Display } from "next/font/google";
import "./globals.css";
import Head from "./components/Head";
import { majorMonoDisplay, sen } from './fonts'

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${majorMonoDisplay.variable} ${sen.variable}`}>
      <Head />
      <body className="font-sen">
        {children}
      </body>
    </html>
  );
}
