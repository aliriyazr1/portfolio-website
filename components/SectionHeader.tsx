interface SectionHeaderProps {
  index: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ index, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-12">
      <p className="font-mono text-xs text-cyan-700 tracking-widest mb-1">// {index}</p>
      <h2 className="font-mono text-3xl md:text-4xl font-bold text-white">
        <span className="text-cyan-400">&gt;_</span> {title}
      </h2>
      {subtitle && (
        <p className="mt-2 font-mono text-sm text-slate-500">{subtitle}</p>
      )}
      <div className="mt-4 h-px bg-gradient-to-r from-cyan-800/50 via-cyan-900/20 to-transparent" />
    </div>
  );
}
