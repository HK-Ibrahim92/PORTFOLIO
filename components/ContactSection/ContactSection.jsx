"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react"

export default function ContactSection() {
  const [status, setStatus] = useState("idle")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus("loading")

    const formData = new FormData(e.target)

    const res = await fetch("https://formspree.io/f/yourFormID", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    })

    if (res.ok) {
      setStatus("success")
      e.target.reset()
      setTimeout(() => setStatus("idle"), 4000) // hide popup after 4s
    } else {
      setStatus("error")
    }
  }

  return (
    <section
      id="contact"
      className="relative bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 md:px-20 py-24"
    >
      {/* Section Title */}
      <motion.h2
        className="text-5xl font-extrabold mb-16 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
          Let’s Connect
        </span>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Left: Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          <p className="text-lg text-gray-300 leading-relaxed">
            Have an idea or project in mind? Let’s collaborate and build
            something extraordinary together. Reach me through the form or
            directly via my contact details below.
          </p>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Mail className="text-purple-400" />
              <span>your@email.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="text-purple-400" />
              <span>+92 300 1234567</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="text-purple-400" />
              <span>Karachi, Pakistan</span>
            </div>
          </div>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl shadow-lg space-y-6 border border-white/10"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          ></textarea>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={status === "loading"}
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 px-6 py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-purple-500/50"
          >
            {status === "loading" ? "Sending..." : "🚀 Send Message"}
          </motion.button>
        </motion.form>
      </div>

      {/* ✅ Thank You Popup */}
      <AnimatePresence>
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 0.4 }}
            className="fixed bottom-10 right-10 bg-green-600 text-white px-6 py-4 rounded-xl shadow-lg flex items-center space-x-3 z-50"
          >
            <CheckCircle2 size={24} />
            <span>Thank you! I’ll get back to you soon.</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
