



import { getMovieDetails } from '@/lib/actions/movie.action';
import { Movie } from '@/lib/type/movie.type';
import Image from 'next/image';
import Link from 'next/link';

export default async function MovieDetails({ params }: { params: Promise<{ id: string }> }) {

  const {id} =  await params;
  const movie = await getMovieDetails(id);

  if (!movie) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <h1 className="text-2xl">Film non trouvé</h1>
      </div>
    );
  }

  const backdropPath = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
  const posterPath = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  // Format runtime to hours and minutes
  const hours = Math.floor(movie.runtime / 60);
  const minutes = movie.runtime % 60;

  // Format date
  const releaseDate = new Date(movie.release_date).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-black text-white mt-16 md:mt-9">
      {/* Hero Section with Backdrop */}
      <div className="relative h-[60vh] w-full">
        <div className="absolute inset-0">
          <Image
            src={backdropPath}
            alt={movie.title}
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
        </div>

        {/* Movie Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 flex gap-8">
          <div className="relative w-48 h-72 flex-shrink-0">
            <Image
              src={posterPath}
              alt={movie.title}
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg shadow-2xl"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-2">{movie.title}</h1>
            <p className="text-gray-300 mb-4">
              {releaseDate} • {hours}h {minutes}min
            </p>
            <div className="flex gap-2 mb-4">
              {movie.genres.map((genre: Movie) => (
                <span
                  key={genre.id}
                  className="px-3 py-1 bg-purple-600 rounded-full text-sm"
                >
                  {genre.name}
                </span>
              ))}
            </div>
            <p className="text-lg italic text-gray-400 mb-4">{movie.tagline}</p>
            <h2 className="text-xl font-semibold mb-2">Synopsis</h2>
            <p className="text-gray-300">{movie.overview}</p>
          </div>
        </div>
      </div>

      {/* Cast Section */}
      <div className="p-8">
        {/* Trailer Section */}
        {movie.videos?.results?.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Bande-annonce</h2>
            <div className="relative aspect-video w-full max-w-4xl mx-auto">
              <iframe
                src={`https://www.youtube.com/embed/${movie.videos.results[0].key}`}
                title="Bande-annonce"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full rounded-lg"
              />
            </div>
          </div>
        )}

        <h2 className="text-2xl font-bold mb-4">Distribution principale</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {movie.credits.cast.slice(0, 6).map((actor: Movie) => (
            <div key={actor.id} className="text-center">
              <div className="relative w-full aspect-[2/3] mb-2">
                <Image
                  src={actor.profile_path != null
                    ? `https://image.tmdb.org/t/p/w300${actor.profile_path}`
                    : '/placeholder-actor.jpg'}
                  alt={actor.name ?? 'Actor'}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg"
                />
              </div>
              <p className="font-semibold">{actor.name}</p>
              <p className="text-sm text-gray-400">{actor.character}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Similar Movies Section */}
      {movie.similar.results.length > 0 && (
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-4">Films similaires</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {movie.similar.results.slice(0, 6).map((similar: Movie) => (
              <Link
                href={`/movies/${similar.id}`}
                key={similar.id}
                className="transition-transform hover:scale-105"
              >
                <div className="relative w-full aspect-[2/3] mb-2">
                  <Image
                    src={similar.poster_path != null
                      ? `https://image.tmdb.org/t/p/w300${similar.poster_path}`
                      : '/placeholder-movie.jpg'}
                    alt={similar.title ?? 'Movie'}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                <p className="font-semibold truncate">{similar.title}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
