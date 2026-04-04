import React from "react";
import { Globe, Copy, ShieldCheck, Activity } from "lucide-react";

export const IPFetcher: React.FC = () => {
  // Mock IP address data
  const localIP = "192.168.1.142";
  const publicIP = "49.36.124.212";

  return (
    <div className="flex flex-col h-full items-center justify-center p-6 bg-gradient-to-tr from-emerald-500/5 via-transparent to-transparent rounded-2xl relative group overflow-hidden">
      <div className="absolute -inset-1 bg-emerald-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
      
      <div className="flex items-center gap-2 mb-8 uppercase tracking-widest text-white/40 text-[10px] font-black">
        <Globe size={16} className="text-emerald-500" />
        IP SNAPSHOT
      </div>

      <div className="space-y-4 w-full">
         <div className="flex items-center justify-between group cursor-pointer bg-white/5 p-3 rounded-lg hover:bg-white/10 transition-colors border border-white/5">
            <div className="flex flex-col">
               <span className="text-[8px] font-black text-white/20 uppercase tracking-widest leading-none mb-1">LOCAL</span>
               <span className="text-[10px] font-mono font-black text-white tracking-widest uppercase">{localIP}</span>
            </div>
            <Copy size={12} className="text-white/10 group-hover:text-emerald-400 transition-colors" />
         </div>
         
         <div className="flex items-center justify-between group cursor-pointer bg-white/5 p-3 rounded-lg hover:bg-white/10 transition-colors border border-white/5">
            <div className="flex flex-col">
               <span className="text-[8px] font-black text-white/20 uppercase tracking-widest leading-none mb-1">PUBLIC</span>
               <span className="text-[10px] font-mono font-black text-white tracking-widest uppercase">{publicIP}</span>
            </div>
            <Copy size={12} className="text-white/10 group-hover:text-emerald-400 transition-colors" />
         </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-2 text-[8px] font-black tracking-widest text-white/10 uppercase italic">
         <ShieldCheck size={10} />
         STATUS: SECURE
      </div>
    </div>
  );
};
