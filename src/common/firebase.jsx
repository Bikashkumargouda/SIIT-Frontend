import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth, signInWithPopup} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyBsRqDWF3533vN78SSF1vi7Ip_PRKUPJUk",
  authDomain: "siit-lms.firebaseapp.com",
  projectId: "siit-lms",
  storageBucket: "siit-lms.appspot.com",
  messagingSenderId: "11330565371",
  appId: "1:11330565371:web:1f6adc8e1ee5ecda782c5e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// google auth

const provider = new GoogleAuthProvider();

const auth = getAuth();

export const authWithGoogle = async () => {
    let user = null;

    await signInWithPopup(auth,provider)
    .then((result) => {
        user = result.user
    })
    .catch((err) => {
        console.log(err)
    })

    return user
}