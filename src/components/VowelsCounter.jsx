import React, { useState } from 'react'

const VowelsCounter = () => {
    let [userInput, setUserInput] = useState('')
    let [vowels, setVowels] = useState(0)
    let [consonant, setConsonant] = useState(0)
    let [emptySpaces, setEmptySpaces] = useState(0)
    let[otherSybl,setOtherSybl] = useState(0)
    let [showResult,setShowResult] = useState(false)

    const submitHandler = (e) => {
        e.preventDefault()
        let v = 0
        let c = 0
        let s = 0
        let o = 0

        for (let i = 0; i < userInput.length; i++) {
            let ch = userInput[i]
            if (userInput[i] === 'a' || userInput[i] === 'e' || userInput[i] === 'i' || userInput[i] === 'o' || userInput[i] === 'u') {
                v++
            } else if (userInput[i] === ' ') {
                s++
            }else if(/[a-z]/.test(ch) ){
                c++
            }
            else {
                o++
            }
        }


        setVowels(v)
        setConsonant(c)
        setEmptySpaces(s)
        setOtherSybl(o)
        setShowResult(true)
    }


    return (
        <div className='flex flex-col items-center gap-5'>
            <form onSubmit={submitHandler} className='flex flex-col items-center gap-5'>
                <div className='text-3xl font-bold mt-5 text-gray-600'>Vowel and Consonant Counter</div>
                <input value={userInput} onChange={(e) => setUserInput(e.target.value.toLowerCase())} className='px-2 w-72 py-2 border-2 rounded-lg bg-white' type='text' placeholder='Calculate Vowel and Consonant' />
                <button type="submit" className='bg-gray-600 hover:bg-gray-800 text-white font-bold px-4 py-2 rounded-lg cursor-pointer'>Counter</button>
            </form>
            {showResult ?
                <div className='text-red-600 text-2xl font-semibold mt-3 text-center'>
                    Total Vowels : {vowels} <br />
                    Total Consonant : {consonant} <br />
                    Total Empty Space : {emptySpaces} <br />
                    Total Other Symbols : {otherSybl} <br />
                </div>
                : ""
            }
        </div>
    )
}


export default VowelsCounter
