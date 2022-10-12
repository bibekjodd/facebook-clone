import '../styles/globals.css'
import { useEffect, useState } from 'react';
import { onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase'
import Header from '../components/Header';


function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null);
  const login = async () => {
    const userCredintial = await signInWithPopup(auth, provider);
    const { displayName, email, photoURL, uid } = userCredintial.user;
    setUser({
      displayName,
      email,
      photoURL,
      uid
    })
  }


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userCredintial) => {
      if (userCredintial) {
        const { displayName, email, photoURL, uid } = userCredintial;
        setUser({
          displayName,
          email,
          photoURL,
          uid
        })
      }
      else
        setUser(null);
    })
    return unsubscribe;
  }, [])




  return !user ? <div className='h-screen w-full grid place-items-center py-20'>
  <div className='flex flex-col items-center'>
    <img src="/logo.svg" alt=""
    className='mb-5' />
  <button onClick={login}
      className='px-5 py-1 text-white flex items-center bg-[#1877f2] hover:bg-[#006eff] rounded-md shadow-xl shadow-[#1876f24b]'>
      <span>Sign In With Google</span>
    </button>
  </div>
  </div>
    : <>
      {/* return <> */}
      <Header user={user} setUser={setUser} />
      < Component user={user} {...pageProps} />
    </>

}

export default MyApp
