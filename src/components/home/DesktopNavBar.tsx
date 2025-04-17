"use client";

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useScrollTo } from '@/lib/hooks/useScrollTo'

const DesktopNavBar = () => {
  const pathname = usePathname()
  const scrollTo = useScrollTo()

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (pathname === '/') {
      e.preventDefault()
      scrollTo(id)
    }
  }

  return (
    <div className='hidden md:block'>
      <ul className="flex gap-4 text-sm md:text-base">
        <li>
          <Link
            href="/"
            className="hover:text-purple-800 transition duration-75 cursor-pointer"
          >
            Accueil
          </Link>
        </li>
        <li>
          <Link
            href="/#popular"
            className="hover:text-purple-800 transition duration-75 cursor-pointer"
            onClick={(e) => handleNavClick(e, 'popular')}
          >
            Populaires
          </Link>
        </li>
        <li>
          <Link
            href="/#trending"
            className="hover:text-purple-800 transition duration-75 cursor-pointer"
            onClick={(e) => handleNavClick(e, 'trending')}
          >
            Tendances
          </Link>
        </li>
        <li>
          <Link
            href="/#upcoming"
            className="hover:text-purple-800 transition duration-75 cursor-pointer"
            onClick={(e) => handleNavClick(e, 'upcoming')}
          >
            À venir
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default DesktopNavBar
