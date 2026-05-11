import { ReactNode } from "react";
import Link from "next/link";
import { Home, Compass, MessageCircle, Library, PlusCircle, User, Crown, HelpCircle, Rss } from "lucide-react";

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 border-r border-border bg-white flex flex-col justify-between py-8">
      {/* Top Links */}
      <nav className="flex flex-col gap-1 px-6">
        <div className="h-10"></div>

        <Link href="/" className="flex items-center gap-3 px-4 py-3 rounded-2xl text-[15px] font-semibold text-primary bg-surface transition-all duration-300">
          <Home className="w-[20px] h-[20px]" />
          Home
        </Link>
        <Link href="/discover" className="flex items-center gap-3 px-4 py-3 rounded-2xl text-[15px] font-medium text-text-muted hover:bg-surface hover:text-primary transition-all duration-300 group">
          <Compass className="w-[20px] h-[20px] group-hover:text-primary" />
          Discover
        </Link>
        <Link href="/feed" className="flex items-center gap-3 px-4 py-3 rounded-2xl text-[15px] font-medium text-text-muted hover:bg-surface hover:text-primary transition-all duration-300 group">
          <Rss className="w-[20px] h-[20px] group-hover:text-primary" />
          Feed
        </Link>
        <Link href="/chat" className="flex items-center gap-3 px-4 py-3 rounded-2xl text-[15px] font-medium text-text-muted hover:bg-surface hover:text-primary transition-all duration-300 group">
          <MessageCircle className="w-[20px] h-[20px] group-hover:text-primary" />
          Chat
        </Link>
        <Link href="/collection" className="flex items-center gap-3 px-4 py-3 rounded-2xl text-[15px] font-medium text-text-muted hover:bg-surface hover:text-primary transition-all duration-300 group">
          <Library className="w-[20px] h-[20px] group-hover:text-primary" />
          Collection
        </Link>
        <Link href="/create" className="flex items-center gap-3 px-4 py-3 rounded-2xl text-[15px] font-medium text-text-muted hover:bg-surface hover:text-primary transition-all duration-300 group">
          <PlusCircle className="w-[20px] h-[20px] group-hover:text-primary" />
          Create Character
        </Link>
        <Link href="/my-ai" className="flex items-center gap-3 px-4 py-3 rounded-2xl text-[15px] font-medium text-text-muted hover:bg-surface hover:text-primary transition-all duration-300 group">
          <User className="w-[20px] h-[20px] group-hover:text-primary" />
          My AI
        </Link>
        
        {/* Premium CTA - White background as requested */}
        <div className="mt-8 bg-white border-2 border-primary/20 rounded-3xl p-5 flex flex-col items-center text-center cursor-pointer hover:border-primary/50 transition-all duration-300 shadow-xl shadow-pink-50">
          <Crown className="w-[28px] h-[28px] text-primary mb-2 fill-primary/10" />
          <span className="text-[16px] font-bold text-foreground mb-1">Premium</span>
          <span className="text-[12px] bg-primary text-white font-black px-3 py-1 rounded-full uppercase tracking-wider">-70%</span>
        </div>
      </nav>

      {/* Bottom Links */}
      <nav className="flex flex-col gap-1 px-6 mt-auto">
        <Link href="/help" className="flex items-center gap-3 px-4 py-3 rounded-2xl text-[14px] font-medium text-text-muted hover:text-primary transition-colors group">
          <HelpCircle className="w-[18px] h-[18px] group-hover:text-primary" />
          Help Center
        </Link>
        <Link href="/contact" className="flex items-center gap-3 px-4 py-3 rounded-2xl text-[14px] font-medium text-text-muted hover:text-primary transition-colors group">
          <div className="w-[20px] h-[20px] bg-foreground rounded-full flex items-center justify-center text-white font-bold text-[10px]">
            N
          </div>
          Contact Us
        </Link>
      </nav>
    </aside>
  );
}