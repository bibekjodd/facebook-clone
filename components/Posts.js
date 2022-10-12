import { collection, getDocs, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../firebase';
import Post from './Post'

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {

    const getAllPosts = async () => {
      const collRef = collection(db, 'posts');
      const result = await getDocs(query(collRef, orderBy('timestamp', 'desc')));
      setPosts(result.docs.map(doc => (
        {
          ...doc.data(),
          id: doc.id
        }
      )))
    }
    onSnapshot(collection(db, 'posts'), getAllPosts);
  }, [])

  return (
    <div className='w-full flex flex-col space-y-5'>
      {
        posts.map(({ id, name, message, email, timestamp, image, postImage }) => (
          <Post
            key={id}
            name={name}
            message={message}
            email={email}
            image={image}
            postImage={postImage}
            timestamp={timestamp}
          />
        ))
      }
    </div>
  )
}


export default Posts