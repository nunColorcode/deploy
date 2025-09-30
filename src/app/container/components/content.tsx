"use client"

import Image from "next/image"
import React from "react"
import { motion } from "framer-motion"
import Codehub from "./codehub"

export default function Content() {
  return (
    <div className="text-white py-10">
      <div className="text-cyan-50 w-[80%] mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Animated Profile Section */}
        <motion.div
          className="w-1/3 text-center space-y-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Image with up-down animation and single rotation */}
          <motion.div
            animate={{
              y: ["0%", "-10%", "0%"], // Up-down movement
              rotate: [0, 360], // Rotate once
            }}
            transition={{
              y: {
                repeat: Infinity,
                repeatType: "mirror",
                duration: 2,
                ease: "easeInOut",
              },
              rotate: {
                duration: 2,
                ease: "easeInOut",
              },
            }}
          >
            <Image
              src="https://i.pinimg.com/736x/38/d4/54/38d454f74e873c8990f5e31e830a19d7.jpg"
              alt="img"
              width={200}
              height={200}
              className="rounded-full shadow-lg shadow-cyan-500/50"
            />
          </motion.div>

          {/* Text with staggered animations */}
          <motion.h3
            className="text-2xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Hello
          </motion.h3>

          <motion.span
            className="block text-lg text-cyan-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            I am a Front-End Developer
          </motion.span>

          <motion.span
            className="block text-sm text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores,
            tempora!
          </motion.span>
        </motion.div>

        {/* Codehub Component */}
        <div className="w-full md:w-1/2">
          <Codehub />
        </div>
      </div>
    </div>
  )
}
