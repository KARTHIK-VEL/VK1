import React from "react";
import { Dice5, Zap, ExternalLink } from "lucide-react";

export const RandomChallenge: React.FC = () => {
  // Mock random challenge data for a single problem
  const problemTitle = "Graph Connectivity Check";
  const difficulty = "Hard";
  const points = 150;

  return (
    <div className="flex flex-col h-full items-center justify-center p-6 bg-gradient-to-tr from-purple-500/5 via-transparent to-transparent rounded-2xl relative overflow-hidden">
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/10 blur-3xl opacity-50" />
      
      <div className="flex items-center gap-2 mb-6">
        <Dice5 size={16} className="text-purple-400 animate-spin-slow" />
        <span className="text-[10px] font-black uppercase tracking-widest text-white/40">RANDOM ROLL</span>
      </div>

      <div className="text-center group cursor-pointer w-full">
        <div className="flex items-center justify-center gap-2 mb-2">
           <Zap size={10} className="text-purple-400" />
           <span className="text-[8px] font-black text-white/20 uppercase tracking-[0.3em]">NEW CHALLENGE</span>
        </div>
        <div className="bg-white/5 border border-white/10 p-4 rounded-xl group-hover:bg-white/10 group-active:scale-95 transition-all duration-300">
           <span className="text-xs font-black text-white leading-tight block mb-2">{problemTitle}</span>
           <div className="flex items-center justify-center gap-4">
              <span className="text-[8px] font-black text-rose-400 uppercase tracking-widest bg-rose-400/10 px-2 py-0.5 rounded-full">{difficulty}</span>
              <span className="text-[8px] font-black text-white/40 uppercase tracking-widest">+ {points} XP</span>
           </div>
        </div>
      </div>

      <div className="mt-8 flex items-center gap-2 text-[10px] text-white/20 font-bold uppercase tracking-widest border-b border-white/5 pb-1 hover:text-white transition-colors cursor-pointer">
         <ExternalLink size={12} />
         <span>SURPRISE ME</span>
      </div>
    </div>
  );
};
