const NAME = 'ALI RIYAZ';
const TITLE = 'Software Engineer';
const TAGLINE = 'Building things in the digital frontier - one commit at a time.';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-14"
    >
      <div className="relative z-20 flex flex-col items-center gap-6 max-w-2xl">
        <p className="font-mono text-xs text-cyan-600 tracking-[0.3em] uppercase">
          // system online — initialising...
        </p>

        <h1 className="font-mono text-5xl sm:text-6xl md:text-7xl font-bold leading-tight">
          <span className="text-cyan-400">&gt; </span>
          <span className="text-white">{NAME}</span>
          <span className="inline-block w-1 h-12 md:h-16 bg-cyan-400 ml-2 align-middle animate-blink" />
        </h1>

        <p className="font-mono text-sm tracking-widest text-violet-400 uppercase">
          {/* TODO: personalise */}
          {TITLE}
        </p>

        <p className="font-mono text-base text-slate-400 max-w-md leading-relaxed">
          {/* TODO: personalise */}
          {TAGLINE}
        </p>

        <div className="flex flex-wrap gap-4 justify-center mt-4">
          <a
            href="#projects"
            className="font-mono text-xs tracking-widest px-6 py-3 border border-cyan-600/70 text-cyan-400 hover:bg-cyan-600/10 hover:border-cyan-400 transition-all duration-200"
          >
            [ VIEW PROJECTS ]
          </a>
          <a
            href="#contact"
            className="font-mono text-xs tracking-widest px-6 py-3 border border-slate-700 text-slate-400 hover:border-slate-500 hover:text-slate-200 transition-all duration-200"
          >
            [ GET IN TOUCH ]
          </a>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-[-4rem] flex flex-col items-center gap-1 opacity-40">
          <span className="font-mono text-xs text-slate-600 tracking-widest">SCROLL</span>
          <div className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent" />
        </div>
      </div>
    </section>
  );
}
