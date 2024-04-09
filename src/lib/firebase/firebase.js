import { getApps, initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

export const firebaseConfig = {
  //   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  //   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  //   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  //   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  //   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  //   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  apiKey: 'AIzaSyAlFWxhySejdZQYll5mgYpojQqkWDomSaE',
  authDomain: 'spinach-49a50.firebaseapp.com',
  databaseURL: 'https://spinach-49a50-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'spinach-49a50',
  storageBucket: 'spinach-49a50.appspot.com',
  messagingSenderId: '844203536040',
  appId: '1:844203536040:web:0e5f160a388229ca265c9d',
  measurementId: 'G-VPR7J1580Q',
}

export const firebaseApp = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0]
export const auth = getAuth(firebaseApp)
export const db = getFirestore(firebaseApp)
export const storage = getStorage(firebaseApp)
