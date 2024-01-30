import React from 'react';
import lost from "../images/lost.gif";
import victory from "../images/victory.gif";

const EndGame = ({ isWinner, solution, onRestart }) => {

    const images = [lost, victory]
    return (
      <div className="end-game-container">
        
        {isWinner ? <div> <img className='img' draggable={false} src={images[1]} ></img> <h2 className='high-score'>Congratulations!</h2>  <p>You guessed the word!</p></div>: 
           <div><img className='img' draggable={false} src={images[0]} ></img> <h2 className='low-score'>Game Over</h2> <p>The secret word was: {solution.word}</p></div> }
        <button onClick={onRestart}>Restart</button>
      </div>
    );
};

export default EndGame;

