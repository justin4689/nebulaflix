"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const progress = Math.min(scrollY / windowHeight, 1);
      setProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return progress;
}

export default function Hero() {
  const progress = useScrollProgress();
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const parallaxOffset = progress * 100; // Effet parallax sur l'image
  const textOpacity = Math.max(1 - progress * 2, 0); // Fade out du texte au scroll

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen bg-black text-white flex items-center justify-center overflow-hidden"
    >
      <div 
        className="absolute inset-0 transition-transform duration-1000"
        style={{ transform: `translateY(${parallaxOffset * 0.5}px)` }}
      >
        <Image
          src="/image1.jpg"
          alt="Nebula background"
          className="w-full h-full object-cover transition-opacity duration-1000"
          style={{ 
            opacity: Math.max(0.2 - progress * 0.2, 0),
          }}
          width={1920}
          height={1080}
          priority
        />
      </div>
      <div 
        className="relative z-10 text-center px-4 transition-all duration-1000 mt-96"
        style={{ 
          transform: `translateY(${-50 + parallaxOffset * -0.2}%) scale(${1 - progress * 0.1})`,
          opacity: textOpacity
        }}
      >
        <p 
          className={`text-xl md:text-2xl text-gray-300 mb-8 transition-all duration-1000 transform
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          Unlimited Movies. One Universe. 🌌
        </p>
        <Link 
          href={"/movies"}
          className={`relative inline-block bg-gradient-to-r from-red-500 hover:from-purple-600 hover:to-purple-900
            transition-all duration-1000 px-6 py-3 rounded text-lg font-semibold text-white shadow-md
            overflow-hidden z-10 group transform
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          style={{ transitionDelay: '200ms' }}
        >
          <span className="relative z-20">Explorer les films</span>
          <span className="absolute inset-0 bg-white opacity-20 blur-md group-hover:animate-shine" />
        </Link>
      </div>
    </div>
  );
}
