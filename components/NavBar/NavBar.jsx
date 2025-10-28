"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Menu, X } from "lucide-react" // for icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Certificates", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-lg shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl font-extrabold text-white"
        >
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
            Ibrahim.dev
          </span>
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          {navItems.map((item, i) => (
          

          <motion.li
          key={i}
          whileHover={{ scale: 1.1, color: "#a855f7" }}
          transition={{ type: "spring", stiffness: 300 }}
          >
              <Link href={item.href} className="hover:text-purple-400 hover:cursor-pointer transition-colors">

          <button
            onClick={() => {
              document.querySelector(item.href)?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }}
            className="hover:text-purple-400 hover:cursor-pointer transition-colors"
          >
            {item.name}
          </button>
          </Link>

          </motion.li>

          ))}
        </ul>

        {/* CV Button (Desktop) */}
        <a
          href="/Khawaja-Ibrahim-Ahmed__Resume.pdf"
          download
          className="hidden md:inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 px-5 py-2 rounded-lg font-semibold text-white transition-all transform hover:scale-105 shadow-lg"
        >
          Download CV
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-3xl focus:outline-none hover:cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-black/90 backdrop-blur-lg"
        >
          <ul className="flex flex-col items-center py-6 space-y-4 text-white font-medium">
            {navItems.map((item, i) => (
              <li key={i}>
                <Link
                  href={item.href}
                  className="hover:text-purple-400 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <a
              href="/Khawaja-Ibrahim-Ahmed__Resume.pdf"
              download
              className="mt-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 px-5 py-2 rounded-lg font-semibold text-white transition-all transform hover:scale-105 shadow-lg"
            >
              Download CV
            </a>
          </ul>
        </motion.div>
      )}
    </nav>
  )
}
