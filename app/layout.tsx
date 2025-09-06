import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Varad Gandhi — Portfolio", description: "Finance, ML, Risk & Dashboards", icons: [{ rel: "icon", url: "/favicon.ico" }], };
export default function RootLayout({ children }:{ children: React.ReactNode }){
  return(<html lang="en"><body><Navbar/><main>{children}</main><Footer/></body></html>);
}