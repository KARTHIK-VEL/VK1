import React from "react";
import { Cpu, Zap, Activity } from "lucide-react";

export const CUDALoad: React.FC = () => {
  // Mock utilization data for NVIDIA CUDA cores
  const load = 74.2;
  const cores = 4096;

  return (
    <div className="flex flex-col h-full bg-emerald-500/5 items-center justify-center p-6 border border-emerald-500/10 rounded-2xl relative group overflow-hidden">
      <div className="absolute -inset-1 bg-emerald-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
      
      <div className="flex items-center gap-2 mb-8">
        <Zap size={16} className="text-emerald-500" />
        <span className="text-[10px] font-black uppercase tracking-widest text-white/40">COMPUTE UTIL</span>
      </div>

      <div className="flex flex-col items-center">
        <div className="text-5xl font-black tracking-tighter mb-4 text-emerald-400 flex items-baseline gap-1 group-hover:scale-110 transition-transform duration-500">
          <span>{load.toFixed(0)}</span>
          <span className="text-lg text-white/20 font-bold">%</span>
        </div>
        
        <div className="grid grid-cols-8 gap-1 mb-8 opacity-40 group-hover:opacity-100 transition-opacity">
          {Array.from({ length: 32 }).map((_, i) => (
            <div 
              key={i} 
              className={`w-1.5 h-1.5 rounded-full ${i < (32 * load / 100) ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]' : 'bg-white/5'}`}
            />
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2 bg-white/5 px-4 py-1.5 rounded-full border border-white/5 group-hover:bg-white/10 transition-all duration-300">
         <Activity size={12} className="text-blue-400 group-hover:animate-pulse" />
         <span className="text-[10px] font-black tracking-widest text-white/60 tracking-[0.2em] uppercase italic">{cores} TENSORS</span>
      </div>
    </div>
  );
};
