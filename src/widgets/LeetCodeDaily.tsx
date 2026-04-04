import React from "react";
import { Code, ExternalLink, Zap } from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import { cn } from "../lib/utils";

interface LeetCodeDailyProps {
  title: string;
  difficulty: "Easy" | "Medium" | "Hard";
  link: string;
  isSolved: boolean;
}

export const LeetCodeDaily: React.FC<LeetCodeDailyProps> = ({ title, difficulty, link, isSolved }) => {
  return (
    <div className="flex flex-col h-full gap-4 group">
       <div className="flex items-center justify-between">
         <SiLeetcode className="text-yellow-500 group-hover:scale-110 transition-transform duration-500" size={24} />
         <div className={cn(
           "px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-widest border",
           difficulty === "Easy" ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" :
           difficulty === "Medium" ? "bg-yellow-500/10 text-yellow-400 border-yellow-500/20" :
           "bg-rose-500/10 text-rose-400 border-rose-500/20 shadow-[0_0_12px_rgba(244,63,94,0.3)]"
         )}>
           {difficulty} MODE
         </div>
       </div>

       <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-sm font-black text-white line-clamp-2 leading-relaxed tracking-tight group-hover:text-blue-400 transition-colors">
            {title}
          </h2>
          <div className="flex items-center gap-2 mt-2 opacity-40 group-hover:opacity-100 transition-opacity">
            <Zap size={10} className="text-orange-500" />
            <span className="text-[8px] font-bold uppercase tracking-widest text-white/60 font-mono">
              DAILY SECTOR::INBOUND
            </span>
          </div>
       </div>

       <div className="flex items-center justify-between border-t border-white/5 pt-3">
          <div className="flex items-center gap-2">
             <div className={cn(
               "w-2 h-2 rounded-full",
               isSolved ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,1)]" : "bg-white/5 border border-white/20"
             )} />
             <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">
               {isSolved ? "STATUS: SYNCED" : "STATUS: PENDING"}
             </span>
          </div>
          <button 
            onClick={() => window.open(link, "_blank")}
            className="text-white/20 hover:text-white transition-all transform hover:translate-x-1"
          >
             <ExternalLink size={14} />
          </button>
       </div>
    </div>
  );
};
