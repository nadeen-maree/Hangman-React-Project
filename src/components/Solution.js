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
      <p className='hint'><b>Hint:</b> {solution.hint}</p>
    </div>
  );
};

export default Solution;
