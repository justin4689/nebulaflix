import { getTrendingMovies } from "@/lib/actions/movie.action";
import MovieSection from "./MovieSection";

export default async function TrendingMovies() {
  const trendingMovies = await getTrendingMovies();
  
  return (
    <MovieSection 
      movies={trendingMovies} 
      title="Films Tendances" 
      emoji="🔥" 
    />
  );
}
