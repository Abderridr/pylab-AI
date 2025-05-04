import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '../components/ui/Card';
import { quizzes } from '../data/quizzes';
import { ClipboardList } from 'lucide-react';

const QuizzesPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
          Python Quizzes
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Test your Python knowledge with interactive quizzes and get instant feedback on your progress.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {quizzes.map((quiz) => (
          <Card key={quiz.id} className="h-full flex flex-col transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
            <CardContent className="flex-grow pt-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg">
                    <ClipboardList className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {quiz.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    {quiz.description}
                  </p>
                  <p className="mt-3 text-sm font-medium text-gray-700 dark:text-gray-300">
                    {quiz.questions.length} questions
                  </p>
                </div>
              </div>
            </CardContent>
            
            <CardFooter className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <Link 
                to={`/quizzes/${quiz.id}`} 
                className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              >
                Start Quiz →
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default QuizzesPage;