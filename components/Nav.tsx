'use client';

import { useState } from 'react';

const NAV_LINKS = [
  { href: '#hero', label: 'HOME' },
  { href: '#about', label: 'ABOUT' },
  { href: '#projects', label: 'PROJECTS' },
  { href: '#skills', label: 'SKILLS' },
  { href: '#blog', label: 'DEVLOG' },
  { href: '#contact', label: 'CONTACT' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#06080f]/90 backdrop-blur-md border-b border-cyan-900/40">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        {/* TODO: personalise — replace with your name or logo */}
        <span className="font-mono text-sm tracking-widest text-cyan-400">
          <span className="text-slate-600">//</span> ALI RIYAZ
        </span>

        <ul className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-xs tracking-widest text-slate-500 hover:text-cyan-400 transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen((prev) => !prev)}
          className="md:hidden font-mono text-xs tracking-widest text-cyan-400 border border-cyan-900/50 px-3 py-1.5 hover:border-cyan-500/50 transition-colors"
          aria-label="Toggle navigation"
        >
          {open ? '[ CLOSE ]' : '[ MENU ]'}
        </button>
      </div>

      {open && (
        <ul className="md:hidden flex flex-col border-t border-cyan-900/40 bg-[#06080f]/98">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-6 py-3 font-mono text-xs tracking-widest text-slate-500 hover:text-cyan-400 hover:bg-cyan-950/20 transition-colors border-b border-slate-900/50 last:border-0"
              >
                &gt; {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
