"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress, SiTypescript, SiNextdotjs, SiPostman, SiVercel, SiGithub } from 'react-icons/si';

const SKILLS = [
  { name: "HTML", icon: <FaHtml5 className="w-12 h-12" /> },
  { name: "CSS", icon: <FaCss3Alt className="w-12 h-12" /> },
  { name: "JavaScript", icon: <FaJsSquare className="w-12 h-12" /> },
  { name: "TypeScript", icon: <SiTypescript className="w-12 h-12" /> },
  { name: "MongoDB", icon: <SiMongodb className="w-12 h-12" /> },
  { name: "Express", icon: <SiExpress className="w-12 h-12" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="w-12 h-12" /> },
  { name: "React", icon: <FaReact className="w-12 h-12" /> },
  { name: "Node.js", icon: <FaNodeJs className="w-12 h-12" /> },
  { name: "Next.js", icon: <SiNextdotjs className="w-12 h-12" /> },
  { name: "Postman", icon: <SiPostman className="w-12 h-12" /> },
  { name: "Vercel", icon: <SiVercel className="w-12 h-12" /> },
  { name: "GitHub", icon: <SiGithub className="w-12 h-12" /> },
];

export function Skills() {
  return (
    <div className="flex flex-col items-center justify-center gap-10 max-w-5xl mx-auto "> 
      <section className="py-10 px-4 md:px-8 ">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text"
        >
          Tech Stack
        </motion.h2>
        <div className="grid grid-cols-3 sm:grid-cols-4md:grid-cols-4 gap-4 max-w-xl mx-auto">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="glass-card hover-glow group">
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <motion.div className="w-12 h-12 md:w-16 md:h-16 relative mb-2" whileHover={{ scale: 1.1, rotate: 5 }}>
                    {skill.icon}
                  </motion.div>
                  <span className="text-white/90 group-hover:text-white transition-colors text-lg">{skill.name}</span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

