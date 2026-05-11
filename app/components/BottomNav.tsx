"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Compass, PlusSquare, MessageCircle, Crown } from "lucide-react";

export function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", icon: Home, href: "/" },
    { name: "Discover", icon: Compass, href: "/discover" },
    { name: "Create", icon: PlusSquare, href: "/create" },
    { name: "Chat", icon: MessageCircle, href: "/chat" },
    { name: "Premium", icon: Crown, href: "/premium", isPremium: true },
  ];

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 w-full bg-white border-t border-border z-[100] px-4 py-2">
      <div className="flex items-center justify-between max-w-lg mx-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          if (item.isPremium) {
            return (
              <Link 
                key={item.name} 
                href={item.href} 
                className={`flex flex-col items-center gap-1 p-2 rounded-2xl transition-all ${
                  isActive ? "bg-primary text-white" : "bg-primary/10 text-primary border border-primary/20"
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? "fill-white" : "fill-primary/20"}`} />
                <span className="text-[10px] font-bold uppercase tracking-wider">{item.name}</span>
              </Link>
            );
          }

          return (
            <Link 
              key={item.name} 
              href={item.href} 
              className={`flex flex-col items-center gap-1 p-2 transition-colors ${
                isActive ? "text-primary" : "text-text-muted hover:text-primary"
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? "fill-primary/10" : ""}`} />
              <span className="text-[10px] font-bold uppercase tracking-wider">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
