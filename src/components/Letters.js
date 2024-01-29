import React from 'react';
import Letter from './Letter';

const Letters = ({ letterStatus, onSelect }) => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  return (
    <div>
      {alphabet.split('').map((letter, index) => (
        <Letter
          key={index}
          value={letter}
          isDisabled={letterStatus[letter]}
          onSelect={onSelect}
          isSolution={false}
        />
      ))}
    </div>
  );
};

export default Letters;
