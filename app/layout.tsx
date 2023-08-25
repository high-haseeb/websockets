import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  fallback: ["sans-serif"],
});

export const metadata: Metadata = {
  title: "Websockets & databases",
  description: "setting up a database and using websockets",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <script src="https://js.pusher.com/8.2.0/pusher.min.js"></script>
        {children}
      </body>
    </html>
  );
}
