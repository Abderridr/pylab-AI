import React from 'react';
import { Link } from 'react-router-dom';
import { Game } from '../types';
import { Card, CardContent, CardFooter } from './ui/Card';

interface GameCardProps {
  game: Game;
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  const difficultyColorMap = {
    easy: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
    medium: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
    hard: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
  };
  
  return (
    <Card className="h-full flex flex-col transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative">
        <img 
          src={game.image} 
          alt={game.title} 
          className="h-40 w-full object-cover"
        />
        <div className="absolute top-4 right-4">
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${difficultyColorMap[game.difficulty]}`}>
            {game.difficulty.charAt(0).toUpperCase() + game.difficulty.slice(1)}
          </span>
        </div>
      </div>
      
      <CardContent className="flex-grow">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-2">
          {game.title}
        </h3>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
          {game.description}
        </p>
      </CardContent>
      
      <CardFooter className="pt-4 border-t border-gray-200 dark:border-gray-700">
        <Link 
          to={`/games/${game.id}`} 
          className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
        >
          Play Now →
        </Link>
      </CardFooter>
    </Card>
  );
};

export default GameCard;