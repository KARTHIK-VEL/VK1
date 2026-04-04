import React from "react";
import { Heart, Zap, Activity } from "lucide-react";

export const CodeBuddy: React.FC = () => {
  // Mock data for the pixel-art pet's state
  const stage = "Evolved";
  const energy = 84;
  const mood = "Happy";

  return (
    <div className="flex flex-col h-full items-center justify-center p-6 bg-gradient-to-tr from-emerald-500/5 via-black/20 to-transparent border border-emerald-500/10 rounded-2xl relative group overflow-hidden">
      <div className="absolute -inset-1 bg-emerald-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
      
      <div className="flex items-center gap-2 mb-8 uppercase tracking-widest text-emerald-400 text-[10px] font-black tracking-[0.2em]">
        <Heart size={16} className="text-rose-500 animate-pulse" />
        CODE BUDDY: {stage}
      </div>

      <div className="flex flex-col items-center group-hover:scale-110 transition-transform duration-500">
         {/* Pixel Art Placeholder representation */}
         <div className="w-24 h-24 relative flex items-center justify-center bg-white/5 rounded-3xl border border-white/5 group-hover:bg-white/10 transition-all duration-300">
            <div className="absolute inset-4 rounded-full bg-emerald-500/20 blur-xl opacity-50 group-hover:opacity-100 animate-pulse" />
            <Activity size={48} className="text-emerald-400 group-hover:rotate-12 transition-transform drop-shadow-[0_0_12px_rgba(52,211,153,0.5)]" />
         </div>
         <span className="text-xs font-black text-white mt-4 uppercase tracking-[0.3em] font-mono">{mood}</span>
      </div>

      <div className="mt-8 w-full space-y-2">
         <div className="flex justify-between text-[8px] font-black text-white/20 uppercase tracking-widest px-1">
            <span>ENERGY</span>
            <span>{energy}%</span>
         </div>
         <div className="h-1 bg-white/5 rounded-full overflow-hidden">
            <div 
              className="h-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] transition-all duration-1000" 
              style={{ width: `${energy}%` }}
            />
         </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-2 text-[8px] font-black tracking-widest text-white/10 uppercase italic">
         <Zap size={10} className="text-yellow-400" />
         LEVEL: 24 (MASTER)
      </div>
    </div>
  );
};
