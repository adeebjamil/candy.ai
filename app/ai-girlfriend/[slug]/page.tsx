"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ChevronLeft, 
  Send, 
  Image as ImageIcon, 
  Mic, 
  MoreVertical, 
  Info, 
  Heart, 
  MessageCircle, 
  Zap,
  Crown,
  CheckCircle2
} from "lucide-react";

export default function CharacterPage({ params }: { params: { slug: string } }) {
  const [message, setMessage] = useState("");
  const [activeTab, setActiveTab] = useState("chat");

  const characterName = params.slug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

  const chatMessages = [
    { id: 1, sender: "bot", text: `Hey there! I've been waiting for you to say something. How is your day going? ❤️`, time: "10:00 AM" },
    { id: 2, sender: "user", text: "It's going great! Just saw your new post and had to reach out.", time: "10:01 AM" },
    { id: 3, sender: "bot", text: "Aww, you're so sweet! I'm glad you liked it. I was thinking about you while taking those photos... 😉", time: "10:02 AM" },
  ];

  return (
    <div className="flex flex-col h-[calc(100vh-72px)] md:h-screen bg-white overflow-hidden relative">
      {/* Mobile Header */}
      <header className="flex items-center justify-between px-4 md:px-8 py-4 border-b border-border bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <Link href="/girls" className="p-2 hover:bg-surface rounded-xl transition-colors">
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </Link>
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-full border-2 border-primary overflow-hidden relative">
                <Image 
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80" 
                  alt={characterName} 
                  fill 
                  className="object-cover" 
                />
             </div>
             <div>
                <div className="flex items-center gap-1">
                   <h1 className="font-bold text-foreground text-sm md:text-base">{characterName}</h1>
                   <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 fill-blue-500/10" />
                </div>
                <span className="text-[10px] text-green-500 font-black uppercase flex items-center gap-1">
                   <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                   Online Now
                </span>
             </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
           <button className="hidden md:flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider hover:bg-primary/20 transition-all">
              <Zap className="w-3.5 h-3.5 fill-primary" />
              Get Premium
           </button>
           <button className="p-2 hover:bg-surface rounded-xl transition-colors text-text-muted">
              <MoreVertical className="w-6 h-6" />
           </button>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Chat Section */}
        <div className={`flex-1 flex flex-col ${activeTab !== 'chat' ? 'hidden md:flex' : 'flex'}`}>
           {/* Messages Container */}
           <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-6 custom-scrollbar bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-fixed opacity-80">
              {chatMessages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[80%] p-4 rounded-3xl shadow-sm ${
                    msg.sender === "user" 
                      ? "bg-primary text-white rounded-br-none" 
                      : "bg-white border border-border text-foreground rounded-bl-none"
                  }`}>
                    <p className="text-sm md:text-base font-medium leading-relaxed">{msg.text}</p>
                    <span className={`text-[10px] mt-2 block ${msg.sender === "user" ? "text-white/60" : "text-text-muted"}`}>
                      {msg.time}
                    </span>
                  </div>
                </div>
              ))}
              
              {/* Image Lock Placeholder */}
              <div className="flex justify-start">
                 <div className="max-w-[80%] p-2 rounded-3xl bg-white border border-border shadow-sm overflow-hidden group cursor-pointer relative">
                    <div className="aspect-square w-48 md:w-64 bg-gray-100 rounded-2xl flex flex-col items-center justify-center gap-4 filter blur-md grayscale group-hover:blur-sm transition-all">
                       <ImageIcon className="w-12 h-12 text-text-muted/20" />
                    </div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center bg-black/40 backdrop-blur-[2px] rounded-3xl">
                       <Crown className="w-8 h-8 text-primary mb-2 fill-primary" />
                       <span className="text-white text-xs font-bold mb-3">Subscribe to view premium photos</span>
                       <button className="bg-primary text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider shadow-lg shadow-pink-500/50">Unlock Now</button>
                    </div>
                 </div>
              </div>
           </div>

           {/* Input Area */}
           <div className="p-4 md:p-6 border-t border-border bg-white">
              <div className="max-w-4xl mx-auto flex items-center gap-3 md:gap-4 bg-surface p-2 md:p-3 rounded-full border border-border shadow-inner">
                 <button className="p-2 md:p-3 hover:bg-white rounded-full text-text-muted hover:text-primary transition-all">
                    <ImageIcon className="w-6 h-6" />
                 </button>
                 <input 
                   type="text" 
                   value={message}
                   onChange={(e) => setMessage(e.target.value)}
                   placeholder="Type a sweet message..." 
                   className="flex-1 bg-transparent border-none focus:ring-0 text-foreground font-medium text-sm md:text-base placeholder:text-text-muted/60"
                 />
                 <button className="p-2 md:p-3 hover:bg-white rounded-full text-text-muted hover:text-primary transition-all">
                    <Mic className="w-6 h-6" />
                 </button>
                 <button className="bg-primary hover:bg-primary-hover text-white p-2 md:p-3 rounded-full transition-all shadow-lg shadow-pink-200">
                    <Send className="w-6 h-6 fill-white" />
                 </button>
              </div>
           </div>
        </div>

        {/* Info Sidebar (Desktop) */}
        <aside className={`w-full md:w-[380px] border-l border-border bg-surface/30 overflow-y-auto ${activeTab !== 'info' ? 'hidden md:block' : 'block'}`}>
           <div className="p-6 md:p-8 space-y-8">
              <div className="rounded-3xl overflow-hidden aspect-square relative shadow-2xl">
                 <Image 
                   src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80" 
                   alt={characterName} 
                   fill 
                   className="object-cover" 
                 />
                 <div className="absolute top-4 left-4 bg-black/30 backdrop-blur-md text-white px-3 py-1 rounded-xl text-[10px] font-black">
                    LEVEL 12
                 </div>
              </div>

              <div>
                 <h2 className="text-2xl font-black text-foreground mb-4">About {characterName}</h2>
                 <p className="text-text-muted text-sm md:text-base leading-relaxed font-medium">
                   I'm a model and travel enthusiast living in Milan. I love deep conversations, pasta, and late-night adventures. Let's create something special together! ✨
                 </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                 <div className="bg-white p-4 rounded-2xl border border-border text-center">
                    <Heart className="w-6 h-6 text-primary mx-auto mb-2" />
                    <span className="block text-[10px] text-text-muted font-black uppercase">Relationship</span>
                    <span className="text-sm font-bold text-foreground">Girlfriend</span>
                 </div>
                 <div className="bg-white p-4 rounded-2xl border border-border text-center">
                    <MessageCircle className="w-6 h-6 text-primary mx-auto mb-2" />
                    <span className="block text-[10px] text-text-muted font-black uppercase">Messages</span>
                    <span className="text-sm font-bold text-foreground">2.4k</span>
                 </div>
              </div>

              <div className="space-y-4">
                 <h3 className="text-lg font-black text-foreground">Preferences</h3>
                 <div className="flex flex-wrap gap-2">
                    {["Traveling", "Pizza", "Milan", "Photoshoots", "Deep Chats"].map(tag => (
                      <span key={tag} className="bg-white px-4 py-2 rounded-xl text-xs font-bold text-text-muted border border-border">
                        {tag}
                      </span>
                    ))}
                 </div>
              </div>

              <div className="pt-4">
                 <button className="w-full bg-foreground text-white py-4 rounded-2xl font-black shadow-xl hover:opacity-90 transition-all flex items-center justify-center gap-3">
                    <Crown className="w-5 h-5 text-primary fill-primary" />
                    GET PREMIUM CONTENT
                 </button>
              </div>
           </div>
        </aside>
      </div>

      {/* Mobile Tab Switcher */}
      <div className="md:hidden flex border-t border-border bg-white">
         <button 
           onClick={() => setActiveTab('chat')}
           className={`flex-1 py-4 font-black text-xs uppercase tracking-widest ${activeTab === 'chat' ? 'text-primary border-t-2 border-primary' : 'text-text-muted'}`}
         >
           Chat
         </button>
         <button 
           onClick={() => setActiveTab('info')}
           className={`flex-1 py-4 font-black text-xs uppercase tracking-widest ${activeTab === 'info' ? 'text-primary border-t-2 border-primary' : 'text-text-muted'}`}
         >
           Profile
         </button>
      </div>
    </div>
  );
}
