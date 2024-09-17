import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBsmBJd15Nx6hYAS4wrx2xpeKHgZBrv-V4",
  authDomain: "olx-app-15177.firebaseapp.com",
  projectId: "olx-app-15177",
  storageBucket: "olx-app-15177.appspot.com",
  messagingSenderId: "1066647643379",
  appId: "1:1066647643379:web:a60f43bb896b88b4f98386"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider()