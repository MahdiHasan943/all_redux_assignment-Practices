// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: process.env.VITE_REACT_APP_apiKey,
  authDomain:process.env.VITE_REACT_APP_authDomain,
  projectId:process.env.VITE_REACT_APP_projectId ,
  storageBucket:process.env.VITE_REACT_APP_storageBucket ,
  messagingSenderId:process.env.VITE_REACT_APP_messagingSenderId,
  appId:process.env.VITE_REACT_APP_appId,
  measurementId:process.env.VITE_REACT_APP_measurementId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
export default auth;