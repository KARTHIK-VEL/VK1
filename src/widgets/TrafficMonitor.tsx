import React from "react";
import { Car, Clock, MapPin, AlertCircle, TrendingUp } from "lucide-react";

export const TrafficMonitor: React.FC = () => {
  // Mock traffic data for Bengaluru tech corridors
  const route = "Silk Board - Electronic City";
  const time = "42m";
  const delay = "+12m";
  const status = "heavy";

  return (
    <div className="flex flex-col h-full bg-orange-500/5 items-center justify-center p-6 border border-orange-500/10 rounded-2xl relative group overflow-hidden">
      <div className="absolute -inset-1 bg-orange-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
      
      <div className="flex items-center gap-2 mb-8 uppercase tracking-widest text-orange-500/80 text-[10px] font-black">
        <Car size={16} className="text-orange-500 group-hover:animate-bounce" />
        TRAFFIC PULSE
      </div>

      <div className="text-center group-hover:scale-110 transition-transform duration-500 w-full px-2">
        <div className="flex items-center justify-center gap-2 mb-4 bg-white/5 px-4 py-2 rounded-xl border border-white/5">
           <MapPin size={14} className="text-orange-400" />
           <span className="text-[10px] font-black text-white/80 uppercase tracking-tight truncate leading-tight">{route}</span>
        </div>
        
        <div className="flex items-baseline justify-center gap-2">
           <span className="text-4xl font-black text-white tracking-widest leading-none drop-shadow-xl">{time}</span>
           <span className="text-[10px] font-black text-rose-400 uppercase tracking-widest">{delay}</span>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-2 text-[8px] font-black tracking-widest text-white/10 italic">
         <Clock size={10} />
         UPDATE: 2MIN AGO
      </div>
    </div>
  );
};
