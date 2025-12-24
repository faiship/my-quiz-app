
import { Question } from './types';

export const dataCloudQuestions: Question[] = [
  {
    id: 10000,
    text: "Which process creates a 'Golden Record' in Data Cloud?",
    insight: "Identity Resolution is the core engine for record unification.",
    options: [
      { text: "Data Mapping", feedback: "", isCorrect: false },
      { text: "Identity Resolution", feedback: "", isCorrect: true },
      { text: "Streaming Insights", feedback: "", isCorrect: false }
    ]
  }
];
