import { Sen } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const sen = Sen({ subsets: ["latin"], variable: '--font-sen' });
const stolenHand = localFont({
  src: './fonts/StolenHand-Regular.otf',
  variable: '--font-stolen-hand'
});

export const metadata = {
  title: "Humayun K.",
  description: "designer, startup builder, author",
  icons: {
    icon: [
      { url: '/favicons/favicon.ico' },
      { url: '/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/favicons/apple-touch-icon.png' },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${sen.variable} ${stolenHand.variable} font-sen`}>{children}</body>
    </html>
  );
}
