import { PlusCircle, Sparkles } from "lucide-react";

export default function CreateCharacterPage() {
  return (
    <div className="flex flex-col flex-1 p-8 md:p-12 items-center">
      <div className="max-w-3xl w-full">
        <div className="text-center mb-10">
          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary to-button-secondary rounded-2xl flex items-center justify-center shadow-lg mb-6 transform rotate-3">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">
            Design Your Companion
          </h1>
          <p className="text-lg text-gray-500">
            Customize personality, looks, voice, and backstory. Bring your perfect AI partner to life in minutes.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Name</label>
              <input 
                type="text" 
                placeholder="e.g. Luna" 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-button-secondary focus:ring-2 focus:ring-button-secondary/20 outline-none transition-all"
              />
            </div>
            
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Personality Traits</label>
              <div className="flex gap-3 flex-wrap">
                {["Sweet", "Sarcastic", "Shy", "Adventurous", "Intellectual", "Flirty"].map((trait) => (
                  <span key={trait} className="px-4 py-2 rounded-full border border-gray-200 text-gray-600 text-sm font-semibold cursor-pointer hover:border-button-secondary hover:text-button-secondary hover:bg-primary/5 transition-colors">
                    {trait}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Backstory</label>
              <textarea 
                rows={4}
                placeholder="Describe who they are and how you met..." 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-button-secondary focus:ring-2 focus:ring-button-secondary/20 outline-none transition-all resize-none"
              ></textarea>
            </div>

            <button type="button" className="w-full bg-gradient-to-r from-button-secondary to-[#F67FAC] text-white py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-opacity shadow-lg shadow-button-secondary/30 flex items-center justify-center gap-2">
              <PlusCircle className="w-6 h-6" />
              Generate Character
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}