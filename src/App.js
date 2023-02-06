import './App.css';
import { useState, useEffect } from 'react';

import RandomColorBoxes from './RandomColorBoxes'

function App() {
  let [randomColors, setRandomColors] = useState([]);
  let [correctAnswer, setCorrectAnswer] = useState('');
  let [answerText, setAnswerText] = useState('-')


  function generateRandomColors(){
    const colors = [1,2,3].map(() => {
      return '#' + (Math.random() * 0xfffff * 1000000).toString(16).slice(0, 6);
    })

    return colors
  }

  function checkAnswer(color){
    if (correctAnswer === color){
      setAnswerText('Correct!')
    } else {
      setAnswerText('Incorrect!')
    }
  }

  function resetGame(){
    const randomIdx = Math.floor(Math.random() * 3);
    const newColors = generateRandomColors();

    setRandomColors(newColors);

    setCorrectAnswer(newColors[randomIdx]);

    setAnswerText('-')

    console.log('Game Reset');
  }

  useEffect(() => {
    resetGame();
  }, []);

  return (
    <div className="App">
      <RandomColorBoxes
        randomColors={randomColors}
        checkAnswer={checkAnswer}
      />

      <p>
        Click the swatch that matches:&nbsp;
        <b>{correctAnswer}</b>
      </p>

      <p>{answerText}</p>

      <button onClick={() => resetGame()}>
        Play Again
      </button>
    </div>
  );
}

export default App;
