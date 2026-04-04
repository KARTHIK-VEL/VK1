import React from "react";
import { MessageCircle, Award, TrendingUp, Star } from "lucide-react";

export const StackOverflowRep: React.FC = () => {
  // Mock data for Stack Overflow reputation
  const points = "12.4K";
  const badges = { gold: 2, silver: 14, bronze: 42 };

  return (
    <div className="flex flex-col h-full bg-orange-500/5 items-center justify-center p-6 border border-orange-500/10 rounded-2xl relative group overflow-hidden">
      <div className="absolute -inset-1 bg-orange-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
      
      <div className="flex items-center gap-2 mb-8">
        <MessageCircle size={16} className="text-orange-500" />
        <span className="text-[10px] font-black uppercase tracking-widest text-white/40">COMMUNITY POINTS</span>
      </div>

      <div className="text-center group-hover:scale-110 transition-transform duration-500">
        <div className="text-5xl font-black text-white tracking-tighter shadow-sm flex items-baseline gap-1">
           <span>{points}</span>
        </div>
        <span className="text-[10px] font-black text-orange-400 uppercase tracking-[0.3em] block mt-2">REPUTATION</span>
      </div>

      <div className="mt-8 flex gap-4 items-center justify-center">
         <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
            <span className="text-[10px] font-black text-white/40">{badges.gold}</span>
         </div>
         <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
            <span className="text-[10px] font-black text-white/40">{badges.silver}</span>
         </div>
         <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-amber-700" />
            <span className="text-[10px] font-black text-white/40">{badges.bronze}</span>
         </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-2 text-[8px] font-black tracking-widest text-white/10 uppercase italic">
         <TrendingUp size={10} />
         STATUS: LEGENDARY
      </div>
    </div>
  );
};
