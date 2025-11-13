import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDyU71UIZuTh-guXdz11S-4G472aG-UsN0",
  authDomain: "atlyum.firebaseapp.com",
  projectId: "atlyum",
  storageBucket: "atlyum.firebasestorage.app",
  messagingSenderId: "450591148047",
  appId: "1:450591148047:web:42fadc3460d30901d1bb7a",
  measurementId: "G-EYRJJ1N558"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
