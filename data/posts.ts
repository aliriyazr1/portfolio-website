import { Post } from '@/types';

// TODO: personalise — replace with real blog posts or hook up to a CMS/MDX
export const posts: Post[] = [
  {
    slug: 'PLACEHOLDER building-real-time-dashboard',
    title: 'Building a Real-Time Dashboard with WebSockets',
    date: '2025-04-10',
    excerpt: 'Exploring how to push live data to a React frontend without the complexity of a dedicated state-sync library. Spoiler: it\'s simpler than you think.',
    tags: ['react', 'websockets', 'node'],
  },
  {
    slug: 'PLACEHOLDER postgres-indexing-deep-dive',
    title: 'PostgreSQL Indexing — What They Don\'t Tell You',
    date: '2024-12-15',
    excerpt: 'A deep dive into B-tree vs GIN vs GiST indexes, partial indexes, and the query planner decisions that can make or break your API response times.',
    tags: ['postgresql', 'performance', 'backend'],
  },
];
