// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase} from "firebase/database";

import {getMessaging} from 'firebase/messaging';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDihJY6XsUq06tcWvCaAiGGYNjG2mTeERA",
  authDomain: "diy-corner-46a82.firebaseapp.com",
  projectId: "diy-corner-46a82",
  storageBucket: "diy-corner-46a82.appspot.com",
  messagingSenderId: "638544313026",
  appId: "1:638544313026:web:d698cb1d418f2c2386595b",
  measurementId: "G-7V0NZ1SSZB",
  databaseURL: "https://diy-corner-46a82-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database=getDatabase(app);
export const messaging=getMessaging(app);