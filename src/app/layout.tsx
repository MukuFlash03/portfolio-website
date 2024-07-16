import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mukul C. Mahadik",
  description: "Personal Portfolio website for Mukul C. Mahadik",
  icons: {
    icon: '/icon.png',
    shortcut: '/shortcut-icon.png',
    apple: '/apple-icon.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body className={inter.className}>{children}</body> */}
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-purple-800">          {children}
        </div>
      </body>
    </html>
  );
}
