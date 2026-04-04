import React from "react";
import { Thermometer, Zap, AlertTriangle } from "lucide-react";

export const GPUTemp: React.FC = () => {
  // Mock thermal data for NVIDIA GPU
  const temp = 68;
  const maxTemp = 85;
  const percent = (temp / maxTemp) * 100;

  const getColor = (t: number) => {
    if (t < 60) return "text-emerald-400";
    if (t < 75) return "text-yellow-400 shadow-[0_0_8px_rgba(234,179,8,0.4)]";
    return "text-rose-400 animate-pulse shadow-[0_0_12px_rgba(251,113,133,0.6)]";
  };

  return (
    <div className="flex flex-col h-full bg-gradient-to-tr from-rose-500/5 via-transparent to-transparent items-center justify-center p-6 rounded-2xl relative group overflow-hidden">
      <div className="absolute -inset-1 bg-rose-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
      
      <div className="flex items-center gap-2 mb-8">
        <Thermometer size={16} className="text-rose-500" />
        <span className="text-[10px] font-black uppercase tracking-widest text-white/40">THERMAL PULSE</span>
      </div>

      <div className="flex flex-col items-center">
        <div className="text-5xl font-black tracking-tighter mb-4 flex items-baseline gap-1 group-hover:scale-110 transition-transform duration-500">
          <span className={getColor(temp)}>{temp}</span>
          <span className="text-lg text-white/20 font-bold">°C</span>
        </div>
        
        <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden mb-8">
          <div 
            className={`h-full transition-all duration-1000 ${temp > 75 ? 'bg-rose-500 shadow-[0_0_8px_rgba(251,113,133,0.8)]' : 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]'}`}
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>

      <div className="flex items-center gap-2 bg-white/5 px-4 py-1.5 rounded-full border border-white/5 group-hover:bg-white/10 transition-all duration-300">
         <Zap size={12} className="text-blue-400 group-hover:animate-bounce" />
         <span className="text-[10px] font-black tracking-widest text-white/60 tracking-[0.2em] uppercase italic">PEAK 72°C</span>
      </div>
    </div>
  );
};
