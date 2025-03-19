"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setSubmitMessage({
      type: "success",
      text: "Thanks for reaching out. I'll get back to you soon.",
    })

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
    setIsSubmitting(false)

    // Clear success message after 5 seconds
    setTimeout(() => {
      setSubmitMessage(null)
    }, 5000)
  }

  return (
    <section id="contact" className="page py-20 px-4 md:px-6 bg-gradient-to-b from-[#EEE3E0] to-[#EBF8F8] text-[#333333]">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.h2
            className="text-3xl font-bold mb-4 text-[#333333]"
            whileInView={{
              textShadow: [
                "0px 0px 0px rgba(177,150,125,0)",
                "0px 0px 10px rgba(177,150,125,0.5)",
                "0px 0px 0px rgba(177,150,125,0)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: 3,
              repeatType: "reverse",
            }}
          >
            Get In Touch
          </motion.h2>
          <motion.div
            className="h-1 w-20 bg-gradient-to-r from-[#B1967D] to-[#E6BEAD] mx-auto mb-8"
            whileInView={{
              width: ["0%", "5%", "10%"],
              opacity: [0, 1],
            }}
            transition={{ duration: 1 }}
          ></motion.div>
          <p className="text-lg max-w-3xl mx-auto text-[#333333]/80">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-1"
          >
            <motion.div
              className="bg-white/80 backdrop-blur-sm border border-[#B1967D]/20 rounded-lg overflow-hidden"
              whileHover={{
                boxShadow: "0px 0px 30px rgba(177, 150, 125, 0.3)",
              }}
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-[#B1967D]">Contact Information</h3>
                <p className="text-[#333333]/70 mb-6">Feel free to reach out through any of these channels</p>
                <div className="space-y-4">
                  <motion.div className="flex items-start" whileHover={{ x: 5 }}>
                    <div className="w-10 h-10 rounded-full bg-[#B1967D]/20 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <Mail className="h-5 w-5 text-[#B1967D]" />
                    </div>
                    <a
                      href="mailto:fefemahlangu@gmail.com"
                      className="text-[#333333] hover:text-[#B1967D] transition-colors text-xs sm:text-sm break-all"
                    >
                      fefemahlangu@gmail.com
                    </a>
                  </motion.div>
                  <motion.div className="flex items-center" whileHover={{ x: 5 }}>
                    <div className="w-10 h-10 rounded-full bg-[#E6BEAD]/20 flex items-center justify-center mr-3 flex-shrink-0">
                      <Phone className="h-5 w-5 text-[#E6BEAD]" />
                    </div>
                    <a
                      href="tel:+27814970134"
                      className="text-[#333333] hover:text-[#E6BEAD] transition-colors text-xs sm:text-sm"
                    >
                      (+27) 81 497 0134
                    </a>
                  </motion.div>

                  <motion.div className="flex items-center" whileHover={{ x: 5 }}>
                    <div className="w-10 h-10 rounded-full bg-[#E6D8C9]/20 flex items-center justify-center mr-3 flex-shrink-0">
                      <MapPin className="h-5 w-5 text-[#E6D8C9]" />
                    </div>
                    <span className="text-[#333333] text-xs sm:text-sm">Johannesburg, South Africa</span>
                  </motion.div>
                </div>

                <div className="pt-8">
                  <p className="text-sm text-[#333333]/70 mb-4">Connect with me on social media</p>
                  <div className="flex gap-4">
                    <motion.a
                      href="https://github.com/KhweziOfentse"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-[#B1967D]/10 flex items-center justify-center text-[#B1967D] hover:bg-[#B1967D]/20 transition-colors"
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
                      className="w-10 h-10 rounded-full bg-[#E6BEAD]/10 flex items-center justify-center text-[#E6BEAD] hover:bg-[#E6BEAD]/20 transition-colors"
                      whileHover={{
                        scale: 1.2,
                        rotate: [0, 10, -10, 0],
                        transition: { duration: 0.5 },
                      }}
                    >
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </motion.a>
                    <motion.a
                      href="mailto:fefemahlangu@gmail.com"
                      className="w-10 h-10 rounded-full bg-[#E6D8C9]/10 flex items-center justify-center text-[#E6D8C9] hover:bg-[#E6D8C9]/20 transition-colors"
                      whileHover={{
                        scale: 1.2,
                        rotate: [0, 10, -10, 0],
                        transition: { duration: 0.5 },
                      }}
                    >
                      <Mail className="h-5 w-5" />
                      <span className="sr-only">Email</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <motion.div
              className="bg-white/80 backdrop-blur-sm border border-[#B1967D]/20 rounded-lg overflow-hidden"
              whileHover={{
                boxShadow: "0px 0px 30px rgba(177, 150, 125, 0.3)",
              }}
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-[#B1967D]">Send Me a Message</h3>
                <p className="text-[#333333]/70 mb-6">I'll get back to you as soon as possible</p>

                {submitMessage && (
                  <div
                    className={`p-4 mb-6 rounded-lg ${submitMessage.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
                  >
                    {submitMessage.text}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-medium text-[#333333]">
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 bg-white/50 border border-[#B1967D]/20 rounded-md text-[#333333] placeholder:text-[#333333]/50 focus:outline-none focus:ring-2 focus:ring-[#B1967D]/20 focus:border-[#B1967D]"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium text-[#333333]">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 bg-white/50 border border-[#B1967D]/20 rounded-md text-[#333333] placeholder:text-[#333333]/50 focus:outline-none focus:ring-2 focus:ring-[#B1967D]/20 focus:border-[#B1967D]"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="block text-sm font-medium text-[#333333]">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 bg-white/50 border border-[#B1967D]/20 rounded-md text-[#333333] placeholder:text-[#333333]/50 focus:outline-none focus:ring-2 focus:ring-[#B1967D]/20 focus:border-[#B1967D]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium text-[#333333]">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 bg-white/50 border border-[#B1967D]/20 rounded-md text-[#333333] placeholder:text-[#333333]/50 focus:outline-none focus:ring-2 focus:ring-[#B1967D]/20 focus:border-[#B1967D]"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-[#B1967D] to-[#E6BEAD] text-white font-medium flex items-center justify-center gap-2"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02, boxShadow: "0px 0px 15px rgba(177, 150, 125, 0.5)" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          className="h-4 w-4 rounded-full border-2 border-white border-t-transparent"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

