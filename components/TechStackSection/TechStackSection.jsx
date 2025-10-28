"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function TechStackSection() {
    const techStack = [
        { name: "React", logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
        { name: "Next.js", logo: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg" },
        { name: "TailwindCSS", logo: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg" },
        { name: "Node.js", logo: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" },
        { name: "MongoDB", logo: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" },
        { name: "JavaScript", logo: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg" },
        { name: "TypeScript", logo: "https://cdn.worldvectorlogo.com/logos/typescript.svg" },
        { name: "GitHub", logo: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg" },
        { name: "AI Tools", logo: "https://cdn-icons-png.flaticon.com/512/4712/4712109.png" }, // generic AI icon
      ]
      

  return (
    <section
      id="tech"
      className="bg-black text-white px-6 md:px-20 py-5 overflow-hidden"
    >
      <motion.h2
       className="text-4xl font-extrabold mb-2 text-center bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        Tech Stack
      </motion.h2>

      {/* Infinite Scroll Container */}
      <div className="overflow-hidden py-8">
  <div className="flex animate-marquee space-x-20">
    {techStack.concat(techStack).map((tech, i) => (   // duplicate logos
      <div
        key={i}
        className="flex flex-col items-center group"
      >
        <img
          src={tech.logo}
          alt={tech.name}
          className="w-16 h-16 mb-2 drop-shadow-[0_0_0px_#9333ea] group-hover:drop-shadow-[0_0_15px_#9333ea] transition-all duration-300"
        />
        <p className="text-gray-400 text-sm group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
          {tech.name}
        </p>
      </div>
    ))}
  </div>
</div>

    </section>
  )
}
