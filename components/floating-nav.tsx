"use client"

import { motion } from "framer-motion"
import { Home, User, Briefcase, Mail } from "lucide-react"
import Link from "next/link"

const navItems = [
  { icon: Home, href: "#home", label: "Home" },
  { icon: User, href: "#skills", label: "Skills" },
  { icon: Briefcase, href: "#projects", label: "Projects" },
  { icon: Mail, href: "#contact", label: "Contact" },
]

export function FloatingNav() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50"
    >
      <nav className="flex space-x-1 bg-gray-800 bg-opacity-80 backdrop-blur-sm px-4 py-2 rounded-full">
        {navItems.map(({ icon: Icon, href, label }) => (
          <Link key={href} href={href}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 hover:bg-gray-700 rounded-full transition-colors"
            >
              <Icon className="w-6 h-6 text-white" />
              <span className="sr-only">{label}</span>
            </motion.div>
          </Link>
        ))}
      </nav>
    </motion.div>
  )
}

