import React from "react";
import { AlertTriangle, Clock, Zap } from "lucide-react";

export const StreakSaver: React.FC = () => {
  // Mock alert data for streak saver at 6 PM
  const timeRemaining = "1h 42m";
  const deadline = "6:00 PM";

  return (
    <div className="flex flex-col h-full bg-rose-500/5 items-center justify-center p-6 border border-rose-500/10 rounded-2xl relative group overflow-hidden">
      <div className="absolute -inset-1 bg-rose-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
      
      <div className="flex items-center gap-2 mb-6 animate-pulse">
        <AlertTriangle size={16} className="text-rose-500" />
        <span className="text-[10px] font-black uppercase tracking-widest text-rose-500/80">STREAK AT RISK</span>
      </div>

      <div className="text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
           <Clock size={12} className="text-white/20" />
           <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">DEADLINE: {deadline}</span>
        </div>
        <div className="text-4xl font-black text-rose-400 tracking-tighter mb-4 shadow-[0_0_12px_rgba(251,113,133,0.2)]">
           {timeRemaining}
        </div>
        <button className="w-full py-2 bg-rose-500 hover:bg-rose-400 text-white font-black text-[10px] uppercase tracking-widest rounded-lg flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-rose-900/20">
           <Zap size={14} />
           SOLVE NOW
        </button>
      </div>

      <div className="mt-8 text-[8px] font-black text-white/10 tracking-[0.4em] uppercase text-center w-full">
         LOSS PREVENTION ACTIVE
      </div>
    </div>
  );
};
