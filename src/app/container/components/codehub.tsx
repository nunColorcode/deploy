"use client"

import React, { useEffect, useRef } from "react"
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiLaravel,
  SiDjango,
  SiFlask,
  SiHtml5,
  SiCss3,
} from "react-icons/si"
import { gsap } from "gsap"

const techData = [
  { icon: SiReact, color: "#61dafb", name: "React.js" },
  { icon: SiNextdotjs, color: "#000000", name: "Next.js" },
  { icon: SiJavascript, color: "#f7df1e", name: "JavaScript" },
  { icon: SiTypescript, color: "#3178c6", name: "TypeScript" },
  { icon: SiNodedotjs, color: "#3c873a", name: "Node.js" },
  { icon: SiLaravel, color: "#ff2d20", name: "Laravel" },
  { icon: SiDjango, color: "#092e20", name: "Django" },
  { icon: SiFlask, color: "#000000", name: "Flask" },
  { icon: SiHtml5, color: "#e34f26", name: "HTML" },
  { icon: SiCss3, color: "#1572b6", name: "CSS" },
]

export default function Codehub() {
  const iconsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (iconsRef.current) {
      gsap.fromTo(
        iconsRef.current.children,
        { y: 0 },
        {
          y: -15,
          duration: 0.8,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          stagger: {
            each: 0.1,
            repeat: -1,
            yoyo: true,
          },
        }
      )
    }
  }, [])

  return (
    <div className="flex flex-col items-center justify-center py-10 text-white">
      <h2 className="text-2xl font-bold mb-6">The Stack</h2>

      <div
        ref={iconsRef}
        className="grid grid-cols-3 sm:grid-cols-6 gap-8 text-5xl"
      >
        {techData.map((tech, index) => {
          const IconComponent = tech.icon
          return (
            <IconComponent
              key={index}
              color={tech.color}
              title={tech.name}
              className="hover:scale-110 transition-transform duration-300"
            />
          )
        })}
      </div>
    </div>
  )
}
