"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logos/ZENTIC Studio Wordmark Logo - Professional Style.png";

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-gray-800 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-12 text-center">

        {/* LOGO */}
        <div className="flex justify-center items-center gap-3 mb-4">
          <Image
            src={logo}
            alt="ZENTIC Studio Logo"
            width={32}
            height={32}
          />
          <h3 className="text-xl font-semibold tracking-wide">
            <span className="text-orange-500">ZENTIC</span>{" "}
            <span className="text-white">Studio</span>
          </h3>
        </div>

        {/* DESCRIPTION */}
        <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
          We design and build{" "}
          <span className="text-gray-300">
            premium digital experiences
          </span>{" "}
          powered by modern web technologies, AI automation, and strong brand
          identity.
        </p>

        {/* FOOTER LINKS */}
        <div className="mt-6 flex justify-center space-x-6 text-sm">
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
        <p className="mt-8 text-xs text-gray-500">
          © {new Date().getFullYear()}{" "}
          <span className="text-orange-500">ZENTIC Studio</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
