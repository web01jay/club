import club  from "../firebase/firebase" 
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
// require('firebase/auth')
// require("firebase/firestore");

export const LoginApi = async (email, password) => {
  try {
    // const data = await axios.post("https://reqres.in/api/login", {
    //   email,
    //   password,
    // });
    // console.log(data);

    console.log(club, "club")
    // const result = club.auth().createUserWithEmailAndPassword(email, password);
    const auth = getAuth();
    const result = await createUserWithEmailAndPassword(auth, email, password);
    console.log(result);
  } catch (e) {
    console.log(e.message);
  }
};
