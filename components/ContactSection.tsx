import { contactLinks } from '@/data/contact';
import HudPanel from './HudPanel';
import SectionHeader from './SectionHeader';

export default function ContactSection() {
  return (
    <section id="contact" className="relative z-20 py-24 px-4">
      <div className="max-w-2xl mx-auto">
        <SectionHeader
          index="05"
          title="Contact"
          subtitle="// open comms — feel free to reach out"
        />

        <HudPanel title="TRANSMISSION CHANNELS" className="p-6">
          <div className="space-y-3 pt-2">
            {/* TODO: personalise — update data/contact.ts with your real links */}
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-3 border border-transparent hover:border-cyan-900/50 hover:bg-cyan-950/10 transition-all duration-200"
              >
                <span className="font-mono text-xl text-cyan-700 group-hover:text-cyan-400 transition-colors w-6 text-center">
                  {link.icon}
                </span>
                <div className="flex flex-col gap-0.5">
                  <span className="font-mono text-xs text-slate-600 tracking-widest">{link.label}</span>
                  <span className="font-mono text-sm text-slate-300 group-hover:text-cyan-300 transition-colors">
                    {link.display}
                  </span>
                </div>
                <span className="ml-auto font-mono text-xs text-slate-700 group-hover:text-cyan-600 transition-colors">
                  →
                </span>
              </a>
            ))}
          </div>
        </HudPanel>

        {/* TODO: easter egg — consider adding Konami code listener (↑↑↓↓←→←→BA)
            that triggers a fullscreen "ACCESS GRANTED" animation and reveals
            a hidden message or secret page route like /terminal */}
      </div>
    </section>
  );
}
