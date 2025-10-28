"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react"

export default function Footer() {
  const socials = [
    {
      name: "GitHub",
      icon: <Github size={22} />,
      href: "https://github.com/yourusername", // 🔗 replace
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={22} />,
      href: "https://linkedin.com/in/yourusername", // 🔗 replace
    },
    {
      name: "Email",
      icon: <Mail size={22} />,
      href: "mailto:your@email.com", // 🔗 replace
    },
  ]

  // Scroll back to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative bg-slate-950 backdrop-blur-lg text-gray-300 py-4 ">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
        
        {/* Branding */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-xl font-bold text-white"
        >
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
            Ibrahim.dev
          </span>
        </motion.div>

        {/* Social Links */}
        <div className="flex space-x-6">
          {socials.map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#a855f7" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-sm text-gray-400"
        >
          © {new Date().getFullYear()} Ibrahim Ahmed. All rights reserved.
        </motion.p>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute right-2 bottom-6 bg-purple-600 hover:bg-purple-700 p-3 rounded-full shadow-lg hover:shadow-purple-500/50 text-white transition-all hover:cursor-pointer"
      >
        <ArrowUp size={22} />
      </motion.button>
    </footer>
  )
}
