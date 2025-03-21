"use client"

import { Github, Heart, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 px-4 border-t border-[#B1967D]/20 bg-[#EBF8F8] text-[#333333]">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-[#333333]/60">© {currentYear} Ofentse Mahlangu. All rights reserved.</p>
          </div>

          <div className="flex items-center space-x-4">
            <motion.a
              href="https://github.com/KhweziOfentse"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#333333]/60 hover:text-[#B1967D] transition-colors"
              whileHover={{ scale: 1.2 }}
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/ofentse-mahlangu-09aa8111b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#333333]/60 hover:text-[#E6BEAD] transition-colors"
              whileHover={{ scale: 1.2 }}
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </motion.a>
            <motion.a
              href="mailto:fefemahlangu@gmail.com"
              className="text-[#333333]/60 hover:text-[#E6D8C9] transition-colors"
              whileHover={{ scale: 1.2 }}
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </motion.a>
          </div>
        </div>

        
      </div>
    </footer>
  )
}

