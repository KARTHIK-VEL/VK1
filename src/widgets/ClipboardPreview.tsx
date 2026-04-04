import React from "react";
import { Clipboard, Copy, FileText, Globe, Hash } from "lucide-react";

export const ClipboardPreview: React.FC = () => {
  // Mock clipboard history data
  const history = [
    { type: "text", content: "npm run tauri build", time: "2m ago" },
    { type: "color", content: "#3b82f6", time: "5m ago" },
    { type: "link", content: "https://tauri.app", time: "12m ago" },
  ];

  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-blue-500/5 via-transparent to-transparent p-4">
      <div className="flex items-center gap-2 mb-6">
        <Clipboard size={16} className="text-blue-400" />
        <span className="text-[10px] font-black uppercase tracking-widest text-white/40">CLIPBOARD VAULT</span>
      </div>

      <div className="space-y-4">
        {history.map((item, i) => (
          <div key={i} className="group cursor-pointer bg-white/5 p-3 rounded-xl border border-white/5 hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center justify-between mb-2">
               <div className="flex items-center gap-2">
                  {item.type === 'text' && <FileText size={12} className="text-blue-400" />}
                  {item.type === 'color' && <Hash size={12} className="text-emerald-400" />}
                  {item.type === 'link' && <Globe size={12} className="text-purple-400" />}
                  <span className="text-[8px] font-bold text-white/20 uppercase tracking-widest leading-none">{item.time}</span>
               </div>
               <Copy size={12} className="text-white/10 group-hover:text-blue-400 transition-colors" />
            </div>
            <p className="text-[10px] font-black text-white/80 group-hover:text-white line-clamp-1 uppercase tracking-tight">
               {item.content}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-center gap-2 text-[8px] font-black tracking-widest text-white/10 uppercase italic">
         MULTI-CLIP SNAPSHOT
      </div>
    </div>
  );
};
