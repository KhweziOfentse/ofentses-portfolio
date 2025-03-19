"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github, Maximize2 } from "lucide-react"

const Project = ({ project, openModal }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="bg-white/80 backdrop-blur-sm border border-[#B1967D]/20 rounded-lg overflow-hidden h-full"
        whileHover={{
          y: -5,
          boxShadow: "0px 10px 30px rgba(177, 150, 125, 0.3)",
        }}
      >
        <div className="relative h-60 overflow-hidden">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-full object-cover transition-transform hover:scale-105"
          />
        </div>
        <div className="p-6">
          <h4 className="text-xl font-semibold mb-2 text-[#B1967D]">{project.title}</h4>
          <p className="text-[#333333]/70 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <motion.span
                key={tech}
                className="px-3 py-1 rounded-full text-sm font-medium bg-[#E6D8C9]/50 text-[#333333]"
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "rgba(177,150,125,0.3)",
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
          <div className="flex justify-between">
            <motion.button
              className="flex items-center text-[#B1967D] hover:underline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => openModal(project)}
            >
              <Maximize2 className="h-4 w-4 mr-2" />
              Details
            </motion.button>
            <div className="flex gap-2">
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-[#333333]/70 hover:text-[#333333]"
                whileHover={{ scale: 1.1 }}
              >
                <Github className="h-4 w-4 mr-2" />
                Code
              </motion.a>
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-[#B1967D] hover:underline"
                whileHover={{ scale: 1.1 }}
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Demo
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const projects = [
    {
      id: 1,
      title: "Weather App",
      description: "A clean, responsive weather application that displays current weather conditions for any city.",
      longDescription:
        "This weather application allows users to search for any city and view current weather conditions including temperature, humidity, and wind speed. Built with HTML, CSS, and JavaScript, it fetches data from a weather API and presents it in a clean, user-friendly interface with a minimalist design.",
      image:
        "https://sjc.microlink.io/U3BzcmgpyF2FZkgLaPU3T9Bz1_dDSIBcb8eYnomKMTdeMI_PzV0yLt7H5_s_aoUe1kRPthqfQ4DTQAxiJt0MOA.jpeg",
      technologies: ["HTML", "CSS", "JavaScript", "Weather API", "Responsive Design"],
      github: "https://github.com/KhweziOfentse/weather-app",
      demo: "https://khweziofentse-weather-app.netlify.app/",
      featured: true,
    },
    {
      id: 2,
      title: "World Clock",
      description: "An application that displays the current time across different cities around the world.",
      longDescription:
        "This world clock application shows the current time in multiple cities across different time zones. Users can select cities from a dropdown menu to view their local time. The app features country flags for each location and updates in real-time. Built with HTML, CSS, and JavaScript, it demonstrates my ability to work with date/time manipulation and create intuitive user interfaces.",
      image:
        "https://sjc.microlink.io/niuRJO3t3sgym0TKE5rIasjRF6zq6bKgDbpbgQ6wAniZGJ62eg2IvyFf6hQvsNNEsJ2VXz3OV3xd23CFOp19Eg.jpeg",
      technologies: ["HTML", "CSS", "JavaScript", "Date/Time API"],
      github: "https://github.com/KhweziOfentse/world-clock",
      demo: "https://the-world-clock-ko.netlify.app/",
      featured: true,
    },
    {
      id: 3,
      title: "AI Love Poems",
      description: "A creative application that generates love poems using AI technology.",
      longDescription:
        "This application generates unique love poems using AI technology. Users can customize parameters to influence the style and content of the poems. The project demonstrates my ability to integrate with AI APIs and create interactive web applications with a focus on user experience and creative content generation.",
      image: "https://placehold.co/600x400/e6d8c9/333333?text=AI+Love+Poems",
      technologies: ["HTML", "CSS", "JavaScript", "AI API Integration"],
      github: "https://github.com/KhweziOfentse/ai-poem-generator",
      demo: "https://ai-love-poems.netlify.app/",
      featured: false,
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "My personal portfolio website built with React and Tailwind CSS.",
      longDescription:
        "This portfolio website showcases my projects, skills, and experience as a Junior Full Stack Developer. Built with React and Tailwind CSS, it features responsive design, dark/light mode, and interactive components. The project demonstrates my front-end development skills and attention to detail in creating a professional online presence.",
      image: "https://placehold.co/600x400/e6d8c9/333333?text=Portfolio",
      technologies: ["React", "JavaScript", "Tailwind CSS"],
      github: "https://github.com/KhweziOfentse/portfolio",
      demo: "#",
      featured: false,
    },
  ]

  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <section id="projects" className="py-20 px-4 md:px-6 bg-gradient-to-b from-[#E6D8C9] to-[#EEE3E0] text-[#333333]">
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
            My Projects
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
            Here are some of the projects I've worked on. Each one has helped me develop different skills and overcome
            unique challenges.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-[#B1967D]">Featured Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <Project key={project.id} project={project} openModal={openModal} />
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-[#B1967D]">Other Projects</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className="bg-white/80 backdrop-blur-sm border border-[#B1967D]/20 rounded-lg p-6 h-full"
                  whileHover={{
                    y: -5,
                    boxShadow: "0px 10px 30px rgba(177, 150, 125, 0.3)",
                  }}
                >
                  <h4 className="text-xl font-semibold mb-2 text-[#B1967D]">{project.title}</h4>
                  <p className="text-[#333333]/70 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 rounded-full text-sm font-medium bg-[#E6D8C9]/50 text-[#333333]"
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: "rgba(177,150,125,0.3)",
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                    {project.technologies.length > 3 && (
                      <motion.span
                        className="px-3 py-1 rounded-full text-sm font-medium bg-[#E6D8C9]/50 text-[#333333]"
                        whileHover={{ scale: 1.1 }}
                      >
                        +{project.technologies.length - 3}
                      </motion.span>
                    )}
                  </div>
                  <div className="flex justify-between mt-auto">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-[#333333]/70 hover:text-[#333333]"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-[#B1967D] hover:underline"
                      whileHover={{ scale: 1.1 }}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </motion.a>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Project Modal */}
        {isModalOpen && selectedProject && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-[#EBF8F8] text-[#333333] border border-[#B1967D]/20 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-semibold text-[#B1967D]">{selectedProject.title}</h3>
                  <button onClick={closeModal} className="text-[#333333]/70 hover:text-[#333333] p-1">
                    ✕
                  </button>
                </div>
                <p className="text-[#333333]/70 mb-4">{selectedProject.technologies.join(" • ")}</p>
                <div className="relative h-80 my-4 rounded-lg overflow-hidden">
                  <img
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
                <p className="my-4 text-[#333333]/80">{selectedProject.longDescription}</p>
                <div className="flex gap-4 mt-4">
                  <motion.a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full bg-gradient-to-r from-[#B1967D] to-[#E6BEAD] text-white font-medium flex items-center"
                    whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(177, 150, 125, 0.5)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full border border-[#B1967D] text-[#B1967D] font-medium flex items-center"
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(177, 150, 125, 0.1)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    View Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  )
}

