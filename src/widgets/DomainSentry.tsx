import React from "react";
import { Globe, Clock, ShieldAlert, CheckCircle2 } from "lucide-react";

export const DomainSentry: React.FC = () => {
  // Mock data for domain expiry countdown
  const domains = [
    { name: "devpulse.app", days: 142, status: "safe" },
    { name: "my-llm-api.io", days: 12, status: "near" },
  ];

  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-indigo-500/5 via-transparent to-transparent p-4">
      <div className="flex items-center gap-2 mb-6">
        <Globe size={16} className="text-indigo-400" />
        <span className="text-[10px] font-black uppercase tracking-widest text-white/40">DOMAIN SECURITY</span>
      </div>

      <div className="space-y-4">
        {domains.map((d, i) => (
          <div key={i} className="flex items-center justify-between group bg-white/5 p-3 rounded-xl border border-white/5 hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center gap-3">
               <div className={`w-2 h-2 rounded-full ${d.status === 'safe' ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]' : 'bg-rose-500 shadow-[0_0_8px_rgba(251,113,133,0.5)] animate-pulse'}`} />
               <div className="flex flex-col">
                  <span className="text-[10px] font-black text-white/80 group-hover:text-white uppercase tracking-tight">{d.name}</span>
               </div>
            </div>
            <div className="flex flex-col items-end">
               <span className={`text-[10px] font-mono font-black ${d.days < 30 ? 'text-rose-400' : 'text-white'}`}>{d.days}d</span>
               <span className="text-[8px] font-bold text-white/20 uppercase tracking-widest">REMAINING</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-center gap-2 text-[8px] font-black tracking-widest text-white/10 uppercase italic">
         <ShieldAlert size={10} />
         AUTO-RENEW CHECK ACTIVE
      </div>
    </div>
  );
};
