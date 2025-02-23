"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, X } from "lucide-react"
import Image from "next/image"

const PROJECTS = [
  {
    title: "Shopnest",
    description: "A lightweight yet powerful shopping cart using React and local storage, ensuring a smooth and persistent shopping experience.",
    image: "/shoppingCart.jpeg",
    link: "https://shopping-cart-red-phi.vercel.app/",
    tags: ["React", "TypeScript", "Tailwind CSS", ""],
  },
  {
    title: "Med-First",
    description: "Med-First streamlines hospital operations with OPD queuing, bed tracking, patient admission, and inventory management, ensuring seamless city-wide integration.",
    image: "/MedFirst.png",
    link: "https://med-first.vercel.app",
    tags: ["NextJs", "Typescript", "Tailwind CSS", "Postgres", "Prisma", "Express" ],
  },
  {
    title: "Listify",
    description: "A sleek to-do app with smart categorization, drag-and-drop functionality, and persistent task management for ultimate productivity.",
    image: "/listify.jpeg",
    link: "https://do-list-delta.vercel.app/",
    tags: ["React", "Typescript",],
  },
  {
    title: "Nimbus",
    description: "A real-time weather app fetching live data, offering precise forecasts with a clean and responsive UI.",
    image: "/weather.jpeg",
    link: "https://react-project-jet-five.vercel.app/",
    tags: ["React", "JavaScript", "API"],
  },
  
]

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<(typeof PROJECTS)[0] | null>(null)

  return (
    <section className="py-20 px-4 md:px-8 relative">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text"
      >
        My Projects
      </motion.h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="glass-card hover-glow overflow-hidden cursor-pointer m-4"
            onClick={() => setSelectedProject(project)}
          >
            <div className="relative h-48 w-full group">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-white/70 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 text-sm bg-white/10 rounded-full text-white/80">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-gray-900 p-6 rounded-lg max-w-2xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                <button onClick={() => setSelectedProject(null)}>
                  <X className="w-6 h-6" />
                </button>
              </div>
              <Image
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                width={600}
                height={400}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <p className="text-white/70 mb-4">{selectedProject.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 text-sm bg-white/10 rounded-full text-white/80">
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-400 hover:text-blue-300"
              >
                View Project <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

