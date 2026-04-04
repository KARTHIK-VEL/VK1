import React from "react";
import { HandCoins, TrendingDown, CheckCircle2, Clock } from "lucide-react";

export const FreelanceTracker: React.FC = () => {
  // Mock invoice data for freelance tracking
  const unpaid = "2,450";
  const paid = "8,120";

  return (
    <div className="flex flex-col h-full bg-emerald-500/5 items-center justify-center p-6 border border-emerald-500/10 rounded-2xl relative group overflow-hidden">
      <div className="absolute -inset-1 bg-emerald-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
      
      <div className="flex items-center gap-2 mb-8 uppercase tracking-widest text-emerald-500/80 text-[10px] font-black">
        <HandCoins size={16} className="text-emerald-500" />
        REVENUE TRACKER
      </div>

      <div className="space-y-6 w-full">
         <div className="flex flex-col items-center">
            <div className="text-4xl font-black text-white tracking-tighter leading-none mb-1">${unpaid}</div>
            <span className="text-[8px] font-black text-rose-400 uppercase tracking-widest flex items-center gap-2">
               <div className="w-1.5 h-1.5 bg-rose-500 rounded-full animate-pulse" />
               UNPAID INVOICES
            </span>
         </div>
         
         <div className="flex items-center justify-center gap-4 pt-4 border-t border-white/5">
            <div className="flex flex-col items-center">
               <span className="text-xl font-black text-white/40">${paid}</span>
               <span className="text-[8px] font-bold text-white/10 uppercase tracking-widest mt-1">SETTLED</span>
            </div>
         </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-2 text-[8px] font-black tracking-widest text-white/10 uppercase italic">
         <CheckCircle2 size={10} />
         STRIPE INTEGRATION ACTIVE
      </div>
    </div>
  );
};
