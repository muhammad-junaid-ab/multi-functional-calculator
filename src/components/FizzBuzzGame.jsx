import React, { useState } from 'react'

const FizzBuzzGame = () => {
  let [userInput, setUserInput] = useState("");
  let [result, setResult] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();

    let num = parseInt(userInput);

    if (isNaN(num)) {
      setResult("⚠️ Please enter a valid number");
      return;
    }

    let R;
    if (num % 3 === 0 && num % 5 === 0) {
      R = `${num} → FizzBuzz 🎉`;
    } else if (num % 3 === 0) {
      R = `${num} → Fizz`;
    } else if (num % 5 === 0) {
      R = `${num} → Buzz`;
    } else {
      R = `${num} → Not Fizz Not Buzz`;
    }

    setResult(R);
    setUserInput("");
  };

  return (
    <div className="flex flex-col items-center gap-5">
      <form onSubmit={submitHandler} className="flex flex-col items-center gap-5">
        <div className="text-3xl font-bold mt-5 text-gray-600">FizzBuzz Game</div>
        <input
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          className="px-2 w-72 py-2 border-2 rounded-lg bg-white"
          type="number"
          placeholder="Enter a Number"
        />
        <button
          type="submit"
          className="bg-gray-600 hover:bg-gray-800 text-white font-bold px-4 py-2 rounded-lg cursor-pointer"
        >
          Calculate
        </button>
      </form>

      {result && ( 
        <div className="text-red-600 text-2xl font-semibold mt-3 text-center">
          {result}
        </div>
      )}
    </div>
  );
};

export default FizzBuzzGame;
