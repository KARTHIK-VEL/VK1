import React from "react";
import { Flame } from "lucide-react";
import { cn } from "../lib/utils";

interface GitHubStreakProps {
  count: number;
}

export const GitHubStreak: React.FC<GitHubStreakProps> = ({ count }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full relative group">
      {/* Glow Effect */}
      <div className="absolute inset-0 m-auto w-16 h-16 bg-orange-500/20 rounded-full blur-2xl group-hover:bg-orange-500/40 transition-all duration-700" />
      
      <div className="relative flex flex-col items-center">
        <Flame 
          size={56} 
          className={cn(
            "text-orange-500 streak-flame transition-all duration-700 drop-shadow-[0_0_15px_rgba(249,115,22,0.6)]",
            count > 0 ? "opacity-100 scale-100" : "opacity-30 scale-90 grayscale"
          )} 
        />
        
        <div className="mt-4 flex flex-col items-center">
          <span className="text-4xl font-black text-white tracking-tighter tabular-nums drop-shadow-md">
            {count}
          </span>
          <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest mt-1">
            STREAK DAYS
          </span>
        </div>
      </div>

      {count > 30 && (
         <div className="absolute -top-2 -right-2">
            <div className="bg-yellow-500 text-black text-[8px] font-black px-1.5 py-0.5 rounded-full shadow-lg animate-bounce">
              ELITE
            </div>
         </div>
      )}
    </div>
  );
};
