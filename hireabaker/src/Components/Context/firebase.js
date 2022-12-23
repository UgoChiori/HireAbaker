import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyB2FZT3S0laULfJaQMZWbltPlKTu5zAk5E",
  authDomain: "react-authentication-a3c4d.firebaseapp.com",
  projectId: "react-authentication-a3c4d",
  storageBucket: "react-authentication-a3c4d.appspot.com",
  messagingSenderId: "190071494114",
  appId: "1:190071494114:web:d5aa982cc301bf6c4455bb",
  measurementId: "G-7Q0LJT41CL"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;