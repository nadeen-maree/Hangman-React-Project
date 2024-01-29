import React from 'react';
import Letter from './Letter';

const Solution = ({ letterStatus, solution }) => {
  return (
    <div>
      {solution.word.split('').map((letter, index) => (
        <Letter
          key={index}
          value={letter}
          isVisible={letterStatus[letter]}
          isSolution={true}
        />
      ))}
      <p>Hint: {solution.hint}</p>
    </div>
  );
};

export default Solution;
