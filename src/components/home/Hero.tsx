import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-black text-white flex items-center justify-center">
      <div className="absolute inset-0">
        <Image
          src="/nebulaflix.jpg"
          alt="Nebula background"
          className="w-full h-full object-cover opacity-20"
          width={1920}
          height={1080}
        />
        {/* <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black" /> */}
      </div>
      <div className="relative top-44 transform -translate-y-1/2 z-10 text-center px-4">
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Unlimited Movies. One Universe. 🌌
        </p>
        <Link href={"/movies"}
          className="relative inline-block bg-gradient-to-r from-red-500  hover:from-purple-600 hover:to-purple-900 transition px-6 py-3 rounded text-lg font-semibold text-white shadow-md overflow-hidden z-10 group"
        >
          <span className="relative z-20">Explorer les films</span>
          <span className="absolute inset-0 bg-white opacity-20 blur-md group-hover:animate-shine" />
        </Link>
      </div>
    </div>
  );
}
