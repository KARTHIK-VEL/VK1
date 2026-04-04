import React from "react";
import { Quote, MessageCircle, MessageSquare, Terminal } from "lucide-react";

export const QuoteWisdom: React.FC = () => {
  // Mock data for motivational coding wisdom
  const quote = "If you can't explain it simply, you don't understand it well enough.";
  const author = "Albert Einstein";

  return (
    <div className="flex flex-col h-full items-center justify-center p-6 bg-gradient-to-br from-indigo-500/5 via-transparent to-transparent rounded-2xl relative group overflow-hidden">
      <div className="absolute -inset-1 bg-indigo-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
      
      <div className="flex items-center gap-2 mb-8 uppercase tracking-widest text-indigo-400 text-[10px] font-black">
        <Quote size={16} className="text-indigo-400 group-hover:scale-125 transition-transform" />
        WISDOM PULSE
      </div>

      <div className="text-center group-hover:scale-105 transition-transform duration-500 w-full px-2">
        <p className="text-sm font-black text-white italic leading-relaxed tracking-tight mb-4 select-none">
           "{quote}"
        </p>
        <span className="text-[10px] font-black text-indigo-400/60 uppercase tracking-widest">
           — {author}
        </span>
      </div>

      <div className="mt-8 flex items-center justify-center gap-2 text-[8px] font-black tracking-widest text-white/10 uppercase italic">
         <Terminal size={10} />
         DAILY CODING WISDOM
      </div>
    </div>
  );
};
