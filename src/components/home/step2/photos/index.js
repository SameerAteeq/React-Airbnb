import React, { useState } from 'react'
import { motion } from "framer-motion"
import { Link, useNavigate } from 'react-router-dom'
import { animation } from '../../../../variants'
import { IoMdImages } from "react-icons/io"
const Photos = () => {
    const [images, setImages] = useState([]);
    const navigate = useNavigate()
    return (
        <div className='md:flex flex-col h-full justify-center items-center relative w-full '>
            <motion.div initial={"hidden"} animate={"show"} variants={animation} className='px-12 w-full md:w-[650px] flex flex-col justify-center items-start  gap-3 pt-[50px] md:px-[20px] pb-[92px]'>
                <h1 className='text-[#333] text-2xl md:text-3xl font-semibold  md:px-0 '>
                    Choose at least 5 photos
                </h1>
                <span className=' md:px-0 text-base md:text-lg text-gray-700 mb-8'>
                    You'll need 5 photos to get started. You can add more or make changes later.
                </span>
                {images.length === 0 ?
                    <div className='flex flex-col justify-center items-center border border-dotted border-gray-900 w-10/12  md:w-full h-[200px] md:h-[280px]'>
                        <div className='flex flex-col justify-center items-center gap-4'>
                            <IoMdImages className='text-5xl' />
                            <span className='text-xl md:text-2xl font-semibold'>Drag your photos here</span>
                            <span className='text-lg text-gray-900 '>choose at least 5 photos</span>
                            <label className='cursor-pointer' id='uploadfile'>
                                <input id='uploadfile' type="file" hidden multiple onChange={(e) => setImages(e.target.files)} />
                                Upload from your device
                            </label>
                        </div>
                    </div> : null}
                {images && <div className='flex flex-row gap-2 w-[700px]'>
                    {Array.from(images)?.map(item => {
                        return (
                            <div className='flex flex-row w-[240px]'>
                                <div className='flex flex-row'>
                                    <img
                                        className='w-full h-full object-cover'
                                        src={item ? URL.createObjectURL(item) : null} />
                                </div>
                            </div>
                        )
                    })
                    }
                </div>}

            </motion.div>
            <div className=' mt-8 fixed bottom-0 right-0 left-0 bg-[#fff] w-full '>
                <div className='bg-gray-400 w-full h-1 '>
                </div>
                <div className='flex flex-row justify-between items-center p-3 md:p-4 '>
                    <Link onClick={() => navigate(-1)} className="text-gray-[#333]">
                        Back
                    </Link>
                    <button onClick={() => navigate("/step2/title")} className='bg-gray-600 text-white px-5 py-2 md:px-8 md:py-3 rounded-lg '>
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Photos