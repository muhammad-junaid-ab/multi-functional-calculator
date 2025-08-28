import React, { useState } from 'react'

const FactorialCalculator = () => {
    let [userNum, setUserNum] = useState("");
    let [factorial, setFactorial] = useState(null);


    const handleSubmit = (e) => {
        e.preventDefault();
        let num = parseInt(userNum)
        if (isNaN(num) || num < 0) {
            setFactorial("Enter Valid Number, Don't give Negitive Number and Characters")
            setUserNum("")
            return
        }
        if (num > 170) {
            setFactorial("Number too large (result will overflow)");
            setUserNum("")
            return;
        }

        let fac = 1;
        for (let i = 1; i <= num; i++) {
            fac = fac * i;
        }
        setFactorial(fac)
        setUserNum("");

    }


    return (
        <div className='flex flex-col items-center gap-5'>
            <form onSubmit={handleSubmit} className='flex flex-col items-center gap-5'>
                <div className='text-3xl font-bold mt-5 text-gray-600'>Factorial Calculator</div>
                <input value={userNum} onChange={(e) => setUserNum(e.target.value)} className='px-2 w-72 py-2 border-2 rounded-lg bg-white' type='text' placeholder='Enter Number to Calculate Factorial' />
                <button type='onsumbit' className='bg-gray-600 hover:bg-gray-800 text-white font-bold px-4 py-2 rounded-lg cursor-pointer'>Factorial</button>
            </form>
            {factorial !== null && (
                <div className='text-red-600 text-2xl font-semibold mt-3 text-center'>
                    {factorial}
                </div>
            )}
        </div>
    )
}

export default FactorialCalculator
