import React from "react";
import { GitCommit } from "lucide-react";

export const CommitHeatmap: React.FC = () => {
  // Mock data for 7-day contribution grid
  const days = [
    { day: "M", level: 1 },
    { day: "T", level: 3 },
    { day: "W", level: 0 },
    { day: "T", level: 4 },
    { day: "F", level: 2 },
    { day: "S", level: 1 },
    { day: "S", level: 3 },
  ];

  const getColor = (level: number) => {
    switch (level) {
      case 0: return "bg-white/5";
      case 1: return "bg-emerald-900/40";
      case 2: return "bg-emerald-700/60";
      case 3: return "bg-emerald-500/80 shadow-[0_0_8px_rgba(16,185,129,0.3)]";
      case 4: return "bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.5)]";
      default: return "bg-white/5";
    }
  };

  return (
    <div className="flex flex-col h-full items-center justify-between py-2">
      <div className="flex items-center gap-2 mb-4">
        <GitCommit size={14} className="text-emerald-400" />
        <span className="text-[10px] font-black uppercase tracking-widest text-white/40">7-DAY PULSE</span>
      </div>
      
      <div className="flex gap-2 items-end flex-grow">
        {days.map((d, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <div 
              className={`w-6 h-6 rounded ${getColor(d.level)} transition-all duration-500 hover:scale-110`}
            />
            <span className="text-[8px] font-bold text-white/20">{d.day}</span>
          </div>
        ))}
      </div>

      <div className="mt-4 text-[10px] font-mono text-emerald-400/80 font-bold">
        +24 COMMITS
      </div>
    </div>
  );
};
