import HudPanel from './HudPanel';
import SectionHeader from './SectionHeader';

// TODO: personalise — update the bio and stats below
const BIO_LINES = [
  "I'm a developer who enjoys building things that are fast, useful, and occasionally over-engineered.",
  'My work spans full-stack web apps, backend systems, and the occasional CLI tool that only I use.',
  "When I'm not coding I'm probably reading about computers, playing a game, or trying to understand something I shouldn't have googled.",
];

const STATS = [
  { label: 'UPTIME', value: '4+ years' },
  { label: 'COMMITS', value: '> 0' },
  { label: 'COFFEE', value: '∞ units (jk I drink water and hot chocolate)' },
  { label: 'BUGS FIXED', value: 'most of them' },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative z-20 py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionHeader index="01" title="About" subtitle="// a bit about the operator behind the terminal" />

        <div className="grid md:grid-cols-3 gap-6">
          <HudPanel title="BIO" className="md:col-span-2 p-6">
            <div className="space-y-4 pt-2">
              {/* TODO: personalise */}
              {BIO_LINES.map((line, i) => (
                <p key={i} className="text-slate-400 text-sm leading-relaxed font-mono">
                  {line}
                </p>
              ))}
            </div>
          </HudPanel>

          <HudPanel title="SYSTEM STATS" accentColor="purple" className="p-6">
            <div className="space-y-4 pt-2">
              {/* TODO: personalise */}
              {STATS.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-0.5">
                  <span className="font-mono text-xs text-slate-600 tracking-widest">{stat.label}</span>
                  <span className="font-mono text-sm text-violet-300">{stat.value}</span>
                </div>
              ))}
            </div>
          </HudPanel>
        </div>
      </div>
    </section>
  );
}
