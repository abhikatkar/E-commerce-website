
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyCZNsJBkyHZAuWHshwtr6QEnJezIceDW0c",
    authDomain: "e-commerce-37b4e.firebaseapp.com",
    projectId: "e-commerce-37b4e",
    storageBucket: "e-commerce-37b4e.appspot.com",
    messagingSenderId: "666619447494",
    appId: "1:666619447494:web:f89ac9f0907c09e721efc7",
    measurementId: "G-HV7PE028SW"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);