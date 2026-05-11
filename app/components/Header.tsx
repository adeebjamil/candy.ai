import Link from "next/link";
import { Menu, Sparkles } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full h-[72px] glass border-b border-border flex items-center justify-between px-8">
      {/* Left section: Mobile menu & Logo */}
      <div className="flex items-center gap-4">
        <button className="lg:hidden text-text-muted hover:bg-surface p-2 rounded-xl transition-colors">
          <Menu className="w-6 h-6" />
        </button>
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-[36px] h-[36px] bg-gradient-to-tr from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg shadow-pink-200 group-hover:scale-110 transition-transform duration-300">
            <Sparkles className="w-5 h-5 text-white fill-white" />
          </div>
          <span className="font-black text-[24px] tracking-tight text-foreground">Candy<span className="text-primary">AI</span></span>
        </Link>
      </div>

      {/* Center section: Categories (Hidden on mobile) */}
      <nav className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
        <Link href="/girls" className="text-[15px] font-bold text-primary border-b-2 border-primary h-[72px] flex items-center">
          Girls
        </Link>
        <Link href="/anime" className="text-[15px] font-semibold text-text-muted hover:text-primary transition-colors h-[72px] flex items-center">
          Anime
        </Link>
        <Link href="/guys" className="text-[15px] font-semibold text-text-muted hover:text-primary transition-colors h-[72px] flex items-center">
          Guys
        </Link>
      </nav>

      {/* Right section: Auth Buttons */}
      <div className="flex items-center gap-6">
        <Link href="/register" className="hidden sm:block text-[15px] font-bold text-text-muted hover:text-primary transition-colors whitespace-nowrap">
          Create Account
        </Link>
        <Link href="/login" className="text-[15px] font-bold bg-primary hover:bg-primary-hover text-white px-8 py-2.5 rounded-full transition-all whitespace-nowrap shadow-lg shadow-pink-100 hover:scale-[1.02] active:scale-[0.98]">
          Login
        </Link>
      </div>
    </header>
  );
}