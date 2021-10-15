// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA028OGd2nwDVmJgqBTfR0Rm22l4MIVgD0",
  authDomain: "club-daf19.firebaseapp.com",
  projectId: "club-daf19",
  storageBucket: "club-daf19.appspot.com",
  messagingSenderId: "502328885990",
  appId: "1:502328885990:web:b34af887cfa88c68533127",
};

// Initialize Firebase
const club = initializeApp(firebaseConfig);
export default club;
console.log(club);
