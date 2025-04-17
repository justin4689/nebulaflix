import { getPopularMovies } from "@/lib/actions/movie.action";
import MovieSection from "./MovieSection";

export default async function PopularMovie() {
  const popularMovies = await getPopularMovies();
  
  return (
    <MovieSection 
      movies={popularMovies} 
      title="Films Populaires" 
      emoji="🎥" 
      id="popular"
    />
  );
}
