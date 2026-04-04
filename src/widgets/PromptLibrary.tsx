import React from "react";
import { BookMarked, Copy, MessageSquare, Terminal } from "lucide-react";

export const PromptLibrary: React.FC = () => {
  // Mock system prompts for quick-copy
  const prompts = [
    { title: "React Expert", content: "You are a world-class React developer...", type: "Code" },
    { title: "Rust Architect", content: "Analyze the following Rust code...", type: "System" },
  ];

  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-indigo-500/5 via-transparent to-transparent p-4">
      <div className="flex items-center gap-2 mb-6">
        <BookMarked size={16} className="text-indigo-400" />
        <span className="text-[10px] font-black uppercase tracking-widest text-white/40">PROMPT VAULT</span>
      </div>

      <div className="space-y-4">
        {prompts.map((prompt, i) => (
          <div key={i} className="group cursor-pointer bg-white/5 p-3 rounded-xl border border-white/5 hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center justify-between mb-2">
               <div className="flex items-center gap-2">
                  <MessageSquare size={12} className="text-indigo-400" />
                  <span className="text-[10px] font-black text-white group-hover:text-white uppercase tracking-tight">{prompt.title}</span>
               </div>
               <Copy size={12} className="text-white/10 group-hover:text-indigo-400 transition-colors" />
            </div>
            <p className="text-[8px] font-bold text-white/20 line-clamp-2 uppercase tracking-widest leading-relaxed">
               {prompt.content}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-center gap-2 text-[8px] font-black tracking-widest text-white/10 uppercase">
         <Terminal size={10} />
         TOTAL: 10 READY
      </div>
    </div>
  );
};
