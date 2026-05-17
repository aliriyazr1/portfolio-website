import { skills } from '@/data/skills';
import { Skill } from '@/types';
import HudPanel from './HudPanel';
import SectionHeader from './SectionHeader';

const CATEGORY_CONFIG: Record<
  Skill['category'],
  { label: string; accentColor: 'cyan' | 'purple' | 'green' }
> = {
  language: { label: 'LANGUAGES', accentColor: 'cyan' },
  framework: { label: 'FRAMEWORKS & LIBS', accentColor: 'purple' },
  tool: { label: 'TOOLS & INFRA', accentColor: 'green' },
  other: { label: 'OTHER', accentColor: 'cyan' },
};

export default function SkillsSection() {
  const categories = (Object.keys(CATEGORY_CONFIG) as Skill['category'][]).filter((cat) =>
    skills.some((s) => s.category === cat)
  );

  return (
    <section id="skills" className="relative z-20 py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          index="03"
          title="Skills"
          subtitle="// tech stack — current loadout"
        />

        {/* TODO: personalise — update data/skills.ts with your actual stack */}
        <div className="grid sm:grid-cols-3 gap-5">
          {categories.map((cat) => {
            const { label, accentColor } = CATEGORY_CONFIG[cat];
            const catSkills = skills.filter((s) => s.category === cat);
            return (
              <HudPanel key={cat} title={label} accentColor={accentColor} className="p-4">
                <div className="flex flex-wrap gap-2 pt-3">
                  {catSkills.map((skill) => (
                    <span
                      key={skill.name}
                      className="flex items-center gap-1.5 font-mono text-xs px-2.5 py-1.5 bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-600 transition-colors cursor-default"
                    >
                      <span className="text-base leading-none">{skill.icon}</span>
                      {skill.name}
                    </span>
                  ))}
                </div>
              </HudPanel>
            );
          })}
        </div>
      </div>
    </section>
  );
}
