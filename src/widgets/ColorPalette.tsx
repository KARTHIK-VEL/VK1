import React from "react";
import { Palette, Copy, Pipette } from "lucide-react";

export const ColorPalette: React.FC = () => {
  // Mock color palette data
  const colors = [
    { hex: "#3b82f6", name: "Primary Blue" },
    { hex: "#10b981", name: "Emerald 500" },
    { hex: "#f59e0b", name: "Amber Alert" },
    { hex: "#ef4444", name: "Rose High" },
  ];

  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-purple-500/5 via-transparent to-transparent p-4">
      <div className="flex items-center gap-2 mb-6">
        <Palette size={16} className="text-purple-400" />
        <span className="text-[10px] font-black uppercase tracking-widest text-white/40">COLOR VAULT</span>
      </div>

      <div className="space-y-4">
        {colors.map((color, i) => (
          <div key={i} className="flex items-center justify-between group cursor-pointer bg-white/5 p-2 rounded-xl border border-white/5 hover:bg-white/10 transition-all duration-300">
             <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg shadow-xl" style={{ backgroundColor: color.hex }} />
                <div className="flex flex-col">
                   <span className="text-[10px] font-black text-white/80 group-hover:text-white uppercase tracking-tight">{color.name}</span>
                   <span className="text-[8px] font-mono font-bold text-white/20 uppercase tracking-widest">{color.hex}</span>
                </div>
             </div>
             <Copy size={12} className="text-white/10 group-hover:text-purple-400 transition-colors" />
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-center gap-2 text-[8px] font-black tracking-widest text-white/10 uppercase italic">
         <Pipette size={10} />
         PICKER: ON TOP
      </div>
    </div>
  );
};
