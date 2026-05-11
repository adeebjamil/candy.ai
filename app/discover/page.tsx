import { Compass } from "lucide-react";

export default function DiscoverPage() {
  return (
    <div className="flex flex-col flex-1 p-8 md:p-12">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-primary/10 rounded-2xl text-button-secondary">
          <Compass className="w-8 h-8" />
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground">
          Discover
        </h1>
      </div>
      <p className="text-lg text-gray-600 max-w-2xl mb-10">
        Explore a wide variety of AI companions created by the community. Find new personalities, chat styles, and unique characters to interact with.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Placeholder cards */}
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-full aspect-video bg-gray-100 rounded-2xl mb-4 animate-pulse"></div>
            <div className="h-6 bg-gray-200 rounded w-1/2 mb-2 animate-pulse"></div>
            <div className="h-4 bg-gray-100 rounded w-3/4 animate-pulse"></div>
          </div>
        ))}
      </div>
    </div>
  );
}