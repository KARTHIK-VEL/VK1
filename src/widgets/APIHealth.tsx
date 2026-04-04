import React from "react";
import { Activity, Wifi } from "lucide-react";

export const APIHealth: React.FC = () => {
  // Mock API health data for AI endpoints
  const endpoints = [
    { name: "Ollama-Local", status: "online", ms: 142 },
    { name: "FastAPI-STT", status: "online", ms: 85 },
    { name: "OpenAI-Bridge", status: "degraded", ms: 1240 },
  ];

  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent p-4">
      <div className="flex items-center gap-2 mb-6">
        <Wifi size={16} className="text-emerald-400" />
        <span className="text-[10px] font-black uppercase tracking-widest text-white/40">API PING MONITOR</span>
      </div>

      <div className="space-y-4">
        {endpoints.map((ep, i) => (
          <div key={i} className="flex items-center justify-between group bg-white/5 p-3 rounded-xl hover:bg-white/10 transition-colors cursor-pointer border border-white/5">
            <div className="flex items-center gap-3">
               <div className={`w-2 h-2 rounded-full ${ep.status === 'online' ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]' : 'bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.5)] animate-pulse'}`} />
               <div className="flex flex-col">
                  <span className="text-[10px] font-black text-white/80 group-hover:text-white uppercase tracking-tight">{ep.name}</span>
               </div>
            </div>
            <div className="flex flex-col items-end">
               <span className={`text-[10px] font-mono font-black ${ep.ms > 500 ? 'text-yellow-400' : 'text-emerald-400'}`}>{ep.ms}ms</span>
               <span className="text-[8px] font-bold text-white/20 uppercase tracking-widest">LATENCY</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-center gap-2 text-[8px] font-black tracking-widest text-white/10 uppercase">
         <Activity size={10} />
         PING RATE: 5s
      </div>
    </div>
  );
};
