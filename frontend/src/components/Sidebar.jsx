import React from 'react'
import { IoHomeSharp } from "react-icons/io5";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { BiSolidVideos } from "react-icons/bi";
import { FaHistory } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
import { BiLike } from "react-icons/bi";

function Sidebar() {
    const mainLinks = [
        {
            icon: <IoHomeSharp className='text-xl'/>,
            name: "Home"
        },
        {
            icon: <SiYoutubeshorts className='text-xl'/>,
            name: "Shorts"
        },
        {
            icon: <MdSubscriptions className='text-xl'/>,
            name: "Subscriptions"
        }
    ];

    const otherLinks = [
        {
            icon: <BiSolidVideos className='text-xl'/>,
            name: "Library"
        },
        {
            icon: <FaHistory className='text-xl'/>,
            name: "History"
        },
        {
            icon: <MdOutlineWatchLater className='text-xl'/>,
            name: "Watch Later"
        },
        {
            icon: <BiLike className='text-xl'/>,
            name: "Liked Videos"
        }
    ];

    return (
        <div className='w-2/12 bg-[#212121] p-2 pr-5 overflow-auto pb-8 h-screen'>

            {/* mainLinks */}
            <ul className='flex flex-col border-b-2 border-gray-700'>
                {mainLinks.map(({ icon, name }) => {
                    return (
                        <li key={name} className={`pl-6 py-3 hover:bg-zinc-600 ${name === "Home" ? "bg-zinc-800" : " "} rounded-xl`}>
                            <a href='#' className='flex items-center gap-5'>
                                {icon}
                                <span className='text-sm tracking-wider'>{name}</span>
                            </a>
                        </li>
                    )
                })}
            </ul>

            {/* otherLinks */}
            <ul className='flex flex-col border-b-1 border-gray-800'>
                {otherLinks.map(({ icon, name }) => {
                    return (
                        <li key={name} className={`pl-6 py-3 hover:bg-zinc-600 ${name === "Home" ? "bg-slate-600" : " "}`}>
                            <a href='#' className='flex items-center gap-5'>
                                {icon}
                                <span className='text-sm tracking-wider'>{name}</span>
                            </a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Sidebar