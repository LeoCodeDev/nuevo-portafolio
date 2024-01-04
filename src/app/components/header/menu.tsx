'use client'
import Link from 'next/link'
import { Bars4Icon, XMarkIcon } from '@heroicons/react/24/outline'

import { useState } from 'react'
import { Href } from '.'

export interface MenuProps {
  hrefs: Href[]
}

const Menu = (props: MenuProps) => {
  const { hrefs } = props
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return !isMenuOpen ? (
    <div className="flex items-center mr-4">
      <Bars4Icon
        className="h-6 w-6 text-black"
        onClick={() => setIsMenuOpen(true)}
      />
    </div>
  ) : (
    <div
      className={
        isMenuOpen
          ? `fixed z-10 inset-0 flex justify-center items-center bg-blue-500`
          : 'hidden'
      }
    >
      <XMarkIcon
        className="absolute top-5 right-5 h-6 w-6 text-white"
        onClick={() => setIsMenuOpen(false)}
      />
      <ul>
        {hrefs.map((option) => (
          <li
            key={option.name}
            className="text-center text-white mb-4 border-b border-white"
          >
            <Link href={option.href}
            onClick={() => setIsMenuOpen(false)}
            >{option.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Menu
