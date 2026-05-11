import Image from "next/image";
import Link from "next/link";
import { Sparkles, Search, Zap } from "lucide-react";

export default function AnimePage() {
  const animeCharacters = [
    { id: 1, name: "Elowen", age: 36, isNew: true, image: "https://images.unsplash.com/photo-1578632292335-df3abbb0d586?auto=format&fit=crop&w=400&q=80" },
    { id: 2, name: "Yama", age: 20, isNew: false, image: "https://images.unsplash.com/photo-1541562232579-512a21360020?auto=format&fit=crop&w=400&q=80" },
    { id: 3, name: "Sakura", age: 22, isNew: false, image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=400&q=80" },
    { id: 4, name: "Zero Two", age: 19, isNew: true, image: "https://images.unsplash.com/photo-1528493366416-28844baba18e?auto=format&fit=crop&w=400&q=80" },
    { id: 5, name: "Asuka", age: 24, isNew: false, image: "https://images.unsplash.com/photo-1559535332-db9971090158?auto=format&fit=crop&w=400&q=80" },
    { id: 6, name: "Rem", age: 21, isNew: false, image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?auto=format&fit=crop&w=400&q=80" },
  ];

  const filters = ["All", "Big Boobs", "Milf", "Fantasy", "School"];

  return (
    <div className="flex flex-col flex-1 pb-16 md:pb-24 bg-white">
      {/* Category Header */}
      <section className="w-full py-12 md:py-20 px-6 md:px-8 text-center border-b border-border bg-surface/30">
        <h1 className="text-3xl md:text-5xl font-black tracking-tight text-foreground">
          Explore <span className="text-primary">AI Anime Characters</span>
        </h1>
      </section>

      {/* Filters Bar */}
      <div className="max-w-7xl mx-auto w-full px-6 md:px-8 py-6 md:py-8 flex items-center gap-4 overflow-x-auto no-scrollbar">
        <button className="p-3 rounded-full bg-surface border border-border text-text-muted hover:text-primary transition-colors shrink-0">
          <Search className="w-5 h-5" />
        </button>
        {filters.map((filter) => (
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

      <section className="max-w-7xl mx-auto px-6 md:px-8 pb-20 w-full">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {animeCharacters.map((char) => (
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
