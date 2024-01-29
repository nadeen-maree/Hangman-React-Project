import React from 'react';

const Score = ({ score }) => {
  return (
    <div>
      <p>Remaining Guesses: {score}</p>
    </div>
  );
};

export default Score;
