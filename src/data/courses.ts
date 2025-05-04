import { Course } from '../types';

export const courses: Course[] = [
  {
    id: '1',
    title: 'Python Fundamentals',
    description: 'Learn the basics of Python programming language, including variables, data types, and control flow.',
    level: 'beginner',
    image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    modules: [
      {
        id: 'm1',
        title: 'Introduction to Python',
        lessons: [
          {
            id: 'l1',
            title: 'What is Python?',
            content: 'Python is a high-level, interpreted programming language known for its readability and simplicity.',
            videoUrl: 'https://example.com/videos/intro-to-python',
            completed: false,
            duration: '10 mins'
          },
          {
            id: 'l2',
            title: 'Setting Up Your Environment',
            content: 'Learn how to install Python and set up your development environment.',
            videoUrl: 'https://example.com/videos/python-setup',
            completed: false,
            duration: '15 mins'
          }
        ]
      },
      {
        id: 'm2',
        title: 'Variables and Data Types',
        lessons: [
          {
            id: 'l3',
            title: 'Variables and Assignment',
            content: 'Learn how to create variables and assign values to them in Python.',
            videoUrl: 'https://example.com/videos/python-variables',
            codeSnippets: [
              {
                id: 'cs1',
                code: 'name = "Alice"\nage = 30\nprint(f"Hello, {name}! You are {age} years old.")',
                language: 'python',
                description: 'Basic variable assignment and string formatting'
              }
            ],
            completed: false,
            duration: '12 mins'
          }
        ]
      }
    ],
    isPremium: false,
    duration: '2 hours',
    enrolledCount: 1245
  },
  {
    id: '2',
    title: 'Data Structures in Python',
    description: 'Explore Python\'s built-in data structures like lists, dictionaries, sets, and tuples.',
    level: 'intermediate',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    modules: [
      {
        id: 'm3',
        title: 'Lists and Tuples',
        lessons: [
          {
            id: 'l4',
            title: 'Working with Lists',
            content: 'Learn how to create, access, and manipulate lists in Python.',
            videoUrl: 'https://example.com/videos/python-lists',
            codeSnippets: [
              {
                id: 'cs2',
                code: 'fruits = ["apple", "banana", "cherry"]\nfruits.append("orange")\nprint(fruits[0])\nprint(fruits[-1])',
                language: 'python',
                description: 'Creating and manipulating lists'
              }
            ],
            completed: false,
            duration: '18 mins'
          }
        ]
      }
    ],
    isPremium: false,
    duration: '3 hours',
    enrolledCount: 892
  },
  {
    id: '3',
    title: 'Advanced Python Concepts',
    description: 'Master advanced Python concepts including decorators, generators, and context managers.',
    level: 'advanced',
    image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    modules: [
      {
        id: 'm4',
        title: 'Decorators and Closures',
        lessons: [
          {
            id: 'l5',
            title: 'Understanding Decorators',
            content: 'Learn how to create and use decorators in Python.',
            videoUrl: 'https://example.com/videos/python-decorators',
            codeSnippets: [
              {
                id: 'cs3',
                code: 'def my_decorator(func):\n    def wrapper():\n        print("Something is happening before the function is called.")\n        func()\n        print("Something is happening after the function is called.")\n    return wrapper\n\n@my_decorator\ndef say_hello():\n    print("Hello!")\n\nsay_hello()',
                language: 'python',
                description: 'Basic decorator implementation'
              }
            ],
            completed: false,
            duration: '25 mins'
          }
        ]
      }
    ],
    isPremium: true,
    duration: '5 hours',
    enrolledCount: 437
  },
  {
    id: '4',
    title: 'Python for Data Science',
    description: 'Learn how to use Python for data analysis, visualization, and machine learning.',
    level: 'intermediate',
    image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    modules: [
      {
        id: 'm5',
        title: 'Introduction to NumPy',
        lessons: [
          {
            id: 'l6',
            title: 'NumPy Arrays',
            content: 'Learn how to create and manipulate NumPy arrays for efficient numerical computations.',
            videoUrl: 'https://example.com/videos/numpy-arrays',
            codeSnippets: [
              {
                id: 'cs4',
                code: 'import numpy as np\n\n# Create a 1D array\narr1 = np.array([1, 2, 3, 4, 5])\n\n# Create a 2D array\narr2 = np.array([[1, 2, 3], [4, 5, 6]])\n\nprint(arr1)\nprint(arr2)\nprint(arr1.shape)\nprint(arr2.shape)',
                language: 'python',
                description: 'Creating NumPy arrays'
              }
            ],
            completed: false,
            duration: '20 mins'
          }
        ]
      }
    ],
    isPremium: true,
    duration: '8 hours',
    enrolledCount: 1023
  }
];