"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import myPhoto from "@/public/ibrahim_redbg_ai.png" 
import { TextGenerateEffect } from "./effects/TextGenerateEffect"
import { TextRevealCard } from "./TextRevealCard"

export default function SplitScreen() {
  const words = `Craft modern MERN websites, Landing pages featuring animations and responsive design. My solutions are fast, responsive, and visually engaging, helping businesses and achieve real solutions. Deliver fast, high-quality results`;
  const [show, setShow] = useState(false)
// trigger split screen after 2s
  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 500)
    return () => clearTimeout(timer)
  }, [])

  if (!show) return null 

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
          <p className="text-xl md:text-2xl mb-6 text-gray-300 text-center md:text-left">
          Frontend Developer | MERN | Modern Animated Landing Pages | Dashboard Solutions
        </p>
        <div className="flex space-x-6">
       <button
  onClick={() => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  }}
  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 hover:cursor-pointer shadow-lg"
>
  Let’s Discuss Your Project
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
          width={300}
          height={350}
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
