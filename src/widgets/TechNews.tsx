import React from "react";
import { Newspaper, ExternalLink, TrendingUp, Zap } from "lucide-react";
import { cn } from "../lib/utils";

interface NewsItem {
  id: string;
  title: string;
  source: string;
  points: number;
}

export const TechNews: React.FC<{ news: NewsItem[] }> = ({ news }) => {
  return (
    <div className="flex flex-col h-full gap-4 group">
       <div className="flex items-center justify-between">
         <div className="flex items-center gap-2">
           <Newspaper size={20} className="text-blue-400" />
           <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">HACKER NEWS::LIVE</span>
         </div>
         <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[8px] font-black uppercase tracking-widest border border-emerald-500/20 shadow-[0_0_12px_rgba(16,185,129,0.2)]">
            <Zap size={10} />
            SYNCED
         </div>
       </div>

       <div className="flex-1 flex flex-col gap-3 overflow-hidden py-1">
          {news.slice(0, 3).map((item) => (
             <div 
               key={item.id} 
               className="glass px-3 py-2 flex flex-col gap-1 hover:bg-white/5 transition-all group-hover:translate-x-1 border-white/5 cursor-pointer"
             >
                <div className="flex justify-between items-start gap-4">
                  <span className="text-[10px] font-bold text-white/80 line-clamp-2 leading-relaxed">
                    {item.title}
                  </span>
                  <ExternalLink size={10} className="text-white/20 shrink-0 mt-0.5" />
                </div>
                <div className="flex items-center gap-2 mt-1">
                   <TrendingUp size={8} className="text-orange-500" />
                   <span className="text-[8px] font-black text-white/30 uppercase tracking-widest">
                     {item.points} PTS • {item.source}
                   </span>
                </div>
             </div>
          ))}
       </div>

       <div className="border-t border-white/5 pt-3">
          <div className="flex items-center gap-2 opacity-20 group-hover:opacity-100 transition-opacity">
             <span className="text-[8px] font-black text-white uppercase tracking-widest italic font-mono">
               SYS.LOG::FEED_ACTIVE::HEADLINES_FETCHED
             </span>
          </div>
       </div>
    </div>
  );
};
