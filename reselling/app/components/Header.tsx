"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Listings", path: "/listings" },
    { name: "Buy", path: "/buyTicket" },
    { name: "Sell", path: "/sellTicket" },
    { name: "Profile", path: "/profile" },
  ];

  return (
    <header className="bg-primary text-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">🎫 Ticket Reselling</Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`text-lg font-medium transition-colors duration-200 ${
                pathname === link.path
                  ? "text-accent underline underline-offset-4"
                  : "hover:text-accent"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
