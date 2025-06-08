"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

export default function NavbarWrapper() {
  const pathname = usePathname();

  // show navbar only on home page
  if (pathname === "/") {
    return <Navbar />;
  }

  return null;
}
