import { motion, variants } from 'framer-motion';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { animation } from '../../../../variants';

const Price = () => {
    const [counter, setCounter] = useState(27);
    const inc = () => {
        setCounter(prev => prev + 5)
    }
    const dec = () => {
        if (counter > 12) {
            setCounter(prev => prev - 5)
        } else {
            setCounter(prev => prev - 2)

        }
    }
    const navigate = useNavigate();
    return (
        <div className='flex flex-col h-full justify-center items-center relative '>
            <motion.div initial={"hidden"} animate={"show"} variants={animation} className='px-0 w-[350px] sm:w-[450px] md:w-[640px]  flex flex-col items-start  gap-1 pt-[50px]   md:px-[10px]  pb-[92px]  '>
                <h1 className='text-[#333] text-2xl md:text-3xl font-semibold'>
                    Now, set your price
                </h1>
                <span className='text-xl text-gray-400 mb-4'>
                    You can change it anytime.
                </span>
                <div className='flex flex-col justify-center items-center gap-4'>
                    <div className='flex flex-col justify-start items-center border border-gray-400 w-full h-[250px] rounded-2xl bg-gray-50'>
                        <div className=' flex flex-row gap-2 justify-center md:justify-around items-center py-5'>
                            <div className='cursor-pointer bg-white w-12 h-12 text-center rounded-full border border-gray-400 hover:border-[#333]'>
                                <button disabled={counter < 11} onClick={dec} className='text-4xl'>-</button>
                            </div>
                            <div className=' font-semibold w-3/5 md:w-7/12 h-[60px] md:h-[80px] border border-gray-400 rounded-lg'>
                                <input value={`$${counter}`} onChange={(e) => setCounter(e.target.value)} type="text" className='text-center w-full h-full outline-none text-4xl' />
                            </div>
                            <div className='bg-white cursor-pointer w-12 h-12 text-center rounded-full border border-gray-400 hover:border-[#333]'>
                                <button onClick={inc} className='text-4xl'>+</button>
                            </div>
                        </div>
                        <div className='flex flex-col items-center justify-center w-7/12'>
                            <span className='text-sm md:text-lg mb-4'>per night</span>
                            <span className='text-md md:text-xl text-center'>Places like yours in your area usually range from $20 to $34</span>
                        </div>
                    </div>

                    <div className='p-4 flex flex-row justify-between items-start border border-gray-400 w-full h-[150px] rounded-2xl bg-gray-50 focus-within:checked'>
                        <div >
                            <span className='text-sm md:text-lg mb-4 font-semibold'>Get booked faster</span>
                            <br />
                            <span className='text-md md:text-xl text-gray-600 '>Offer 20% off to your first 3 guests to help your place stand out.</span>
                        </div>
                        <div className='h-6 w-6 accent-black'>
                            <input type="checkbox" className='text-2xl h-full w-full ' />
                        </div>
                    </div>
                </div>
            </motion.div>
            <div className=' mt-8 fixed bottom-0 right-0 left-0 bg-[#fff] w-full '>
                <div className='bg-gray-400 w-full h-1 '>
                </div>
                <div className='flex flex-row justify-between items-center p-3 md:p-4 '>
                    <Link onClick={() => navigate(-1)} className="text-gray-[#333]">
                        Back
                    </Link>
                    <button onClick={() => navigate("/step3/legal")} className='bg-gray-600 text-white px-5 py-2 md:px-8 md:py-3 rounded-lg '>
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Price