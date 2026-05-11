import { Crown, Sparkles, Zap, MessageCircle, Coins, CheckCircle2, ShieldCheck, XCircle } from "lucide-react";
import Link from "next/link";

export default function PremiumPage() {
  const benefits = [
    { icon: Sparkles, text: "Create your own AI Girlfriend(s)", color: "text-yellow-500" },
    { icon: Zap, text: "Generate 18+ Videos", color: "text-orange-500" },
    { icon: Zap, text: "Generate 18+ Images", color: "text-red-500" },
    { icon: Crown, text: "Full Live Action Experience", color: "text-purple-500" },
    { icon: MessageCircle, text: "Unlimited text messages", color: "text-blue-500" },
    { icon: Coins, text: "100 tokens per month", color: "text-yellow-600" },
  ];

  return (
    <div className="flex flex-col flex-1 pb-16 md:pb-24 bg-white min-h-screen">
      {/* Hero Section */}
      <section className="w-full bg-surface py-12 md:py-20 px-6 md:px-8 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent"></div>
        <div className="max-w-4xl mx-auto relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-2xl shadow-sm border border-border text-primary font-bold animate-bounce">
            <Crown className="w-5 h-5 fill-primary" />
            LIMITED OFFER
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-foreground">
            Unlock <span className="text-gradient">Premium Access</span>
          </h1>
          <p className="text-lg md:text-xl text-text-muted font-medium">
            Join thousands of users enjoying the full CandyAI experience.
          </p>
        </div>
      </section>

      {/* Benefits List */}
      <section className="max-w-2xl mx-auto w-full px-6 py-12 md:py-16">
        <div className="bg-surface/50 rounded-[2.5rem] p-8 md:p-12 border border-border shadow-xl shadow-pink-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
             <Crown className="w-64 h-64 rotate-12" />
          </div>
          
          <h2 className="text-2xl md:text-3xl font-black mb-10 flex items-center gap-3">
            Premium Benefits
          </h2>
          
          <div className="space-y-8 relative z-10">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <div key={i} className="flex items-center gap-5 group cursor-default">
                  <div className={`w-12 h-12 rounded-2xl bg-white shadow-md flex items-center justify-center transition-transform group-hover:scale-110 duration-300`}>
                    <Icon className={`w-6 h-6 ${benefit.color}`} />
                  </div>
                  <span className="text-lg md:text-xl font-bold text-foreground/80">{benefit.text}</span>
                </div>
              );
            })}
          </div>

          <div className="mt-12 space-y-6">
            <button className="w-full bg-primary hover:bg-primary-hover text-white py-5 rounded-3xl font-black text-xl md:text-2xl transition-all shadow-xl shadow-pink-200 hover:scale-[1.02] active:scale-[0.98]">
              UPGRADE NOW - 70% OFF
            </button>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div className="flex items-start gap-3 p-4 bg-white rounded-2xl border border-border">
                  <ShieldCheck className="w-6 h-6 text-green-500 shrink-0" />
                  <p className="text-sm font-semibold text-text-muted">Charge shown as 'EverAI' on your statement</p>
               </div>
               <div className="flex items-start gap-3 p-4 bg-white rounded-2xl border border-border">
                  <XCircle className="w-6 h-6 text-red-400 shrink-0" />
                  <p className="text-sm font-semibold text-text-muted">Cancel subscription at any time in settings</p>
               </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
           <p className="text-[12px] text-text-muted font-medium leading-relaxed opacity-60">
             EverAI Limited, Nr. C107181 56 Central Business Centre, Triq Is-Soll, Santa Venera SVR 1833, Malta
           </p>
        </div>
      </section>
    </div>
  );
}
