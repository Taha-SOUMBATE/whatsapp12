// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

export const getFirebaseApp = () => {
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCjjijZgQpVYO17-dWvnzzRcZ5Y0UKYNaM",
    authDomain: "whatsapp-ee75e.firebaseapp.com",
    databaseURL: "https://whatsapp-ee75e-default-rtdb.firebaseio.com",
    projectId: "whatsapp-ee75e",
    storageBucket: "whatsapp-ee75e.appspot.com",
    messagingSenderId: "913574091343",
    appId: "1:913574091343:web:b55524436814c815f0683a",
    measurementId: "G-VPCG2DG8KS",
  };

  // Initialize Firebase
  return initializeApp(firebaseConfig);
};
