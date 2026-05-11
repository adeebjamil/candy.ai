"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Sparkles, X, Home, Compass, MessageCircle, Library, PlusCircle, User } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full h-[72px] glass border-b border-border flex items-center justify-between px-4 md:px-8">
        {/* Left section: Mobile menu & Logo */}
        <div className="flex items-center gap-2 md:gap-4">
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="lg:hidden text-text-muted hover:bg-surface p-2 rounded-xl transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
          <Link href="/" className="flex items-center gap-2 md:gap-3 group">
            <div className="w-[32px] h-[32px] md:w-[36px] md:h-[36px] bg-gradient-to-tr from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg shadow-pink-200 group-hover:scale-110 transition-transform duration-300">
              <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-white fill-white" />
            </div>
            <span className="font-black text-[20px] md:text-[24px] tracking-tight text-foreground">Candy<span className="text-primary">AI</span></span>
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
        <div className="flex items-center gap-3 md:gap-6">
          <Link href="/register" className="hidden sm:block text-[15px] font-bold text-text-muted hover:text-primary transition-colors whitespace-nowrap">
            Create Account
          </Link>
          <Link href="/login" className="text-[14px] md:text-[15px] font-bold bg-primary hover:bg-primary-hover text-white px-5 md:px-8 py-2 md:py-2.5 rounded-full transition-all whitespace-nowrap shadow-lg shadow-pink-100 hover:scale-[1.02] active:scale-[0.98]">
            Login
          </Link>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          ></div>
          
          {/* Menu Content */}
          <div className="absolute left-0 top-0 h-full w-[300px] bg-white shadow-2xl flex flex-col p-6 animate-in slide-in-from-left duration-300">
            <div className="flex items-center justify-between mb-8">
              <Link href="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                <div className="w-[30px] h-[30px] bg-gradient-to-tr from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white fill-white" />
                </div>
                <span className="font-black text-xl tracking-tight text-foreground">CandyAI</span>
              </Link>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="p-2 hover:bg-surface rounded-xl text-text-muted transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col gap-1 overflow-y-auto pr-2 custom-scrollbar">
              <Link href="/" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 px-4 py-3 rounded-2xl text-[15px] font-semibold text-primary bg-surface transition-all">
                <Home className="w-5 h-5" />
                Home
              </Link>
              <Link href="/discover" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 px-4 py-3 rounded-2xl text-[15px] font-medium text-text-muted hover:bg-surface hover:text-primary transition-all">
                <Compass className="w-5 h-5" />
                Discover
              </Link>
              <Link href="/chat" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 px-4 py-3 rounded-2xl text-[15px] font-medium text-text-muted hover:bg-surface hover:text-primary transition-all">
                <MessageCircle className="w-5 h-5" />
                Chat
              </Link>
              <Link href="/collection" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 px-4 py-3 rounded-2xl text-[15px] font-medium text-text-muted hover:bg-surface hover:text-primary transition-all">
                <Library className="w-5 h-5" />
                Collection
              </Link>
              <Link href="/create" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 px-4 py-3 rounded-2xl text-[15px] font-medium text-text-muted hover:bg-surface hover:text-primary transition-all">
                <PlusCircle className="w-5 h-5" />
                Create Character
              </Link>
              <Link href="/my-ai" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 px-4 py-3 rounded-2xl text-[15px] font-medium text-text-muted hover:bg-surface hover:text-primary transition-all">
                <User className="w-5 h-5" />
                My AI
              </Link>
              
              {/* Mobile Premium CTA - White background */}
              <div className="mt-6 bg-white border-2 border-primary/20 rounded-3xl p-5 flex flex-col items-center text-center cursor-pointer shadow-xl shadow-pink-50">
                <Crown className="w-24 h-24 text-primary/10 absolute -top-4 -right-4 rotate-12 pointer-events-none" />
                <Crown className="w-6 h-6 text-primary mb-2 fill-primary/10" />
                <span className="text-[16px] font-bold text-foreground mb-1">Premium</span>
                <span className="text-[12px] bg-primary text-white font-black px-3 py-1 rounded-full uppercase tracking-wider">-70%</span>
              </div>

              <div className="h-4"></div>
              
              <Link href="/help" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 px-4 py-3 rounded-2xl text-[14px] font-medium text-text-muted hover:text-primary transition-colors">
                <HelpCircle className="w-5 h-5" />
                Help Center
              </Link>
              <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 px-4 py-3 rounded-2xl text-[14px] font-medium text-text-muted hover:text-primary transition-colors">
                <div className="w-5 h-5 bg-foreground rounded-full flex items-center justify-center text-white font-bold text-[10px]">
                  N
                </div>
                Contact Us
              </Link>
            </nav>

            <div className="mt-auto pt-6 border-t border-border">
              <Link href="/register" onClick={() => setIsMenuOpen(false)} className="w-full flex items-center justify-center py-3 rounded-2xl font-bold text-primary border border-primary/20 mb-3">
                Create Account
              </Link>
              <Link href="/login" onClick={() => setIsMenuOpen(false)} className="w-full flex items-center justify-center py-3 rounded-2xl font-bold text-white bg-primary shadow-lg shadow-pink-100">
                Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}