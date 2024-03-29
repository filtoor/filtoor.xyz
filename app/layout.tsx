import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "filtoor",
  description:
    "filtoor.xyz is a service that provides a performant API for cNFT spam detection on Solana",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-zinc-800`}>
        <main className="flex justify-center">{children}</main>
      </body>
    </html>
  );
}
