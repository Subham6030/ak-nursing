// CoursesPage.js
import React from 'react';
import CourseCard from './CourseCard';

const courses = [
  {
    id: 1,
    image: '/media/bg2.jpg',
    title: 'Course 1 Title',
    description: 'Description of Course 1 goes here.',
  },
  {
    id: 2,
    image: '/media/bg2.jpg',
    title: 'Course 2 Title',
    description: 'Description of Course 2 goes here.',
  },
  {
    id: 2,
    image: '/media/bg2.jpg',
    title: 'Course 2 Title',
    description: 'Description of Course 2 goes here.',
  }, {
    id: 2,
    image: '/media/bg2.jpg',
    title: 'Course 2 Title',
    description: 'Description of Course 2 goes here.',
  }, {
    id: 2,
    image: '/media/bg2.jpg',
    title: 'Course 2 Title',
    description: 'Description of Course 2 goes here.',
  }, {
    id: 2,
    image: '/media/bg2.jpg',
    title: 'Course 2 Title',
    description: 'Description of Course 2 goes here.',
  }, {
    id: 2,
    image: '/media/bg2.jpg',
    title: 'Course 2 Title',
    description: 'Description of Course 2 goes here.',
  }, {
    id: 2,
    image: '/media/bg2.jpg',
    title: 'Course 2 Title',
    description: 'Description of Course 2 goes here.',
  }, 
 
  // Add more courses as needed
];

const CoursesPage = () => {
  return (
    <div className="px-4 py-4  w-full min-h-screen flex flex-col items-center justify-center bg-cover bg-repeat-none" style={{ backgroundImage: `url('/media/cardback.png')` }}>
    <h1 className="text-4xl font-semibold mb-8">My Courses</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8">
      {courses.map(course => (
        <CourseCard
          key={course.id}
          image={course.image}
          title={course.title}
          description={course.description}
        />
      ))}
    </div>
  </div>
  );
};

export default CoursesPage;
