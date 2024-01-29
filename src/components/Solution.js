import React from 'react';

const Solution = () => {
  const hint = "Your ideal mood when coding.";
  const emptySpaces = Array(4).fill('_').join(' ');

  return (
    <div>
      <p>{emptySpaces}</p>
      <p>{hint}</p>
    </div>
  );
};

export default Solution;
