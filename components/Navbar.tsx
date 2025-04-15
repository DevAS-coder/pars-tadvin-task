'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function Navbar() {
  const pathname = usePathname()

  const navLinks = [
    { href: '/', label: 'Home Page' },
    { href: '/list', label: 'Students List' },
    { href: '/add', label: 'Add Students' },
  ]

  return (
    <div className='bg-amber-300 sticky top-0 h-15 flex justify-around items-center py-4'>
      <div>
        <h1 className='text-2xl font-bold'>Pars Tadvin Technical Task</h1>
      </div>
      <div className='flex w-1/4 justify-between items-center'>
        <p>Navigation:</p>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`hover:text-indigo-500 ${
              pathname === link.href ? 'border-b-2 border-indigo-500 text-indigo-500 font-semibold' : ''
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Navbar
