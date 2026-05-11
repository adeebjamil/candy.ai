import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Candy AI: Your Ultimate AI Companion",
  description: "Experience deep, emotional connections with customizable AI characters. Chat, generate images, and share moments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-gray-50/50 text-foreground font-sans">
        <div className="flex min-h-screen">
          <div className="hidden lg:block">
            <Sidebar />
          </div>
          <div className="w-full flex-1 flex flex-col lg:pl-64">
            <Header />
            <main className="flex-1">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
