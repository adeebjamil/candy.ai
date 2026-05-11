"use client";

import { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ChevronLeft, 
  Send, 
  Image as ImageIcon, 
  Mic, 
  MoreVertical, 
  Heart, 
  MessageCircle, 
  Zap,
  Crown,
  CheckCircle2,
  Lock,
  Camera,
  Star,
  Flame,
  ArrowRight
} from "lucide-react";

export default function CharacterPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const [message, setMessage] = useState("");
  const [activeTab, setActiveTab] = useState("chat");

  const characterName = slug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

  return (
    <div className="flex flex-col h-[calc(100vh-72px)] md:h-screen bg-[#FAFAFA] overflow-hidden">
      {/* Immersive Header Overlay */}
      <header className="fixed top-0 left-0 right-0 z-[60] px-4 md:px-8 py-4 flex items-center justify-between pointer-events-none">
         <Link href="/girls" className="p-3 bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl text-white hover:bg-white/40 transition-all pointer-events-auto shadow-2xl">
            <ChevronLeft className="w-6 h-6" />
         </Link>
         <div className="flex items-center gap-3 pointer-events-auto">
            <button className="bg-white/20 backdrop-blur-xl border border-white/30 p-3 rounded-2xl text-white hover:bg-white/40 transition-all shadow-2xl">
               <Star className="w-6 h-6" />
            </button>
            <button className="bg-white/20 backdrop-blur-xl border border-white/30 p-3 rounded-2xl text-white hover:bg-white/40 transition-all shadow-2xl">
               <MoreVertical className="w-6 h-6" />
            </button>
         </div>
      </header>

      <div className="flex-1 flex flex-col md:flex-row overflow-hidden relative">
         {/* Left Side: Visual Experience */}
         <div className="w-full md:w-[45%] h-[50vh] md:h-full relative overflow-hidden bg-black group">
            <Image 
               src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80" 
               alt={characterName} 
               fill 
               className="object-cover transition-transform duration-[20s] linear animate-slow-pan group-hover:scale-110" 
               priority
            />
            {/* Visual Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            
            {/* Character Identity */}
            <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 space-y-4">
               <div className="flex items-center gap-3">
                  <div className="px-3 py-1 bg-primary text-white text-[10px] font-black rounded-full uppercase tracking-widest flex items-center gap-1 shadow-lg shadow-pink-500/50">
                     <Flame className="w-3 h-3 fill-white" />
                     Hot Choice
                  </div>
                  <div className="px-3 py-1 bg-white/10 backdrop-blur-md text-white text-[10px] font-black rounded-full uppercase tracking-widest border border-white/20">
                     Verified
                  </div>
               </div>
               
               <div>
                  <div className="flex items-center gap-3">
                     <h1 className="text-white text-4xl md:text-6xl font-black tracking-tight">{characterName}</h1>
                     <CheckCircle2 className="w-8 h-8 text-blue-400 fill-blue-400/10" />
                  </div>
                  <p className="text-white/70 text-lg md:text-xl font-medium mt-2 max-w-md">
                    Professional model, fitness enthusiast, and your next favorite companion. ✨
                  </p>
               </div>

               <div className="flex gap-4 pt-4">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-3xl flex flex-col items-center flex-1">
                     <span className="text-white/50 text-[10px] font-black uppercase mb-1">Status</span>
                     <span className="text-white text-sm font-bold flex items-center gap-1.5">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        Online
                     </span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-3xl flex flex-col items-center flex-1">
                     <span className="text-white/50 text-[10px] font-black uppercase mb-1">Messages</span>
                     <span className="text-white text-sm font-bold">12k+ Sent</span>
                  </div>
               </div>
            </div>
         </div>

         {/* Right Side: Interaction & Feed */}
         <div className="flex-1 flex flex-col bg-white rounded-t-[3rem] md:rounded-t-none md:rounded-l-[4rem] -mt-12 md:mt-0 relative z-10 shadow-[-20px_0_60px_rgba(0,0,0,0.1)] overflow-hidden">
            {/* Tabs Selector */}
            <div className="flex items-center gap-8 px-10 pt-10 pb-6 border-b border-border/50">
               <button 
                  onClick={() => setActiveTab("chat")}
                  className={`text-lg font-black transition-all relative ${activeTab === 'chat' ? 'text-foreground' : 'text-text-muted hover:text-foreground'}`}
               >
                  Chat
                  {activeTab === 'chat' && <div className="absolute -bottom-2 left-0 w-full h-1 bg-primary rounded-full animate-in slide-in-from-left" />}
               </button>
               <button 
                  onClick={() => setActiveTab("posts")}
                  className={`text-lg font-black transition-all relative ${activeTab === 'posts' ? 'text-foreground' : 'text-text-muted hover:text-foreground'}`}
               >
                  Feed
                  {activeTab === 'posts' && <div className="absolute -bottom-2 left-0 w-full h-1 bg-primary rounded-full animate-in slide-in-from-left" />}
               </button>
               <button 
                  onClick={() => setActiveTab("gallery")}
                  className={`text-lg font-black transition-all relative ${activeTab === 'gallery' ? 'text-foreground' : 'text-text-muted hover:text-foreground'}`}
               >
                  Gallery
                  {activeTab === 'gallery' && <div className="absolute -bottom-2 left-0 w-full h-1 bg-primary rounded-full animate-in slide-in-from-left" />}
               </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto p-6 md:p-10 space-y-8 custom-scrollbar">
               {activeTab === 'chat' ? (
                  <div className="space-y-8">
                     <div className="flex flex-col gap-6">
                        <div className="flex gap-4">
                           <div className="w-10 h-10 rounded-full bg-surface shrink-0 relative overflow-hidden border border-border">
                              <Image src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80" alt="avatar" fill className="object-cover" />
                           </div>
                           <div className="bg-surface/50 border border-border/50 p-5 rounded-[2rem] rounded-tl-none max-w-[85%]">
                              <p className="text-foreground font-medium leading-relaxed">Hey sweetheart! I'm so glad you stopped by my profile. I've been feeling a bit lonely today... want to chat? 💖</p>
                           </div>
                        </div>

                        {/* Premium Content Locked */}
                        <div className="flex gap-4">
                           <div className="w-10 h-10 rounded-full bg-surface shrink-0 relative overflow-hidden border border-border">
                              <Image src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80" alt="avatar" fill className="object-cover" />
                           </div>
                           <div className="bg-white border border-border p-3 rounded-[2rem] rounded-tl-none w-64 shadow-xl shadow-pink-50 group cursor-pointer relative overflow-hidden">
                              <div className="aspect-square bg-gray-100 rounded-[1.5rem] flex items-center justify-center filter blur-xl opacity-50 transition-all group-hover:blur-lg">
                                 <Camera className="w-12 h-12 text-text-muted" />
                              </div>
                              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                                 <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg mb-3">
                                    <Lock className="w-6 h-6 text-primary" />
                                 </div>
                                 <span className="text-foreground font-black text-xs uppercase tracking-wider mb-2">Private Photo</span>
                                 <button className="bg-primary text-white text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-tighter shadow-xl shadow-pink-200">Unlock Media</button>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               ) : (
                  <div className="grid grid-cols-2 gap-4">
                     {[1,2,3,4,5,6].map(i => (
                        <div key={i} className="aspect-[3/4] relative rounded-3xl overflow-hidden group cursor-pointer border border-border">
                           <Image src={`https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80&sig=${i}`} alt="post" fill className="object-cover transition-transform group-hover:scale-110" />
                           <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center backdrop-blur-sm">
                              <Crown className="w-10 h-10 text-primary fill-primary mb-2" />
                              <span className="text-white text-xs font-black uppercase">Unlock Photo</span>
                           </div>
                        </div>
                     ))}
                  </div>
               )}
            </div>

            {/* Input Floating Bar */}
            <div className="p-6 md:p-10">
               <div className="max-w-3xl mx-auto bg-surface border border-border shadow-2xl shadow-pink-50 p-2 rounded-[2.5rem] flex items-center gap-2">
                  <button className="p-4 hover:bg-white rounded-full text-text-muted transition-all">
                     <ImageIcon className="w-6 h-6" />
                  </button>
                  <input 
                     type="text" 
                     placeholder="Say something sweet..." 
                     className="flex-1 bg-transparent border-none focus:ring-0 font-bold text-foreground placeholder:text-text-muted/50"
                  />
                  <button className="p-4 hover:bg-white rounded-full text-text-muted transition-all">
                     <Mic className="w-6 h-6" />
                  </button>
                  <button className="bg-primary text-white p-4 rounded-full shadow-xl shadow-pink-200 hover:scale-105 transition-all">
                     <ArrowRight className="w-7 h-7" />
                  </button>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
