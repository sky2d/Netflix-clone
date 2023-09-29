// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgNEitQOwYE3CKFESe8g67zZgIKhT9UnA",
  authDomain: "netflix-02-3393f.firebaseapp.com",
  projectId: "netflix-02-3393f",
  storageBucket: "netflix-02-3393f.appspot.com",
  messagingSenderId: "809625948772",
  appId: "1:809625948772:web:fd318e219645d69faf0571"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
