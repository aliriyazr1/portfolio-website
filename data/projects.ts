import { Project } from '@/types';

// TODO: personalise — replace with your real projects
export const projects: Project[] = [
  {
    id: '1',
    title: 'Project Alpha',
    description: 'A full-stack web application with real-time features, built to explore modern React patterns and WebSocket communication.',
    tags: ['TypeScript', 'React', 'Node.js', 'WebSockets'],
    status: 'completed',
    repoUrl: '#',
    liveUrl: '#',
  },
  {
    id: '2',
    title: 'Project Beta',
    description: 'A CLI tool for automating repetitive dev tasks. Processes files in batch and outputs structured reports.',
    tags: ['Python', 'Click', 'SQLite'],
    status: 'active',
    repoUrl: '#',
  },
  {
    id: '3',
    title: 'Project Gamma',
    description: 'A RESTful API service with authentication, rate limiting, and comprehensive test coverage.',
    tags: ['Go', 'PostgreSQL', 'Docker'],
    status: 'completed',
    repoUrl: '#',
    liveUrl: '#',
  },
  {
    id: '4',
    title: 'Project Delta',
    description: 'Experimental machine learning pipeline for processing and classifying text data at scale.',
    tags: ['Python', 'PyTorch', 'FastAPI'],
    status: 'archived',
    repoUrl: '#',
  },
];
