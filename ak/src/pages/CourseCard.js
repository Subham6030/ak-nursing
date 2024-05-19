// CourseCard.js
import React from 'react';

const CourseCard = ({ image, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img className="w-full h-48 object-cover object-center" src={image} alt={title} />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default CourseCard;
