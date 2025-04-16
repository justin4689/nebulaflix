'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const MobileNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="md:hidden">
      <button onClick={toggleMenu} className="text-white p-2">
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-black text-center text-white z-50 shadow-lg animate-slide-down">
          <nav className="flex flex-col p-4 space-y-4">
            <Link href="#home" onClick={toggleMenu} className="hover:text-purple-400">
              Accueil
            </Link>
            <Link href="#popular" onClick={toggleMenu} className="hover:text-purple-400">
              Populaires
            </Link>
            <Link href="#trailers" onClick={toggleMenu} className="hover:text-purple-400">
              Tendances
            </Link>
            <Link href="#contact" onClick={toggleMenu} className="hover:text-purple-400">
              A venir
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
};

export default MobileNavBar;
