import React, { useState } from 'react'

const Palindrome = () => {
  let [userInput, setUserInput] = useState("");
  let [result, setResult] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();

    let name = userInput.trim().toLowerCase();
    
    let isPalindrome = true;
    for (let i = 0; i < name.length / 2; i++) {
      if (name[i] !== name[name.length - 1 - i]) {
        isPalindrome = false;
        break;
      }
    }

    setResult(
      isPalindrome
        ? `✅ "${name}" is a Palindrome`
        : `❌ "${name}" is Not a Palindrome`
    );
    setUserInput("");
  };

  return (
    <div className="flex flex-col items-center gap-5">
      <form onSubmit={submitHandler} className="flex flex-col items-center gap-5">
        <div className="text-3xl font-bold mt-5 text-gray-600">Palindrome Checker</div>
        <input
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          className="px-2 w-72 py-2 border-2 rounded-lg bg-white"
          type="text"
          placeholder="Enter text to check palindrome"
        />
        <button
          type="submit"
          className="bg-gray-600 hover:bg-gray-800 text-white font-bold px-4 py-2 rounded-lg cursor-pointer">
          Check
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

export default Palindrome;
