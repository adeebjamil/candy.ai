import Image from "next/image";
import { Heart, MessageCircle, Share2, MoreHorizontal, CheckCircle2 } from "lucide-react";

export default function FeedPage() {
  const posts = [
    {
      id: 1,
      author: "Simona Rossi",
      authorImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
      content: "Just finished a new photo session! What do you think of this look? ❤️",
      postImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
      likes: "1.2k",
      comments: "240",
      time: "2h ago"
    },
    {
      id: 2,
      author: "Elowen",
      authorImage: "https://images.unsplash.com/photo-1578632292335-df3abbb0d586?auto=format&fit=crop&w=400&q=80",
      content: "The sunset today was magical. Wishing you all a beautiful evening! ✨",
      postImage: "https://images.unsplash.com/photo-1578632292335-df3abbb0d586?auto=format&fit=crop&w=800&q=80",
      likes: "850",
      comments: "112",
      time: "5h ago"
    }
  ];

  return (
    <div className="flex flex-col flex-1 pb-16 md:pb-24 bg-white min-h-screen">
      {/* Feed Header */}
      <div className="sticky top-[72px] z-40 bg-white/80 backdrop-blur-md border-b border-border px-6 py-4 flex items-center justify-between">
         <h1 className="text-xl md:text-2xl font-black tracking-tight">Recent <span className="text-primary">Posts</span></h1>
         <div className="flex gap-4">
            <button className="text-sm font-bold text-primary">Following</button>
            <button className="text-sm font-bold text-text-muted">Explore</button>
         </div>
      </div>

      <div className="max-w-2xl mx-auto w-full px-4 md:px-0 py-8 space-y-8">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-[2rem] border border-border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
            {/* Post Header */}
            <div className="p-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full border-2 border-primary p-0.5">
                   <div className="w-full h-full rounded-full overflow-hidden relative">
                      <Image src={post.authorImage} alt={post.author} fill className="object-cover" />
                   </div>
                </div>
                <div>
                   <div className="flex items-center gap-1">
                      <span className="font-bold text-foreground">{post.author}</span>
                      <CheckCircle2 className="w-4 h-4 text-blue-500 fill-blue-500/10" />
                   </div>
                   <span className="text-[12px] text-text-muted font-medium">{post.time}</span>
                </div>
              </div>
              <button className="p-2 hover:bg-surface rounded-full transition-colors text-text-muted">
                 <MoreHorizontal className="w-6 h-6" />
              </button>
            </div>

            {/* Post Content */}
            <div className="px-5 pb-4">
               <p className="text-[15px] md:text-base text-foreground/80 leading-relaxed font-medium">{post.content}</p>
            </div>

            {/* Post Image */}
            <div className="aspect-square relative group overflow-hidden">
               <Image 
                 src={post.postImage} 
                 alt="Post Image" 
                 fill 
                 className="object-cover group-hover:scale-105 transition-transform duration-700" 
               />
            </div>

            {/* Post Actions */}
            <div className="p-5 flex flex-col gap-4">
               <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                     <button className="flex items-center gap-2 group">
                        <Heart className="w-7 h-7 text-text-muted group-hover:text-primary transition-colors group-hover:fill-primary/20" />
                        <span className="text-sm font-bold text-text-muted">{post.likes}</span>
                     </button>
                     <button className="flex items-center gap-2 group">
                        <MessageCircle className="w-7 h-7 text-text-muted group-hover:text-primary transition-colors" />
                        <span className="text-sm font-bold text-text-muted">{post.comments}</span>
                     </button>
                     <button className="group">
                        <Share2 className="w-7 h-7 text-text-muted group-hover:text-primary transition-colors" />
                     </button>
                  </div>
                  <button className="bg-surface text-primary font-black px-4 py-2 rounded-xl text-sm border border-primary/10 hover:bg-primary hover:text-white transition-all">
                     View Gallery
                  </button>
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
