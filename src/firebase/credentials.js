import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

//añade aquí tus credenciales
const firebaseConfig = {
    apiKey: "AIzaSyBe5WBAEUT6xMs-pZbGNDRf1rjW6moKGus",
    authDomain: "lucha-b3119.firebaseapp.com",
    projectId: "lucha-b3119",
    storageBucket: "lucha-b3119.appspot.com",
    messagingSenderId: "510552591120",
    appId: "1:510552591120:web:a0c2a852a5ef68da9cb395"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
