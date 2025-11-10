import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAq7da1gv42n3ca2MHo3tq3Wh03Ongixns",
  authDomain: "rest-4c9ee.firebaseapp.com",
  projectId: "rest-4c9ee",
  storageBucket: "rest-4c9ee.firebasestorage.app",
  messagingSenderId: "944077397215",
  appId: "1:944077397215:web:03ae396621ae2dcb9b1d6a",
  measurementId: "G-KPMKQ8XLGW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let analytics;
try {
  analytics = getAnalytics(app);
} catch (e) {
  // analytics can fail in some environments (SSR, etc.) — ignore safely
}

const auth = getAuth(app);

export { app, analytics, auth };
