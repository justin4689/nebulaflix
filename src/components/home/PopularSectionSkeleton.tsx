import React from "react";

const PopularSectionSkeleton = () => {
  const skeletons = Array(8).fill(null); // 8 cartes placeholder

  return (
    <section id="popular" className="p-6 bg-black text-white">
      <h2 className="text-3xl font-bold mb-6">🎥 Films Populaires</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skeletons.map((_, index) => (
          <div
            key={index}
            className="bg-zinc-900 rounded shadow animate-pulse"
          >
            <div className="w-full h-64 bg-zinc-800 rounded-t" />
            <div className="p-2 space-y-2">
              <div className="h-4 bg-zinc-700 rounded w-3/4" />
              <div className="h-3 bg-zinc-600 rounded w-1/2" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularSectionSkeleton;
