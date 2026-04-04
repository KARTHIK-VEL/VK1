import React from "react";
import { Zap, Timer, Gauge, Activity } from "lucide-react";

export const InferenceTimer: React.FC = () => {
  // Mock inference performance data
  const tokens_per_sec = 24.5;
  const latency = 142;
  const model = "Llama-3-8B (Q4)";

  return (
    <div className="flex flex-col h-full bg-gradient-to-tr from-blue-500/5 via-transparent to-transparent items-center justify-center p-6 border border-blue-500/10 rounded-2xl relative group overflow-hidden">
      <div className="absolute -inset-1 bg-blue-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
      
      <div className="flex items-center gap-2 mb-8">
        <Gauge size={16} className="text-blue-400" />
        <span className="text-[10px] font-black uppercase tracking-widest text-white/40">INFERENCE SPEED</span>
      </div>

      <div className="text-center">
        <div className="flex flex-col items-center gap-1 group-hover:scale-110 transition-transform duration-500">
           <div className="text-5xl font-black text-white tracking-tighter shadow-sm">{tokens_per_sec.toFixed(1)}</div>
           <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest leading-none">TOKENS / SEC</span>
        </div>
        
        <div className="mt-8 flex gap-4 items-center">
           <div className="flex flex-col items-center bg-white/5 px-4 py-1.5 rounded-lg border border-white/5">
              <span className="text-[10px] font-mono font-black text-white">{latency}ms</span>
              <span className="text-[8px] font-bold text-white/20 uppercase tracking-widest mt-1">LATENCY</span>
           </div>
           <div className="flex flex-col items-center bg-white/5 px-4 py-1.5 rounded-lg border border-white/5">
              <span className="text-[10px] font-black text-blue-400 uppercase tracking-wider">{model}</span>
              <span className="text-[8px] font-bold text-white/20 uppercase tracking-widest mt-1">MODEL</span>
           </div>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-2 text-[8px] font-black tracking-widest text-white/10 uppercase">
         <Activity size={10} />
         BENCHMARK ACTIVE
      </div>
    </div>
  );
};
