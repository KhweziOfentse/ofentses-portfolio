"use client"

import { useState, useEffect } from "react"
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import { motion } from "framer-motion"

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  // Text animation for name
  const nameLetters = "Ofentse Mahlangu".split("")

  // Roles for cycling animation
  const roles = ["Junior Full Stack Developer", "Frontend Enthusiast", "UI/UX Advocate"]
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="page relative h-screen flex flex-col items-center justify-center text-center px-4 md:px-6 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[#EBF8F8] z-0" />
      {/* Animated gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-tr from-[#B1967D] via-[#E6BEAD] to-[#EEE3E0] opacity-20 z-0"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />
      {/* Animated floating shapes */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#E6BEAD]/20"
        animate={{
          x: [0, 10, 0],
          y: [0, -10, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-[#B1967D]/20"
        animate={{
          x: [0, -10, 0],
          y: [0, 10, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute top-1/3 right-1/3 w-32 h-32 rounded-full bg-[#E6D8C9]/20"
        animate={{
          x: [0, 15, 0],
          y: [0, 5, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div className="z-10 max-w-3xl" variants={containerVariants} initial="hidden" animate="visible">
        <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
          <span className="text-[#B1967D]">Hello, I'm</span> <br />
          <div className="overflow-hidden py-2">
            <div className="flex justify-center">
              {nameLetters.map((letter, index) => (
                <motion.span
                  key={index}
                  className={`inline-block ${letter === " " ? "mr-2" : ""} text-[#333333]`}
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.5 + index * 0.05,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    scale: 1.2,
                    color: index % 3 === 0 ? "#B1967D" : index % 3 === 1 ? "#E6BEAD" : "#E6D8C9",
                    transition: { duration: 0.2 },
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.h1>

        <motion.div variants={itemVariants} className="relative h-12 mb-6 overflow-hidden">
          {roles.map((role, index) => (
            <motion.h2
              key={index}
              className="text-xl md:text-2xl text-[#B1967D] absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: index === roleIndex ? 1 : 0,
                y: index === roleIndex ? 0 : 20,
              }}
              transition={{ duration: 0.5 }}
            >
              {role}
            </motion.h2>
          ))}
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-lg mb-8 max-w-2xl mx-auto text-[#333333]/80"
          whileInView={{
            textShadow: [
              "0px 0px 0px rgba(177,150,125,0)",
              "0px 0px 10px rgba(177,150,125,0.5)",
              "0px 0px 0px rgba(177,150,125,0)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 5,
          }}
        >
          I build responsive, accessible web applications with modern technologies. Passionate about clean code and
          user-centered design.
        </motion.p>

        <motion.div variants={itemVariants} className="heroButtons flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <motion.a
            href="#contact"
            className="heroButton px-6 py-3 rounded-full bg-gradient-to-r from-[#B1967D] to-[#E6BEAD] text-white font-medium flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(177, 150, 125, 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="h-4 w-4" />
            Contact Me
          </motion.a>
          <motion.a
            href="#"
            className=" heroButton px-6 py-3 rounded-full border-2 border-[#B1967D] text-[#B1967D] font-medium hover:bg-[#B1967D]/10 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Resume
          </motion.a>
        </motion.div>

        <motion.div variants={itemVariants} className="flex justify-center gap-4">
          <motion.a
            href="https://github.com/KhweziOfentse"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-[#B1967D]/10 text-[#B1967D] hover:bg-[#B1967D]/20 transition-colors"
            whileHover={{
              scale: 1.2,
              rotate: [0, 10, -10, 0],
              transition: { duration: 0.5 },
            }}
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/ofentse-mahlangu-09aa8111b/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-[#B1967D]/10 text-[#B1967D] hover:bg-[#B1967D]/20 transition-colors"
            whileHover={{
              scale: 1.2,
              rotate: [0, 10, -10, 0],
              transition: { duration: 0.5 },
            }}
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </motion.a>
        </motion.div>
      </motion.div>
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.a
          href="#about"
          className="p-2 rounded-full bg-[#B1967D]/10 text-[#B1967D] hover:bg-[#B1967D]/20 transition-colors inline-block"
          animate={{
            y: [0, 10, 0],
            boxShadow: [
              "0px 0px 0px rgba(177,150,125,0)",
              "0px 0px 20px rgba(177,150,125,0.3)",
              "0px 0px 0px rgba(177,150,125,0)",
            ],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            repeatType: "loop",
          }}
        >
          <ArrowDown className="h-6 w-6" />
          <span className="sr-only">Scroll Down</span>
        </motion.a>
      </motion.div>
    </section>
  )
}
