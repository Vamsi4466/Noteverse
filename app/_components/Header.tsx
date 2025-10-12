"use client";

import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-sky-900 via-sky-800 to-black shadow-lg">
      <div className="mx-auto flex h-20 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo + Name */}
        <Link href="/" className="flex items-center gap-3">
          <span className="text-2xl font-extrabold text-white">NoteVerse</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-white text-sm font-medium">
          <Link href="#about" className="hover:text-sky-300 transition">About</Link>
          <Link href="#features" className="hover:text-sky-300 transition">Features</Link>
          <Link href="#pricing" className="hover:text-sky-300 transition">Pricing</Link>
          <Link href="#contact" className="hover:text-sky-300 transition">Contact</Link>
        </nav>

        {/* Auth Buttons */}
        <div className="hidden sm:flex items-center gap-4">
          <LoginLink postLoginRedirectURL="/dashboard">
            <button className="rounded-md border border-white px-5 py-2 text-white font-medium hover:bg-white hover:text-black transition">
              Login
            </button>
          </LoginLink>

          <RegisterLink>
            <button className="rounded-md bg-white px-5 py-2 text-black font-medium hover:bg-sky-300 hover:text-white transition">
              Register
            </button>
          </RegisterLink>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="block md:hidden rounded p-2 text-white hover:text-sky-300 transition"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-sky-900 text-white px-4 py-4 flex flex-col gap-3">
          <Link href="#about" className="hover:text-sky-300 transition">About</Link>
          <Link href="#features" className="hover:text-sky-300 transition">Features</Link>
          <Link href="#pricing" className="hover:text-sky-300 transition">Pricing</Link>
          <Link href="#contact" className="hover:text-sky-300 transition">Contact</Link>
          <LoginLink postLoginRedirectURL="/dashboard">
            <button className="rounded-md border border-white px-5 py-2 text-white font-medium hover:bg-white hover:text-black transition">
              Login
            </button>
          </LoginLink>
          <RegisterLink>
            <button className="rounded-md bg-white px-5 py-2 text-black font-medium hover:bg-sky-300 hover:text-white transition">
              Register
            </button>
          </RegisterLink>
        </nav>
      )}
    </header>
  );
}

export default Header;
