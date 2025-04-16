import Image from "next/image";
import { getPopularMovies } from "@/lib/actions/movie.action";
import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";
import PopularMovie from "@/components/home/PopularMovie";
import TrendingMovies from "@/components/home/TrendingMovies";
import UpcomingMovies from "@/components/home/UpcomingMovies";
import Footer from "@/components/home/Footer";
import { Suspense } from "react";
import PopularSectionSkeleton from "@/components/home/PopularSectionSkeleton";

export default async function Home() {
  return (
    <div>
      <Hero />
      <Suspense fallback={<PopularSectionSkeleton />}>
        <PopularMovie />
      </Suspense>
      <Suspense fallback={<PopularSectionSkeleton />}>
        <TrendingMovies />
      </Suspense>
      <Suspense fallback={<PopularSectionSkeleton />}>
        <UpcomingMovies />
      </Suspense>
    </div>
  );
}
