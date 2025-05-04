import { Game } from '../types';

export const games: Game[] = [
  {
    id: '1',
    title: 'Python Syntax Puzzle',
    description: 'Drag and drop code blocks to create valid Python syntax',
    image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    difficulty: 'easy',
    type: 'puzzle'
  },
  {
    id: '2',
    title: 'Debug Challenge',
    description: 'Find and fix bugs in Python code',
    image: 'https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    difficulty: 'medium',
    type: 'debug'
  },
  {
    id: '3',
    title: 'Python Speed Typing',
    description: 'Improve your coding speed by typing Python code',
    image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    difficulty: 'hard',
    type: 'typing'
  }
];