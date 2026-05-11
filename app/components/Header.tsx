"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Menu, Sparkles, X, Home, Compass, MessageCircle, Library, PlusCircle, User, Crown, HelpCircle, ChevronDown, Gem, Venus, Mars, RefreshCw } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
          <div className="flex items-center gap-1 md:gap-3 relative" ref={dropdownRef}>
            <Link href="/" className="flex items-center gap-2 md:gap-3 group">
              <span className="font-black text-[20px] md:text-[24px] tracking-tight text-foreground">candy<span className="text-primary">.ai</span></span>
            </Link>
            
            {/* Category Switcher */}
            <div 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={`flex items-center gap-1 bg-surface px-2 py-1 rounded-lg cursor-pointer transition-all ${isDropdownOpen ? "ring-2 ring-primary/20 bg-primary/5" : "hover:bg-primary/5"}`}
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <ChevronDown className={`w-3 h-3 text-text-muted transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`} />
            </div>

            {/* Category Dropdown */}
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-2xl shadow-2xl border border-border py-2 animate-in fade-in zoom-in-95 duration-200 z-[60]">
                <Link 
                  href="/girls" 
                  onClick={() => setIsDropdownOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-[14px] font-bold text-text-muted hover:text-primary hover:bg-surface transition-all"
                >
                  <Venus className="w-4 h-4 text-pink-500" />
                  Girls
                </Link>
                <Link 
                  href="/anime" 
                  onClick={() => setIsDropdownOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-[14px] font-bold text-text-muted hover:text-primary hover:bg-surface transition-all"
                >
                  <RefreshCw className="w-4 h-4 text-purple-500" />
                  Anime
                </Link>
                <Link 
                  href="/guys" 
                  onClick={() => setIsDropdownOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-[14px] font-bold text-text-muted hover:text-primary hover:bg-surface transition-all"
                >
                  <Mars className="w-4 h-4 text-blue-500" />
                  Guys
                </Link>
              </div>
            )}
          </div>
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

        {/* Right section: Premium Button (Updated to match screenshot) */}
        <div className="flex items-center gap-3 md:gap-6">
          <Link href="/premium" className="flex items-center gap-2 bg-foreground text-white px-3 md:px-6 py-2 rounded-full hover:opacity-90 transition-all shadow-lg shadow-pink-100">
            <div className="w-5 h-5 bg-gradient-to-br from-purple-400 to-pink-500 rounded-md flex items-center justify-center">
              <Gem className="w-3 h-3 text-white fill-white" />
            </div>
            <span className="text-[11px] md:text-[13px] font-black uppercase tracking-wider flex items-center gap-1">
              Premium <span className="text-primary">70% OFF</span>
            </span>
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