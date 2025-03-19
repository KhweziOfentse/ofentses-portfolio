import React from "react";

export default function Navbar() {
  const navLinks = [
    { href: "#hero", label: "Hero" },
    { href: "#about", label: "About" },
    { href: "#shaper-review", label: "Shaper Review" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="nav w-[100px] fixed right-0 top-0 transition-all duration-300 bg-white p-4 shadow-lg">
      <ul className="space-y-4">
        {navLinks.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              className="text-lg text-gray-700 hover:text-blue-500 transition-colors duration-200"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
