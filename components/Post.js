import Image from 'next/image'
import React from 'react'
import { MdOutlineThumbUp } from 'react-icons/md'
import { BiCommentDetail } from 'react-icons/bi'
import { AiOutlineSend } from 'react-icons/ai'



function Post({ name, message, email, image, postImage, timestamp }) {
    return (
        <div className=' flex flex-col items-start rounded-md shadow-md bg-white'>
            <div className='flex items-center p-4 pb-2'>

                <img className='w-9 aspect-square object-cover  rounded-full'
                    src={image} alt="" />
                <div className='leading-3 pl-2'>
                    <h1 className='font-semibold text-neutral-800'>{name}</h1>
                    {/* <span className='text-xs text-gray-400'>{new Date(timestamp?.toDate().toLocaleString())}</span> */}
                </div>
            </div>
            <p className='py-2 px-4'>{message}</p>
            {/* {postImage && (
                <div className='relative  w-full  bg-white'>
                    <Image src={postImage} objectFit='cover' width={500} height={20} layout='responsive' />
                </div>)} */}
            {postImage &&
                <img src={postImage} alt=""
                    className=' w-full relative mx-auto pb-5 ' />}
            <div className='w-full self-center ring-[0.5px] my-2 ring-stone-200  '></div>

            <div className='grid grid-cols-3  w-full pb-2'>
                <div className='flex flex-col xs:flex-row items-center justify-center py-2 cursor-pointer  rounded-md text-gray-600 hover:bg-stone-100 w-full '>
                    <MdOutlineThumbUp />
                    <span className='ml-1 hidden xxs:block text-sm font-medium text-gray-600'>Like</span>
                </div>
                <div className='flex flex-col xs:flex-row items-center justify-center py-2 cursor-pointer  rounded-md text-gray-600 hover:bg-stone-100 w-full'>
                    <BiCommentDetail />
                    <span className='ml-1 hidden xxs:block text-sm font-medium text-gray-600'>Comment</span>
                </div>
                <div className='flex flex-col xs:flex-row items-center justify-center py-2 cursor-pointer  rounded-md text-gray-600 hover:bg-stone-100 w-full'>
                    <AiOutlineSend />
                    <span className='ml-1 hidden xxs:block text-sm font-medium text-gray-600'>Share</span>
                </div>
            </div>
        </div>
    )
}



export default Post