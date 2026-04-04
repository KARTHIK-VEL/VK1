import React from "react";
import { Award, Target, TrendingUp } from "lucide-react";

export const WeeklyGoal: React.FC = () => {
  // Mock goal data for weekly progress
  const target = 15;
  const current = 12;
  const percent = (current / target) * 100;

  return (
    <div className="flex flex-col h-full items-center justify-between py-4">
      <div className="flex items-center gap-2 mb-4">
        <Target size={16} className="text-emerald-400" />
        <span className="text-[10px] font-black uppercase tracking-widest text-white/40">WEEKLY TARGET</span>
      </div>

      <div className="relative group">
        <svg className="w-24 h-24 transform -rotate-90">
          <circle cx="48" cy="48" r="44" stroke="currentColor" strokeWidth="2" fill="transparent" className="text-white/5" />
          <circle cx="48" cy="48" r="44" stroke="currentColor" strokeWidth="2" fill="transparent" strokeDasharray={276} strokeDashoffset={276 - (276 * percent) / 100} className="text-emerald-500 transition-all duration-1000 group-hover:stroke-[3px]" />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span className="text-2xl font-black text-white">{current}</span>
          <span className="text-[8px] font-bold text-white/20 uppercase tracking-widest leading-none">/ {target}</span>
        </div>
      </div>

      <div className="mt-8 flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-xl group hover:bg-emerald-500/20 transition-all duration-300">
         <Award size={14} className="text-emerald-400" />
         <span className="text-[10px] font-black text-emerald-400/80 uppercase tracking-widest tracking-[0.2em]">ALMOST THERE</span>
      </div>
    </div>
  );
};
