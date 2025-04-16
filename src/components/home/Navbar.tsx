import Link from "next/link";
import DesktopNavBar from "./DesktopNavBar";
import MobileNavBar from "./MobileNavBar";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-90 backdrop-blur border-b border-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        <Link href="/">
          <h1 className="text-xl font-bold tracking-widest bg-gradient-to-r from-purple-500 via-purple-800 to-white bg-clip-text text-transparent">
            NebulaFlix
          </h1>
        </Link>
            <DesktopNavBar />
            <MobileNavBar />
            
      </div>
    </nav>
  );
}
