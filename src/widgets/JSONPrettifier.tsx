import React from "react";
import { Braces, Copy, FileJson, LucideTrash2 } from "lucide-react";

export const JSONPrettifier: React.FC = () => {
  // Mock JSON data for prettifier
  const sample = '{ "id": 1, "status": "active", "metrics": { "cpu": 12 } }';

  return (
    <div className="flex flex-col h-full bg-gradient-to-tr from-yellow-500/5 via-transparent to-transparent p-4 rounded-2xl relative group overflow-hidden">
      <div className="absolute -inset-1 bg-yellow-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
      
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Braces size={16} className="text-yellow-400" />
          <span className="text-[10px] font-black uppercase tracking-widest text-white/40 tracking-[0.2em]">DROP ZONE</span>
        </div>
        <LucideTrash2 size={14} className="text-white/10 hover:text-rose-400 transition-colors cursor-pointer" />
      </div>

      <div className="flex-grow flex flex-col justify-center gap-4">
         <div className="bg-white/5 border border-dashed border-white/10 p-4 rounded-xl flex flex-col items-center justify-center gap-2 group-hover:border-yellow-500/30 transition-all duration-300">
            <FileJson size={24} className="text-white/20 group-hover:scale-125 transition-transform" />
            <span className="text-[8px] font-black text-white/10 uppercase tracking-widest leading-none">PASTE OR DROP</span>
         </div>
         
         <div className="bg-black/40 border border-white/5 p-3 rounded-lg flex items-center justify-between">
            <code className="text-[10px] font-mono font-bold text-yellow-400/80 truncate w-40">{sample}</code>
            <Copy size={12} className="text-white/10 hover:text-white transition-colors cursor-pointer" />
         </div>
      </div>

      <div className="mt-4 text-[8px] font-black text-white/5 tracking-[0.4em] uppercase text-center w-full">
         INSTANT PRETTIFIER
      </div>
    </div>
  );
};
