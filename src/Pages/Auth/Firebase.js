// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiaq-dMEntV29xu9s59vdxrrGm-9u0Jj0",
  authDomain: "otp-d2e30.firebaseapp.com",
  projectId: "otp-d2e30",
  storageBucket: "otp-d2e30.appspot.com",
  messagingSenderId: "1095449607159",
  appId: "1:1095449607159:web:c6a904833de246dca88cf2",
  measurementId: "G-2RQ1FJETW5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth=getAuth(app)