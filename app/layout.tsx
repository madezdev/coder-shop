import React from "react";
import Navbar from "./components/ui/navbar/navbar";

import { montserrat } from "./ui/fonts";
import "./ui/global.css";
import Link from "next/link";
import SideMenu from "./components/ui/sideMenu/SideMenu";
import { Cart, Menu, Search } from "./ui/icons";

export const metadata = {
  title: "Coder-Shop",
  description:
    "Coder-Shop is a e-commerce site built with Next.js and TailwindCSS",
  keywords:
    "nextjs, tailwindcss, e-commerce, e-commerce, store, shop, online store, online shop, website, website, online website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased  `}>
        <div className="flex justify-between items-center p-4">
          <div>
            <Link href={"/"}>
              <h1 className="font-black text-[1.5rem]">Coder-Shop</h1>
            </Link>
          </div>
          <div className="flex items-center justify-around gap-4">
            <div>
              <button>
                <Search className="text-[1.5rem]" />
              </button>
            </div>
            <div>
              <Link href={"/cart"}>
                <Cart className="text-[1.5rem]"/>
              </Link>
            </div>
            <div>
              <button>
                <Menu className="text-[1.5rem]"/>
              </button>
            </div> 
          </div>
        </div>
        <Navbar />
        <SideMenu />
        <main className="my-[5rem] mx-auto max-w-[1536px] px-0 py-[2rem]">
          {children}
        </main>
      </body>
    </html>
  );
}
