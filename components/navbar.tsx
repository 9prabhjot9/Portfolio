"use client"

import Link from "next/link"
import { Github, Linkedin } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed w-full z-50 top-0 flex items-center justify-between px-4 py-4 md:px-8 glass-card"
    >
      <Link href="/" className="text-2xl font-bold gradient-text">
        
      </Link>
      <div className="flex items-center gap-6">
        {[
          { href: "https://github.com/9prabhjot9", icon: Github },
          { href: "https://www.linkedin.com/in/prabhjot-singh-0475ba278/", icon: Linkedin },
          { href: "https://x.com/9PrabhjotSingh9", icon: () => (
              <motion.div className="text-white/80 hover:text-white transition-colors"  whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <Image src="/twitters.png" alt="Twitter" width={24} height={24} className="w-6 h-6" />
              </motion.div>
            ) 
          },
        ].map(({ href, icon: Icon  }) => (
          <motion.a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-colors"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Icon className="w-6 h-6" />
          </motion.a>
        ))}
      </div>
    </motion.nav>
  )
}

