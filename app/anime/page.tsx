import Image from "next/image";
import Link from "next/link";
import { Sparkles, Search, Zap } from "lucide-react";

export default function AnimePage() {
  const characters = [
    { id: 1, name: "Elowen", age: 36, isNew: true, image: "https://images.unsplash.com/photo-1578632292335-df3abbb0d586?auto=format&fit=crop&w=400&q=80" },
    { id: 2, name: "Yama", age: 20, isNew: false, image: "https://images.unsplash.com/photo-1541562232579-512a21360020?auto=format&fit=crop&w=400&q=80" },
    { id: 3, name: "Sakura", age: 22, isNew: false, image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=400&q=80" },
    { id: 4, name: "Zero Two", age: 19, isNew: true, image: "https://images.unsplash.com/photo-1528493366416-28844baba18e?auto=format&fit=crop&w=400&q=80" },
  ];

  return (
    <div className="flex flex-col flex-1 pb-16 md:pb-24 bg-white">
      {/* Stories/Quick Access */}
      <div className="w-full px-6 md:px-8 py-6 md:py-8 flex gap-4 overflow-x-auto no-scrollbar border-b border-border">
        {characters.map((char) => (
          <div key={char.id} className="flex flex-col items-center gap-2 shrink-0 group cursor-pointer">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full p-1 bg-gradient-to-tr from-purple-500 via-pink-500 to-primary">
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
        {["All", "Big Boobs", "Milf", "Fantasy", "School"].map((filter) => (
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

      {/* Hero Banner (Updated style) */}
      <section className="px-6 md:px-8 py-4">
         <div className="w-full aspect-[21/9] md:aspect-[21/6] rounded-[2rem] overflow-hidden relative bg-black group">
            <Image 
              src="https://images.unsplash.com/photo-1578632292335-df3abbb0d586?auto=format&fit=crop&w=1200&q=80" 
              alt="Anime Banner" 
              fill 
              className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent flex flex-col justify-center p-8 md:p-12">
               <h2 className="text-white text-3xl md:text-5xl font-black mb-4">Explore AI <br/><span className="text-primary">Anime Characters</span></h2>
               <button className="bg-primary text-white font-black px-8 py-3 rounded-full w-fit hover:scale-105 transition-all shadow-xl shadow-pink-500/20 uppercase tracking-wider text-sm">Subscribe</button>
            </div>
         </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16 w-full">
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
