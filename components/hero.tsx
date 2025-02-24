"use client"

import { motion } from "framer-motion"
import { TypewriterEffect } from "./typewriter-effect"
import { AnimatedBackground } from "./animated-background"

export function Hero() {
  const words = [
    {
      text: "Hi",
    },
    {
      text: "I",
    },
    {
      text: "'am",
    },
    {
      text: "Prabhjot",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "Singh.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ]

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-16 relative overflow-hidden">
      <AnimatedBackground />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-8">
          <TypewriterEffect words={words} />
        </h1>
        <motion.p
          className="text-xl md:text-2xl text-white/80 max-w-2xl py-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          I’m a Full-Stack Developer skilled in the MERN (MongoDB, Express, React, Node.js) stack, Next.js, and Tailwind CSS. I build responsive and scalable web applications I’m also exploring Web3, including blockchain, smart contracts, and decentralized applications. Always learning and improving my skills in modern web development.
        </motion.p>
      </motion.div>
    </section>
  )
}

