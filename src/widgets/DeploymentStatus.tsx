import React from "react";
import { CheckCircle2, XCircle, Rocket, ExternalLink } from "lucide-react";

export const DeploymentStatus: React.FC = () => {
  // Mock deployment data for Vercel/Netlify
  const deployments = [
    { name: "DevPulse-Core", status: "success", time: "2m ago" },
    { name: "Pulse-API", status: "fail", time: "15m ago" },
  ];

  return (
    <div className="flex flex-col h-full gap-4">
      <div className="flex items-center gap-2 mb-2">
        <Rocket size={14} className="text-purple-400" />
        <span className="text-[10px] font-black uppercase tracking-widest text-white/40">SHIP STATUS</span>
      </div>

      <div className="space-y-4">
        {deployments.map((deploy, i) => (
          <div key={i} className="flex items-center justify-between group bg-white/5 p-3 rounded-xl hover:bg-white/10 transition-colors">
            <div className="flex items-center gap-3">
              <div className="relative">
                {deploy.status === "success" ? (
                  <CheckCircle2 size={18} className="text-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.3)]" />
                ) : (
                  <XCircle size={18} className="text-rose-400 shadow-[0_0_12px_rgba(251,113,133,0.3)]" />
                )}
                <div className={`absolute -inset-1 rounded-full ${deploy.status === "success" ? "bg-emerald-500/20" : "bg-rose-500/20"} animate-pulse`} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-white tracking-widest">{deploy.name}</span>
                <span className="text-[8px] text-white/40 font-mono tracking-widest uppercase">{deploy.time}</span>
              </div>
            </div>
            <ExternalLink size={12} className="text-white/20 group-hover:text-white transition-colors cursor-pointer" />
          </div>
        ))}
      </div>

      <div className="mt-auto pt-2 flex items-center justify-center gap-4 text-[8px] font-black tracking-widest text-white/10 uppercase">
         <span className="flex items-center gap-1"><span className="w-1 h-1 bg-emerald-500 rounded-full" /> VERCEL</span>
         <span className="flex items-center gap-1"><span className="w-1 h-1 bg-blue-500 rounded-full" /> NETLIFY</span>
      </div>
    </div>
  );
};
