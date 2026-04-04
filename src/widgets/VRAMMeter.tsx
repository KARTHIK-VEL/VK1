import React from "react";
import { Cpu, Zap } from "lucide-react";
import { cn } from "../lib/utils";

interface VRAMMeterProps {
  used: number;
  total: number;
  temp: number;
}

export const VRAMMeter: React.FC<VRAMMeterProps> = ({ used, total, temp }) => {
  const percent = (used / total) * 100;
  const isHigh = percent > 85;

  return (
    <div className="flex flex-col h-full gap-4 group">
       <div className="flex items-center justify-between">
         <div className="flex items-center gap-2">
           <Cpu size={20} className={cn("transition-colors duration-500", isHigh ? "text-rose-500 animate-pulse" : "text-emerald-400")} />
           <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">NVIDIA RTX::CORE</span>
         </div>
         <div className={cn(
           "px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-widest border",
           isHigh ? "bg-rose-500/10 text-rose-400 border-rose-500/20 shadow-[0_0_12px_rgba(244,63,94,0.3)]" : 
           "bg-emerald-500/10 text-emerald-400 border-emerald-500/20 shadow-[0_0_12px_rgba(16,185,129,0.2)]"
         )}>
           VRAM ACTIVE
         </div>
       </div>

       <div className="flex-1 flex flex-col justify-center gap-2">
          <div className="flex items-baseline gap-2">
             <span className="text-5xl font-black text-white tracking-tighter drop-shadow-xl">{used.toFixed(1)}</span>
             <span className="text-lg font-bold text-white/20 tracking-widest uppercase">GB</span>
          </div>

          <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden mt-2 border border-white/10 p-[1px]">
             <div 
               className={cn(
                 "h-full rounded-full transition-all duration-1000 ease-out",
                 isHigh ? "bg-rose-500 shadow-[0_0_12px_rgba(244,63,94,0.8)]" : "bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.8)]"
               )}
               style={{ width: `${percent}%` }}
             />
          </div>
       </div>

       <div className="flex items-center justify-between border-t border-white/5 pt-3">
          <div className="flex items-center gap-2 text-[10px] font-black text-white italic tracking-tighter">
             <span className="text-white/40 uppercase tracking-[0.2em] font-bold">TOTAL VRAM:</span>
             <span>{total}GB</span>
          </div>
          <div className={cn(
            "flex items-center gap-1 text-[10px] font-black italic",
            temp > 75 ? "text-rose-500 animate-pulse" : "text-emerald-400"
          )}>
             <Zap size={10} />
             <span>{temp}°C</span>
          </div>
       </div>
    </div>
  );
};
