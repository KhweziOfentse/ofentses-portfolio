import React from "react";

export default function Navbar() {
  const navLinks = [
    { href: "#hero", label: "Hero", icon: "bi-house-fill" },
    { href: "#about", label: "About", icon: "bi-person-fill" },
    { href: "#shaper-review", label: "Shaper Review", icon: "bi-shield-lock-fill" },
    { href: "#projects", label: "Projects", icon: "bi-clipboard-data" },
    { href: "#contact", label: "Contact", icon: "bi-envelope-fill" },
  ];

  return (
    <nav className="nav w-[80px] fixed right-0 top-0 transition-all duration-300 bg-white p-4 shadow-lg">
      <ul className="space-y-4">
        {navLinks.map((link, index) => (
          <li key={index} className="flex items-center space-x-2">
            <a
              href={link.href}
              className="flex items-center text-lg text-gray-600 0 transition-colors duration-200"
            >
              <i className={`bi icon ${link.icon} h-10 w-10 text-4xl`} />
           
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
