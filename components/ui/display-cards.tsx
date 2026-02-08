"use client";

import React, { useState, useEffect } from "react";
import { cn } from "../../lib/utils";
import { Sparkles } from "lucide-react";

interface DisplayCardProps {
  className?: string;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  date?: string;
  iconClassName?: string;
  titleClassName?: string;
  theme?: 'dark' | 'light';
}

const TypewriterText = ({ text, active }: { text: string; active: boolean }) => {
  const [displayedText, setDisplayedText] = useState("");
  
  useEffect(() => {
    if (!active) {
      setDisplayedText("");
      return;
    }
    
    let i = 0;
    const timer = setInterval(() => {
      setDisplayedText(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(timer);
    }, 20);
    
    return () => clearInterval(timer);
  }, [text, active]);

  return <span className="inline-block">{displayedText}</span>;
};

function DisplayCard({
  className,
  icon = <Sparkles className="size-4 text-blue-300" />,
  title = "Featured",
  description = "Discover amazing content",
  date = "Just now",
  iconClassName = "text-blue-500",
  titleClassName = "text-blue-500",
  theme = 'dark'
}: DisplayCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "relative group/card select-none",
        className,
        isHovered ? "z-[100]" : ""
      )}
    >
      {/* The actual visual card that moves */}
      <div
        className={cn(
          "flex h-44 w-[26rem] -skew-y-[4deg] flex-col justify-between rounded-2xl border backdrop-blur-xl px-6 py-5 transition-all duration-500 ease-out",
          theme === 'dark' 
            ? "bg-neutral-900/90 border-white/10" 
            : "bg-white border-slate-200 shadow-sm",
          isHovered 
            ? cn(
                "translate-y-[-2rem] translate-x-[0.5rem] skew-y-0 shadow-[0_20px_50px_rgba(0,0,0,0.5)]",
                theme === 'dark' 
                  ? "border-indigo-500/50 bg-neutral-800 shadow-[0_0_20px_rgba(79,70,229,0.2)]" 
                  : "border-indigo-300 bg-white shadow-[0_20px_40px_rgba(79,70,229,0.1)]"
              ) 
            : ""
        )}
      >
        <div className="flex items-center gap-3">
          <span className={cn("relative inline-flex items-center justify-center rounded-xl p-2 shadow-inner bg-opacity-20", iconClassName)}>
            {icon}
          </span>
          <p className={cn("text-xl font-bold tracking-tight", titleClassName)}>{title}</p>
        </div>
        
        <div className="flex-1 flex flex-col justify-center py-2">
          <div className="min-h-[3rem]">
            <p className={cn(
              "text-lg font-medium leading-relaxed italic transition-colors duration-700",
              theme === 'dark' ? "text-white/90" : "text-slate-800"
            )}>
              <TypewriterText text={description || ""} active={isHovered} />
            </p>
          </div>
        </div>
        
        <div className={cn(
          "flex items-center justify-between border-t pt-3 transition-colors duration-700",
          theme === 'dark' ? "border-white/5" : "border-slate-100"
        )}>
          <p className={cn(
            "text-xs font-mono uppercase tracking-[0.2em] transition-colors duration-700",
            theme === 'dark' ? "text-neutral-500" : "text-slate-400"
          )}>{date}</p>
          {isHovered && (
              <div className="flex gap-1">
                  <div className="w-1 h-1 bg-indigo-500 rounded-full animate-pulse" />
                  <div className="w-1 h-1 bg-indigo-500 rounded-full animate-pulse delay-75" />
                  <div className="w-1 h-1 bg-indigo-500 rounded-full animate-pulse delay-150" />
              </div>
          )}
        </div>
      </div>
    </div>
  );
}

interface DisplayCardsProps {
  cards?: DisplayCardProps[];
  theme?: 'dark' | 'light';
}

export default function DisplayCards({ cards, theme = 'dark' }: DisplayCardsProps) {
  return (
    <div className="relative h-[650px] w-full flex items-center justify-center perspective-[2000px]">
        <div className="grid [grid-template-areas:'stack'] place-items-center opacity-100 animate-in fade-in-0 duration-1000">
            {cards?.map((cardProps, index) => (
                <DisplayCard key={index} {...cardProps} theme={theme} />
            ))}
        </div>
    </div>
  );
}