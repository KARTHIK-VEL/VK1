import React from "react";
import { Clock, Code, TrendingUp, Monitor } from "lucide-react";

export const WakaTime: React.FC = () => {
  // Mock WakaTime data for total IDE hours
  const hours = 6;
  const minutes = 42;
  const percent = 82;

  return (
    <div className="flex flex-col h-full bg-gradient-to-tr from-emerald-500/5 via-transparent to-transparent items-center justify-center p-6 border border-emerald-500/10 rounded-2xl relative group overflow-hidden">
      <div className="absolute -inset-1 bg-emerald-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
      
      <div className="flex items-center gap-2 mb-8">
        <Code size={16} className="text-emerald-500" />
        <span className="text-[10px] font-black uppercase tracking-widest text-white/40">IDE ANALYTICS</span>
      </div>

      <div className="text-center group-hover:scale-110 transition-transform duration-500">
        <div className="text-5xl font-black text-white tracking-tighter shadow-sm flex items-baseline gap-1">
           <span>{hours}</span>
           <span className="text-xl text-white/20">h</span>
           <span className="ml-2">{minutes}</span>
           <span className="text-xl text-white/20">m</span>
        </div>
        <span className="text-[10px] font-black text-emerald-400 uppercase tracking-[0.3em] block mt-2">ACTIVE CODING</span>
      </div>

      <div className="mt-8 w-full">
         <div className="flex justify-between text-[8px] font-black text-white/20 uppercase tracking-widest mb-1">
            <span>GOAL: 8H</span>
            <span>{percent}%</span>
         </div>
         <div className="h-1 bg-white/5 rounded-full overflow-hidden">
            <div 
              className="h-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] transition-all duration-1000" 
              style={{ width: `${percent}%` }}
            />
         </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-2 text-[8px] font-black tracking-widest text-white/10 uppercase italic">
         <Monitor size={10} />
         WAKATIME CONNECTED
      </div>
    </div>
  );
};
