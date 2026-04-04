import React from "react";
import { Timer, Clock } from "lucide-react";

export const ContestCountdown: React.FC = () => {
  // Mock contest data for LeetCode Biweekly
  const hours = 14;
  const minutes = 22;
  const seconds = 45;

  return (
    <div className="flex flex-col h-full items-center justify-center gap-4">
      <div className="flex items-center gap-2 mb-4">
        <Timer size={16} className="text-yellow-400" />
        <span className="text-[10px] font-black uppercase tracking-widest text-white/40">CONTEST START</span>
      </div>

      <div className="flex gap-4 items-center">
        <div className="flex flex-col items-center">
           <span className="text-3xl font-black text-white tracking-widest leading-none">{hours}</span>
           <span className="text-[8px] font-bold text-white/20 uppercase tracking-widest mt-1">HR</span>
        </div>
        <span className="text-2xl font-black text-white/20 mb-3">:</span>
        <div className="flex flex-col items-center">
           <span className="text-3xl font-black text-white tracking-widest leading-none">{minutes}</span>
           <span className="text-[8px] font-bold text-white/20 uppercase tracking-widest mt-1">MIN</span>
        </div>
        <span className="text-2xl font-black text-white/20 mb-3">:</span>
        <div className="flex flex-col items-center">
           <span className="text-3xl font-black text-white tracking-widest leading-none">{seconds}</span>
           <span className="text-[8px] font-bold text-white/20 uppercase tracking-widest mt-1">SEC</span>
        </div>
      </div>

      <div className="mt-8 flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 px-3 py-1 rounded-full animate-pulse">
         <Clock size={10} className="text-yellow-400" />
         <span className="text-[10px] font-black text-yellow-400/80 uppercase tracking-widest">LEETCODE BIWEEKLY 142</span>
      </div>
    </div>
  );
};
