import React from "react";
import { TrendingUp, Award, ExternalLink, Hash } from "lucide-react";

export const HuggingFace: React.FC = () => {
  // Mock trending model data from Hugging Face
  const models = [
    { name: "DeepSeek-V3", likes: 24211, type: "LLM" },
    { name: "Stable-Diffusion-3", likes: 18522, type: "Diff" },
    { name: "Whisper-Turbo", likes: 12421, type: "Audio" },
  ];

  return (
    <div className="flex flex-col h-full bg-gradient-to-tr from-yellow-500/5 via-transparent to-transparent p-4 rounded-2xl relative group overflow-hidden">
      <div className="absolute -inset-1 bg-yellow-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
      
      <div className="flex items-center gap-2 mb-6">
        <Hash size={16} className="text-yellow-400" />
        <span className="text-[10px] font-black uppercase tracking-widest text-white/40">TRENDING MODELS</span>
      </div>

      <div className="space-y-4">
        {models.map((model, i) => (
          <div key={i} className="flex items-center justify-between group cursor-pointer bg-white/5 p-2 rounded-lg hover:bg-white/10 transition-all duration-300">
            <div className="flex flex-col">
              <span className="text-[10px] font-black text-white/80 group-hover:text-white leading-tight uppercase tracking-tight">{model.name}</span>
              <span className="text-[8px] font-bold text-white/10 uppercase tracking-widest">{model.type}</span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] font-black text-yellow-400/80">
               <Award size={12} className="text-yellow-400 group-hover:animate-bounce" />
               {(model.likes / 1000).toFixed(1)}K
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-center gap-2 text-[8px] font-black tracking-widest text-white/10 italic">
         <TrendingUp size={10} />
         HUGGING FACE EXPLORER
      </div>
    </div>
  );
};
