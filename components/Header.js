"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

export default function Header() {
  const { totalItems } = useCart();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" className="text-2xl font-bold text-brand-600">
          Lumio
        </Link>

        <nav className="hidden md:flex gap-8 font-medium text-ink">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-brand-600 transition">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/cart" className="relative">
            <span className="text-2xl">🛒</span>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-brand-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
          <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
            ☰
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden flex flex-col gap-2 px-4 pb-4 font-medium">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
