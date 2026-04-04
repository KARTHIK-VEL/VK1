import React, { useState } from "react";
import { Key, Save, X } from "lucide-react";
import { SiGithub, SiLeetcode } from "react-icons/si";

interface SettingsPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SettingsPanel: React.FC<SettingsPanelProps> = ({ isOpen, onClose }) => {
  const [tokens, setTokens] = useState({
    github: "",
    leetcode: "",
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
      <div className="glass-card w-full max-w-md p-8 relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Key className="text-blue-400" />
          Settings
        </h2>

        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-semibold text-white/40 uppercase tracking-widest flex items-center gap-2">
              <SiGithub size={14} />
              GitHub Personal Access Token
            </label>
            <input 
              type="password"
              value={tokens.github}
              onChange={(e) => setTokens({ ...tokens, github: e.target.value })}
              placeholder="ghp_xxxxxxxxxxxx"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500/50 transition-colors"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-semibold text-white/40 uppercase tracking-widest flex items-center gap-2 text-yellow-400/60">
              <SiLeetcode size={14} />
              LeetCode Session Cookie
            </label>
            <input 
              type="password"
              value={tokens.leetcode}
              onChange={(e) => setTokens({ ...tokens, leetcode: e.target.value })}
              placeholder="LEETCODE_SESSION=xxxxxx"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-yellow-500/50 transition-colors"
            />
          </div>

          <button 
            className="w-full py-4 mt-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-blue-900/20"
          >
            <Save size={18} />
            SAVE & SYNC
          </button>
        </div>

        <p className="mt-6 text-[10px] text-white/20 uppercase tracking-widest text-center italic">
          Credentials are stored securely in Windows Credential Manager.
        </p>
      </div>
    </div>
  );
};
