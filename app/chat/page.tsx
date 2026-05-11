import { MessageCircle } from "lucide-react";

export default function ChatPage() {
  return (
    <div className="flex flex-col flex-1 h-[calc(100vh-60px)]">
      <div className="flex-1 flex bg-white/50 backdrop-blur-sm m-4 rounded-3xl border border-gray-200 overflow-hidden shadow-sm">
        {/* Chat Sidebar */}
        <div className="w-80 border-r border-gray-100 bg-white p-4 hidden md:flex flex-col">
          <h2 className="text-xl font-extrabold mb-6 flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-button-secondary" />
            Messages
          </h2>
          <div className="flex-1 space-y-2">
            {/* Placeholder Contacts */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-2xl hover:bg-primary/5 cursor-pointer transition-colors">
                <div className="w-12 h-12 rounded-full bg-gray-200 animate-pulse"></div>
                <div className="flex-1">
                  <div className="h-4 bg-gray-200 rounded w-24 mb-2"></div>
                  <div className="h-3 bg-gray-100 rounded w-32"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-gray-50/50">
          <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-6">
            <MessageCircle className="w-12 h-12 text-button-secondary opacity-50" />
          </div>
          <h3 className="text-2xl font-bold text-gray-700 mb-2">Your Conversations</h3>
          <p className="text-gray-500 max-w-md">Select a character from your sidebar to start chatting, or explore new companions to talk to!</p>
        </div>
      </div>
    </div>
  );
}