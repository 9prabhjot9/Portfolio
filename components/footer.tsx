"use client"

import { motion } from "framer-motion"

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-12 px-4 text-center"
    >
      <div className="max-w-md mx-auto glass-card p-8">
        <h3 className="text-2xl font-bold mb-4 gradient-text">Let's Connect</h3>
        <p className="text-white/80 mb-4">I'm always open to new opportunities and interesting projects.</p>
        <a
          href="mailto:ps459811@gmail.com"
          className="inline-block text-teal-400 hover:text-teal-300 transition-colors text-lg hover-glow px-4 py-2 rounded-full"
        >
          ps459811@gmail.com
        </a>
      </div>
    </motion.footer>
  )
}

