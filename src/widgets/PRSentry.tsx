import React from "react";
import { GitPullRequest, Eye, Terminal } from "lucide-react";
import { cn } from "../lib/utils";

interface PRSentryProps {
  count: number;
}

export const PRSentry: React.FC<PRSentryProps> = ({ count }) => {
  return (
    <div className="flex flex-col h-full justify-between py-2 group">
      <div className="flex items-center justify-between">
        <GitPullRequest className="text-emerald-400 group-hover:scale-110 transition-transform duration-500" size={24} />
        <div className={cn(
          "px-2 py-0.5 rounded text-[10px] font-black",
          count > 0 ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 animate-pulse" : "bg-white/5 text-white/20"
        )}>
          {count > 0 ? "REVIEW READY" : "IDLE"}
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center -mt-4">
        <div className="text-6xl font-black text-white tracking-tighter drop-shadow-xl font-mono">
          {count.toString().padStart(2, '0')}
        </div>
        <div className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] mt-2">
          PRs AWAITING
        </div>
      </div>

      <div className="flex items-center gap-3 border-t border-white/5 pt-3">
         <div className="flex items-center gap-1.5 opacity-40 hover:opacity-100 transition-opacity">
           <Eye size={12} className="text-blue-400" />
           <span className="text-[8px] font-bold uppercase tracking-widest text-white/60">SENTRY LIVE</span>
         </div>
         <div className="flex-1" />
         <Terminal size={12} className="text-white/20" />
      </div>
    </div>
  );
};
