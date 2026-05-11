import { User } from "lucide-react";

export default function MyAIPage() {
  return (
    <div className="flex flex-col flex-1 p-8 md:p-12">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-primary/10 rounded-2xl text-button-secondary">
          <User className="w-8 h-8" />
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground">
          My AI
        </h1>
      </div>
      <p className="text-lg text-gray-600 max-w-2xl mb-10">
        Manage the AI companions you have created or interacted with.
      </p>

      {/* Grid Content */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {/* Placeholder for no characters yet */}
        <div className="col-span-full bg-white rounded-3xl p-12 text-center border-2 border-dashed border-gray-200">
          <User className="w-16 h-16 mx-auto text-gray-300 mb-4" />
          <h3 className="text-xl font-bold text-gray-600 mb-2">No AI companions yet</h3>
          <p className="text-gray-500 mb-6">Create your first AI girlfriend or boyfriend to see them here.</p>
          <a href="/create" className="inline-block bg-button-secondary text-white px-6 py-3 rounded-full font-bold shadow-md hover:bg-[#F67FAC] transition-colors">
            Create AI Now
          </a>
        </div>
      </div>
    </div>
  );
}