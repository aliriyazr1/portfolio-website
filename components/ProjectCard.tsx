import { Project } from '@/types';

const STATUS_STYLES: Record<Project['status'], string> = {
  active: 'text-green-400 border-green-700/50',
  completed: 'text-cyan-400 border-cyan-700/50',
  archived: 'text-slate-500 border-slate-700/50',
};

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="relative border border-cyan-900/40 bg-slate-950/70 backdrop-blur-sm group hover:border-cyan-700/60 hover:shadow-[0_0_25px_rgba(34,211,238,0.07)] transition-all duration-300">
      {/* Corner accents */}
      <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-600 group-hover:border-cyan-400 transition-colors" />
      <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cyan-600 group-hover:border-cyan-400 transition-colors" />
      <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-cyan-600 group-hover:border-cyan-400 transition-colors" />
      <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyan-600 group-hover:border-cyan-400 transition-colors" />

      <div className="p-5 flex flex-col h-full">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="font-mono text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors leading-tight">
            {project.title}
          </h3>
          <span className={`font-mono text-xs px-2 py-0.5 border shrink-0 ${STATUS_STYLES[project.status]}`}>
            {project.status}
          </span>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1 font-mono">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs px-2 py-0.5 bg-slate-900/80 text-slate-400 border border-slate-800"
            >
              {tag}
            </span>
          ))}
        </div>

        {(project.repoUrl || project.liveUrl) && (
          <div className="flex gap-4 border-t border-slate-800/80 pt-3">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                className="font-mono text-xs tracking-widest text-slate-600 hover:text-cyan-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                [ REPO ]
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                className="font-mono text-xs tracking-widest text-slate-600 hover:text-cyan-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                [ LIVE ]
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
