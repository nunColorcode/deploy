"use client"

import React from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-8 pt-24 bg-gray-900 text-white">
      {/* Page Header */}
      <motion.div
        className="text-center space-y-4 mb-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Badge variant="secondary" className="mb-2">
          Contact
        </Badge>
        <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-pink-500 to-purple-500">
          Get in Touch
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          Have a project in mind or want to say hi? Fill out the form below and I’ll get back to you as soon as possible.
        </p>
      </motion.div>

      {/* Contact Form */}
      <motion.form
        className="w-full max-w-2xl bg-gray-800/50 border border-gray-700 rounded-xl p-8 space-y-6 backdrop-blur-md"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="flex-1 p-3 rounded-lg border border-gray-600 bg-gray-900 text-white focus:border-pink-500 focus:ring-1 focus:ring-pink-500 outline-none transition"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="flex-1 p-3 rounded-lg border border-gray-600 bg-gray-900 text-white focus:border-pink-500 focus:ring-1 focus:ring-pink-500 outline-none transition"
          />
        </div>

        <textarea
          placeholder="Your Message"
          rows={6}
          className="w-full p-3 rounded-lg border border-gray-600 bg-gray-900 text-white focus:border-pink-500 focus:ring-1 focus:ring-pink-500 outline-none transition"
        />

        <button
          type="submit"
          className="px-6 py-3 bg-gradient-to-r from-red-400 via-pink-500 to-purple-500 rounded-lg text-white font-semibold hover:scale-105 transition-transform duration-300"
        >
          Send Message
        </button>
      </motion.form>
    </div>
  )
}
