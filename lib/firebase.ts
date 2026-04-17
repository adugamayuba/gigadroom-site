import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDoqDChbYAOZVvxetUg7KGf6w7pU-I2dK4",
  authDomain: "gigadroom.firebaseapp.com",
  projectId: "gigadroom",
  storageBucket: "gigadroom.firebasestorage.app",
  messagingSenderId: "407527849817",
  appId: "1:407527849817:web:52f0d0cf1153cf321ed648",
  measurementId: "G-1M0P3CHS2J",
};

// Prevent re-initialising on hot reload
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const db = getFirestore(app);
