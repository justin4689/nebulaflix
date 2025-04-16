const API_KEY = process.env.TMDB_API_KEY;
console.log(API_KEY);

const BASE_URL = "https://api.themoviedb.org/3";

export async function getPopularMovies() {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}&language=fr-FR`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
  }
}

// lib/actions/movie.action.ts
export async function getMovieDetails(id: string) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_API_KEY}&language=fr-FR&append_to_response=credits,videos,similar`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    return null;
  }
}

export async function getAllMovies(page: number = 1, query?: string) {
  try {
    const url = query
    ? `${BASE_URL}/search/movie?api_key=${process.env.TMDB_API_KEY}&language=fr-FR&query=${encodeURIComponent(query)}&page=${page}`
    : `${BASE_URL}/movie/popular?api_key=${process.env.TMDB_API_KEY}&language=fr-FR&page=${page}`;

    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    return {
      results: data.results,
      total_pages: data.total_pages,
      total_results: data.total_results,
      current_page: data.page
    };
  } catch (error) {
    console.error('Error fetching movies:', error);
    return {
      results: [],
      total_pages: 0,
      total_results: 0,
      current_page: 1
    };
  }
}

export async function getTrendingMovies() {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.TMDB_API_KEY}&language=fr-FR`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    return [];
  }
}

export async function getUpcomingMovies() {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMDB_API_KEY}&language=fr-FR&region=FR`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching upcoming movies:', error);
    return [];
  }
}