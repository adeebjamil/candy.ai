import { ReactNode } from "react";
import Link from "next/link";
import { Home, Compass, MessageCircle, Library, PlusCircle, User, Crown, HelpCircle } from "lucide-react";

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 border-r border-[#EAEAEA] bg-white flex flex-col justify-between py-6">
      {/* Top Links */}
      <nav className="flex flex-col gap-2 px-8">
        {/* Logo used to be here, moved to header! Add an empty spacer or just let the links flow. */}
        <div className="h-6"></div>

        <Link href="/" className="flex items-center gap-4 py-2.5 rounded-xl text-[16px] font-medium text-foreground hover:bg-gray-100 transition-colors">
          <Home className="w-[22px] h-[22px] text-[#475569]" />
          Home
        </Link>
        <Link href="/discover" className="flex items-center gap-4 py-2.5 rounded-xl text-[16px] font-medium text-[#64748B] hover:bg-gray-100 hover:text-foreground transition-colors">
          <Compass className="w-[22px] h-[22px]" />
          Discover
        </Link>
        <Link href="/chat" className="flex items-center gap-4 py-2.5 rounded-xl text-[16px] font-medium text-[#64748B] hover:bg-gray-100 hover:text-foreground transition-colors">
          <MessageCircle className="w-[22px] h-[22px]" />
          Chat
        </Link>
        <Link href="/collection" className="flex items-center gap-4 py-2.5 rounded-xl text-[16px] font-medium text-[#64748B] hover:bg-gray-100 hover:text-foreground transition-colors">
          <Library className="w-[22px] h-[22px]" />
          Collection
        </Link>
        <Link href="/create" className="flex items-center gap-4 py-2.5 rounded-xl text-[16px] font-medium text-[#64748B] hover:bg-gray-100 hover:text-foreground transition-colors">
          <PlusCircle className="w-[22px] h-[22px]" />
          Create Character
        </Link>
        <Link href="/my-ai" className="flex items-center gap-4 py-2.5 rounded-xl text-[16px] font-medium text-[#64748B] hover:bg-gray-100 hover:text-foreground transition-colors">
          <User className="w-[22px] h-[22px]" />
          My AI
        </Link>
        
        {/* Premium CTA */}
        <div className="mt-4 bg-[#FFE8E8] rounded-2xl p-4 flex flex-col justify-center items-center text-center cursor-pointer hover:bg-[#FCD3D3] transition-colors border-none">
          <Crown className="w-[26px] h-[26px] text-[#F4C2C2] mb-1 fill-[#F4C2C2] opacity-80" />
          <span className="text-[15px] font-bold text-black mb-1">Premium</span>
          <span className="text-[12px] bg-[#F4C2C2] text-white font-extrabold px-3 py-0.5 rounded-full">-70%</span>
        </div>
      </nav>

      {/* Bottom Links */}
      <nav className="flex flex-col gap-2 px-8 mt-auto">
        <Link href="/help" className="flex items-center gap-4 py-2.5 rounded-xl text-[15px] font-medium text-[#64748B] hover:text-foreground transition-colors">
          <HelpCircle className="w-[22px] h-[22px]" />
          Help Center
        </Link>
        <Link href="/contact" className="flex items-center gap-4 py-2.5 rounded-xl text-[15px] font-medium text-[#64748B] hover:text-foreground transition-colors">
          <div className="w-[22px] h-[22px] bg-[#2E333D] rounded-full flex items-center justify-center text-white font-medium text-[12px]">
            N
          </div>
          Contact Us
        </Link>
      </nav>
    </aside>
  );
}