import React, { useState, useEffect } from "react";
import { Timer, Play, Pause, RotateCcw, Zap } from "lucide-react";
import { cn } from "../lib/utils";

export const PomodoroRing: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [mode, setMode] = useState<"focus" | "break">("focus");

  useEffect(() => {
    let interval: any;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
      setMode(mode === "focus" ? "break" : "focus");
      setTimeLeft(mode === "focus" ? 5 * 60 : 25 * 60);
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft, mode]);

  const toggle = () => setIsActive(!isActive);
  const reset = () => {
    setIsActive(false);
    setTimeLeft(mode === "focus" ? 25 * 60 : 5 * 60);
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const progress = (timeLeft / (mode === "focus" ? 25 * 60 : 5 * 60)) * 100;

  return (
    <div className="flex flex-col h-full gap-4 group">
       <div className="flex items-center justify-between">
         <Timer size={20} className={cn("transition-colors", mode === "focus" ? "text-rose-500" : "text-emerald-400")} />
         <div className={cn(
           "px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-widest border border-white/10",
           mode === "focus" ? "bg-rose-500/10 text-rose-400" : "bg-emerald-500/10 text-emerald-400"
         )}>
           {mode === "focus" ? "DEEP WORK" : "BREAK TIME"}
         </div>
       </div>

       <div className="flex-1 flex flex-col items-center justify-center relative">
          <svg className="w-24 h-24 transform -rotate-90 scale-110 group-hover:scale-125 transition-transform duration-700">
             <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="2" fill="transparent" className="text-white/5" />
             <circle 
               cx="48" cy="48" r="40" 
               stroke="currentColor" strokeWidth="2" fill="transparent" 
               strokeDasharray={251} strokeDashoffset={251 - (251 * progress) / 100}
               className={cn("transition-all duration-1000", mode === "focus" ? "text-rose-500" : "text-emerald-400")} 
             />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
             <span className="text-2xl font-black text-white tabular-nums drop-shadow-md">
                {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
             </span>
             <Zap size={10} className={cn("mt-1 opacity-20", isActive && "animate-pulse opacity-100 text-yellow-500")} />
          </div>
       </div>

       <div className="flex items-center justify-center gap-4 border-t border-white/5 pt-3">
          <button 
            onClick={toggle}
            className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-white/10 transition-all active:scale-90"
          >
             {isActive ? <Pause size={16} /> : <Play size={16} className="ml-1" />}
          </button>
          <button 
            onClick={reset}
            className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-white/10 transition-all active:scale-90"
          >
             <RotateCcw size={16} />
          </button>
       </div>
    </div>
  );
};
