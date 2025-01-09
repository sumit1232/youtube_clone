import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaYoutube } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa";


function Navbar() {
    return (
        <div className='flex justify-between px-14 h-14 item-center bg-[#212121] opacity-95 sticky'>
            <div className='flex gap-8 items-center text-2xl text-white'>
                <div>
                    <GiHamburgerMenu />
                </div>
                <div className='flex gap-2 items-center justify-center'>
                    <FaYoutube className='text-3xl text-red-600' />
                    <span className='text-2xl font-bold'>Youtube</span>
                </div>
                <div className='flex items-center justify-center gap-5'>
                    <form>
                        <div className='flex bg-zinc-900 items-center h-10 px-4 pr-0 rounded-3xl'>
                            <div className='flex gap-5 items-center pr-5'>
                                <input type='text' placeholder='Search' className='w-96 bg-zinc-900 focus:outline-none border-none' />

                            </div>
                            <button className='h-10 w-16 flex items-center justify-center bg-zinc-800 rounded-r-3xl'>
                                <IoIosSearch className='text-xl' />
                            </button>
                        </div>
                    </form>
                    <div>
        <FaMicrophone />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar