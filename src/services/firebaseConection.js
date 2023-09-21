
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
 
const firebaseConfig = {
  apiKey: "AIzaSyAZSpDOX6pM8JTvPEN577hY3wRgxJu4lRY",
  authDomain: "web333-42175.firebaseapp.com",
  projectId: "web333-42175",
  storageBucket: "web333-42175.appspot.com",
  messagingSenderId: "149859852251",
  appId: "1:149859852251:web:5d1d3c2828d8435ea3d1fe",
  measurementId: "G-WRQY2HKCTG"
};

const firebaseApp = initializeApp(firebaseConfig)

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db , auth };

