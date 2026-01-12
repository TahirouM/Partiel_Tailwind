import type { Metadata } from "next";
import { Rubik, Poppins } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Brainwave - Sound, that sounds better!",
  description: "Non-stop music for long time. Get your AirPods now.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rubik.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
