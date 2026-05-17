import { posts } from '@/data/posts';
import SectionHeader from './SectionHeader';

export default function BlogSection() {
  return (
    <section id="blog" className="relative z-20 py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          index="04"
          title="Devlog"
          subtitle="// field notes from the trenches"
        />

        {/* TODO: personalise — replace data/posts.ts with real posts or connect to MDX/CMS */}
        <div className="space-y-4">
          {posts.map((post) => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block border border-slate-800/80 hover:border-cyan-900/60 bg-slate-950/40 hover:bg-slate-950/70 transition-all duration-200 p-5"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                <h3 className="font-mono text-sm text-white group-hover:text-cyan-300 transition-colors font-medium">
                  {post.title}
                </h3>
                <span className="font-mono text-xs text-slate-600 shrink-0">{post.date}</span>
              </div>

              <p className="font-mono text-xs text-slate-500 leading-relaxed mb-3">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap gap-1.5 items-center">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs text-slate-600 border border-slate-800 px-2 py-0.5"
                  >
                    #{tag}
                  </span>
                ))}
                <span className="font-mono text-xs text-cyan-700 ml-auto group-hover:text-cyan-400 transition-colors">
                  READ →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
