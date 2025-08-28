import React, { useState } from 'react'

const ReverseString = () => {
    let [userInput, setUserInput] = useState('')
    let [reverse, setReverse] = useState("");

    const submitHandler = (e) => {
        e.preventDefault()
        let R = ''
        for (let i = userInput.length - 1; i >= 0; i--) {
            R = R + userInput[i];

        }
        setReverse(R)
        setUserInput("")


    }


    return (
        <div className='flex flex-col items-center gap-5'>
            <form onSubmit={submitHandler} className='flex flex-col items-center gap-5'>
                <div className='text-3xl font-bold mt-5 text-gray-600'>Reverse String</div>
                <input value={userInput} onChange={(e) => setUserInput(e.target.value)} className='px-2 w-72 py-2 border-2 rounded-lg bg-white' type='text' placeholder='Enter Text To Reverse' />
                <button type="submit" className='bg-gray-600 hover:bg-gray-800 text-white font-bold px-4 py-2 rounded-lg cursor-pointer'>Reverse</button>
            </form>
            <div className='text-red-600 text-2xl font-semibold mt-3 text-center'>
                {reverse}
            </div>
        </div>
    )
}

export default ReverseString
