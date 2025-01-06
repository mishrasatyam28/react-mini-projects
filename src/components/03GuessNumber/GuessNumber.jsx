import React, { useEffect, useState } from 'react'
import './style.css'

const GuessNumber = () => {
    const [randomNumber, setRandomNumber] = useState()
    const [guessDisabled, setGuessDisabled] = useState(false)
    const [userGuess, setUserGuess] = useState(1)
    const [lowGuess, setLowGuess] = useState(false)
    const [highGuess, setHighGuess] = useState(false);
    const [correctGuess, setCorrectGuess] = useState(false);

    // Initialize the random number when the component mounts
  useEffect(() => {
      setRandomNumber(Math.round(100 * Math.random()));
      console.log(randomNumber)
  }, []);

  // Handle user guess submission where we Check if the user guess is lower, higher, or correct
  const handleGuess = (e) => {
    e.preventDefault();

    if (userGuess < randomNumber) {
      setLowGuess(true);
      setHighGuess(false);
    } else if (userGuess > randomNumber) {
      setHighGuess(true);
      setLowGuess(false);
    } else {
      setCorrectGuess(true);
      setLowGuess(false);
      setHighGuess(false);
      setGuessDisabled(true);
    }
  };

  // Handle game restart where we Generate a new random number and reset game state
  const handleRestart = () => {

    setRandomNumber(Math.round(100 * Math.random()));
    setCorrectGuess(false);
    setLowGuess(false);
    setHighGuess(false);
    setGuessDisabled(false);
    setUserGuess(1);
  };
  return (
    <div className="container">
      <form onSubmit={handleGuess}>
        <label htmlFor="input">Guess a Number between 0 and 100</label>
        <input
          id="input"
          type="number"
          value={userGuess}
          min="0"
          max="100"
          placeholder="Guess-Number"
          onChange={(e) => setUserGuess(Number(e.target.value))}
        />
        <div className="flex-button">
          <button type="reset" onClick={handleRestart}>
            Reset
          </button>
          <button type="submit" disabled={guessDisabled}>
            Check
          </button>
        </div>
      </form>
      <div className="">
        {lowGuess && (
          <p>
            Your guess is <b>Less</b> than the actual number
          </p>
        )}
        {highGuess && (
          <p>
            Your guess is <b>Higher</b> than the actual number
          </p>
        )}
        {correctGuess && (
          <p>
            Your guess is <b>right</b>
          </p>
        )}
      </div>
    </div>
  ); 
}

export default GuessNumber