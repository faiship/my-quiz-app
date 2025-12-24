
import { Certification } from './types';
import { rlmQuestions } from './quizData/rlmData';
import { agentforceQuestions } from './quizData/agentforceData';

export const certifications: Certification[] = [
  {
    id: 'rlm',
    title: 'Revenue Cloud Consultant',
    description: 'The master collection of certification scenarios for Revenue Cloud Consultant architects.',
    background: 'https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&q=80&w=800',
    questions: rlmQuestions
  },
  {
    id: 'agentforce',
    title: 'Agentforce Specialist',
    description: 'Comprehensive training for building, deploying, and managing AI agents and prompt templates.',
    background: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    questions: agentforceQuestions
  }
];
