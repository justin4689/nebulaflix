import { getUpcomingMovies } from "@/lib/actions/movie.action";
import MovieSection from "./MovieSection";

export default async function UpcomingMovies() {
  const upcomingMovies = await getUpcomingMovies();
  
  return (
    <MovieSection 
      movies={upcomingMovies} 
      title="Prochaines Sorties" 
      emoji="🍿" 
      id="upcoming"
    />
  );
}
