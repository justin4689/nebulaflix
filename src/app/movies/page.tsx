import PopularSectionSkeleton from "@/components/home/PopularSectionSkeleton";
import AllMoviesPage from "@/components/movies/AllMoviesPage";
import { Suspense } from "react";

export default async function MoviesPage() {

  return (
    <div className="bg-black min-h-screen text-white p-6 mt-16 md:mt-8">
      <h1 className="text-3xl font-bold mb-6">🎬 Tous les Films</h1>

      <Suspense fallback={<PopularSectionSkeleton />}>
     <AllMoviesPage />
     </Suspense>
    </div>
  );
}
