import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Clock, Award } from 'lucide-react';
import { Course } from '../types';
import { Card, CardContent, CardFooter } from './ui/Card';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const levelColorMap = {
    beginner: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
    intermediate: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
    advanced: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300'
  };
  
  return (
    <Card className="h-full flex flex-col transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative">
        <img 
          src={course.image} 
          alt={course.title} 
          className="h-48 w-full object-cover"
        />
        <div className="absolute top-4 right-4">
          {course.isPremium && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300">
              <Award className="w-3 h-3 mr-1" />
              Premium
            </span>
          )}
        </div>
        <div className="absolute bottom-4 left-4">
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${levelColorMap[course.level]}`}>
            {course.level.charAt(0).toUpperCase() + course.level.slice(1)}
          </span>
        </div>
      </div>
      
      <CardContent className="flex-grow">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-2">
          {course.title}
        </h3>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
          {course.description}
        </p>
        
        <div className="mt-4 flex items-center text-sm text-gray-500 dark:text-gray-400">
          <Clock className="h-4 w-4 mr-1" />
          <span>{course.duration}</span>
          <span className="mx-2">•</span>
          <Users className="h-4 w-4 mr-1" />
          <span>{course.enrolledCount.toLocaleString()} students</span>
        </div>
      </CardContent>
      
      <CardFooter className="pt-4 border-t border-gray-200 dark:border-gray-700">
        <Link 
          to={`/courses/${course.id}`} 
          className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
        >
          View Course →
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;