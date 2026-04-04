import React from "react";
import { Calendar, Clock, Video, User } from "lucide-react";

export const MeetingGhost: React.FC = () => {
  // Mock meeting data for countdown
  const nextMeeting = "Standup - System Arch";
  const time = "14:00";
  const countdown = "18m";

  return (
    <div className="flex flex-col h-full bg-blue-500/5 items-center justify-center p-6 border border-blue-500/10 rounded-2xl relative group overflow-hidden">
      <div className="absolute -inset-1 bg-blue-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
      
      <div className="flex items-center gap-2 mb-8 animate-pulse">
        <Calendar size={16} className="text-blue-500" />
        <span className="text-[10px] font-black uppercase tracking-widest text-white/40 tracking-[0.2em]">CALENDAR SYNC</span>
      </div>

      <div className="text-center group-hover:scale-110 transition-transform duration-500 w-full">
        <div className="flex flex-col items-center gap-1 mb-6">
           <div className="text-6xl font-black text-white tracking-widest leading-none drop-shadow-xl">{countdown}</div>
           <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest mt-2">COMMENCING</span>
        </div>
        
        <div className="bg-white/5 border border-white/5 p-4 rounded-xl backdrop-blur-sm group-hover:bg-white/10 transition-all duration-300">
           <div className="flex items-center gap-2 mb-1">
              <Video size={12} className="text-blue-400" />
              <span className="text-[10px] font-black text-white leading-tight uppercase tracking-tight">{nextMeeting}</span>
           </div>
           <div className="flex items-center justify-center gap-3 text-[8px] font-bold text-white/20 uppercase tracking-widest">
              <div className="flex items-center gap-1"><Clock size={10} /> {time}</div>
              <div className="flex items-center gap-1"><User size={10} /> 5 PERS</div>
           </div>
        </div>
      </div>

      <div className="mt-8 text-[8px] font-black text-white/5 tracking-[0.4em] uppercase text-center w-full">
         GHOST PROTOCOL : ACTIVE
      </div>
    </div>
  );
};
