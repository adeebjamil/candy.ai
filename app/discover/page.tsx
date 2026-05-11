"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Heart, MessageCircle, Share2, Music2, UserPlus, Volume2, VolumeX, ChevronDown, ChevronUp } from "lucide-react";

export default function DiscoverPage() {
  const [activeReelIndex, setActiveReelIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);

  const reels = [
    {
      id: 1,
      name: "Simona Rossi",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
      description: "Getting ready for the beach! 🌊✨ #summer #vibes",
      music: "Original Sound - Simona Rossi",
      likes: "45.2k",
      comments: "1.2k"
    },
    {
      id: 2,
      name: "Elowen",
      image: "https://images.unsplash.com/photo-1578632292335-df3abbb0d586?auto=format&fit=crop&w=800&q=80",
      description: "New cosplay day! Do you like this character? 🌸 #cosplay #anime",
      music: "Lo-fi Hip Hop - Anime Dreams",
      likes: "12.8k",
      comments: "840"
    },
    {
      id: 3,
      name: "Sakura",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
      description: "Night city walks are my favorite... 🌃 #citylight #nightout",
      music: "Synthwave Vibes - Night Rider",
      likes: "89.5k",
      comments: "4.5k"
    }
  ];

  const handleScroll = (e: any) => {
    const scrollPos = e.target.scrollTop;
    const windowHeight = e.target.clientHeight;
    const index = Math.round(scrollPos / windowHeight);
    setActiveReelIndex(index);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-72px)] md:h-[calc(100vh-0px)] bg-black overflow-hidden relative">
      {/* Mobile Top Header Overlay */}
      <div className="absolute top-0 left-0 w-full z-50 p-6 flex justify-between items-center bg-gradient-to-b from-black/60 to-transparent">
         <h1 className="text-white text-xl font-black tracking-tight">Discover</h1>
         <div className="flex gap-4">
            <span className="text-white font-bold border-b-2 border-white pb-1">For You</span>
            <span className="text-white/60 font-bold">Following</span>
         </div>
      </div>

      {/* Reels Container */}
      <div 
        className="flex-1 overflow-y-scroll snap-y snap-mandatory no-scrollbar"
        onScroll={handleScroll}
      >
        {reels.map((reel, i) => (
          <div key={reel.id} className="h-full w-full snap-start relative bg-neutral-900">
            {/* Reel Media (Image Placeholder for Video) */}
            <div className="absolute inset-0">
               <Image 
                 src={reel.image} 
                 alt={reel.name} 
                 fill 
                 className="object-cover opacity-90"
               />
               {/* Dark Overlay for UI contrast */}
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
            </div>

            {/* Right Side Actions */}
            <div className="absolute right-4 bottom-24 flex flex-col items-center gap-6 z-30">
               <div className="flex flex-col items-center gap-1 group">
                  <div className="w-12 h-12 rounded-full bg-white border-2 border-primary overflow-hidden relative">
                     <Image src={reel.image} alt={reel.name} fill className="object-cover" />
                  </div>
                  <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center -mt-3 relative z-10 border-2 border-black">
                     <UserPlus className="w-3 h-3 text-white" />
                  </div>
               </div>

               <div className="flex flex-col items-center gap-1">
                  <div className="w-12 h-12 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center cursor-pointer hover:bg-black/40 transition-all">
                     <Heart className="w-7 h-7 text-white fill-white/10 group-hover:fill-primary" />
                  </div>
                  <span className="text-white text-[12px] font-bold">{reel.likes}</span>
               </div>

               <div className="flex flex-col items-center gap-1">
                  <div className="w-12 h-12 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center cursor-pointer hover:bg-black/40 transition-all">
                     <MessageCircle className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-white text-[12px] font-bold">{reel.comments}</span>
               </div>

               <div className="flex flex-col items-center gap-1">
                  <div className="w-12 h-12 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center cursor-pointer hover:bg-black/40 transition-all">
                     <Share2 className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-white text-[12px] font-bold">Share</span>
               </div>

               {/* Mute Toggle */}
               <div 
                 onClick={() => setIsMuted(!isMuted)}
                 className="w-12 h-12 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center cursor-pointer"
               >
                  {isMuted ? <VolumeX className="w-6 h-6 text-white" /> : <Volume2 className="w-6 h-6 text-white" />}
               </div>
            </div>

            {/* Bottom Content */}
            <div className="absolute bottom-0 left-0 w-full p-6 pb-24 md:pb-12 z-20">
               <div className="max-w-xl space-y-3">
                  <h3 className="text-white text-xl font-black flex items-center gap-2">
                    @{reel.name.toLowerCase().replace(" ", "")}
                    <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                       <div className="w-1.5 h-1.5 bg-white rounded-full" />
                    </div>
                  </h3>
                  <p className="text-white/90 text-sm md:text-base font-medium line-clamp-2">
                    {reel.description}
                  </p>
                  <div className="flex items-center gap-2 text-white/80">
                     <Music2 className="w-4 h-4 animate-pulse" />
                     <span className="text-xs font-bold truncate">{reel.music}</span>
                  </div>
               </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Hints */}
      <div className="hidden md:flex absolute right-10 top-1/2 -translate-y-1/2 flex-col gap-4 z-40">
         <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all">
            <ChevronUp className="w-6 h-6" />
         </button>
         <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all">
            <ChevronDown className="w-6 h-6" />
         </button>
      </div>
    </div>
  );
}