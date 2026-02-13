"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import logo from "@/assets/images/logos/logo1.png";
import { Menu, X } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    ["Home", "/"],
    ["About", "/about"],
    ["Services", "/services"],
    ["Portfolio", "/portfolio"],
    ["Contact", "/contact"],
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-lg bg-black/80 border-b border-gray-800 shadow-md"
          : "bg-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 md:py-4 flex justify-between items-center">

        {/* LOGO (Wordmark Only) */}
        <Link href="/" className="flex items-center">
          <Image
            src={logo}
            alt="ZENTIC Studio Logo"
            priority
            className="h-14 md:h-18 lg:h-24 w-auto object-contain"
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex space-x-10 text-sm font-medium tracking-wide">
          {navLinks.map(([label, link]) => {
            const isActive = pathname === link;
            return (
              <Link
                key={label}
                href={link}
                className={`relative pb-1 transition-all duration-300 ${
                  isActive
                    ? "text-orange-500"
                    : "text-gray-300 hover:text-orange-500"
                }`}
              >
                {label}
                {isActive && (
                  <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-orange-500 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-white transition-transform duration-200"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-96 border-t border-gray-800" : "max-h-0"
        }`}
      >
        <div className="bg-black px-6 py-6 flex flex-col space-y-5 text-base font-medium">
          {navLinks.map(([label, link]) => {
            const isActive = pathname === link;
            return (
              <Link
                key={label}
                href={link}
                onClick={() => setMobileOpen(false)}
                className={`transition ${
                  isActive
                    ? "text-orange-500"
                    : "text-gray-300 hover:text-orange-500"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}
