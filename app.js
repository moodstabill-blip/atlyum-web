const container = document.querySelector('.container');
const LoginLink = document.querySelector('.SignInLink');
const RegisterLink = document.querySelector('.SignUpLink');

RegisterLink.addEventListener('click', () => {
  container.classList.add('active');
});

LoginLink.addEventListener('click', () => {
  container.classList.remove('active');
});
import { auth } from './firebase.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } 
from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

// Sign up
const signUpForm = document.querySelector('#signUpForm');
signUpForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = signUpForm['signup-email'].value;
  const password = signUpForm['signup-password'].value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Kayıt başarılı!");
      window.location.href = "home.html";
    })
    .catch((error) => alert(error.message));
});

// Sign in
const signInForm = document.querySelector('#signInForm');
signInForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = signInForm['signin-email'].value;
  const password = signInForm['signin-password'].value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Giriş başarılı!");
      window.location.href = "home.html";
    })
    .catch((error) => alert(error.message));
});
