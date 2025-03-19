"use client"

import { useState, useEffect } from "react"

import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#hero", label: "Home", icon: "bi-house-fill" },
    { href: "#about", label: "About", icon: "bi-person-fill" },
    { href: "#shaper-review", label: "Shaper", icon: "bi-shield-lock-fill" },
    { href: "#projects", label: "Projects", icon: "bi-clipboard-data" },
    { href: "#contact", label: "Contact", icon: "bi-envelope-fill" },
  ]

  return (
    <nav
      className={` nav fixed top-0 right-0 w-[80px] p-4 shadow-lg transition-all duration-300 rounded-l-lg
        ${isScrolled ? "bg-[#EBF8F8]/80 backdrop-blur-md" : "bg-white"}
      `}
    >
      {/* Desktop Navigation */}
      <ul className="hidden md:flex flex-col space-y-6">
        {navLinks.map((link, index) => (
          <li key={index} className="flex justify-center">
            <motion.a
              href={link.href}
              className="flex flex-col items-center text-gray-600 hover:text-black transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
            >
              <i className={`bi ${link.icon} text-2xl`} />
              <span className="text-xs">{link.label}</span>
            </motion.a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Toggle Button */}
      <button
        className="md:hidden flex justify-center w-full mt-4 p-2 bg-[#B1967D] text-white rounded-md"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden absolute right-full top-0 w-48 bg-[#EBF8F8] p-4 shadow-md rounded-l-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-[#B1967D] transition-colors py-2 flex items-center space-x-2"
                onClick={() => setIsMenuOpen(false)}
                whileHover={{ x: 5 }}
              >
                <i className={`bi ${link.icon} text-lg`} />
                <span>{link.label}</span>
              </motion.a>
            ))}
          </ul>
        </motion.div>
      )}
    </nav>
  )
}
