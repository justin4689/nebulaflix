"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Movie } from "@/lib/type/movie.type";
import Image from "next/image";

function useInView(options = { threshold: 0.1 }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, isInView] as const;
}

function MovieCard({ movie }: { movie: Movie }) {
  const [ref, isInView] = useInView();

  return (
    <Link href={`/movies/${movie.id}`}>
      <div
        ref={ref}
        className={`bg-zinc-900 rounded shadow transition-all duration-700 transform
          ${isInView 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 translate-y-20"
          }`}
      >
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          width={500}
          height={720}
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

export default function AnimatedMovieGrid({
  movies,
  title,
  emoji
}: {
  movies: Movie[];
  title: string;
  emoji: string;
}) {
  const [titleRef, isTitleInView] = useInView();

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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {movies?.length > 0 ? (
            movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
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
