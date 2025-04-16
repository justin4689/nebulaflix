import { getTrendingMovies } from "@/lib/actions/movie.action";
import Link from "next/link";

export default async function TrendingMovies() {
  const trendingMovies = await getTrendingMovies();

  return (
    <div className="bg-black text-white">
      <section id="trending" className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6">🔥 Films Tendances</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {trendingMovies.map((movie: any) => (
            <Link href={`/movies/${movie.id}`} key={movie.id}>
              <div className="bg-zinc-900 rounded shadow hover:scale-105 transition">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-auto rounded-t"
                />
                <div className="p-4">
                  <h3 className="font-semibold truncate">{movie.title}</h3>
                  <p className="text-xs text-gray-400">{movie.release_date}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
