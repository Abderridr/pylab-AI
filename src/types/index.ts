export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: 'free' | 'pro';
}

export interface Course {
  id: string;
  title: string;
  description: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  image: string;
  modules: Module[];
  isPremium: boolean;
  duration: string;
  enrolledCount: number;
}

export interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  title: string;
  content: string;
  videoUrl?: string;
  codeSnippets?: CodeSnippet[];
  completed: boolean;
  duration: string;
}

export interface CodeSnippet {
  id: string;
  code: string;
  language: string;
  description: string;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  moduleId: string;
  questions: Question[];
}

export interface Question {
  id: string;
  text: string;
  type: 'multiple-choice' | 'true-false' | 'code-output';
  options?: string[];
  correctAnswer: string | number;
}

export interface Game {
  id: string;
  title: string;
  description: string;
  image: string;
  difficulty: 'easy' | 'medium' | 'hard';
  type: 'puzzle' | 'debug' | 'typing';
}