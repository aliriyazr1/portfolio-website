import { projects } from '@/data/projects';
import ProjectCard from './ProjectCard';
import SectionHeader from './SectionHeader';

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative z-20 py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          index="02"
          title="Projects"
          subtitle="// selected transmissions from the build log"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
          {/* TODO: personalise — update data/projects.ts with real projects */}
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
