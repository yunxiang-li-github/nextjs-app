import { Inter } from "next/font/google";
import "@/app/globals.css";
import SideNav from "@/app/ui/dashboard/sidenav";
import MobileNav from "./ui/dashboard/mobile-nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "React Practice",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full bg-gray-100">
      <body className={`${inter.className} h-full`}>
        <div className="h-full">
          <MobileNav />
          <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
            <SideNav />
          </div>
          <div className="flex flex-1 flex-col md:pl-64 h-full">
            <main className="flex-1">
              <div className="h-full text-beige">{children}</div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
