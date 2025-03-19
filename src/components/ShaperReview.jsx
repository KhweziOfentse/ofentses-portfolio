"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

export default function ShaperReview() {
  const [activeTab, setActiveTab] = useState("technical")

  const technicalSkills = [
    { name: "React", initial: 0, final: 2 },
    { name: "JavaScript", initial: 3, final: 4 },
    { name: "HTML/CSS", initial: 3, final: 5 },
    { name: "Node.js", initial: 1, final: 3 },
    { name: "Git", initial: 2, final: 4 },
  ]

  const softSkills = [
    { name: "Communication", initial: 3, final: 4 },
    { name: "Teamwork", initial: 3, final: 5 },
    { name: "Problem Solving", initial: 2, final: 4 },
    { name: "Time Management", initial: 2, final: 4 },
    { name: "Adaptability", initial: 3, final: 5 },
  ]

  const activeSkills = activeTab === "technical" ? technicalSkills : softSkills

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 border border-[#B1967D]/20 rounded shadow-md">
          <p className="font-medium text-[#333333]">{`${payload[0].name}: ${payload[0].value}`}</p>
          <p className="text-sm text-[#B1967D]">{payload[0].dataKey === "initial" ? "Initial Level" : "Final Level"}</p>
        </div>
      )
    }
    return null
  }

  return (
    <section
      id="shaper-review"
      className="py-20 px-4 md:px-6 bg-gradient-to-b from-[#E6D8C9] to-[#EEE3E0] text-[#333333]"
    >
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
            Shaper Review
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
            My growth and development during the Shaper Full-Stack Learnership program.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Column - Review Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="bg-white/80 backdrop-blur-sm border border-[#B1967D]/20 rounded-lg p-6 h-full"
              whileHover={{
                boxShadow: "0px 0px 30px rgba(177, 150, 125, 0.3)",
              }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-[#B1967D]">Learnership Feedback</h3>
              <div className="prose text-[#333333]/80">
                <p className="mb-4">
                  "Ofentse has shown remarkable growth throughout the learnership. She has consistently demonstrated a
                  strong work ethic and a genuine passion for coding. Her ability to quickly grasp new concepts and
                  apply them to practical projects has been impressive."
                </p>
                <p className="mb-4">
                  "Her frontend development skills have particularly shined, with her React projects showing attention
                  to detail and user experience. She has also made significant progress in backend development, though
                  this remains an area for continued growth."
                </p>
                <p>
                  "Ofentse works well in team environments and has become more confident in sharing her ideas. She is
                  always eager to learn and takes feedback constructively. With her determination and rate of
                  improvement, she has a promising future in full-stack development."
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Skills Graph */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="bg-white/80 backdrop-blur-sm border border-[#B1967D]/20 rounded-lg p-6 h-full"
              whileHover={{
                boxShadow: "0px 0px 30px rgba(177, 150, 125, 0.3)",
              }}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-semibold text-[#B1967D]">Skills Progress</h3>
                <div className="flex space-x-2">
                  <motion.button
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      activeTab === "technical"
                        ? "bg-gradient-to-r from-[#B1967D] to-[#E6BEAD] text-white"
                        : "bg-[#EEE3E0]/50 text-[#333333]/70 hover:bg-[#EEE3E0]"
                    }`}
                    onClick={() => setActiveTab("technical")}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Technical
                  </motion.button>
                  <motion.button
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      activeTab === "soft"
                        ? "bg-gradient-to-r from-[#B1967D] to-[#E6BEAD] text-white"
                        : "bg-[#EEE3E0]/50 text-[#333333]/70 hover:bg-[#EEE3E0]"
                    }`}
                    onClick={() => setActiveTab("soft")}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Soft Skills
                  </motion.button>
                </div>
              </div>

              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={activeSkills} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E6D8C9" />
                    <XAxis dataKey="name" tick={{ fill: "#333333" }} />
                    <YAxis domain={[0, 5]} tick={{ fill: "#333333" }} />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar dataKey="initial" name="Initial Level" fill="#E6BEAD" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="final" name="Final Level" fill="#B1967D" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="flex justify-center mt-4 space-x-8">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-[#E6BEAD] rounded-sm mr-2"></div>
                  <span className="text-sm text-[#333333]/70">Initial Level</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-[#B1967D] rounded-sm mr-2"></div>
                  <span className="text-sm text-[#333333]/70">Final Level</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

