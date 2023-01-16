import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    const [data, setData] = useState({ name: "", email: "" })
    return (
        <div className='flex flex-col justify-center items-center h-screen w-full '>
            <div className='py-6 flex flex-col justify-center items-start gap-3 w-[360px] md:w-[400px] border border-gray-300 rounded-lg'>
                <div className='text-center w-full mb-2 '>
                    <span className=' text-4xl font-bold text-[#333] '>
                        Login
                    </span>
                </div>
                <div className='p-2 md:p-4 w-full'>
                    <form className='w-full' >
                        <div className='flex flex-col mb-3 gap-1'>
                            <label className='text-lg font-semibold text-[#333]'>Email</label>
                            <input type="email" className='rounded-md bg-gray-100 p-3 ' />
                        </div>
                        <div className='flex flex-col mb-6 gap-1'>
                            <label className='text-lg font-semibold text-[#333]'>Password</label>
                            <input type="password" className='rounded-md bg-gray-100 p-3 ' />
                        </div>
                        <button type="submit" className="w-full p-2 text-lg font-semibold rounded-md bg-pink-600 text-white">Login</button>
                    </form>
                    <div className='flex flex-row items-center gap-2 mt-3'>
                        <span>
                            Don't have an account?
                        </span>
                        <Link to="/signup" className='text-pink-600 font-semibold'>Signup</Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login