import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBdcYfrM8QaUuYrBU7bppB7dmQXd9zLoGE",
    authDomain: "clone-7f8c7.firebaseapp.com",
    projectId: "clone-7f8c7",
    storageBucket: "clone-7f8c7.appspot.com",
    messagingSenderId: "375027084075",
    appId: "1:375027084075:web:d9d718267e306a26ddf36e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, provider, db, storage }