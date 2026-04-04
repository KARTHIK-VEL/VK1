import React from "react";
import { LayoutGrid, CheckCircle2 } from "lucide-react";
import { cn } from "../lib/utils";

interface SolveCounterProps {
  easy: number;
  medium: number;
  hard: number;
}

export const SolveCounter: React.FC<SolveCounterProps> = ({ easy, medium, hard }) => {
  const total = easy + medium + hard;

  const sections = [
    { label: "EASY", count: easy, color: "bg-emerald-500", shadow: "shadow-emerald-500/20" },
    { label: "MED", count: medium, color: "bg-yellow-500", shadow: "shadow-yellow-500/20" },
    { label: "HARD", count: hard, color: "bg-rose-500", shadow: "shadow-rose-500/20" },
  ];

  return (
    <div className="flex flex-col h-full gap-4 group">
       <div className="flex items-center justify-between">
         <LayoutGrid size={20} className="text-white/20 group-hover:text-white transition-colors" />
         <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/5 text-white/40 text-[8px] font-black uppercase tracking-widest border border-white/10">
            SOLVED COUNTER
         </div>
       </div>

       <div className="flex-1 flex flex-col justify-center gap-4">
          <div className="flex items-baseline gap-2">
             <span className="text-5xl font-black text-white tracking-tighter drop-shadow-xl">{total}</span>
             <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.2em] italic underline decoration-blue-500/50">TOTAL</span>
          </div>

          <div className="grid grid-cols-3 gap-2 py-2">
             {sections.map((sec) => (
                <div key={sec.label} className="flex flex-col items-center">
                   <div className={cn(
                     "w-full h-1 rounded-full mb-2",
                     sec.color,
                     sec.shadow,
                     "shadow-[0_0_8px_rgba(255,255,255,0.1)]"
                   )} />
                   <span className="text-[10px] font-black text-white">{sec.count}</span>
                   <span className="text-[8px] font-bold text-white/20 uppercase tracking-widest">{sec.label}</span>
                </div>
             ))}
          </div>
       </div>

       <div className="border-t border-white/5 pt-3">
          <button className="w-full py-2 glass hover:bg-white/10 transition-all flex items-center justify-center gap-2 group/btn active:scale-95">
             <CheckCircle2 size={12} className="text-white/40 group-hover/btn:text-emerald-400" />
             <span className="text-[8px] font-black uppercase tracking-widest text-white/40 group-hover/btn:text-white">
               REFRESH STATS
             </span>
          </button>
       </div>
    </div>
  );
};
