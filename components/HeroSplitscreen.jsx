"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import myPhoto from "@/public/me.jpg" // replace with your photo

export default function HeroSplit() {
  const [split, setSplit] = useState(false)

  // Trigger split animation after 3s
  useEffect(() => {
    const timer = setTimeout(() => setSplit(true), 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative flex h-screen w-full bg-black items-center justify-center overflow-hidden px-6 md:px-20">
      
      {/* Left Text + Buttons */}
      <motion.div
        // className="absolute md:relative flex flex-col justify-center text-white z-10 md:flex-1 items-center md:items-start"
        // initial={{ x: 0, y: 100, opacity: 0 }}
        // animate={{ x:50, y: 50, opacity: 1 }}
        // transition={{ duration: 1.2, ease: "easeOut" }}
        // Split animation
        // style={split ? { x: "-50%" } : {}}
        // transition={{ duration: 1.2, ease: "easeInOut" }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-center md:text-left">
          Ibrahim Ahmed
        </h1>
        <p className="text-xl md:text-2xl mb-6 text-gray-300 text-center md:text-left">
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
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="absolute md:relative flex justify-center mt-10 md:mt-0 md:flex-1"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        // Split animation
        style={split ? { x: "50%" } : {}}
        transition={{ duration: 1.2, ease: "easeInOut", delay: 3 }}
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
  )
}
