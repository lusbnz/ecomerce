// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5DUabPDTtRgTGtmtbB-5tqAsI2SGjzow",
  authDomain: "test-ecom-4c054.firebaseapp.com",
  projectId: "test-ecom-4c054",
  storageBucket: "test-ecom-4c054.firebasestorage.app",
  messagingSenderId: "878870631700",
  appId: "1:878870631700:web:5aae77a22f2e5eb86a1e01",
  measurementId: "G-678FL2YSG3"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
export { db, auth, googleProvider, githubProvider };
