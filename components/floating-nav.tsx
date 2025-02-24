"use client"

import { motion } from "framer-motion"
import { Home } from "lucide-react"
import Link from "next/link"

export function FloatingNav() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="fixed bottom-4 right-4 z-50"
    >
      <Link href="#home">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="p-3 bg-gray-800 bg-opacity-80 backdrop-blur-sm rounded-full hover:bg-gray-700 transition-colors"
        >
          <Home className="w-6 h-6 text-white" />
          <span className="sr-only">Home</span>
        </motion.div>
      </Link>
    </motion.div>
  )
}
