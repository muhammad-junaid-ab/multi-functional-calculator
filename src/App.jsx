import React from 'react'
import FactorialCalculator from "./components/FactorialCalculator";
import ReverseString from './components/ReverseString';
import VowelsCounter from './components/VowelsCounter';
import PrimeNumCheacker from './components/PrimeNumCheacker';
import NumberGuess from './components/NumberGuess';
import FizzBuzzGame from './components/FizzBuzzGame';
import Palindrome from './components/Palindrome';

const App = () => {
  return (
    <div className='bg-gray-300 w-screen h-full pb-40'>
      <FactorialCalculator />
      <br /><hr />
      <ReverseString />
      <br /><hr />
      <VowelsCounter />
      <br /><hr />
      <PrimeNumCheacker />
      <br /><hr />
      <NumberGuess />
      <br /><hr />
      <FizzBuzzGame />
      <br /><hr />
      <Palindrome />
    </div>
  )
}

export default App
