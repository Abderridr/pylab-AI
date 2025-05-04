import { Quiz } from '../types';

export const quizzes: Quiz[] = [
  {
    id: '1',
    title: 'Python Basics Quiz',
    description: 'Test your knowledge of Python fundamentals',
    moduleId: 'm1',
    questions: [
      {
        id: 'q1',
        text: 'What is the correct way to create a variable in Python?',
        type: 'multiple-choice',
        options: [
          'var name = "John"',
          'name = "John"',
          'string name = "John"',
          '$name = "John"'
        ],
        correctAnswer: 1
      },
      {
        id: 'q2',
        text: 'Python is a statically typed language.',
        type: 'true-false',
        correctAnswer: 'false'
      },
      {
        id: 'q3',
        text: 'What will be the output of the following code?\n\nx = 5\ny = 2\nprint(x // y)',
        type: 'code-output',
        options: ['2', '2.5', '2.0', 'Error'],
        correctAnswer: 0
      }
    ]
  },
  {
    id: '2',
    title: 'Data Structures Quiz',
    description: 'Test your knowledge of Python data structures',
    moduleId: 'm3',
    questions: [
      {
        id: 'q4',
        text: 'Which of the following is mutable?',
        type: 'multiple-choice',
        options: [
          'Tuples',
          'Strings',
          'Lists',
          'None of the above'
        ],
        correctAnswer: 2
      },
      {
        id: 'q5',
        text: 'Dictionary keys must be immutable.',
        type: 'true-false',
        correctAnswer: 'true'
      },
      {
        id: 'q6',
        text: 'What will be the output of the following code?\n\nmy_list = [1, 2, 3, 4, 5]\nprint(my_list[1:3])',
        type: 'code-output',
        options: ['[1, 2, 3]', '[2, 3]', '[1, 2]', '[2, 3, 4]'],
        correctAnswer: 1
      }
    ]
  }
];