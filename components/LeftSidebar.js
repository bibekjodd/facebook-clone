import React from 'react'
import { BsGrid3X3GapFill } from 'react-icons/bs'
import { MdGroups } from 'react-icons/md'

function LeftSidebar({ user }) {
    return (
        <div className='left_sidebar fixed top-16 left-0 flex flex-col items-start mt-3 fit font-semibold text-base'>

            <div className='flex items-center space-x-3 pr-4 lg:pr-20 hover:bg-neutral-200 w-full pl-4 py-2 rounded-md cursor-pointer'>
                <img src="/home.png" alt=""
                    className='w-6 ' />
                <span className='hidden lg:block'>Home</span>
            </div>

            <div className='flex items-center space-x-3 pr-4 lg:pr-20 hover:bg-neutral-200 w-full pl-4 py-2 rounded-md cursor-pointer'>
                <img src={user ? user.photoURL : 'https://yt3.ggpht.com/yti/AJo0G0k5B0UzwWoeklT02YvzG9LdN1Fh6jJaOhHNQBGA=s88-c-k-c0x00ffffff-no-rj-mo'} alt=""
                    className='w-6 rounded-full ' />
                <span className='hidden lg:block'>{user ? user.displayName : 'Dwyane Johnson'}</span>
            </div>

            <div className='flex items-center space-x-3 pr-4 lg:pr-20 hover:bg-neutral-200 w-full pl-4 py-2 rounded-md cursor-pointer'>
                <BsGrid3X3GapFill className='text-neutral-600 bg-neutral-200 p-1 rounded-full text-3xl ' />
                <span className='hidden lg:block'>Menu</span>
            </div>

            <div className='flex items-center space-x-3 pr-4 lg:pr-20 hover:bg-neutral-200 w-full pl-4 py-2 rounded-md cursor-pointer'>
                <img src="/friends.png" alt=""
                    className='w-6 ' />
                <span className='hidden lg:block'>Friends</span>
            </div>
            <div className='flex items-center space-x-3 pr-4 lg:pr-20 hover:bg-neutral-200 w-full pl-4 py-2 rounded-md cursor-pointer'>
                <img src="/marketplace.png" alt=""
                    className='w-6 ' />
                <span className='hidden lg:block'>Marketplace</span>
            </div>
            <div className='flex items-center space-x-3 pr-4 lg:pr-20 hover:bg-neutral-200 w-full pl-4 py-2 rounded-md cursor-pointer'>
                <img src="/watch.png" alt=""
                    className='w-6 ' />
                <span className='hidden lg:block'>Watch</span>
            </div>
            <div className='flex items-center space-x-3 pr-4 lg:pr-20 hover:bg-neutral-200 w-full pl-4 py-2 rounded-md cursor-pointer'>
                <img src="/memories.png" alt=""
                    className='w-6 ' />
                <span className='hidden lg:block'>Memories</span>
            </div>
            <div className='flex items-center space-x-3 pr-4 lg:pr-20 hover:bg-neutral-200 w-full pl-4 py-2 rounded-md cursor-pointer'>
                <img src="/saved.png" alt=""
                    className='w-6 ' />
                <span className='hidden lg:block'>Saved</span>
            </div>

            <div className='flex items-center space-x-3 pr-4 lg:pr-20 hover:bg-neutral-200 w-full pl-4 py-2 rounded-md cursor-pointer'>
                <MdGroups className='text-neutral-600 bg-neutral-200 p-1 rounded-full text-3xl ' />
                <span className='hidden lg:block'>Groups</span>
            </div>

        </div>
    )
}

export default LeftSidebar