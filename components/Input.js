import { collection, addDoc, serverTimestamp, doc, updateDoc } from 'firebase/firestore';
import React, { useRef, useState } from 'react'
import { db, storage } from '../firebase';
import { getDownloadURL, ref, uploadString } from 'firebase/storage'

function Input({ user }) {
    const inputRef = useRef(null);
    const filePickerRef = useRef(null);
    const collRef = collection(db, 'posts');
    const [imageToPost, setImageToPost] = useState(null);

    const sendPost = async (e) => {
        e.preventDefault();
        if (inputRef.current.value === '' && !imageToPost)
            return
        try {

            const result = await addDoc(collRef, {
                message: inputRef.current.value,
                name: user.displayName,
                email: user.email,
                image: user.photoURL,
                timestamp: serverTimestamp()
            })
            inputRef.current.value = ''
            if (imageToPost) {
                const id = new Date().getTime().toString();
                const storageRef = ref(storage, `posts/${id}`);
                await uploadString(storageRef, imageToPost, 'data_url');
                const downloadurl = await getDownloadURL(storageRef)
                await updateDoc(doc(db, 'posts', result.id), {
                    postImage: downloadurl
                })
                removeImage();
            }
        } catch (error) {
            console.log(error);
        }
    }

    const removeImage = () => {
        setImageToPost(null);
    }

    const addImageToPost = (e) => {
        const reader = new FileReader();
        if (filePickerRef.current.files[0]) {
            reader.readAsDataURL(filePickerRef.current.files[0])
            reader.onload = (readerEvent) => {
                setImageToPost(readerEvent.target.result)
            }
        }
    }


    return (
        <div className='flex flex-col bg-white rounded-md  w-full shadow-md pt-2'>
            <div className='flex p-2 items-center '>
                <img className='w-7 md:w-10 rounded-full mr-2'
                    src={user ? user.photoURL : ''} alt="" />
                <form className='w-full flex flex-col ' onSubmit={sendPost}>
                    <input ref={inputRef} type="text" name="" placeholder={`What's on your mind, ${user.displayName.slice(0, user.displayName.indexOf(' '))}`} id=""
                        className='w-full bg-gray-100 py-1.5 sm:py-2 rounded-full px-5 hover:bg-gray-200 placeholder:text-neutral-600 text-xs xxs:text-sm xs:text-base md:text-lg' />

                </form>

                {imageToPost && <div onClick={removeImage}
                    className='flex flex-col items-center ml-2 cursor-pointer hover:brightness-105'>
                    <img className='w-12' src={imageToPost} alt=""
                    />
                    <p className='text-xs text-rose-600 font-semibold'>Remove</p>
                </div>}

            </div>
            {(imageToPost) && <button onClick={sendPost}
                className='bg-[#1877fc] hover:bg-[#1877fcdc] cursor-pointer text-white py-1 mt-2 rounded-md w-fit px-5 self-end mr-2' >
                Post Now</button>}
            <div className='w-11/12 self-center ring-[0.5px] mt-2 ring-neutral-200 '></div>
            <div className='grid grid-cols-3 justify-items-center py-2  '>
                <div className='flex flex-col mdp:flex-row  items-center font-semibold text-gray-600 text-base hover:bg-neutral-100 p-2 px-5 rounded-md cursor-pointer'>
                    <img src="/live.png" alt=""
                        className='w-7' />
                    <span className="ml-2 text-center whitespace-nowrap hidden xxs:block text-xs xs:text-base">Live Video</span>
                </div>


                {/* image  */}
                <input ref={filePickerRef} type="file" name="" id="imageInput" onChange={addImageToPost}
                    className='hidden' />
                <label htmlFor='imageInput' className='flex flex-col mdp:flex-row items-center font-semibold text-gray-600 text-base hover:bg-neutral-100 p-2 px-5 rounded-md cursor-pointer'>
                    <img src="/photo.png" alt=""
                        className='w-7' />
                    <span className="ml-2 text-center whitespace-nowrap hidden xxs:block text-xs xs:text-base">Photo/Video</span>
                </label>


                <div className='flex flex-col mdp:flex-row items-center font-semibold text-gray-600 text-base hover:bg-neutral-100 p-2 px-5 rounded-md cursor-pointer'>
                    <img src="/feeling.png" alt=""
                        className='w-7' />
                    <span className="ml-2 text-center whitespace-nowrap hidden xxs:block text-xs xs:text-base">Feeling/activity</span>

                </div>
            </div>
        </div>
    )
}

export default Input