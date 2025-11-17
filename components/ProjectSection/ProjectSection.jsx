"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Github, ExternalLink, X } from "lucide-react"
import { projects } from "../../public/data/projects"
import Image from "next/image"

export default function ProjectsSection() {
  const [selected, setSelected] = useState(null)

 

  return (
    <section
      id="projects"
      className="bg-gray-900 text-white px-6 md:px-20 py-20 min-h-screen"
    >
      <motion.h2
        className="text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-purple-500/50 hover:scale-105 transition-transform duration-300 flex flex-col cursor-pointer"
            // onClick={() => setSelected(project)}
          >
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-300 flex-1">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="bg-purple-600/30 text-purple-300 text-xs px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Modal */}
      {selected && (
        <motion.div
          className="fixed inset-0 bg-black/70 backdrop-blur-lg flex items-center justify-center z-50 px-6 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="bg-gray-800 rounded-xl shadow-2xl max-w-2xl w-full h-[80vh] p-6 relative flex flex-col justify-between"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition hover:cursor-pointer"
            >
              <X size={24} />
            </button>

            {/* Title */}
            <h3 className="text-3xl font-bold mb-4">{selected.title}</h3>

            {/* Image */}
            {selected.image && (
              <Image
                src={selected.image}
                alt={selected.title}
                width={600}
                height={400}
                className="rounded-lg mb-4 object-cover w-full h-50"
              />
            )}

            {/* Description */}
            <p className="text-gray-300 mb-4">{selected.description}</p>

            {/* Tech Stack */}
            <div className="mb-6 flex flex-wrap gap-2">
              {selected.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="bg-purple-600/30 text-purple-300 text-xs px-3 py-1 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex space-x-6">
              <a
                href={selected.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-gray-700 hover:bg-purple-600 px-4 py-2 rounded-lg transition"
              >
                <Github size={20} className="mr-2" /> Code
              </a>
              <a
                href={selected.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition"
              >
                <ExternalLink size={20} className="mr-2" /> Live Demo
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
