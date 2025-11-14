"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

import MyName from "@/components/name"
import HeroSplit from "@/components/SplitScreen"
import Navbar from "@/components/NavBar/NavBar"
import Experience from "@/components/Experience"
import TechStackSection from "@/components/TechStackSection/TechStackSection"
import CertificatesSection from "@/components/CertificatesSection/CertificatesSection"
import ProjectsSection from "@/components/ProjectSection/ProjectSection"
import ContactSection from "@/components/ContactSection/ContactSection"
import ContactButton from "@/components/ContactButton/ContactButton"
import Footer from "@/components/Footer/Footer"

export default function Home() {
  const [showSplit, setShowSplit] = useState(false)
  const [showContent, setShowContent] = useState(false)

  // Lock scroll initially
  useEffect(() => {
    document.body.style.overflow = "hidden"

    const timer1 = setTimeout(() => {
      setShowSplit(true) // show HeroSplit
    }, 2000)

    const timer2 = setTimeout(() => {
      setShowContent(true) // show rest of site
      document.body.style.overflow = "auto" // unlock scroll
    }, 3000) // unlock after HeroSplit

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      document.body.style.overflow = "auto"
    }
  }, [])

  return (
    <main className="bg-slate-950 min-h-screen ">
      <Navbar />

      {/* Hero Section */}
      {!showSplit && <MyName />}
      {showSplit && <HeroSplit />}

      {/* Rest of the site (appears after hero) */}
      {showContent && (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <TechStackSection />
          {/* <CertificatesSection /> */}
          <Experience />
          <ProjectsSection />
          <ContactSection />
          <ContactButton />
          <Footer />
        </motion.section>
      )}
    </main>
  )
}
