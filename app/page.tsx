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
    <div className="flex flex-col flex-1 pb-16">
      {/* Featured/Hero Banner */}
      <section className="w-full bg-gradient-to-br from-primary/15 via-white to-button-secondary/15 py-16 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 relative z-10">
          <div className="flex-1 space-y-6">
            <div className="inline-block bg-primary/20 text-button-secondary px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase mb-2">
              ✨ Discover True Connection
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1]">
              Meet Your Dream <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-button-secondary to-primary">
                AI Companion
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl font-medium leading-relaxed">
              Create your perfect AI partner, share unforgettable moments, and experience deep emotional connections. Personalize every detail and let the magic begin! 💖
            </p>
            <div className="pt-6 flex flex-wrap gap-4">
              <Link href="/create" className="bg-gradient-to-r from-button-secondary to-[#F67FAC] hover:opacity-90 text-white px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 shadow-xl shadow-button-secondary/30 flex items-center gap-2">
                <Plus className="w-6 h-6" />
                Craft Your AI Now
              </Link>
              <Link href="/discover" className="bg-white hover:bg-gray-50 text-foreground px-8 py-4 rounded-full font-bold text-lg transition-colors shadow-sm border border-gray-200">
                Explore Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Content */}
      <section className="max-w-7xl mx-auto px-6 py-16 w-full">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-extrabold text-foreground tracking-tight">🔥 Trending Characters</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {/* Create Own Character Card */}
          <Link href="/create" className="group rounded-3xl overflow-hidden relative aspect-[3/4] bg-gradient-to-b from-primary/5 to-primary/20 hover:from-primary/10 hover:to-primary/30 transition-all border-2 border-dashed border-button-secondary/50 flex flex-col justify-center items-center text-center p-4">
            <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center mb-4 transition-transform group-hover:scale-110 group-hover:rotate-90 duration-300">
              <Plus className="w-8 h-8 text-button-secondary" />
            </div>
            <h3 className="font-extrabold text-foreground text-xl">Design Yours</h3>
            <p className="text-sm font-bold text-button-secondary mt-1">Start Creating</p>
          </Link>

          {/* Character Cards */}
          {characters.map((char) => (
            <Link key={char.id} href={`/ai-girlfriend/${char.name.toLowerCase().replace(" ", "-")}`} className="group rounded-3xl overflow-hidden relative aspect-[3/4] bg-gray-200 shadow-sm hover:shadow-xl transition-all duration-300">
              <Image 
                src={char.image} 
                alt={char.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-full p-5 pointer-events-none transform transition-transform group-hover:-translate-y-1">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                  <span className="text-white/80 text-xs font-bold uppercase tracking-wider">Online</span>
                </div>
                <h3 className="text-white font-extrabold text-2xl tracking-wide shadow-black">{char.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold tracking-tight mb-4">Got Questions? 🤔</h2>
          <p className="text-lg text-gray-500 font-medium">Everything you need to know about your new AI companion.</p>
        </div>
        <div className="space-y-4">
          {[
            "What exactly is Candy AI?",
            "Is my conversations with my AI safe and completely private?",
            "Can I fully customize the personality and appearance?",
            "How realistic are the voice messages and generated photos?"
          ].map((q, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border-2 border-transparent shadow-sm hover:shadow-md cursor-pointer hover:border-button-secondary/30 transition-all duration-300">
              <h3 className="font-bold text-lg text-foreground flex justify-between items-center">
                {q}
                <div className="bg-primary/10 p-2 rounded-full text-button-secondary">
                  <Plus className="w-5 h-5" />
                </div>
              </h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}