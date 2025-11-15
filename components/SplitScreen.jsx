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
    <div className="w-full min-h-screen flex flex-col justify-center items-center mt-12  pt-[5%] md:pt-0">
      <div className="flex flex-col-reverse md:flex-row  bg-slate-950 items-center justify-center px-6 md:px-20">
        {/* Left Side */}
        <motion.div
          className="flex-1 flex flex-col justify-center text-white"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-center md:text-left">
            Ibrahim Ahmed
          </h1>

          <p className="text-base sm:text-lg md:text-2xl lg:text-2xl mb-6 text-gray-300 text-center md:text-left">
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
  <div className="w-64 sm:w-72 md:w-80 lg:w-96 h-65 sm:h-auto overflow-hidden">
    <Image
      src={myPhoto}
      alt="Ibrahim Ahmed"
      className="rounded-2xl shadow-2xl w-full h-full object-cover object-top md:h-auto md:object-contain"
      width={300}
      height={350}
    />
  </div>
</motion.div>
      </div>
      <div className="flex justify-center items-center mt-5 ">
        <TextRevealCard
          text="Looking for a passionate frontend developer?"
          revealText="I craft high-performance UIs with React & Next.js 🚀"
        ></TextRevealCard>
      </div>
    </div>
  )
}
