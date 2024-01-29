import React, { useState, useCallback } from 'react';
import './App.css';
import Score from './components/Score';
import Solution from './components/Solution';
import Letters from './components/Letters';

const App = () => {
  const generateLetterStatuses = () => {
    let status = {};
    for (let i = 65; i < 91; i++) {
      status[String.fromCharCode(i)] = false;
    }
    return status;
  };

  const [letterStatus, setLetterStatus] = useState(generateLetterStatuses());
  const [solution, setSolution] = useState({
    word: "REACT", 
    hint: "JavaScript Library",
  });
  const [score, setScore] = useState(100);

  

  const handleLetterSelect = useCallback(
    (letter) => {
      setLetterStatus((prevStatus) => ({
        ...prevStatus,
        [letter]: true,
      }));
    },
    [setLetterStatus]
  );

  return (
    <div>
      <Score score={score} />
      <Solution letterStatus={letterStatus} solution={solution} />
      <Letters letterStatus={letterStatus} onSelect={handleLetterSelect} />
    </div>
  );
};

export default App;
