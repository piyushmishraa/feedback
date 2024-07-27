import React from 'react';
import '../index.css'; // Import your CSS file for custom styles

const QuadrantLine = () => {
  return (
    <div className="relative flex items-center">
    <div className="quadrant w-48 h-48 bg-white border-4 border-gray-400"></div>
    <div className="linee absolute left-24 top-1/2 transform -translate-y-1/2 w-24 h-0.5 bg-gray-400"></div>
  </div>
  );
};

export default QuadrantLine;
