import axios from "axios";

export const LoginApi = async (email, password) => {
  try {
    const data = await axios.post("https://reqres.in/api/login", {
      email,
      password,
    });
    console.log(data);
  } catch (e) {}
};
