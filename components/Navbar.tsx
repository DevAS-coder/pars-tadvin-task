'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const navLinks = [
  { href: '/', label: 'Home Page' },
  { href: '/list', label: 'Students List' },
  { href: '/add', label: 'Add Students' },
]

function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="bg-amber-300 sticky top-0 flex flex-col md:flex-row items-center justify-between md:justify-around px-4 py-4 shadow-sm">
      <h1 className="text-2xl font-bold text-center">Pars Tadvin Technical Task</h1>

      <div className="flex flex-wrap gap-4 items-center mt-2 md:mt-0">
        <span className="font-medium">Navigation:</span>
        {navLinks.map(({ href, label }) => {
          const isActive = pathname === href
          return (
            <Link
              key={href}
              href={href}
              className={`transition-all duration-200 ${
                isActive
                  ? 'text-indigo-600 border-b-2 border-indigo-600 font-semibold'
                  : 'text-gray-700 hover:text-indigo-500'
              }`}
            >
              {label}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

export default Navbar
