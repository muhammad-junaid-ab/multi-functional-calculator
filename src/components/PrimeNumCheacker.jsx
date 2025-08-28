import React, { useState } from 'react'

const PrimeNumCheacker = () => {
    let [userInput, setUserInput] = useState("")
    let [isPrime, setIsPrime] = useState(null)


    const submitHandler = (e) => {
        e.preventDefault();

        let num = parseInt(userInput);

        if (isNaN(num)) {
            setIsPrime(null);
            return;
        }

        let R = true;
        if (num < 2) {
            R = false;
        }
        else {
            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0) {
                    R = false;
                    break;
                }
            }
        }
        setIsPrime(R);
    }

    return (
        <div className='flex flex-col items-center gap-5'>
            <form onSubmit={submitHandler} className='flex flex-col items-center gap-5'>
                <div className='text-3xl font-bold mt-5 text-gray-600'>Prime Number Calculator</div>
                <input value={userInput} onChange={(e) =>{ setUserInput(e.target.value); setIsPrime(null) }} className='px-2 w-72 py-2 border-2 rounded-lg bg-white' type='number' placeholder='Calculate Prime Number' />
                <button type="submit" className='bg-gray-600 hover:bg-gray-800 text-white font-bold px-4 py-2 rounded-lg cursor-pointer'>Calculate</button>
            </form>
            {isPrime !== null ?
                <div className='text-red-600 text-2xl font-semibold mt-3 text-center'>
                    {userInput} is {isPrime ? "Prime" : "Not Prime"} Number
                </div>
                : ""
            }
        </div>
    )
}

export default PrimeNumCheacker



