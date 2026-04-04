import React from "react";
import { Droplets, Clock, Battery, Activity } from "lucide-react";

export const DrinkWater: React.FC = () => {
  // Mock hydration data
  const target = 2500; // ml
  const current = 1450; // ml
  const percent = (current / target) * 100;

  return (
    <div className="flex flex-col h-full bg-blue-500/5 items-center justify-center p-6 border border-blue-500/10 rounded-2xl relative group overflow-hidden">
      <div className="absolute -inset-1 bg-blue-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
      
      <div className="flex items-center gap-2 mb-8 uppercase tracking-widest text-blue-400 text-[10px] font-black">
        <Droplets size={16} className="text-blue-500 animate-bounce" />
        HYDRATION PULSE
      </div>

      <div className="relative group-hover:scale-110 transition-transform duration-500">
        <svg className="w-24 h-24 transform -rotate-90">
          <circle cx="48" cy="48" r="44" stroke="currentColor" strokeWidth="2" fill="transparent" className="text-white/5" />
          <circle cx="48" cy="48" r="44" stroke="currentColor" strokeWidth="2" fill="transparent" strokeDasharray={276} strokeDashoffset={276 - (276 * percent) / 100} className="text-blue-500 transition-all duration-1000 group-hover:stroke-[3px]" />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span className="text-2xl font-black text-white">{current}</span>
          <span className="text-[8px] font-bold text-white/20 uppercase tracking-widest leading-none">ML</span>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full">
         <Clock size={12} className="text-blue-400" />
         <span className="text-[10px] font-black text-blue-400/80 uppercase tracking-widest italic tracking-[0.2em]">REMINDER ON</span>
      </div>
    </div>
  );
};
