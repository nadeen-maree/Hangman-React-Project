import React, { useState, useCallback, useEffect } from 'react';
import './App.css';
import Score from './components/Score';
import Solution from './components/Solution';
import Letters from './components/Letters';
import EndGame from './components/EndGame';
import img0 from "./images/hangman-0.svg";
import img1 from "./images/hangman-1.svg";
import img2 from "./images/hangman-2.svg";
import img3 from "./images/hangman-3.svg";
import img4 from "./images/hangman-4.svg";
import img5 from "./images/hangman-5.svg";
import img6 from "./images/hangman-6.svg";


const App = () => {

  

  const generateLetterStatuses = () => {
    let status = {};
    for (let i = 65; i < 91; i++) {
      status[String.fromCharCode(i)] = false;
    }
    return status;
  };

  const images = [img0, img1, img2, img3, img4, img5, img6]


  const getHangmanIndex = score => {
    if (score >= 90 ) {
      return 0;
    } else if (score >= 80 && score < 90) {
      return 1;
    } else if (score >= 70 && score < 80) {
      return 2;
    } else if (score >= 60 && score < 70) {
      return 3;
    } else if (score >= 30 && score < 60) {
      return 4;
    } else if (score >= 10 && score < 30) {
      return 5;
    } else 
      return 6;
  }

  const [imageIndexState, setImageIndexState] = useState(0);

  const generateRandomWord = () => {
    const wordList = [
      { word: 'REACT', hint: 'A JavaScript library for building user interfaces' },
      { word: 'JAVASCRIPT', hint: 'A high-level, interpreted programming language' },
      { word: 'HANGMAN', hint: 'A word-guessing game' },
      { word: 'DEVELOPER', hint: 'One who writes code to create software applications' },
      { word: 'ELEPHANT', hint: 'One who writes code to create software applications' },
      { word: 'GALAXY', hint: 'A vast system of stars, stellar remnants, interstellar gas, dust, and dark matter' },
      { word: 'INNOVATION', hint: 'The introduction of new ideas, methods, or products to bring about positive change' },
      { word: 'ADVENTURE', hint: 'An exciting or unusual experience that involves exploration and often involves risk' },
      { word: 'MOUNTAINS', hint: 'Large landforms that rise prominently above their surroundings, often featuring peaks and valleys' },
      { word: 'COFFEE', hint: 'A popular beverage made from roasted coffee beans, often enjoyed for its stimulating effects' },
      { word: 'GUITAR', hint: 'A musical instrument with six strings, played by strumming or plucking' },
      { word: 'PROGRAMMING', hint: 'The process of designing and building executable computer code to accomplish a specific task' },


    ];
    const randomIndex = Math.floor(Math.random() * wordList.length);
    return wordList[randomIndex];
  };

  const initialWordObject = generateRandomWord();

  const [letterStatus, setLetterStatus] = useState(generateLetterStatuses());
  const [solution, setSolution] = useState({
    word: initialWordObject.word,
    hint: initialWordObject.hint,
  });
  const [score, setScore] = useState(100);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isWinner, setIsWinner] = useState(false);
  const [guessedWord, setGuessedWord] = useState(Array(initialWordObject.word.length).fill(false));
  const [isRestarting, setIsRestarting] = useState(false);

  const handleLetterSelect = useCallback(
    (letter) => {
      if (isRestarting) {
        return;
      }
      const isLetterInWord = solution.word.includes(letter);
      
      setLetterStatus((prevStatus) => ({
        ...prevStatus,
        [letter]: true,
      }));
      
      let newScore = score 
      if (isLetterInWord) {
        const updatedGuessedWord = solution.word.split('').map((char, index) =>
          letterStatus[char] || char === letter ? true : guessedWord[index]
        );

        setGuessedWord(updatedGuessedWord);
        if (updatedGuessedWord.every((status) => status)) {
          setIsGameOver(true)
          setIsWinner(true);
        }
        newScore += 5
      } else {
        newScore -= 20
      }
      setScore(newScore);
      setImageIndexState(getHangmanIndex(newScore))
    },
    [solution.word, letterStatus, guessedWord, setLetterStatus, setGuessedWord, setScore]
  );

  useEffect(() => {
    if (score <= 0) {
      setIsGameOver(true);
      setIsWinner(false);
    }
  }, [score]);


  const handleRestart = () => {
    const newWordObject = generateRandomWord();
    setSolution({
      word: newWordObject.word,
      hint: newWordObject.hint,
    });
    setLetterStatus(generateLetterStatuses());
    setGuessedWord(Array(newWordObject.word.length).fill(false));
    setScore(100);
    setIsGameOver(false);
    setIsWinner(false);
    setIsRestarting(false);
    setImageIndexState(0)
  };

  const handleRestartClick = () => {
    setIsRestarting(true);
    handleRestart();
  };

  const getScoreClass = () => {
    if (score >= 80) {
      return 'high-score';
    } else if (score >= 50) {
      return 'medium-score';
    } else {
      return 'low-score';
    }
  };


  return (
    <div className="game-container">
    {isGameOver ? (
      <EndGame isWinner={!guessedWord.some((status) => !status)} solution={solution} onRestart={handleRestartClick}/>
    ) : (
      <div>
        <div className={`score-container ${getScoreClass()}`}>
          <Score score={score} />
        </div>
        <br></br>
        <center>
        <img draggable={false} src={images[imageIndexState]} ></img>
        </center>
        <br></br>
        <div className="solution-container">
          <Solution letterStatus={letterStatus} solution={solution} />
        </div>
        <div className="letters-container">
          <Letters letterStatus={letterStatus} onSelect={handleLetterSelect} />
        </div>
      </div>
    )}
  </div>
  );
};

export default App;

