import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
 apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "ai-resume-builder-958dc.firebaseapp.com",
  projectId: "ai-resume-builder-958dc",
  storageBucket: "ai-resume-builder-958dc.firebasestorage.app",
  messagingSenderId: "870478030038",
  appId: "1:870478030038:web:18d3754848cb0aecfc5577",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();