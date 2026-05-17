import { ReactNode } from 'react';

interface HudPanelProps {
  title?: string;
  children: ReactNode;
  className?: string;
  accentColor?: 'cyan' | 'purple' | 'green';
}

const accentMap = {
  cyan: {
    border: 'border-cyan-900/50 hover:border-cyan-700/60',
    corner: 'border-cyan-500',
    headerBg: 'bg-cyan-950/20 border-cyan-900/50',
    dot: 'bg-cyan-400',
    label: 'text-cyan-400',
  },
  purple: {
    border: 'border-violet-900/50 hover:border-violet-700/60',
    corner: 'border-violet-500',
    headerBg: 'bg-violet-950/20 border-violet-900/50',
    dot: 'bg-violet-400',
    label: 'text-violet-400',
  },
  green: {
    border: 'border-green-900/50 hover:border-green-700/60',
    corner: 'border-green-500',
    headerBg: 'bg-green-950/20 border-green-900/50',
    dot: 'bg-green-400',
    label: 'text-green-400',
  },
};

export default function HudPanel({
  title,
  children,
  className = '',
  accentColor = 'cyan',
}: HudPanelProps) {
  const accent = accentMap[accentColor];

  return (
    <div
      className={`relative border ${accent.border} bg-slate-950/70 backdrop-blur-sm transition-all duration-300 ${className}`}
    >
      {title && (
        <div className={`flex items-center gap-2 px-4 py-2 border-b ${accent.headerBg}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${accent.dot}`} />
          <span className={`font-mono text-xs tracking-widest uppercase ${accent.label}`}>
            {title}
          </span>
        </div>
      )}
      {children}

      {/* Corner accent marks */}
      <span className={`absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 ${accent.corner}`} />
      <span className={`absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 ${accent.corner}`} />
      <span className={`absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 ${accent.corner}`} />
      <span className={`absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 ${accent.corner}`} />
    </div>
  );
}
