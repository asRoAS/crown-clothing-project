import { initializeApp } from 'firebase/app'
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from 'firebase/auth'
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyDoivusuEKF6gNLaGvMqobMIa-AG-o9SUk",
  authDomain: "crown-clothing-db-f24d9.firebaseapp.com",
  projectId: "crown-clothing-db-f24d9",
  storageBucket: "crown-clothing-db-f24d9.appspot.com",
  messagingSenderId: "716979154082",
  appId: "1:716979154082:web:02764067472fa5eb3e3bfb"
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account'
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {

  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid)


  const userSnapshot = await getDoc(userDocRef);
  // console.log(userSnapshot);
  // console.log(userSnapshot.exists());

  // if user data does not exists
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      })

    } catch (error) {
      console.log('error creating the user', error.message);

    }

    // if user data exists
    return userDocRef;

  }
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password)
}