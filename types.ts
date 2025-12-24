
export interface QuizOption {
  text: string;
  feedback: string;
  isCorrect: boolean;
}

export interface Question {
  id: number;
  text: string;
  options: QuizOption[];
  insight: string;
  imageUrl?: string;
}

export interface Certification {
  id: string;
  title: string;
  description: string;
  background: string;
  questions: Question[];
}

export type QuizState = 'START' | 'QUIZ' | 'RESULTS' | 'REVIEW';

export interface UserAnswer {
  questionId: number;
  questionText: string;
  selectedOptionIndices: number[];
  correctOptionIndices: number[];
  isCorrect: boolean;
  explanation?: string;
}
