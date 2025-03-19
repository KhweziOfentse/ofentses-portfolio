import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function About() {
  const skills = {
    frontend: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Redux"],
    backend: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST API", "GraphQL", "Firebase"],
    tools: ["Git", "GitHub", "VS Code", "Figma", "Jest", "Docker", "AWS", "Vercel"],
  };

  const [activeTab, setActiveTab] = useState('frontend'); // State to track which skill category is active

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className=" page py-20 px-4 md:px-6 bg-[#E6D8C9] text-[#333333]">
      <div className="container mx-auto max-w-5xl">
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
            About Me
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
            I'm a passionate Junior Full Stack Developer with a strong foundation in both frontend and backend
            technologies. I enjoy solving complex problems and creating intuitive, dynamic user experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-[#B1967D]">My Journey</h3>
            <motion.p
              className="mb-4 text-[#333333]/90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              My journey into web development began while I was studying BCom at Rhodes University. I then expanded my
              skills by taking several courses with SheCodes. Eager to gain hands-on experience, I started applying for
              coding-focused learnerships and eventually joined the Shaper Full-Stack Learnership.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-[#333333]/90"
            >
              I'm particularly passionate about building accessible, high-performance web applications that deliver
              exceptional user experiences across all devices, with a strong focus on front-end development.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="p-6 rounded-lg bg-[#EEE3E0] backdrop-blur-sm border border-[#B1967D]/20"
              whileHover={{ boxShadow: "0px 0px 30px rgba(177, 150, 125, 0.3)" }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-[#B1967D]">Technical Skills</h3>
              <div className="mb-4">
                <div className="flex space-x-4 mb-4">
                  {Object.keys(skills).map((category) => (
                    <motion.button
                      key={category}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        activeTab === category
                          ? "bg-gradient-to-r from-[#B1967D] to-[#E6BEAD] text-white"
                          : "bg-white/50 text-[#333333]/70 hover:bg-white/70"
                      }`}
                      onClick={() => setActiveTab(category)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </motion.button>
                  ))}
                </div>

                <motion.div
                  key={activeTab}
                  variants={container}
                  initial="hidden"
                  animate="show"
                  className="flex flex-wrap gap-2 mt-4"
                >
                  {skills[activeTab].map((skill) => (
                    <motion.span
                      key={skill}
                      variants={item}
                      className="px-3 py-1 rounded-full text-sm font-medium bg-white/50 text-[#333333]"
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: ["rgba(255,255,255,0.5)", "rgba(177,150,125,0.3)", "rgba(230,190,173,0.3)"],
                        transition: { duration: 0.5 },
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
