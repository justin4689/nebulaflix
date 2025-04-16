import React from 'react'

const DesktopNavBar = () => {
  return (
    <div className='hidden  md:block'>
           <ul className="flex gap-4 text-sm md:text-base">
          <li>
            <a
              href="#home"
              className="hover:text-purple-800 transition duration-75 cursor-pointer"
            >
              Accueil
            </a>
          </li>
          <li>
            <a
              href="#popular"
              className="hover:text-purple-800 transition duration-75 cursor-pointer"
            >
              Populaires
            </a>
          </li>
          <li>
            <a
              href="#trending"
              className="hover:text-purple-800 transition duration-75 cursor-pointer"
            >
              Tendances
            </a>
          </li>
          <li>
            <a
              href="#upcoming"
              className="hover:text-purple-800 transition duration-75 cursor-pointer"
            >
              À venir
            </a>
          </li>
        </ul>
      
    </div>
  )
}

export default DesktopNavBar
