import React from 'react';
import Letter from './Letter';

const Letters = () => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  return (
    <div>
      {alphabet.split('').map((letter, index) => (
        <Letter key={index} value={letter} />
      ))}
    </div>
  );
};

export default Letters;
