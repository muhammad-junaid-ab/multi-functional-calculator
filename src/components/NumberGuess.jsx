import React, { useState } from 'react'

const NumberGuess = () => {
  let [userInput, setUserInput] = useState("");
  let [gameNumber, setGameNumber] = useState(Math.floor(Math.random() * 10) + 1);
  let [result, setResult] = useState(null);
  let [tries, setTries] = useState(0);

  const submitHandler = (e) => {
    e.preventDefault();
    let num = parseInt(userInput);

    if (isNaN(num) || num > 10 || num < 1) {
      setResult(`⚠️ Please enter a number between 1 and 10`);
      setUserInput("");
      return;
    }

    const newTries = tries + 1;
    setTries(newTries);

    if (num === gameNumber) {
      setResult(`🎉 Good! You Win! ${num} is correct. It took you ${newTries} tries.`);
      setGameNumber(Math.floor(Math.random() * 10) + 1); // reset game
      setTries(0);
    } else if (num > gameNumber) {
      setResult(`⬆️ Too high! Try a smaller number.`);
    } else {
      setResult(`⬇️ Too low! Try a larger number.`);
    }

    setUserInput("");
  };

  return (
    <div className="flex flex-col items-center gap-5">
      <form onSubmit={submitHandler} className="flex flex-col items-center gap-5">
        <div className="text-3xl font-bold mt-5 text-gray-600">Guess Number Game</div>
        <input
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          className="px-2 w-72 py-2 border-2 rounded-lg bg-white"
          type="number"
          placeholder="Guess The Game Number"
        />
        <button
          type="submit"
          className="bg-gray-600 hover:bg-gray-800 text-white font-bold px-4 py-2 rounded-lg cursor-pointer"
        >
          Guess
        </button>
      </form>

      {result && (
        <div className="text-red-600 text-2xl font-semibold mt-3 text-center flex flex-col items-center">
          <div>Your Tries : {tries}</div>
          <div>{result}</div>
        </div>
      )}
    </div>
  );
};

export default NumberGuess;
