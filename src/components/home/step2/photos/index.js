import React, { useState } from 'react'
import { motion } from "framer-motion"
import { Link, useNavigate } from 'react-router-dom'
import { animation } from '../../../../variants'
import { IoMdImages } from "react-icons/io"
const Photos = () => {
    const [images, setImages] = useState([]);
    const navigate = useNavigate()
    const handleImages = (e) => {
        if (e.target.files) {
            const filesArray = Array.from(e.target.files).map((file) => (
                URL.createObjectURL(file)
            ))
            setImages((prevImages) => prevImages.concat(filesArray));
            Array.from(e.target.files).map((file) => {
                URL.revokeObjectURL(file);
            })
        }
    }
    return (
        <div className='md:flex flex-col h-full justify-center items-center relative w-full '>
            <motion.div initial={"hidden"} animate={"show"} variants={animation} className='px-4 h-full w-full md:w-[650px] flex flex-col justify-center items-start  gap-3 pt-[50px] md:px-[20px] pb-[120px] '>
                <h1 className='text-[#333] text-2xl md:text-3xl font-semibold  md:px-0 '>
                    Choose at least 5 photos
                </h1>
                <span className=' md:px-0 text-base md:text-lg text-gray-700 mb-8'>
                    You'll need 5 photos to get started. You can add more or make changes later.
                </span>
                {images.length === 0 ?
                    <div className='flex flex-col justify-center items-center border border-dotted border-gray-900 w-full  md:w-full h-[200px] md:h-[300px] pb-[120px] '>
                        <div className='flex flex-col justify-center items-center gap-4'>
                            <IoMdImages className='text-3xl md:text-5xl' />
                            <span className='text-xl md:text-2xl font-semibold'>Drag your photos here</span>
                            <span className='text-lg text-gray-900 '>choose at least 5 photos</span>
                            <label className='cursor-pointer' id='uploadfile'>
                                <input id='uploadfile' type="file" hidden multiple onChange={handleImages} />
                                <a id='uploadfile'>Upload from your device</a>
                            </label>
                        </div>
                    </div> : null}
                {images.length > 0 &&

                    <div className='flex flex-row justify-center sm:items-start sm:justify-start items-center gap-2 w-full   md:[700px] h-[400px] flex-wrap overflow-y-auto'>
                        {images.map((item, ind) => {
                            return (
                                <div key={ind} className='flex justify-center sm:items-start items-center flex-row w-full sm:w-[450px] md:w-[240px] h-fit md:h-[240px]'>
                                    <div className='flex flex-row border w-full h-full '>
                                        <img
                                            className='w-full h-full object-cover  bg-no-repeat'
                                            src={item} />
                                    </div>
                                </div>
                            )
                        })}
                        <div className=' border border-dotted border-gray-400 h-[240px] w-full sm:w-[450px] md:w-[240px]  md:h-[240px]'>
                            <div className='flex items-center justify-center w-full h-full'>
                                <label className='cursor-pointer' id='uploadfile'>
                                    <input id='uploadfile' type="file" hidden multiple onChange={handleImages} />
                                    <a id='uploadfile'>Add more</a>
                                </label>
                            </div>
                        </div >
                    </div>
                }
            </motion.div >
            <div className='fixed bottom-0 right-0 left-0 bg-[#fff] w-full '>
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
        </div >
    )
}

export default Photos