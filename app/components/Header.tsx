"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import logo from "@/assets/images/logos/ZENTIC Studio Wordmark Logo - Professional Style.png";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${
          scrolled
            ? "backdrop-blur-md bg-black/70 border-b border-gray-800"
            : "bg-black"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={logo}
            alt="ZENTIC Studio Logo"
            width={36}
            height={36}
            priority
          />

          <span className="text-lg font-semibold tracking-wide">
            <span className="text-orange-500">ZENTIC</span>{" "}
            <span className="text-white">Studio</span>
          </span>
        </Link>

        {/* NAV LINKS */}
        <nav className="hidden md:flex space-x-8 text-2sm">
          {navLinks.map(([label, link]) => {
            const isActive = pathname === link;

            return (
              <Link
                key={label}
                href={link}
                className={`relative pb-1 transition-all duration-300
                  ${
                    isActive
                      ? "text-orange-500"
                      : "text-gray-300 hover:text-orange-500"
                  }
                `}
              >
                {label}
                {isActive && (
                  <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-orange-500 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
