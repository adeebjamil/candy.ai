import { Compass } from "lucide-react";

export default function DiscoverPage() {
  return (
    <div className="flex flex-col flex-1 p-8 md:p-16 bg-white min-h-screen">
      <div className="flex items-center gap-6 mb-12">
        <div className="p-4 bg-surface rounded-3xl text-primary shadow-sm border border-border">
          <Compass className="w-10 h-10" />
        </div>
        <div>
          <h1 className="text-5xl font-black tracking-tight text-foreground">
            Discover
          </h1>
          <p className="text-xl text-text-muted font-medium mt-2">
            Explore unique AI personalities from our community
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Placeholder cards with premium feel */}
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="group bg-surface rounded-[2.5rem] p-8 border border-transparent hover:border-primary/20 hover:bg-white hover:shadow-2xl transition-all duration-500 cursor-pointer">
            <div className="w-full aspect-video bg-white rounded-3xl mb-6 shadow-inner border border-border overflow-hidden">
               <div className="w-full h-full bg-gradient-to-br from-pink-50 to-white flex items-center justify-center opacity-50">
                  <Compass className="w-12 h-12 text-primary/20" />
               </div>
            </div>
            <div className="space-y-4">
              <div className="h-8 bg-white rounded-2xl w-2/3 border border-border"></div>
              <div className="space-y-2">
                <div className="h-4 bg-white rounded-xl w-full border border-border"></div>
                <div className="h-4 bg-white rounded-xl w-3/4 border border-border"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}