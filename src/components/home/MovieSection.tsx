"use client";

import { useEffect, useRef, useState } from "react";
import { Movie } from "@/lib/type/movie.type";
import Link from "next/link";

function useInView<T extends HTMLElement>(threshold = 0.1) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return [ref, isInView] as const;
}

function MovieCard({ movie, index }: { movie: Movie; index: number }) {
  const [ref, isInView] = useInView<HTMLDivElement>();

  return (
    <Link href={`/movies/${movie.id}`}>
      <div
        ref={ref}
        className={`bg-zinc-900 rounded shadow transition-all duration-700 transform
          ${isInView 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 translate-y-20"
          }`}
        style={{ transitionDelay: `${index * 100}ms` }}
      >
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.original_title}
          className="w-full h-auto rounded-t"
        />
        <div className="p-4">
          <h3 className="font-semibold truncate">{movie.original_title}</h3>
          <p className="text-xs text-gray-400">{movie.release_date}</p>
        </div>
      </div>
    </Link>
  );
}

export default function MovieSection({
  movies,
  title,
  emoji
}: {
  movies: Movie[];
  title: string;
  emoji: string;
}) {
  const [titleRef, isTitleInView] = useInView<HTMLHeadingElement>(0.1);
  const [gridRef, isGridInView] = useInView<HTMLDivElement>(0.1);

  return (
    <div className="bg-black text-white">
      <section className="container mx-auto px-4 py-12">
        <h2 
          ref={titleRef}
          className={`text-3xl font-bold mb-6 transition-all duration-700 transform
            ${isTitleInView 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-10"
            }`}
        >
          {emoji} {title}
        </h2>
        <div 
          ref={gridRef}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
        >
          {movies?.length > 0 ? (
            movies.map((movie, index) => (
              <MovieCard key={movie.id} movie={movie} index={index} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-400">
              Aucun film disponible pour le moment
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
