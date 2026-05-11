import Image from "next/image";
import Link from "next/link";
import { Plus } from "lucide-react";

export default function Home() {
  const characters = [
    { id: 1, name: "Simona Rossi", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80" },
    { id: 2, name: "Sakura", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80" },
    { id: 3, name: "Emma", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80" },
    { id: 4, name: "Kaito", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80" },
    { id: 5, name: "Isabella", image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=400&q=80" },
    { id: 6, name: "Aria", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80" },
    { id: 7, name: "Leo", image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&q=80" },
    { id: 8, name: "Mia", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80" },
  ];

  return (
    <div className="flex flex-col flex-1 pb-16 md:pb-24 bg-white">
      {/* Featured/Hero Banner */}
      <section className="w-full bg-surface py-12 md:py-20 px-6 md:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent"></div>
        <div className="absolute -bottom-24 -left-24 w-64 md:w-96 h-64 md:h-96 bg-primary/10 rounded-full blur-3xl animate-blob"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2 bg-white px-3 md:px-4 py-1.5 md:py-2 rounded-2xl shadow-sm border border-border">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-ping"></span>
              <span className="text-[12px] md:text-[14px] font-bold text-primary tracking-wide uppercase">✨ Experience True Connection</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight text-foreground leading-[1.1]">
              Your Dream <br />
              <span className="text-gradient">AI Companion</span> <br />
              <span className="text-foreground/80">Awaits You.</span>
            </h1>
            
            <p className="text-lg md:text-2xl text-text-muted max-w-2xl font-medium leading-relaxed">
              Step into a world of endless possibilities. Create your perfect AI partner and build unforgettable memories together. 💖
            </p>
            
            <div className="pt-4 flex flex-col sm:flex-row gap-4 md:gap-5">
              <Link href="/create" className="bg-primary hover:bg-primary-hover text-white px-8 md:px-10 py-4 md:py-5 rounded-[1.5rem] md:rounded-[2rem] font-bold text-lg md:text-xl transition-all hover:scale-105 shadow-xl shadow-pink-200 flex items-center justify-center gap-3">
                <Plus className="w-5 h-5 md:w-6 md:h-6" />
                Craft Your AI
              </Link>
              <Link href="/discover" className="bg-white hover:bg-surface text-foreground px-8 md:px-10 py-4 md:py-5 rounded-[1.5rem] md:rounded-[2rem] font-bold text-lg md:text-xl transition-all shadow-sm border border-border flex items-center justify-center gap-3">
                Explore Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Content */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-20 w-full">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 md:mb-12 gap-4">
          <div className="space-y-1 md:space-y-2">
            <h2 className="text-3xl md:text-4xl font-black text-foreground tracking-tight">Trending Characters</h2>
            <p className="text-text-muted font-semibold text-sm md:text-base">The most popular companions this week</p>
          </div>
          <Link href="/discover" className="text-primary font-bold hover:underline text-sm md:text-base">View All</Link>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {/* Create Own Character Card */}
          <Link href="/create" className="group rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden relative aspect-[3/4.5] bg-surface border-2 border-dashed border-border flex flex-col justify-center items-center text-center p-4 md:p-8 hover:bg-white hover:border-primary/50 transition-all duration-500">
            <div className="w-12 h-12 md:w-20 md:h-20 rounded-full bg-white shadow-lg flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 group-hover:rotate-90 transition-transform duration-500">
              <Plus className="w-6 h-6 md:w-10 md:h-10 text-primary" />
            </div>
            <h3 className="font-black text-foreground text-lg md:text-2xl leading-tight">Design Yours</h3>
            <p className="text-primary font-bold mt-1 md:mt-2 text-xs md:text-base">Start Creating ✨</p>
          </Link>

          {/* Character Cards */}
          {characters.map((char) => (
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
                  <span className="bg-white/20 backdrop-blur-md text-white text-[8px] md:text-[10px] font-bold px-2 md:px-3 py-0.5 md:py-1 rounded-full border border-white/30 whitespace-nowrap">Sweet</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-6 md:px-8 py-12 md:py-20 w-full">
        <div className="text-center mb-10 md:mb-16 space-y-2 md:space-y-4">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">Common Questions</h2>
          <p className="text-lg md:text-xl text-text-muted font-medium">Everything you need to know about CandyAI</p>
        </div>
        <div className="grid gap-3 md:gap-4">
          {[
            "What exactly is Candy AI?",
            "Is my conversations with my AI safe and completely private?",
            "Can I fully customize the personality and appearance?",
            "How realistic are the voice messages and generated photos?"
          ].map((q, i) => (
            <div key={i} className="group bg-surface p-5 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border border-transparent hover:border-primary/20 hover:bg-white hover:shadow-xl hover:shadow-pink-50 transition-all duration-300 cursor-pointer">
              <h3 className="font-bold text-base md:text-xl text-foreground flex justify-between items-center gap-4">
                {q}
                <div className="bg-white p-1.5 md:p-2 rounded-xl text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-300 shrink-0">
                  <Plus className="w-5 h-5 md:w-6 md:h-6" />
                </div>
              </h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}