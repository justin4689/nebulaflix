// components/MovieCard.tsx

import Image from "next/image";
import Link from "next/link";

interface MovieCardProps {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
}

const MovieCard = ({ id, title, poster_path, release_date }: MovieCardProps) => {
  return (
    <Link
      href={`/movies/${id}`}
      className="bg-zinc-900 rounded shadow hover:scale-105 transition"
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
        width={500}
        height={750}
        className="w-full h-72 object-cover rounded-t"
      />
      <div className="p-2">
        <h2 className="text-sm font-semibold">{title}</h2>
        <p className="text-xs text-gray-400">{release_date}</p>
      </div>
    </Link>
  );
};

export default MovieCard;
