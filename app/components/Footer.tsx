"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logos/logo1.png";

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-gray-800 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-16 text-center">

        {/* LOGO */}
        <div className="flex justify-center mb-6">
          <Image
            src={logo}
            alt="ZENTIC Studio Logo"
            priority
            className="h-16 md:h-20 lg:h-24 w-auto object-contain"
          />
        </div>

        {/* DESCRIPTION */}
        <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
          We design and build{" "}
          <span className="text-gray-300">
            premium digital experiences
          </span>{" "}
          powered by modern web technologies, AI automation, and strong brand
          identity.
        </p>

        {/* FOOTER LINKS */}
        <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-sm">
          <Link
            href="/privacy-policy"
            className="text-gray-400 hover:text-orange-500 transition"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="text-gray-400 hover:text-orange-500 transition"
          >
            Terms & Conditions
          </Link>
        </div>

        {/* COPYRIGHT */}
        <p className="mt-10 text-xs text-gray-500">
          © {new Date().getFullYear()}{" "}
          <span className="text-orange-500">ZENTIC Studio</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
