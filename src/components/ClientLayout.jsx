"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

export default function ClientLayout({
    children,
}) {
    const pathname = usePathname();

    const hideLayout = pathname === "/page404";
  return (
    <>
        {!hideLayout && <Navbar />}
        {children}
        {!hideLayout && <Footer />}
    </>
  )
}
