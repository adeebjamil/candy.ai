import Image from "next/image";
import Link from "next/link";
import { Sparkles, Search, Zap, PlayCircle } from "lucide-react";

export default function GirlsPage() {
  const characters = [
    { id: 1, name: "Isabella", age: 24, isNew: true, isLive: true, image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80" },
    { id: 2, name: "Vesper.Viie", age: 21, isNew: false, isLive: true, image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80" },
    { id: 3, name: "softbunny_xo", age: 23, isNew: true, isLive: false, image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80" },
    { id: 4, name: "Aria", age: 22, isNew: false, isLive: true, image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80" },
  ];

  const liveCharacters = [
    { id: 10, name: "Serena", status: "LIVE", viewers: "1.2k", image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80" },
    { id: 11, name: "Mila", status: "LIVE", viewers: "850", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80" },
    { id: 12, name: "Luna", status: "OFFLINE", viewers: "0", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80" },
  ];

  return (
    <div className="flex flex-col flex-1 pb-16 md:pb-24 bg-white">
      {/* Stories/Quick Access */}
      <div className="w-full px-6 md:px-8 py-6 md:py-8 flex gap-4 overflow-x-auto no-scrollbar border-b border-border">
        {characters.map((char) => (
          <div key={char.id} className="flex flex-col items-center gap-2 shrink-0 group cursor-pointer">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full p-1 bg-gradient-to-tr from-primary via-secondary to-pink-300">
               <div className="w-full h-full rounded-full border-2 border-white overflow-hidden relative">
                  <Image src={char.image} alt={char.name} fill className="object-cover group-hover:scale-110 transition-transform" />
               </div>
            </div>
            <span className="text-[11px] md:text-[13px] font-bold text-foreground truncate w-16 md:w-20 text-center">{char.name.split(" ")[0]}</span>
          </div>
        ))}
      </div>

      {/* Filters Bar */}
      <div className="max-w-7xl mx-auto w-full px-6 md:px-8 py-6 flex items-center gap-4 overflow-x-auto no-scrollbar">
        <button className="p-3 rounded-full bg-surface border border-border text-text-muted hover:text-primary transition-colors shrink-0">
          <Search className="w-5 h-5" />
        </button>
        {["All", "Popular", "New", "Verified", "Following"].map((filter) => (
          <button 
            key={filter} 
            className={`px-6 py-2.5 rounded-full font-bold text-sm md:text-base whitespace-nowrap transition-all border-2 ${
              filter === "All" ? "bg-foreground text-white border-foreground" : "bg-surface text-text-muted border-border hover:border-primary/20"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Live Action Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-8 w-full">
        <div className="flex items-center gap-3 mb-8">
           <h2 className="text-2xl md:text-3xl font-black tracking-tight">Jump into <span className="text-gradient">Live Action</span></h2>
           <span className="bg-foreground text-white text-[10px] font-black px-2 py-0.5 rounded-md uppercase">BETA</span>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {liveCharacters.map((char) => (
            <div key={char.id} className="group rounded-[1.5rem] md:rounded-[2rem] overflow-hidden relative aspect-square bg-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer">
              <Image src={char.image} alt={char.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              
              <div className="absolute top-3 left-3 flex items-center gap-2">
                 <div className={`flex items-center gap-1 px-2 py-1 rounded-lg text-[9px] font-black uppercase ${char.status === "LIVE" ? "bg-green-500 text-white" : "bg-white/20 text-white/80"}`}>
                    <div className={`w-1 h-1 rounded-full ${char.status === "LIVE" ? "bg-white animate-pulse" : "bg-white/50"}`} />
                    {char.status}
                 </div>
                 <div className="bg-black/30 backdrop-blur-md px-2 py-1 rounded-lg text-white text-[9px] font-black flex items-center gap-1">
                    <User className="w-2.5 h-2.5" />
                    {char.viewers}
                 </div>
              </div>

              <div className="absolute bottom-4 left-4">
                 <h3 className="text-white font-bold text-lg md:text-xl">{char.name}</h3>
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                 <div className="w-12 h-12 rounded-full bg-primary/90 text-white flex items-center justify-center shadow-2xl">
                    <PlayCircle className="w-8 h-8 fill-white" />
                 </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pb-20 w-full">
        <h2 className="text-2xl md:text-3xl font-black mb-8">All Characters</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {characters.map((char) => (
            <Link key={char.id} href={`/ai-girlfriend/${char.name.toLowerCase().replace(" ", "-")}`} className="group rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden relative aspect-[3/4.5] bg-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 md:hover:-translate-y-2 border border-border/50">
              <Image 
                src={char.image} 
                alt={char.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {char.isNew && (
                <div className="absolute top-4 right-4 z-10 bg-primary/90 backdrop-blur-md text-white px-3 py-1 rounded-xl flex items-center gap-1 text-[10px] md:text-xs font-black shadow-lg">
                  <Zap className="w-3 h-3 fill-white" />
                  NEW
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              
              <div className="absolute bottom-0 left-0 w-full p-4 md:p-8 transform transition-transform duration-500">
                <h3 className="text-white font-black text-xl md:text-3xl tracking-tight leading-tight flex items-center gap-2">
                  {char.name} <span className="text-white/60 text-lg md:text-2xl font-medium">{char.age}</span>
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
