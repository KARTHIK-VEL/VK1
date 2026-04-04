import React from "react";
import { GitBranch, Clock } from "lucide-react";

export const BranchReminder: React.FC = () => {
  // Mock data for current active branch
  const activeBranch = "feature/v2-vibrancy-fix";
  const repoName = "DevPulse-Core";

  return (
    <div className="flex flex-col h-full gap-4 items-center justify-center p-4">
      <div className="flex items-center gap-2 mb-4">
        <GitBranch size={16} className="text-blue-400" />
        <span className="text-[10px] font-black uppercase tracking-widest text-white/40">BRANCH ALERT</span>
      </div>

      <div className="text-center group cursor-pointer">
        <span className="text-[8px] font-black text-white/20 uppercase tracking-widest block mb-2">{repoName}</span>
        <div className="bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-lg group-hover:bg-blue-500/20 transition-all duration-300">
          <span className="text-xs font-mono font-bold text-blue-400 tracking-tight">{activeBranch}</span>
        </div>
      </div>

      <div className="mt-8 flex items-center gap-2 text-[10px] text-white/20 font-bold uppercase tracking-widest italic animate-pulse">
         <Clock size={12} />
         <span>LAST COMMIT: 12m ago</span>
      </div>
    </div>
  );
};
