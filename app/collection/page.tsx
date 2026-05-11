import { Library } from "lucide-react";

export default function CollectionPage() {
  return (
    <div className="flex flex-col flex-1 p-8 md:p-12">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-primary/10 rounded-2xl text-button-secondary">
          <Library className="w-8 h-8" />
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground">
          My Collection
        </h1>
      </div>
      <p className="text-lg text-gray-600 max-w-2xl mb-10">
        All your saved images, moments, and generated content with your AI companions live here.
      </p>

      <div className="bg-white rounded-3xl p-12 text-center border-2 border-dashed border-gray-200">
        <Library className="w-16 h-16 mx-auto text-gray-300 mb-4" />
        <h3 className="text-xl font-bold text-gray-600 mb-2">Your collection is empty</h3>
        <p className="text-gray-500 mb-6">Start chatting and asking for photos to build your collection!</p>
        <button className="bg-button-secondary text-white px-6 py-3 rounded-full font-bold shadow-md hover:bg-[#F67FAC] transition-colors">
          Go to Chat
        </button>
      </div>
    </div>
  );
}