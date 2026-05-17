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
    title: 'Reinforcement Learning Training Pipeline',
    description: 'A reinforcement learning training pipeline for training models within a custom 2D simulation environment to learn dynamic dribbling behaviours for football. Used via CLI and produces model evaluations and performance graphs using metrics.',
    tags: ['Python'],
    status: 'completed',
    repoUrl: 'https://github.com/aliriyazr1/NUbots_RL_FYP/tree/week8fix',
  },
  {
    id: '3',
    title: 'Connect-4-Game',
    description: 'A RESTful API service with authentication, rate limiting, and comprehensive test coverage.',
    tags: ['Java'],
    status: 'completed',
    repoUrl: 'https://github.com/aliriyazr1/Connect-4-Game',
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
