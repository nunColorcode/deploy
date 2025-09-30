import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-red-400 via-pink-500 to-purple-500/70 backdrop-blur-md shadow-lg">
      <div className="flex justify-between items-center w-[80%] mx-auto py-3 text-white">
        <span className="font-bold text-lg">Dev</span>
        <ul className="flex gap-6">
          <li>
            <Link href="/about" className="hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link href="#developer" className="hover:underline">
              Developer
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
