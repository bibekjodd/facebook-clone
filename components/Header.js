import React, { useRef } from 'react'
import { FaFacebookMessenger } from 'react-icons/fa'
import { FaSistrix } from 'react-icons/fa'
import { MdCircleNotifications, MdFeedback } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { RiArrowDownSLine } from "react-icons/ri";
import { auth } from '../firebase'
import { signOut } from 'firebase/auth'
import { IoMdSettings } from "react-icons/io";
import { AiFillQuestionCircle } from "react-icons/ai";
import { BsFillMoonFill } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";

function Header({ user, setUser }) {

    const logout = async () => {
        console.log("logged ouut");
        await signOut(auth);
        setUser(null);
    }

    const ref = useRef();
    const toggleOption = () => {
        ref.current.classList.toggle('translate-x-80')
    }

    return (
        <>
            <header className='fixed top-0 left-0 z-10 w-full flex px-5 py-1 items-center md:py-2 shadow-md bg-white'>
                {/* left  */}
                <h1 className='text-[#1877f2] font-bold text-2xl sm:text-3xl'>facebook</h1>

                {/* center  */}
                <div className='mr-auto  flex bg-gray-100 hover:bg-gray-200 mx-3 w-fit sm:w-1/3 sm:mx-auto items-center space-x-2 px-3 rounded-full py-1 md:py-2'>
                    <FaSistrix className='text-neutral-500 ' />
                    <input type="text" name="" placeholder='Search Facebook' id=""
                        className='bg-transparent placeholder:font-normal text-base w-full hidden sm:block' />
                </div>

                {/* right */}
                <div className='flex items-center space-x-2'>
                    <button className='p-2 bg-gray-200 hover:bg-neutral-300 rounded-full'>
                        <FaFacebookMessenger className='text-neutral-800 ' />
                    </button>
                    <button className='p-1 bg-gray-200 hover:bg-neutral-300 rounded-full'>
                        <MdCircleNotifications className='text-neutral-800 text-2xl' />
                    </button>
                    <div className='relative cursor-pointer '>
                        <img onClick={toggleOption}
                            className='w-7 rounded-full hover:opacity-90'
                            src={user ? user.photoURL : 'https://yt3.ggpht.com/yti/AJo0G0k5B0UzwWoeklT02YvzG9LdN1Fh6jJaOhHNQBGA=s88-c-k-c0x00ffffff-no-rj-mo'} alt="" />
                        <RiArrowDownSLine onClick={toggleOption}
                            className='absolute left-1/2 top-2/3 bg-neutral-200 rounded-full' />

                        {/* toggle bar  */}
                        <section ref={ref} className='absolute text-base right-0 translate-x-80 transition-all duration-300 top-10 w-64 bg-white sm:w-72 font-semibold z-20 rounded-md ring-1 ring-neutral-100 p-2 shadow-lg '>
                            <div className='flex space-x-2 items-center  hover:bg-neutral-100 p-2 rounded-md'>
                                <img className='w-7 rounded-full'
                                    src={user ? user.photoURL : 'https://yt3.ggpht.com/yti/AJo0G0k5B0UzwWoeklT02YvzG9LdN1Fh6jJaOhHNQBGA=s88-c-k-c0x00ffffff-no-rj-mo'} alt="" />
                                <span>{user.displayName ? user.displayName : 'Dwyane Johnson'}</span>
                            </div>
                            <div className='ring-1 mb-3 mt-1 ring-neutral-200'>

                            </div>
                            <div className='flex  items-center  hover:bg-neutral-100 w-full p-2 rounded-md'>
                                <IoMdSettings className='text-neutral-700 bg-neutral-200 rounded-full p-1 text-3xl' />
                                <span className='ml-2 text-neutral-800 mr-auto'>Settings and Privacy</span>
                                <MdArrowForwardIos />
                            </div>
                            <div className='flex  items-center  hover:bg-neutral-100 w-full p-2 rounded-md'>
                                <AiFillQuestionCircle className='text-neutral-700 bg-neutral-200 rounded-full p-1 text-3xl' />
                                <span className='ml-2 text-neutral-800 mr-auto'>Help & Support</span>
                                <MdArrowForwardIos />
                            </div>
                            <div className='flex  items-center  hover:bg-neutral-100 w-full p-2 rounded-md'>
                                <BsFillMoonFill className=' text-neutral-700 bg-neutral-200 rounded-full p-1 text-3xl' />
                                <span className='ml-2 text-neutral-800 mr-auto'>Display & Accessibility</span>
                                <MdArrowForwardIos />
                            </div>
                            <div className='flex  items-center  hover:bg-neutral-100 w-full p-2 rounded-md'>
                                <MdFeedback className='text-neutral-700 bg-neutral-200 rounded-full p-1 text-3xl' />
                                <span className='ml-2 text-neutral-800 mr-auto'>Give Feekback</span>
                            </div>
                            <div onClick={logout}
                                className='flex  items-center  hover:bg-neutral-100 w-full p-2 rounded-md'>
                                <FiLogOut className='text-neutral-700 bg-neutral-200 rounded-full p-1 text-3xl' />
                                <span className='ml-2 text-neutral-800 mr-auto'>Log Out</span>
                            </div>

                        </section>
                    </div>


                </div>
            </header>



        </>

    )
}

export default Header