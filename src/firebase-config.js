// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from '@firebase/firestore';

export const firebaseConfig = {
    apiKey: 'AIzaSyD2ztFOavBIEtaNrvPRo3sou_5Hpa6p6aw',
    authDomain: 'quiza-a659e.firebaseapp.com',
    projectId: 'quiza-a659e',
    storageBucket: 'quiza-a659e.appspot.com',
    messagingSenderId: '415214926406',
    appId: '1:415214926406:web:df641b991a9e565a7d6847',
};

const app = initializeApp(firebaseConfig); // export const db = getFirestore(app);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
    signInWithRedirect(auth, provider).then((result) => {
        const name = result.user.displayName;
        const email = result.user.email;
        const profilePicture = result.user.photoURL;

        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('profilePicture', profilePicture);
    });
};
export const db = getFirestore(app);
