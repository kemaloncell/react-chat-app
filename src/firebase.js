
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCqS_MFZKhLWWvzlC3oHYA9eqMxiDs2kCs",
    authDomain: "react-chat-app-236ee.firebaseapp.com",
    projectId: "react-chat-app-236ee",
    storageBucket: "react-chat-app-236ee.appspot.com",
    messagingSenderId: "898233741003",
    appId: "1:898233741003:web:29a297bc7f61a62affb54e",
    measurementId: "G-Z2CG8JMYFK"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore()
