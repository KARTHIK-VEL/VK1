import React from "react";
import { cn } from "../lib/utils";
import { 
  Plus, Flame, Cpu, MemoryStick, Code, Globe, Timer, Hash, Newspaper, Palette, 
  Droplets, Laptop, ShieldCheck, Database, LayoutGrid, GitCommit, Rocket, GitBranch,
  Search, Award, Target, Dice5, AlertTriangle, Thermometer, BookOpen, Activity,
  Gauge, Link, BookMarked, Calendar, Clipboard, Braces, Pipette, MousePointer2,
  Table, MessageCircle, ShieldAlert, HandCoins, Car, Quote, Heart, Zap, Clock
} from "lucide-react";
import { SiGithub, SiLeetcode } from "react-icons/si";

interface WidgetGalleryProps {
  onSpawn: (type: string) => void;
  activeWidgets: string[];
}

const WIDGET_CATEGORIES = [
  {
    name: "Git & Social",
    icon: <SiGithub size={16} />,
    widgets: [
      { id: "github", name: "Streak Flame", icon: <Flame /> },
      { id: "pr-sentry", name: "PR Sentry", icon: <ShieldCheck /> },
      { id: "dna", name: "Language DNA", icon: <Database /> },
      { id: "stars", name: "Repo Stars", icon: <Plus /> },
      { id: "heatmap", name: "Commit Pulse", icon: <GitCommit /> },
      { id: "deploy", name: "Ship Status", icon: <Rocket /> },
      { id: "branch", name: "Active Branch", icon: <GitBranch /> },
    ]
  },
  {
    name: "Competitive",
    icon: <Code size={16} />,
    widgets: [
      { id: "leetcode", name: "Daily Leet", icon: <SiLeetcode /> },
      { id: "rank", name: "Global Rank", icon: <Globe /> },
      { id: "solved", name: "Solved Counter", icon: <LayoutGrid /> },
      { id: "countdown", name: "Next Contest", icon: <Timer /> },
      { id: "goal", name: "Weekly Target", icon: <Target /> },
      { id: "roll", name: "Random Roll", icon: <Dice5 /> },
      { id: "streak-saver", name: "Streak Saver", icon: <AlertTriangle /> },
    ]
  },
  {
    name: "AI & Engineering",
    icon: <Cpu size={16} />,
    widgets: [
      { id: "cpu", name: "CORE LOAD", icon: <Cpu /> },
      { id: "ram", name: "MEM UTIL", icon: <MemoryStick /> },
      { id: "gpu", name: "NVIDIA VRAM", icon: <Cpu /> },
      { id: "temp", name: "THERMAL PULSE", icon: <Thermometer /> },
      { id: "arxiv", name: "ArXiv Ticker", icon: <BookOpen /> },
      { id: "huggingface", name: "Trending Models", icon: <Hash /> },
      { id: "cuda", name: "CUDA CORES", icon: <Activity /> },
      { id: "api-health", name: "API Monitor", icon: <Search /> },
      { id: "inference", name: "Inference Speed", icon: <Gauge /> },
      { id: "jetson", name: "Edge Link", icon: <Link /> },
      { id: "vault", name: "Prompt Vault", icon: <BookMarked /> },
    ]
  },
  {
    name: "Productivity",
    icon: <Timer size={16} />,
    widgets: [
      { id: "pomodoro", name: "Focus Ring", icon: <Timer /> },
      { id: "localhost", name: "Port Monitor", icon: <Laptop /> },
      { id: "news", name: "Tech News", icon: <Newspaper /> },
      { id: "calendar", name: "Meeting Ghost", icon: <Calendar /> },
      { id: "clipboard", name: "Copy Vault", icon: <Clipboard /> },
      { id: "json", name: "Drop Zone", icon: <Braces /> },
      { id: "palette-v2", name: "Color Vault", icon: <Palette /> },
      { id: "ip", name: "IP Snapshot", icon: <Globe /> },
      { id: "wakatime", name: "IDE Pulse", icon: <Clock /> },
    ]
  },
  {
     name: "Lifestyle",
     icon: <Droplets size={16} />,
     widgets: [
       { id: "hydration", name: "Hydrate Pulse", icon: <Droplets /> },
       { id: "sof", name: "SOF Points", icon: <MessageCircle /> },
       { id: "domain", name: "Expiry Sentry", icon: <ShieldCheck /> },
       { id: "freelance", name: "Revenue Pulse", icon: <HandCoins /> },
       { id: "traffic", name: "Traffic Pulse", icon: <Car /> },
       { id: "wisdom", name: "Daily Wisdom", icon: <Quote /> },
       { id: "buddy", name: "Code Buddy", icon: <Heart /> },
     ]
  }
];

export const WidgetGallery: React.FC<WidgetGalleryProps> = ({ onSpawn, activeWidgets }) => {
  return (
    <div className="space-y-16 pb-24">
      {WIDGET_CATEGORIES.map((category) => (
        <section key={category.name} className="space-y-8">
          <div className="flex items-center gap-4 border-b border-white/5 pb-4">
            <span className="text-blue-400 transition-colors">
              {category.icon}
            </span>
            <h3 className="text-sm font-black text-white uppercase tracking-widest tracking-[0.3em]">
              {category.name}
            </h3>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {category.widgets.map((widget) => {
              const isActive = activeWidgets.includes(widget.id);
              return (
                <button
                  key={widget.id}
                  onClick={() => onSpawn(widget.id)}
                  className={cn(
                    "glass p-8 flex flex-col items-center justify-center gap-6 group transition-all relative overflow-hidden",
                    "hover:bg-white/5 hover:-translate-y-1 active:scale-95",
                    isActive && "ring-1 ring-blue-500/50 bg-white/5 shadow-[0_0_30px_rgba(59,130,246,0.1)]"
                  )}
                >
                  <div className={cn(
                    "w-12 h-12 flex items-center justify-center text-white/20 group-hover:text-blue-400 transition-all duration-500 group-hover:scale-110",
                    isActive && "text-blue-400"
                  )}>
                    {React.cloneElement(widget.icon as React.ReactElement<any>, { size: 32, strokeWidth: 1.5 })}
                  </div>
                  <span className="text-[10px] uppercase font-black tracking-widest text-white/20 group-hover:text-white transition-colors tracking-[0.2em]">
                    {widget.name}
                  </span>
                  
                  {isActive && (
                    <div className="absolute top-3 right-3 flex gap-1">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
};
