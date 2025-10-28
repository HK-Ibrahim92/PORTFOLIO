"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import myPhoto from "@/public/me.jpg" // your profile image
import { TextGenerateEffect } from "./effects/TextGenerateEffect"
import { TextRevealCard } from "./TextRevealCard"

export default function SplitScreen() {
  const [show, setShow] = useState(false)
  const words = `Craft high-quality, modern websites with MERN, and AI-powered features. My solutions are fast, responsive, and visually engaging, helping businesses impress clients and achieve real results.`;
  // trigger split screen after 2s
  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 500)
    return () => clearTimeout(timer)
  }, [])

  if (!show) return null // hide until triggered

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center mt-12">
    <div className="flex flex-col md:flex-row  bg-slate-950 items-center justify-center px-6 md:px-20">
      {/* Left Side */}
      <motion.div
        className="flex-1 flex flex-col justify-center text-white"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          Ibrahim Ahmed
        </h1>
        <p className="text-xl md:text-2xl mb-6 text-gray-300">
          Frontend Developer | MERN | AI Enthusiast
        </p>
        <div className="flex space-x-6">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all">
            Hire Me
          </button>
          <button className="bg-transparent border border-purple-600 hover:bg-purple-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all">
            View My Work
          </button>
        
        </div>
        <TextGenerateEffect words={words} />

      </motion.div>

      {/* Right Side */}
      <motion.div
        className="flex-1 flex justify-center mt-10 md:mt-0"
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <Image
          src={myPhoto}
          alt="Ibrahim Ahmed"
          className="rounded-2xl shadow-2xl"
          width={400}
          height={400}
        />
      </motion.div>
    </div>
     <div className="flex justify-center items-center mt-5">
            <TextRevealCard
              text="Looking for a passionate frontend developer?"
              revealText="I craft high-performance UIs with React & Next.js 🚀"
            ></TextRevealCard>
          </div>
    </div>
  )
}
