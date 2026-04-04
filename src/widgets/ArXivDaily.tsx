import React from "react";
import { BookOpen, ExternalLink, ScrollText } from "lucide-react";

export const ArXivDaily: React.FC = () => {
  // Mock research paper data
  const papers = [
    { title: "Grokking at the Edge: LLM Quantization on Jetson Orin", authors: "Chen et al.", cat: "cs.LG" },
    { title: "Direct Preference Optimization for Vision-Language Models", authors: "Smith et al.", cat: "cs.CV" },
  ];

  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-blue-500/5 via-transparent to-transparent p-4">
      <div className="flex items-center gap-2 mb-6">
        <BookOpen size={16} className="text-blue-400" />
        <span className="text-[10px] font-black uppercase tracking-widest text-white/40">RESEARCH TICKER</span>
      </div>

      <div className="space-y-6">
        {papers.map((paper, i) => (
          <div key={i} className="group cursor-pointer">
            <div className="flex items-center gap-2 mb-2">
               <span className="text-[8px] font-black text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-full uppercase tracking-widest leading-none">{paper.cat}</span>
               <span className="text-[8px] font-bold text-white/20 uppercase tracking-widest">{paper.authors}</span>
            </div>
            <div className="flex justify-between items-start gap-4">
               <span className="text-[10px] font-black text-white/80 leading-tight group-hover:text-white transition-colors">{paper.title}</span>
               <ExternalLink size={12} className="text-white/10 group-hover:text-blue-400 transition-colors shrink-0" />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-center gap-2 text-[8px] font-bold tracking-widest text-white/10 uppercase">
         <ScrollText size={10} />
         UPDATE: 12:42 UTC
      </div>
    </div>
  );
};
