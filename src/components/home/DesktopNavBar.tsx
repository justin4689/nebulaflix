import React from 'react'
import Link from 'next/link'

const DesktopNavBar = () => {
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
          >
            Populaires
          </Link>
        </li>
        <li>
          <Link
            href="/#trending"
            className="hover:text-purple-800 transition duration-75 cursor-pointer"
          >
            Tendances
          </Link>
        </li>
        <li>
          <Link
            href="/#upcoming"
            className="hover:text-purple-800 transition duration-75 cursor-pointer"
          >
            À venir
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default DesktopNavBar
