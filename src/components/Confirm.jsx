import React from 'react';
import QuadrantLine from './QuadrantLine';

const GridLayout = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-3 gap-4 p-4">
      <QuadrantLine />
      <QuadrantLine />
      <QuadrantLine />
      <QuadrantLine />
      <QuadrantLine />
      <QuadrantLine />
    </div>
  );
};

export default GridLayout;
