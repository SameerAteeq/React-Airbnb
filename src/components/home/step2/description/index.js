import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from "framer-motion"
import { animation } from '../../../../variants'

const Description = () => {
    const [textArea, setTextArea] = useState(" You'll always remember your time at this unique place to stay.");
    const navigate = useNavigate();
    return (
        <div className='md:flex flex-col h-full justify-center items-center relative w-full '>
            <motion.div initial={"hidden"} animate={"show"} variants={animation} className='px-8 w-full md:w-[650px] flex flex-col justify-center items-start  gap-3 pt-[50px] md:px-[20px] pb-[92px]'>
                <h1 className='text-[#333] text-3xl md:text-3xl font-semibold  md:px-0 '>
                    Create your description
                </h1>
                <span className=' md:px-0 text-base md:text-xl text-gray-700 mb-8'>
                    Share what makes your place special.
                </span>
                <div className='w-full text-lg h-[200px] '>
                    <textarea value={textArea} onChange={(e) => setTextArea(e.target.value)} className='w-full border border-[#333] p-3 rounded-lg'
                        rows="8" cols="4"
                    >

                    </textarea>
                </div>
            </motion.div>
            <div className=' mt-8 fixed bottom-0 right-0 left-0 bg-[#fff] w-full '>
                <div className='bg-gray-400 w-full h-1 '>
                </div>
                <div className='flex flex-row justify-between items-center p-3 md:p-4 '>
                    <Link onClick={() => navigate(-1)} className="text-gray-[#333]">
                        Back
                    </Link>
                    <button disabled={textArea === ""} onClick={() => navigate("/step3")} className={`${textArea === "" ? "opacity-[0.3] cursor-not-allowed" : ""} bg-gray-600 text-white px-5 py-2 md:px-8 md:py-3 rounded-lg `}>
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Description