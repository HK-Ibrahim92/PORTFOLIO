'use client'

import { motion } from 'framer-motion'
import SparklesCore from './effects/Sparkle'
import { BackgroundRippleEffect } from './effects/BackgroundRippleEffect'

export default function MyName() {
  return (
    <main className="flex h-screen items-center justify-center bg-black">
     <BackgroundRippleEffect/>
      <motion.h1
        className="text-6xl font-extrabold text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3, ease: 'easeOut' }}

      >
        ✨ Hi, I&apos;m{" "}
        <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 
                         bg-clip-text text-transparent animate-pulse">
          Ibrahim Ahmed
        </span>

      </motion.h1>
    </main>
  )
}
