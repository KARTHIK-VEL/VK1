import { useState, useEffect } from "react";
import { listen } from "@tauri-apps/api/event";
import { invoke } from "@tauri-apps/api/core";
import { WidgetLayout } from "./components/WidgetLayout";
import { SettingsPanel } from "./components/SettingsPanel";
import { WidgetGallery } from "./components/WidgetGallery";
import { cn } from "./lib/utils";
import { Cpu, MemoryStick, Settings, LayoutGrid, Zap, X } from "lucide-react";
import { SiGithub, SiLeetcode } from "react-icons/si";

// Batch A: Git & Social
import { GitHubStreak } from "./widgets/GitHubStreak";
import { PRSentry } from "./widgets/PRSentry";
import { LanguageDNA } from "./widgets/LanguageDNA";
import { RepoStars } from "./widgets/RepoStars";
import { CommitHeatmap } from "./widgets/CommitHeatmap";
import { DeploymentStatus } from "./widgets/DeploymentStatus";
import { BranchReminder } from "./widgets/BranchReminder";

// Batch B: Competitive
import { LeetCodeDaily } from "./widgets/LeetCodeDaily";
import { SolveCounter } from "./widgets/SolveCounter";
import { ContestCountdown } from "./widgets/ContestCountdown";
import { GlobalRank } from "./widgets/GlobalRank";
import { WeeklyGoal } from "./widgets/WeeklyGoal";
import { RandomChallenge } from "./widgets/RandomChallenge";
import { StreakSaver } from "./widgets/StreakSaver";

// Batch C: AI & Engineering
import { VRAMMeter } from "./widgets/VRAMMeter";
import { GPUTemp } from "./widgets/GPUTemp";
import { ArXivDaily } from "./widgets/ArXivDaily";
import { HuggingFace } from "./widgets/HuggingFace";
import { CUDALoad } from "./widgets/CUDALoad";
import { APIHealth } from "./widgets/APIHealth";
import { InferenceTimer } from "./widgets/InferenceTimer";
import { JetsonLink } from "./widgets/JetsonLink";
import { PromptLibrary } from "./widgets/PromptLibrary";

// Batch D: Productivity
import { PomodoroRing } from "./widgets/PomodoroRing";
import { TechNews } from "./widgets/TechNews";
import { WakaTime } from "./widgets/WakaTime";
import { MeetingGhost } from "./widgets/MeetingGhost";
import { ClipboardPreview } from "./widgets/ClipboardPreview";
import { JSONPrettifier } from "./widgets/JSONPrettifier";
import { ColorPalette } from "./widgets/ColorPalette";
import { IPFetcher } from "./widgets/IPFetcher";
import { LocalhostMonitor } from "./widgets/LocalhostMonitor";

// Batch E: Lifestyle
import { DrinkWater } from "./widgets/DrinkWater";
import { StackOverflowRep } from "./widgets/StackOverflowRep";
import { DomainSentry } from "./widgets/DomainSentry";
import { FreelanceTracker } from "./widgets/FreelanceTracker";
import { TrafficMonitor } from "./widgets/TrafficMonitor";
import { QuoteWisdom } from "./widgets/QuoteWisdom";
import { CodeBuddy } from "./widgets/CodeBuddy";

interface PulseData {
  cpu_usage: number;
  ram_usage: number;
  hostname: string;
}

function App() {
  const [pulse, setPulse] = useState<PulseData | null>(null);
  const [activeWidgets, setActiveWidgets] = useState<string[]>([]);
  const [browserWidgets, setBrowserWidgets] = useState<string[]>([]);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [view, setView] = useState<"dashboard" | "gallery">("dashboard");

  useEffect(() => {
    try {
      const initTauri = async () => {
         const unlisten = await listen<PulseData>("pulse-update", (event) => {
           setPulse(event.payload);
         });
         return unlisten;
      };
      const unlistenPromise = initTauri();
      return () => { unlistenPromise.then((f) => f && f()); };
    } catch (e) {
      console.warn("Browser Mock Mode Active");
    }
  }, []);

  const spawnWidget = async (type: string) => {
    if (activeWidgets.includes(type) || browserWidgets.includes(type)) return;
    try {
      const isTauri = !!(window as any).__TAURI_INTERNALS__;
      if (isTauri) {
        await invoke("spawn_widget", { 
          label: `widget-${type}-${Date.now()}`,
          x: Math.random() * 500 + 100, y: Math.random() * 500 + 100,
          url: `index.html?widget=${type}`
        });
        setActiveWidgets([...activeWidgets, type]);
      } else {
        setBrowserWidgets([...browserWidgets, type]);
      }
    } catch (e) {
       setBrowserWidgets([...browserWidgets, type]);
    }
  };

  const closeBrowserWidget = (type: string) => {
    setBrowserWidgets(browserWidgets.filter(w => w !== type));
  };

  const urlParams = new URLSearchParams(window.location.search);
  const widgetType = urlParams.get("widget");

  const RenderWidget = ({ type }: { type: string }) => {
    switch (type) {
      case "github": return <GitHubStreak count={14} />;
      case "pr-sentry": return <PRSentry count={3} />;
      case "dna": return <LanguageDNA data={[{ name: "TypeScript", percent: 45, color: "#3178c6" }, { name: "Rust", percent: 35, color: "#dea584" }]} />;
      case "stars": return <RepoStars />;
      case "heatmap": return <CommitHeatmap />;
      case "deploy": return <DeploymentStatus />;
      case "branch": return <BranchReminder />;
      case "leetcode": return <LeetCodeDaily title="Longest Palindromic Substring" difficulty="Medium" link="#" isSolved={true} />;
      case "rank": return <GlobalRank />;
      case "solved": return <SolveCounter easy={142} medium={85} hard={12} />;
      case "countdown": return <ContestCountdown />;
      case "goal": return <WeeklyGoal />;
      case "roll": return <RandomChallenge />;
      case "streak-saver": return <StreakSaver />;
      case "cpu": return <div className="flex flex-col items-center justify-center h-full gap-2"><Cpu size={32} className="text-blue-400" /><div className="text-3xl font-bold text-white">{pulse?.cpu_usage.toFixed(1) || "12.4"}%</div></div>;
      case "ram": return <div className="flex flex-col items-center justify-center h-full gap-2"><MemoryStick size={32} className="text-purple-400" /><div className="text-3xl font-bold text-white">{pulse?.ram_usage.toFixed(1) || "38.2"}%</div></div>;
      case "gpu": return <VRAMMeter used={7.4} total={12} temp={68} />;
      case "temp": return <GPUTemp />;
      case "arxiv": return <ArXivDaily />;
      case "huggingface": return <HuggingFace />;
      case "cuda": return <CUDALoad />;
      case "api-health": return <APIHealth />;
      case "inference": return <InferenceTimer />;
      case "jetson": return <JetsonLink />;
      case "vault": return <PromptLibrary />;
      case "pomodoro": return <PomodoroRing />;
      case "localhost": return <LocalhostMonitor />;
      case "news": return <TechNews news={[{ id: "1", title: "Tauri v2 Official Release Candidate", source: "Hacker News", points: 412 }]} />;
      case "wakatime": return <WakaTime />;
      case "calendar": return <MeetingGhost />;
      case "clipboard": return <ClipboardPreview />;
      case "json": return <JSONPrettifier />;
      case "palette-v2": return <ColorPalette />;
      case "ip": return <IPFetcher />;
      case "hydration": return <DrinkWater />;
      case "sof": return <StackOverflowRep />;
      case "domain": return <DomainSentry />;
      case "freelance": return <FreelanceTracker />;
      case "traffic": return <TrafficMonitor />;
      case "wisdom": return <QuoteWisdom />;
      case "buddy": return <CodeBuddy />;
      default: return null;
    }
  };

  if (widgetType) {
    return <WidgetLayout title={widgetType.toUpperCase()}><RenderWidget type={widgetType} /></WidgetLayout>;
  }

  return (
    <div className="min-h-screen bg-[#020617] text-white font-sans selection:bg-blue-500/30 overflow-y-auto relative">
      <SettingsPanel isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />
      <nav className="fixed left-0 top-0 bottom-0 w-20 flex flex-col items-center py-12 border-right border-white/5 bg-black/40 backdrop-blur-xl z-40">
         <div className="mb-12 cursor-pointer group" onClick={() => setView("dashboard")}>
           <div className="w-12 h-12 glass flex items-center justify-center group-hover:scale-110 group-active:scale-95 transition-transform"><div className="w-3 h-3 bg-blue-500 rounded-sm rotate-45 animate-pulse" /></div>
         </div>
         <div className="flex-1 flex flex-col gap-6">
            <button onClick={() => setView("dashboard")} className={cn("p-4 transition-all duration-300", view === "dashboard" ? "text-blue-400 scale-110" : "text-white/20 hover:text-white")}><LayoutGrid size={24} /></button>
            <button onClick={() => setView("gallery")} className={cn("p-4 transition-all duration-300", view === "gallery" ? "text-blue-400 scale-110" : "text-white/20 hover:text-white")}><Zap size={24} /></button>
         </div>
         <button onClick={() => setIsSettingsOpen(true)} className="p-4 text-white/20 hover:text-white hover:rotate-90 transition-all duration-500"><Settings size={22} /></button>
      </nav>

      <div className="fixed top-8 right-8 z-[100] flex flex-col gap-4 pointer-events-none w-80">
         {browserWidgets.map((type) => (
            <div key={type} className="glass-card p-6 pointer-events-auto relative animate-in fade-in slide-in-from-right-8 duration-500">
               <button onClick={() => closeBrowserWidget(type)} className="absolute top-3 right-3 text-white/20 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-full"><X size={14} /></button>
               <div className="h-44 mt-2"><RenderWidget type={type} /></div>
            </div>
         ))}
      </div>

      <main className="ml-20 p-12 max-w-6xl mx-auto min-h-screen">
        <header className="mb-16">
          <div className="flex justify-between items-end">
            <div>
              <h1 className="text-6xl font-black tracking-tightest bg-gradient-to-br from-white via-white to-white/20 bg-clip-text text-transparent italic">{view === "dashboard" ? "COMMAND" : "GALLERY"}</h1>
              <p className="text-white/40 mt-3 font-medium uppercase tracking-[0.3em] text-[10px] flex items-center gap-2"><span className="w-2 h-2 bg-blue-500 rounded-full animate-ping" />SYSTEM LIVE: {pulse?.hostname || "BROWSER_MOCK_ENV"}</p>
            </div>
            <div className="flex items-center gap-8 text-[10px] font-bold tracking-widest text-white/20 uppercase border-l border-white/5 pl-8">
               <div className="flex flex-col gap-1"><span>WIDGETS ACTIVE</span><span className="text-white text-lg font-black">{activeWidgets.length + browserWidgets.length}</span></div>
               <div className="flex flex-col gap-1"><span>UPTIME</span><span className="text-white text-lg font-black">422:15</span></div>
            </div>
          </div>
        </header>

        {view === "dashboard" ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <WidgetLayout title="SYSTEM CORE" className="lg:col-span-2 p-8 h-80">
               <div className="h-full flex items-center justify-around gap-12">
                  <div className="flex flex-col items-center gap-4 group">
                     <div className="relative">
                        <svg className="w-24 h-24 transform -rotate-90">
                           <circle cx="48" cy="48" r="44" stroke="currentColor" strokeWidth="2" fill="transparent" className="text-white/5" />
                           <circle cx="48" cy="48" r="44" stroke="currentColor" strokeWidth="2" fill="transparent" strokeDasharray={276} strokeDashoffset={276 - (276 * (pulse?.cpu_usage || 12.4)) / 100} className="text-blue-500 transition-all" />
                        </svg><Cpu className="absolute inset-0 m-auto text-blue-400 group-hover:scale-125 transition-transform" />
                     </div><span className="text-[10px] font-black uppercase tracking-widest text-white/60">CPU LOAD</span>
                  </div>
                  <div className="flex flex-col items-center gap-4 group">
                     <div className="relative">
                        <svg className="w-24 h-24 transform -rotate-90">
                           <circle cx="48" cy="48" r="44" stroke="currentColor" strokeWidth="2" fill="transparent" className="text-white/5" />
                           <circle cx="48" cy="48" r="44" stroke="currentColor" strokeWidth="2" fill="transparent" strokeDasharray={276} strokeDashoffset={276 - (276 * (pulse?.ram_usage || 38.2)) / 100} className="text-purple-500 transition-all" />
                        </svg><MemoryStick className="absolute inset-0 m-auto text-purple-400 group-hover:scale-125 transition-transform" />
                     </div><span className="text-[10px] font-black uppercase tracking-widest text-white/60">RAM USAGE</span>
                  </div>
               </div>
            </WidgetLayout>
            <WidgetLayout title="QUICK STATS" className="h-80 p-8">
               <div className="space-y-6">
                  <div className="flex items-center gap-4"><SiGithub className="text-white/40" size={20} /><div className="flex-1 text-xs font-bold text-white/60 uppercase">CONTRIBS</div><span className="text-xs font-mono font-black text-rose-500">14d</span></div>
                  <div className="flex items-center gap-4"><SiLeetcode className="text-white/40" size={20} /><div className="flex-1 text-xs font-bold text-white/60 uppercase">SOLVED</div><span className="text-xs font-mono font-black text-yellow-500">239</span></div>
                  <div className="flex items-center gap-4"><Zap className="text-blue-400" size={20} /><div className="flex-1 text-xs font-bold text-white/60 uppercase">ACTIVE</div><span className="text-xs font-mono font-black text-white px-2 py-0.5 bg-blue-500/20 rounded">HIGH</span></div>
               </div>
            </WidgetLayout>
          </div>
        ) : (
          <WidgetGallery onSpawn={spawnWidget} activeWidgets={[...activeWidgets, ...browserWidgets]} />
        )}
        <footer className="mt-32 pb-12 border-t border-white/5 pt-12 flex justify-between items-center opacity-20 hover:opacity-100 transition-opacity">
           <div className="text-[10px] uppercase font-black tracking-widest flex items-center gap-8 italic">DevPulse Pro Native v2.4.0 • Rust & React TS</div>
           <div className="flex gap-4"><div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" /><div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.5)]" /></div>
        </footer>
      </main>
    </div>
  );
}

export default App;
