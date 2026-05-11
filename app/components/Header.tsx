import Link from "next/link";
import { Menu, Sparkles } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full h-[60px] bg-white backdrop-blur-md border-b border-[#EAEAEA] flex items-center justify-between px-6 relative">
      {/* Left section: Mobile menu & Logo */}
      <div className="flex items-center gap-3">
        <button className="lg:hidden text-gray-700 hover:bg-gray-100 p-2 rounded-lg">
          <Menu className="w-5 h-5" />
        </button>
        <Link href="/" className="flex items-center gap-2">
          <div className="w-[30px] h-[30px] bg-gradient-to-tr from-button-secondary to-primary rounded-lg flex items-center justify-center text-white font-extrabold text-sm ml-2">
            <Sparkles className="w-4 h-4 text-white fill-white" />
          </div>
          <span className="font-extrabold text-[22px] tracking-tight text-black">CandyAI</span>
        </Link>
      </div>

      {/* Center section: Categories (Hidden on mobile) */}
      <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
        <Link href="/girls" className="text-[14px] font-bold text-black border-b-[3px] border-[#F4C2C2] py-[19px]">
          Girls
        </Link>
        <Link href="/anime" className="text-[14px] font-bold text-[#64748b] hover:text-black">
          Anime
        </Link>
        <Link href="/guys" className="text-[14px] font-bold text-[#64748b] hover:text-black">
          Guys
        </Link>
      </nav>

      {/* Right section: Auth Buttons */}
      <div className="flex items-center gap-4">
        <Link href="/register" className="hidden sm:flex text-[14px] font-extrabold items-center hover:opacity-70 transition-opacity whitespace-nowrap">
          Create Free Account
        </Link>
        <Link href="/login" className="text-[14px] font-extrabold bg-[#fbcfe8] hover:bg-[#F4C2C2] text-white px-6 py-2 rounded-full transition-colors whitespace-nowrap shadow-sm">
          Login
        </Link>
      </div>
    </header>
  );
}