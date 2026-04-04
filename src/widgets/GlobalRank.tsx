import React from "react";
import { Globe, TrendingUp, Award } from "lucide-react";

export const GlobalRank: React.FC = () => {
  // Mock rank data for LeetCode
  const percentile = 98.4;
  const currentRank = "14,242";

  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-yellow-500/5 to-transparent rounded-2xl p-4">
      <div className="flex items-center gap-2 mb-4">
        <Globe size={16} className="text-yellow-400" />
        <span className="text-[10px] font-black uppercase tracking-widest text-white/40">GLOBAL STANDING</span>
      </div>

      <div className="flex flex-col items-center justify-center flex-grow group">
        <div className="relative">
           <Award size={40} className="text-yellow-400 group-hover:scale-110 transition-transform duration-500" />
           <div className="absolute -inset-4 bg-yellow-500/20 blur-2xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
        </div>
        <span className="text-3xl font-black mt-4 text-white uppercase tracking-tighter">TOP {percentile}%</span>
        <div className="flex items-center gap-2 mt-2 bg-white/5 px-4 py-1 rounded-full border border-white/5">
           <TrendingUp size={12} className="text-emerald-400" />
           <span className="text-xs font-mono font-bold text-white/40">{currentRank}</span>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-center gap-2 text-[8px] font-black tracking-widest text-white/10 uppercase">
         LEETCODE • CODEFORCES • CODECHEF
      </div>
    </div>
  );
};
