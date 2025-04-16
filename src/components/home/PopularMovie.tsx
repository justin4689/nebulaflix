import { getPopularMovies } from "@/lib/actions/movie.action";
import { Movie } from "@/lib/type/movie.type";
import Link from "next/link";

export default  async function PopularMovie() {
  const popularMovies = await getPopularMovies();
  return (
    <div className="bg-black text-white">
      <section id="popular" className="p-6">
        <h2 className="text-3xl font-bold mb-6">🎥 Films Populaires</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {popularMovies.map((movie:Movie) => (
            <Link href={`/movies/${movie.id}`} key={movie.id}>
            <div key={movie.id} className="bg-zinc-900 rounded shadow hover:scale-105 transition">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.original_title}
                className="w-full rounded-t"
              />
              <div className="p-2">
                <h3 className="text-sm font-medium">{movie.original_title}</h3>
                <p className="text-xs text-gray-400">{movie.release_date}</p>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </section>
     
    </div>
  );
};

