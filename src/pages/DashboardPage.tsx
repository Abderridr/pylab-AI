import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Book, Award, Clock, ArrowUpRight, Activity, Layout, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import Button from '../components/ui/Button';
import { useAuthStore } from '../store/authStore';
import { courses } from '../data/courses';

const DashboardPage: React.FC = () => {
  const { user, isAuthenticated } = useAuthStore();
  const navigate = useNavigate();
  
  // Redirect if not authenticated
  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);
  
  if (!isAuthenticated || !user) {
    return null;
  }
  
  // Mock data for dashboard
  const enrolledCourses = courses.slice(0, 2);
  const completionPercentages = [65, 30];
  const recentActivities = [
    { id: 1, type: 'course', name: 'Python Fundamentals', action: 'Completed lesson', time: '2 hours ago' },
    { id: 2, type: 'quiz', name: 'Python Basics Quiz', action: 'Scored 8/10', time: 'Yesterday' },
    { id: 3, type: 'game', name: 'Debug Challenge', action: 'Earned 150 points', time: '2 days ago' },
  ];
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Welcome back, {user.name}!
          </h1>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            Track your progress and continue learning Python.
          </p>
        </div>
        
        {user.role === 'free' && (
          <div className="mt-4 md:mt-0">
            <Button 
              variant="secondary"
              rightIcon={<ArrowUpRight size={16} />}
            >
              Upgrade to Pro
            </Button>
          </div>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <Book className="h-5 w-5 mr-2 text-blue-600 dark:text-blue-400" />
              Enrolled Courses
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900 dark:text-white">
              {enrolledCourses.length}
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Continue where you left off
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <Activity className="h-5 w-5 mr-2 text-green-600 dark:text-green-400" />
              Learning Streak
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900 dark:text-white">
              7 days
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Keep going to maintain your streak!
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <Award className="h-5 w-5 mr-2 text-purple-600 dark:text-purple-400" />
              Achievements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900 dark:text-white">
              5 earned
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Complete more lessons to earn more
            </p>
          </CardContent>
        </Card>
      </div>
      
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-10 mb-6">
        Your Courses
      </h2>
      
      {enrolledCourses.length > 0 ? (
        <div className="grid grid-cols-1 gap-6">
          {enrolledCourses.map((course, index) => (
            <div key={course.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden border border-gray-200 dark:border-gray-700">
              <div className="p-6">
                <div className="flex flex-col sm:flex-row">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="h-20 w-20 rounded-md object-cover"
                  />
                  <div className="mt-4 sm:mt-0 sm:ml-6 flex-grow">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {course.title}
                    </h3>
                    <div className="flex items-center mt-2">
                      <Layout className="h-4 w-4 text-gray-500 dark:text-gray-400 mr-1" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {course.modules.length} modules
                      </span>
                      <span className="mx-2">•</span>
                      <Clock className="h-4 w-4 text-gray-500 dark:text-gray-400 mr-1" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {course.duration}
                      </span>
                    </div>
                    <div className="mt-4">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          Progress: {completionPercentages[index]}%
                        </span>
                        <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                          {completionPercentages[index]}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${completionPercentages[index]}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 sm:mt-0 sm:ml-4 flex sm:flex-col sm:items-end">
                    <Button 
                      onClick={() => navigate(`/courses/${course.id}`)}
                      rightIcon={<ArrowUpRight size={16} />}
                    >
                      Continue
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 text-center border border-gray-200 dark:border-gray-700">
          <BookOpen className="h-12 w-12 text-gray-400 dark:text-gray-600 mx-auto" />
          <h3 className="mt-2 text-lg font-medium text-gray-900 dark:text-white">
            No courses yet
          </h3>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            Explore our courses and start learning Python!
          </p>
          <div className="mt-6">
            <Button onClick={() => navigate('/courses')}>
              Browse Courses
            </Button>
          </div>
        </div>
      )}
      
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-10 mb-6">
        Recent Activity
      </h2>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden border border-gray-200 dark:border-gray-700">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {recentActivities.map((activity) => (
            <li key={activity.id} className="p-4 hover:bg-gray-50 dark:hover:bg-gray-750">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  {activity.type === 'course' && (
                    <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-md">
                      <Book className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                  )}
                  {activity.type === 'quiz' && (
                    <div className="p-2 bg-green-100 dark:bg-green-900 rounded-md">
                      <Award className="h-5 w-5 text-green-600 dark:text-green-400" />
                    </div>
                  )}
                  {activity.type === 'game' && (
                    <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-md">
                      <Activity className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                    {activity.name}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                    {activity.action}
                  </p>
                </div>
                <div className="flex-shrink-0 text-sm text-gray-500 dark:text-gray-400">
                  {activity.time}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DashboardPage;