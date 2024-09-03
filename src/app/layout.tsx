import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MasterLayout from "@/components/master/layout/MasterLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "বাংলায় শিখুন সি# ",
  description: "সি শার্প এর বাংলা টিউটোরিয়াল",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MasterLayout> 
        {children}
        </MasterLayout>
        </body>
    </html>
  );
}
