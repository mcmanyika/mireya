// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBCPxvR4RBMaTfBvKf58vrMWOZ3zgKRp0Q",
    authDomain: "mireya-e60a8.firebaseapp.com",
    databaseURL: "https://mireya-e60a8-default-rtdb.firebaseio.com",
    projectId: "mireya-e60a8",
    storageBucket: "mireya-e60a8.appspot.com",
    messagingSenderId: "702945335386",
    appId: "1:702945335386:web:6dcbccd7f340442da82063",
    measurementId: "G-LYX7GRL9N3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);