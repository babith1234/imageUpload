// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"



const firebaseConfig = {
  apiKey: "AIzaSyCdOvSDsX64lR4B6ncYFmGaQ-cx20r0ArM",
  authDomain: "fine-finance.firebaseapp.com",
  projectId: "fine-finance",
  storageBucket: "fine-finance.appspot.com",
  messagingSenderId: "243205832732",
  appId: "1:243205832732:web:a8911c825a29d6b3991fd9",
  measurementId: "G-LVEPX412Z0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
