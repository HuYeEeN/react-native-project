import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect, useState } from 'react'
import {LogBox} from 'react-native';
LogBox.ignoreLogs(['AsyncStorage has been extracted from react-native core'])

// [] {} ''

const firebaseConfig = {
  apiKey: "AIzaSyCZQrpEA_FQyZ1MhVQUX8rR80WxmikvpQE",
  authDomain: "min-handleliste-ee0d5.firebaseapp.com",
  projectId: "min-handleliste-ee0d5",
  storageBucket: "min-handleliste-ee0d5.appspot.com",
  messagingSenderId: "681986301441",
  appId: "1:681986301441:web:bd744b6852b3d6d2f42a00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export function useAuth() {
  const [currentUser, setCurrentUser] = useState()
  let isSignedIn = true

  useEffect(() => {
    onAuthStateChanged(auth, user => {

      if (isSignedIn) {
        const unsub = setCurrentUser(user)
        return unsub
      }
    })

    return () => (isSignedIn = false)
  }, [])

  return currentUser
}

export function signIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
}

export function logOut() {
  return signOut(auth)
}