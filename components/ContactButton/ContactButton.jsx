"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Mail } from "lucide-react"

export default function ContactButton() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const contactSection = document.querySelector("#contact")

    if (!contactSection) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(false) // hide when Contact is visible
          } else {
            setVisible(true) // show otherwise
          }
        })
      },
      { threshold: 0.2 }
    )

    observer.observe(contactSection)

    return () => observer.disconnect()
  }, [])

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="contact-button"
          onClick={scrollToContact}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 p-4 rounded-full shadow-lg hover:shadow-purple-500/50 transition-all transform hover:scale-110 z-50"
        >
          <Mail className="text-white" size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
