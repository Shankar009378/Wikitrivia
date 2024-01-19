import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAb4j1lmt7ZQnMeotCQ-3v9ktcO9I-gAG4",
  authDomain: "wikitrivia-cf5d9.firebaseapp.com",
  projectId: "wikitrivia-cf5d9",
  storageBucket: "wikitrivia-cf5d9.appspot.com",
  messagingSenderId: "915993339558",
  appId: "1:915993339558:web:120891d503ee0b32dcb667"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth()