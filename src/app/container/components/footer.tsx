"use client"

import React from "react"
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 border-t border-gray-700">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Logo / Branding */}
        <div className="text-white font-bold text-lg">Developer</div>

        {/* Navigation Links */}
        <ul className="flex gap-6">
          <li>
            <Link href="#about" className="hover:text-white transition-colors">About</Link>
          </li>
          <li>
            <Link href="#developer" className="hover:text-white transition-colors">Developer</Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="flex gap-4 text-xl">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <FaTwitter />
          </a>
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-center text-sm text-gray-500 mt-6">
        &copy; {new Date().getFullYear()} NUN. All rights reserved.
      </p>
    </footer>
  )
}
