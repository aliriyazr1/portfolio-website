export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  status: 'active' | 'completed' | 'archived';
  repoUrl?: string;
  liveUrl?: string;
}

export interface Skill {
  name: string;
  icon: string;
  category: 'language' | 'framework' | 'tool' | 'other';
}

export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
}

export interface ContactLink {
  label: string;
  href: string;
  display: string;
  icon: string;
}
