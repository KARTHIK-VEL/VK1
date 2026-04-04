import React from "react";
import { Link, Cpu, Activity, Zap } from "lucide-react";

export const JetsonLink: React.FC = () => {
  // Mock status data for connected Edge AI hardware
  const device = "Jetson Orin Nano";
  const status = "online";
  const power = 12.4; // Watts

  return (
    <div className="flex flex-col h-full bg-emerald-500/5 items-center justify-center p-6 border border-emerald-500/10 rounded-2xl relative group overflow-hidden">
      <div className="absolute -inset-1 bg-emerald-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
      
      <div className="flex items-center gap-2 mb-8">
        <Link size={16} className="text-emerald-500" />
        <span className="text-[10px] font-black uppercase tracking-widest text-white/40">EDGE LINK</span>
      </div>

      <div className="text-center group-hover:scale-110 transition-transform duration-500">
        <div className="flex items-center justify-center gap-3 mb-4 bg-white/5 px-4 py-2 rounded-xl border border-white/5">
           <Cpu size={18} className="text-emerald-400 group-hover:animate-pulse" />
           <span className="text-sm font-black text-white uppercase tracking-tight">{device}</span>
        </div>
        
        <div className="flex gap-4 items-center justify-center">
           <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-widest">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
              {status}
           </div>
           <div className="h-3 w-px bg-white/10" />
           <div className="flex items-center gap-2 text-white/40 font-bold text-[10px] uppercase tracking-widest">
              <Zap size={10} className="text-blue-400" />
              {power}W
           </div>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-2 text-[8px] font-black tracking-widest text-white/10 uppercase italic">
         <Activity size={10} />
         NVIDIA JETPACK 6.0
      </div>
    </div>
  );
};
