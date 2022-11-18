// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; //este es importantes
import {getAuth} from 'firebase/auth';
import { getFirestore} from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics"; //analitica de googles

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

//datos de conexion
const firebaseConfig = {
  apiKey: "AIzaSyB_Nse-crZ5l0qRZvqCyhc6wx7ono3CbJA",
  authDomain: "react-e2510.firebaseapp.com",
  projectId: "react-e2510",
  storageBucket: "react-e2510.appspot.com",
  messagingSenderId: "180423268631",
  appId: "1:180423268631:web:1b21514a0fc6aaa2857f52",
  measurementId: "G-BM44L2SRHQ"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

// Inicializar Servicios
export const db = getFirestore(FirebaseApp);


// Inicializar Refencia a la coleccion de datos


//proceso de login apps
export const FirebaseAuth = getAuth(FirebaseApp);


//esta es para analitica de google, por el momento no sirve, no se esta utilizando
export const analytics = getAnalytics(FirebaseApp);