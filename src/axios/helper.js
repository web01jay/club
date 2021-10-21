import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// require('firebase/auth')
// require("firebase/firestore");

export const SignUp = async (email, password) => {
  const auth = getAuth();
  return await createUserWithEmailAndPassword(auth, email, password);
  // if(result && result.user.accessToken){
  //   alert('user created')
  // }
};
