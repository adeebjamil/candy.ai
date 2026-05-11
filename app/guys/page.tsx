import Image from "next/image";
import Link from "next/link";
import { User } from "lucide-react";

export default function GuysPage() {
  const guysCharacters = [
    { id: 1, name: "Liam", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80" },
    { id: 2, name: "Sebastian", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80" },
    { id: 3, name: "Noah", image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&q=80" },
    { id: 4, name: "Ethan", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80" },
    { id: 5, name: "Lucas", image: "https://images.unsplash.com/photo-1488161628813-04466f872be2?auto=format&fit=crop&w=400&q=80" },
    { id: 6, name: "Alexander", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80" },
  ];

  return (
    <div className="flex flex-col flex-1 pb-16 md:pb-24 bg-white">
      <section className="w-full bg-surface py-12 md:py-20 px-6 md:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl space-y-4 md:space-y-6">
            <div className="inline-flex items-center gap-2 bg-white px-3 md:px-4 py-1.5 md:py-2 rounded-2xl shadow-sm border border-border">
              <User className="w-4 h-4 text-primary" />
              <span className="text-[12px] md:text-[14px] font-bold text-primary tracking-wide uppercase">Guy Companions</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-foreground leading-tight">
              Perfect <br />
              <span className="text-gradient">Guy Companions</span>
            </h1>
            <p className="text-lg md:text-xl text-text-muted font-medium leading-relaxed max-w-xl">
              Discover charismatic, caring, and adventurous male AI companions.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-20 w-full">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {guysCharacters.map((char) => (
            <Link key={char.id} href={`/ai-girlfriend/${char.name.toLowerCase().replace(" ", "-")}`} className="group rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden relative aspect-[3/4.5] bg-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 md:hover:-translate-y-2">
              <Image 
                src={char.image} 
                alt={char.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="absolute bottom-0 left-0 w-full p-4 md:p-8 transform transition-transform duration-500 md:group-hover:-translate-y-2">
                <div className="flex items-center gap-1.5 md:gap-2 mb-1.5 md:mb-3">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-400 shadow-[0_0_8px_#4ade80]"></div>
                  <span className="text-white/90 text-[8px] md:text-xs font-black uppercase tracking-widest">Active Now</span>
                </div>
                <h3 className="text-white font-black text-lg md:text-3xl tracking-tight leading-tight">{char.name}</h3>
                <div className="mt-2 md:mt-4 flex gap-1.5 md:gap-2 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="bg-white/20 backdrop-blur-md text-white text-[8px] md:text-[10px] font-bold px-2 md:px-3 py-0.5 md:py-1 rounded-full border border-white/30 whitespace-nowrap">Guy</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
