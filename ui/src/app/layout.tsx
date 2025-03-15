import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/ui/app-sidebar"
import { NavBar } from "@/components/ui/nav-bar"
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NoFace",
  description: "AI-powered video creation tool",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SidebarProvider>
          <div className="flex h-screen w-full">
            <AppSidebar />
            <main className="flex-1 w-full flex flex-col overflow-hidden">
              <NavBar />
              <div className="w-full flex items-start justify-center overflow-auto">
                <div className="w-full max-w-5xl px-16 py-6">
                  {children}
                </div>
              </div>
            </main>
          </div>
        </SidebarProvider>
      </body>
    </html>
  )
}
