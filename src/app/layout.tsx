import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from '@ant-design/nextjs-registry';

const poppins = Poppins({
  weight: ['300','400','600', '700'], 
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Planned",
  description: "Planned App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}><AntdRegistry>{children}</AntdRegistry></body>
    </html>
  );
}
