import React from "react";
import { cn } from "../lib/utils";

interface WidgetLayoutProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export const WidgetLayout: React.FC<WidgetLayoutProps> = ({ children, className, title }) => {
  return (
    <div 
      className={cn(
        "glass-card w-full h-full p-4 flex flex-col gap-2 overflow-hidden select-none",
        className
      )}
    >
      {title && (
        <h3 className="text-xs font-semibold text-primary/60 uppercase tracking-widest border-b border-white/5 pb-1 mb-1">
          {title}
        </h3>
      )}
      <div className="flex-1 overflow-hidden relative">
        {children}
      </div>
    </div>
  );
};
