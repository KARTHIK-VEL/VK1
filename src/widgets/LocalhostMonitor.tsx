import React from "react";
import { Monitor, Globe, Activity, Terminal } from "lucide-react";

export const LocalhostMonitor: React.FC = () => {
  // Mock active port data
  const ports = [
    { port: 3000, type: "React", status: "listen" },
    { port: 1420, type: "Tauri", status: "active" },
    { port: 8000, type: "FastAPI", status: "listen" },
  ];

  return (
    <div className="flex flex-col h-full bg-indigo-500/5 p-4 rounded-2xl border border-indigo-500/10 relative group">
      <div className="flex items-center gap-2 mb-6">
        <Monitor size={16} className="text-indigo-400" />
        <span className="text-[10px] font-black uppercase tracking-widest text-white/40">PORT SCANNER</span>
      </div>

      <div className="space-y-4">
        {ports.map((p, i) => (
          <div key={i} className="flex items-center justify-between group cursor-pointer bg-white/5 p-3 rounded-xl border border-white/5 hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center gap-3">
               <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-ping" />
               <div className="flex flex-col">
                  <span className="text-[10px] font-black text-white/80 group-hover:text-white uppercase tracking-tight">:{p.port}</span>
                  <span className="text-[8px] font-bold text-white/20 uppercase tracking-widest">{p.type}</span>
               </div>
            </div>
            <div className="flex flex-col items-end">
               <span className="text-[10px] font-mono font-black text-indigo-400 uppercase tracking-widest">{p.status}</span>
               <span className="text-[8px] font-bold text-white/10 uppercase tracking-widest">STATE</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-center gap-2 text-[8px] font-black tracking-widest text-white/10 uppercase">
         <Terminal size={10} />
         LOCALHOST MONITOR ACTIVE
      </div>
    </div>
  );
};
