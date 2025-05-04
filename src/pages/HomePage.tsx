import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Button from '../components/ui/Button';
import CourseCard from '../components/CourseCard';
import { courses } from '../data/courses';

const HomePage: React.FC = () => {
  const features = [
    { 
      title: 'Interactive Lessons', 
      description: 'Learn Python with hands-on coding exercises and interactive tutorials.' 
    },
    { 
      title: 'Comprehensive Curriculum', 
      description: 'From beginner fundamentals to advanced concepts like machine learning and data science.' 
    },
    { 
      title: 'Fun Learning Games', 
      description: 'Reinforce your skills with challenging games and coding puzzles.' 
    },
    { 
      title: 'Progress Tracking', 
      description: 'Track your learning progress and earn certificates as you advance.' 
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-800 dark:to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                Master Python Programming with Interactive Learning
              </h1>
              <p className="mt-6 text-xl text-blue-100">
                From beginner to professional, our interactive platform helps you learn Python through engaging courses, quizzes, and coding challenges.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link to="/courses">
                  <Button size="lg" className="font-semibold">
                    Browse Courses
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 font-semibold">
                    Sign Up Free
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                <pre className="text-sm text-white overflow-x-auto">
                  <code>{`# Your first Python program
def greet(name):
    """Return a greeting message"""
    return f"Hello, {name}! Welcome to Python!"

# Call the function
message = greet("Developer")
print(message)

# Output: Hello, Developer! Welcome to Python!
`}</code>
                </pre>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-blue-500 p-4 rounded-lg shadow-lg">
                <pre className="text-sm text-white">
                  <code>{`> Hello, Developer! Welcome to Python!`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Why Learn with PythonLab
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our platform is designed to make learning Python intuitive, engaging, and effective for programmers of all levels.
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
            {features.map((feature, index) => (
              <div key={index} className="flex">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Courses Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
              Popular Courses
            </h2>
            <Link 
              to="/courses" 
              className="flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300"
            >
              View All Courses <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.slice(0, 3).map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 dark:bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              Ready to start your Python journey?
            </h2>
            <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
              Join thousands of students who have already transformed their careers with our interactive Python courses.
            </p>
            <div className="mt-8">
              <Link to="/signup">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                  Get Started for Free
                </Button>
              </Link>
            </div>
            <p className="mt-4 text-sm text-blue-200">
              No credit card required. Start learning right away.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;