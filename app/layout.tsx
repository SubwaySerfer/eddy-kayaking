import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ChatWidget from "@/components/ChatWidget/ChatWidget";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EDDY",
  description: "Sea kayaking and water adventures in Budva",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <body className={inter.className}>
          <div style={{ zIndex: 1000000000 }}>
            <ChatWidget />
          </div>
          {children}
        </body>
      </html>
    </>
  );
}
