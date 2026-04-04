import { Database, Code2 } from "lucide-react";

interface LanguageDNAProps {
  data: Array<{ name: string; percent: number; color: string }>;
}

export const LanguageDNA: React.FC<LanguageDNAProps> = ({ data }) => {
  const sortedData = [...data].sort((a, b) => b.percent - a.percent);

  return (
    <div className="flex flex-col h-full gap-4 group">
       <div className="flex items-center justify-between">
         <Database className="text-blue-400 group-hover:rotate-12 transition-transform duration-500" size={20} />
         <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 text-[8px] font-black uppercase tracking-widest border border-blue-500/20">
            <Code2 size={10} />
            SCAN COMPLETE
         </div>
       </div>

       <div className="flex-1 flex items-center justify-center relative">
          {/* Donut Chart with SVG */}
          <svg className="w-24 h-24 transform -rotate-90 drop-shadow-lg scale-110 group-hover:scale-125 transition-transform duration-700">
             {sortedData.map((lang, idx) => {
                const total = sortedData.reduce((acc, curr) => acc + curr.percent, 0);
                const prevPercents = sortedData.slice(0, idx).reduce((acc, curr) => acc + curr.percent, 0);
                const strokeDasharray = `${(lang.percent / total) * 251} 251`;
                const strokeDashoffset = -((prevPercents / total) * 251);

                return (
                   <circle
                      key={lang.name}
                      cx="48"
                      cy="48"
                      r="40"
                      fill="transparent"
                      stroke={lang.color}
                      strokeWidth="8"
                      strokeDasharray={strokeDasharray}
                      strokeDashoffset={strokeDashoffset}
                      className="transition-all duration-1000 ease-out hover:stroke-white cursor-help"
                      style={{ filter: "drop-shadow(0 0 4px rgba(255,255,255,0.2))" }}
                   />
                );
             })}
          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none translate-y-1">
             <span className="text-lg font-black text-white italic drop-shadow-md">7.4</span>
             <span className="text-[8px] font-bold text-white/40 uppercase tracking-widest -mt-1">K LOC</span>
          </div>
       </div>

       <div className="space-y-1.5 border-t border-white/5 pt-3">
          {sortedData.slice(0, 3).map((lang) => (
             <div key={lang.name} className="flex items-center justify-between text-[10px] font-bold tracking-widest uppercase">
                <div className="flex items-center gap-2">
                   <div 
                     className="w-1.5 h-1.5 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.2)]" 
                     style={{ backgroundColor: lang.color }} 
                   />
                   <span className="text-white/40">{lang.name}</span>
                </div>
                <span className="text-white/80">{lang.percent}%</span>
             </div>
          ))}
       </div>
    </div>
  );
};
