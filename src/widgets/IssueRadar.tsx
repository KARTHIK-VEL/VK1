import React from "react";
import { ShieldAlert, Terminal, Activity } from "lucide-react";
import { cn } from "../lib/utils";

interface IssueRadarProps {
  issues: Array<{ id: string; title: string; priority: "high" | "med" | "low" }>;
}

export const IssueRadar: React.FC<IssueRadarProps> = ({ issues }) => {
  const highPriority = issues.filter(i => i.priority === "high");

  return (
    <div className="flex flex-col h-full gap-3 group">
       <div className="flex items-center justify-between">
         <ShieldAlert className={cn(
           "transition-all duration-500",
           highPriority.length > 0 ? "text-rose-500 animate-pulse" : "text-white/20"
         )} size={20} />
         <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-rose-500/10 text-rose-500 text-[8px] font-black uppercase tracking-widest border border-rose-500/20 shadow-[0_0_12px_rgba(244,63,94,0.2)]">
            CRITICAL RADAR
         </div>
       </div>

       <div className="flex-1 flex flex-col gap-2 overflow-hidden py-1">
          {issues.length > 0 ? issues.slice(0, 3).map((issue) => (
             <div 
               key={issue.id} 
               className="glass px-3 py-2 flex items-start gap-2.5 hover:bg-white/5 transition-all group-hover:translate-x-1 border-white/5"
             >
                <div className={cn(
                  "w-1 h-1 rounded-full mt-1.5 shrink-0",
                  issue.priority === "high" ? "bg-rose-500 shadow-[0_0_6px_rgba(244,63,94,0.8)]" : 
                  issue.priority === "med" ? "bg-yellow-500" : "bg-blue-500"
                )} />
                <span className="text-[10px] font-bold text-white/50 truncate leading-relaxed">
                  {issue.title}
                </span>
             </div>
          )) : (
             <div className="flex-1 flex flex-col items-center justify-center opacity-20">
               <Activity size={32} />
               <span className="text-[8px] font-black mt-2 uppercase tracking-widest italic">SKY CLEAR</span>
             </div>
          )}
       </div>

       <div className="flex items-center justify-between border-t border-white/5 pt-3">
          <div className="flex items-center gap-2">
             <Terminal size={12} className="text-white/20" />
             <span className="text-[8px] font-black text-white/40 uppercase tracking-widest font-mono">
               SYS.LOG::INBOUND
             </span>
          </div>
          <span className="text-[10px] font-black text-white italic tracking-tighter">
             +{issues.length}
          </span>
       </div>
    </div>
  );
};
