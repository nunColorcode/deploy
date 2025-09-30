// Background.tsx (Client Component)
"use client"

import React from "react"
import { StarsBackground } from "./ui/stars-background"
import { ShootingStars } from "./ui/shooting-stars"

export default function Background() {
  return (
    <>
    
      <iframe
        src="https://www.youtube.com/embed/VangtodgL0Y?autoplay=1&loop=1&playlist=VangtodgL0Y&controls=0&mute=0&modestbranding=1"
        style={{ position: "absolute", width: 0, height: 0, border: "none" }}
        allow="autoplay"
        title="Background Music"
      />
    </>
  )
}
