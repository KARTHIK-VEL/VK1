import React from "react";
import { Star, TrendingUp } from "lucide-react";

export const RepoStars: React.FC = () => {
  // Mock repository data
  const repos = [
    { name: "DevPulse", stars: 1242, growth: 12 },
    { name: "Tauri-UI", stars: 856, growth: 8 },
    { name: "Rust-Pulse", stars: 412, growth: 5 },
  ];

  return (
    <div className="flex flex-col h-full gap-4">
      <div className="flex items-center gap-2 mb-2">
        <Star size={14} className="text-yellow-400" />
        <span className="text-[10px] font-black uppercase tracking-widest text-white/40">REPO TRACKER</span>
      </div>

      <div className="space-y-4">
        {repos.map((repo, i) => (
          <div key={i} className="flex items-center justify-between group">
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-white/60 group-hover:text-white transition-colors">{repo.name}</span>
              <div className="flex items-center gap-2 bg-white/5 px-2 py-0.5 rounded-full w-fit mt-1">
                 <Star size={10} className="text-yellow-400 fill-yellow-400/20" />
                 <span className="text-[10px] font-mono font-black text-white">{repo.stars}</span>
              </div>
            </div>
            <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-bold">
               <TrendingUp size={12} />
               +{repo.growth}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-center gap-2">
         <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">TOTAL</span>
         <span className="text-[10px] font-black text-yellow-400 tracking-wider">2,510</span>
      </div>
    </div>
  );
};
